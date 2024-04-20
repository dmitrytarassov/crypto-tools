"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/eigenlayer/index.ts
var eigenlayer_exports = {};
__export(eigenlayer_exports, {
  constants: () => constants_exports,
  getOperatorDelegatorsHistory: () => getOperatorDelegatorsHistory
});
module.exports = __toCommonJS(eigenlayer_exports);

// src/eigenlayer/constants.ts
var constants_exports = {};
__export(constants_exports, {
  EigenLayerDelegationContract: () => EigenLayerDelegationContract,
  OperatorSharesDecreased: () => OperatorSharesDecreased,
  OperatorSharesDecreasedAction: () => OperatorSharesDecreasedAction,
  OperatorSharesIncreased: () => OperatorSharesIncreased,
  OperatorSharesIncreasedAction: () => OperatorSharesIncreasedAction
});
var EigenLayerDelegationContract = "0x39053D51B77DC0d36036Fc1fCc8Cb819df8Ef37A";
var OperatorSharesDecreased = "0x6909600037b75d7b4733aedd815442b5ec018a827751c832aaff64eba5d6d2dd";
var OperatorSharesDecreasedAction = "OperatorSharesDecreased";
var OperatorSharesIncreased = "0x1ec042c965e2edd7107b51188ee0f383e22e76179041ab3a9d18ff151405166c";
var OperatorSharesIncreasedAction = "OperatorSharesIncreased";

// src/common/toBigNumber.ts
var import_ethers = require("ethers");
function toBigNumber(value) {
  return import_ethers.BigNumber.from(value);
}

// src/common/removeLeading0x.ts
function removeLeading0x(data) {
  if (data.startsWith("0x")) {
    const [, , ...rest] = data;
    return rest.join("");
  }
  return data;
}

// src/eigenlayer/getOperatorDelegatorsHistory.ts
function parseData(d) {
  let str = d;
  if (d.startsWith("0x")) {
    str = removeLeading0x(d);
  }
  const arr = [...str];
  const result = [];
  if (arr.length === 0) {
    return [];
  } else if (arr.length === 1) {
    return [str];
  }
  let word = "";
  arr.forEach((l) => {
    word += l;
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
function parseAddress(data) {
  const [, addr] = data.split("0".repeat(24));
  return `0x${addr}`;
}
async function getLogs(provider, delegationContract, operator, operation, fromBlock, toBlock) {
  return await provider.getLogs({
    fromBlock: fromBlock ? toBigNumber(fromBlock).toHexString() : void 0,
    toBlock: toBlock ? toBigNumber(toBlock).toHexString() : void 0,
    address: delegationContract || EigenLayerDelegationContract,
    topics: [operation, operator]
  });
}
function parseLogs(logs, action) {
  const stakers = /* @__PURE__ */ new Map();
  for (const log of logs) {
    const data = parseData(log.data);
    const staker = parseAddress(data[0]).toLowerCase();
    const stakerData = stakers.get(staker) || [];
    stakers.set(staker, [
      ...stakerData,
      {
        amount: toBigNumber(`0x${data[2]}`),
        block: toBigNumber(log.blockNumber),
        action
      }
    ]);
  }
  return stakers;
}
async function getOperatorDelegatorsHistory(provider, {
  fromBlock,
  toBlock,
  operator,
  delegationContract
}) {
  const _operator = `0x${"0".repeat(24)}${removeLeading0x(operator)}`;
  const stakers = /* @__PURE__ */ new Map();
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
    .../* @__PURE__ */ new Set([...increasingActions.keys(), ...decreasingActions.keys()])
  ];
  stakersArray.forEach((staker) => {
    const inc = increasingActions.get(staker) || [];
    const dec = decreasingActions.get(staker) || [];
    stakers.set(
      staker,
      [...inc, ...dec].sort((a, b) => a.block > b.block ? 1 : -1)
    );
  });
  return stakers;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  constants,
  getOperatorDelegatorsHistory
});
//# sourceMappingURL=index.js.map