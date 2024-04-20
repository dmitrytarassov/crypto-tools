import { BigNumber, ethers } from "ethers";

import {
  EigenLayerDelegationContract,
  OperatorSharesDecreased,
  OperatorSharesDecreasedAction,
  OperatorSharesIncreased,
  OperatorSharesIncreasedAction,
} from "./constants";

import { toBigNumber } from "../common";
import { removeLeading0x } from "../common/removeLeading0x";

function parseData(d: string): string[] {
  let str = d;
  if (d.startsWith("0x")) {
    str = removeLeading0x(d);
  }
  const arr = [...str];
  const result: string[] = [];
  if (arr.length === 0) {
    return [];
  } else if (arr.length === 1) {
    return [str];
  }
  let word = "";
  arr.forEach((l) => {
    word += l;
    // each 64 bites is new line
    if (word.length === 64) {
      result.push(word);
      word = "";
    }
  });

  if (word.length > 0) {
    result.push(word);
  }
  return result;
}

function parseAddress(data: string) {
  const [, addr] = data.split("0".repeat(24));
  return `0x${addr}`;
}

async function getLogs(
  provider: ethers.providers.JsonRpcProvider,
  delegationContract: string,
  operator: string,
  operation: string,
  fromBlock?: number,
  toBlock?: number
) {
  return await provider.getLogs({
    fromBlock: fromBlock ? toBigNumber(fromBlock).toHexString() : undefined,
    toBlock: toBlock ? toBigNumber(toBlock).toHexString() : undefined,
    address: delegationContract || EigenLayerDelegationContract,
    topics: [operation, operator],
  });
}

type OperatorReStakerAction = {
  amount: BigNumber;
  block: BigNumber;
  action:
    | typeof OperatorSharesDecreasedAction
    | typeof OperatorSharesIncreasedAction;
};

function parseLogs(
  logs: ethers.providers.Log[],
  action: OperatorReStakerAction["action"]
): Map<string, OperatorReStakerAction[]> {
  const stakers: Map<string, OperatorReStakerAction[]> = new Map();

  for (const log of logs) {
    // OperatorSharesIncreased (index_topic_1 address operator, address staker, address strategy, uint256 shares)
    const data = parseData(log.data);

    const staker = parseAddress(data[0]).toLowerCase();
    const stakerData = stakers.get(staker) || [];

    stakers.set(staker, [
      ...stakerData,
      {
        amount: toBigNumber(`0x${data[2]}`),
        block: toBigNumber(log.blockNumber),
        action,
      },
    ]);
  }

  return stakers;
}

export async function getOperatorDelegatorsHistory(
  provider: ethers.providers.JsonRpcProvider,
  {
    fromBlock,
    toBlock,
    operator,
    delegationContract,
  }: {
    fromBlock?: number;
    toBlock?: number;
    operator: string;
    delegationContract?: string;
  }
): Promise<Map<string, OperatorReStakerAction[]>> {
  const _operator = `0x${"0".repeat(24)}${removeLeading0x(operator)}`;

  const stakers: Map<string, OperatorReStakerAction[]> = new Map();

  const contract = delegationContract || EigenLayerDelegationContract;
  const increasingLogs = await getLogs(
    provider,
    contract,
    _operator,
    OperatorSharesIncreased,
    fromBlock,
    toBlock
  );

  const decreasingLogs = await getLogs(
    provider,
    contract,
    _operator,
    OperatorSharesDecreased,
    fromBlock,
    toBlock
  );

  const increasingActions = parseLogs(
    increasingLogs,
    OperatorSharesIncreasedAction
  );

  const decreasingActions = parseLogs(
    decreasingLogs,
    OperatorSharesDecreasedAction
  );

  const stakersArray = [
    ...new Set([...increasingActions.keys(), ...decreasingActions.keys()]),
  ];

  stakersArray.forEach((staker) => {
    const inc = increasingActions.get(staker) || [];
    const dec = decreasingActions.get(staker) || [];

    stakers.set(
      staker,
      [...inc, ...dec].sort((a, b) => (a.block > b.block ? 1 : -1))
    );
  });

  return stakers;
}
