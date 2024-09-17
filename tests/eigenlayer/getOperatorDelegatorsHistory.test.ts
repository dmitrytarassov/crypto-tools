import { describe, expect, it, jest } from "@jest/globals";
import { configDotenv } from "dotenv";
import { ethers } from "ethers";

import * as process from "process";

jest.setTimeout(30_000);

import {
  OperatorSharesDecreasedAction,
  OperatorSharesIncreasedAction,
} from "../../src/eigenlayer/constants";
import { getOperatorDelegatorsHistory } from "../../src/eigenlayer/getOperatorDelegatorsHistory";

configDotenv();

describe("getOperatorDelegatorsHistory", () => {
  it("check", async () => {
    const provider = new ethers.providers.JsonRpcProvider(
      `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_PRIVATE_KEY}`
    );

    const data = await getOperatorDelegatorsHistory(provider, {
      fromBlock: 19576120,
      operator: "0xd172a86a0f250aec23ee19c759a8e73621fe3c10",
    });

    const realDelegator = "0x3877fbDe425d21f29F4cB3e739Cf75CDECf8EdCE";
    console.log(data.get(realDelegator.toLowerCase()));
    const realDelegations: string[] = [
      ["19388606404441598", 19676121, OperatorSharesIncreasedAction],
      ["4847151601110399", 19677373, OperatorSharesIncreasedAction],
      ["969344385657699", 19689181, OperatorSharesDecreasedAction],
    ].map(([amount, block, action]) => `${amount}_${block}_${action}`);

    expect(data.has(realDelegator));
    const delegations: string[] = (
      data.get(realDelegator.toLocaleLowerCase()) || []
    ).map(
      (delegation) =>
        `${delegation.amount.toString()}_${delegation.block.toNumber()}_${
          delegation.action
        }`
    );

    for (const realDelegation of realDelegations) {
      expect(delegations.includes(realDelegation)).toBeTruthy();
    }
  });
});
