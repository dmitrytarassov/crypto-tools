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
  delegationManagerContract: () => delegationManagerContract,
  getOperatorDelegatorsHistory: () => getOperatorDelegatorsHistory
});
module.exports = __toCommonJS(eigenlayer_exports);

// src/eigenlayer/constants.ts
var constants_exports = {};
__export(constants_exports, {
  DelegationManagerContract: () => DelegationManagerContract,
  EigenLayerDelegationContract: () => EigenLayerDelegationContract,
  OperatorSharesDecreased: () => OperatorSharesDecreased,
  OperatorSharesDecreasedAction: () => OperatorSharesDecreasedAction,
  OperatorSharesIncreased: () => OperatorSharesIncreased,
  OperatorSharesIncreasedAction: () => OperatorSharesIncreasedAction
});
var EigenLayerDelegationContract = "0x39053D51B77DC0d36036Fc1fCc8Cb819df8Ef37A";
var DelegationManagerContract = "0x1784be6401339fc0fedf7e9379409f5c1bfe9dda";
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

// src/eigenlayer/contracts/typechain/ethers-v5/DelegationManager/factories/DelegationManager__factory.ts
var import_ethers2 = require("ethers");
var _abi = [
  {
    inputs: [
      {
        internalType: "contract IStrategyManager",
        name: "_strategyManager",
        type: "address"
      },
      {
        internalType: "contract ISlasher",
        name: "_slasher",
        type: "address"
      },
      {
        internalType: "contract IEigenPodManager",
        name: "_eigenPodManager",
        type: "address"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8"
      }
    ],
    name: "Initialized",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "previousValue",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newValue",
        type: "uint256"
      }
    ],
    name: "MinWithdrawalDelayBlocksSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        components: [
          {
            internalType: "address",
            name: "earningsReceiver",
            type: "address"
          },
          {
            internalType: "address",
            name: "delegationApprover",
            type: "address"
          },
          {
            internalType: "uint32",
            name: "stakerOptOutWindowBlocks",
            type: "uint32"
          }
        ],
        indexed: false,
        internalType: "struct IDelegationManager.OperatorDetails",
        name: "newOperatorDetails",
        type: "tuple"
      }
    ],
    name: "OperatorDetailsModified",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        indexed: false,
        internalType: "string",
        name: "metadataURI",
        type: "string"
      }
    ],
    name: "OperatorMetadataURIUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        components: [
          {
            internalType: "address",
            name: "earningsReceiver",
            type: "address"
          },
          {
            internalType: "address",
            name: "delegationApprover",
            type: "address"
          },
          {
            internalType: "uint32",
            name: "stakerOptOutWindowBlocks",
            type: "uint32"
          }
        ],
        indexed: false,
        internalType: "struct IDelegationManager.OperatorDetails",
        name: "operatorDetails",
        type: "tuple"
      }
    ],
    name: "OperatorRegistered",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "staker",
        type: "address"
      },
      {
        indexed: false,
        internalType: "contract IStrategy",
        name: "strategy",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      }
    ],
    name: "OperatorSharesDecreased",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "staker",
        type: "address"
      },
      {
        indexed: false,
        internalType: "contract IStrategy",
        name: "strategy",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      }
    ],
    name: "OperatorSharesIncreased",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newPausedStatus",
        type: "uint256"
      }
    ],
    name: "Paused",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IPauserRegistry",
        name: "pauserRegistry",
        type: "address"
      },
      {
        indexed: false,
        internalType: "contract IPauserRegistry",
        name: "newPauserRegistry",
        type: "address"
      }
    ],
    name: "PauserRegistrySet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "staker",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address"
      }
    ],
    name: "StakerDelegated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "staker",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address"
      }
    ],
    name: "StakerForceUndelegated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "staker",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address"
      }
    ],
    name: "StakerUndelegated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IStrategy",
        name: "strategy",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousValue",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newValue",
        type: "uint256"
      }
    ],
    name: "StrategyWithdrawalDelayBlocksSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newPausedStatus",
        type: "uint256"
      }
    ],
    name: "Unpaused",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "withdrawalRoot",
        type: "bytes32"
      }
    ],
    name: "WithdrawalCompleted",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "oldWithdrawalRoot",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "newWithdrawalRoot",
        type: "bytes32"
      }
    ],
    name: "WithdrawalMigrated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "withdrawalRoot",
        type: "bytes32"
      },
      {
        components: [
          {
            internalType: "address",
            name: "staker",
            type: "address"
          },
          {
            internalType: "address",
            name: "delegatedTo",
            type: "address"
          },
          {
            internalType: "address",
            name: "withdrawer",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256"
          },
          {
            internalType: "uint32",
            name: "startBlock",
            type: "uint32"
          },
          {
            internalType: "contract IStrategy[]",
            name: "strategies",
            type: "address[]"
          },
          {
            internalType: "uint256[]",
            name: "shares",
            type: "uint256[]"
          }
        ],
        indexed: false,
        internalType: "struct IDelegationManager.Withdrawal",
        name: "withdrawal",
        type: "tuple"
      }
    ],
    name: "WithdrawalQueued",
    type: "event"
  },
  {
    inputs: [],
    name: "DELEGATION_APPROVAL_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "DOMAIN_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "MAX_STAKER_OPT_OUT_WINDOW_BLOCKS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "MAX_WITHDRAWAL_DELAY_BLOCKS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "STAKER_DELEGATION_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "beaconChainETHStrategy",
    outputs: [
      {
        internalType: "contract IStrategy",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "staker",
        type: "address"
      },
      {
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256"
      }
    ],
    name: "calculateCurrentStakerDelegationDigestHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "staker",
        type: "address"
      },
      {
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        internalType: "address",
        name: "_delegationApprover",
        type: "address"
      },
      {
        internalType: "bytes32",
        name: "approverSalt",
        type: "bytes32"
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256"
      }
    ],
    name: "calculateDelegationApprovalDigestHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "staker",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_stakerNonce",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256"
      }
    ],
    name: "calculateStakerDelegationDigestHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "staker",
            type: "address"
          },
          {
            internalType: "address",
            name: "delegatedTo",
            type: "address"
          },
          {
            internalType: "address",
            name: "withdrawer",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256"
          },
          {
            internalType: "uint32",
            name: "startBlock",
            type: "uint32"
          },
          {
            internalType: "contract IStrategy[]",
            name: "strategies",
            type: "address[]"
          },
          {
            internalType: "uint256[]",
            name: "shares",
            type: "uint256[]"
          }
        ],
        internalType: "struct IDelegationManager.Withdrawal",
        name: "withdrawal",
        type: "tuple"
      }
    ],
    name: "calculateWithdrawalRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "staker",
            type: "address"
          },
          {
            internalType: "address",
            name: "delegatedTo",
            type: "address"
          },
          {
            internalType: "address",
            name: "withdrawer",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256"
          },
          {
            internalType: "uint32",
            name: "startBlock",
            type: "uint32"
          },
          {
            internalType: "contract IStrategy[]",
            name: "strategies",
            type: "address[]"
          },
          {
            internalType: "uint256[]",
            name: "shares",
            type: "uint256[]"
          }
        ],
        internalType: "struct IDelegationManager.Withdrawal",
        name: "withdrawal",
        type: "tuple"
      },
      {
        internalType: "contract IERC20[]",
        name: "tokens",
        type: "address[]"
      },
      {
        internalType: "uint256",
        name: "middlewareTimesIndex",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "receiveAsTokens",
        type: "bool"
      }
    ],
    name: "completeQueuedWithdrawal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "staker",
            type: "address"
          },
          {
            internalType: "address",
            name: "delegatedTo",
            type: "address"
          },
          {
            internalType: "address",
            name: "withdrawer",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256"
          },
          {
            internalType: "uint32",
            name: "startBlock",
            type: "uint32"
          },
          {
            internalType: "contract IStrategy[]",
            name: "strategies",
            type: "address[]"
          },
          {
            internalType: "uint256[]",
            name: "shares",
            type: "uint256[]"
          }
        ],
        internalType: "struct IDelegationManager.Withdrawal[]",
        name: "withdrawals",
        type: "tuple[]"
      },
      {
        internalType: "contract IERC20[][]",
        name: "tokens",
        type: "address[][]"
      },
      {
        internalType: "uint256[]",
        name: "middlewareTimesIndexes",
        type: "uint256[]"
      },
      {
        internalType: "bool[]",
        name: "receiveAsTokens",
        type: "bool[]"
      }
    ],
    name: "completeQueuedWithdrawals",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "cumulativeWithdrawalsQueued",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "staker",
        type: "address"
      },
      {
        internalType: "contract IStrategy",
        name: "strategy",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      }
    ],
    name: "decreaseDelegatedShares",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        components: [
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes"
          },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256"
          }
        ],
        internalType: "struct ISignatureUtils.SignatureWithExpiry",
        name: "approverSignatureAndExpiry",
        type: "tuple"
      },
      {
        internalType: "bytes32",
        name: "approverSalt",
        type: "bytes32"
      }
    ],
    name: "delegateTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "staker",
        type: "address"
      },
      {
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        components: [
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes"
          },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256"
          }
        ],
        internalType: "struct ISignatureUtils.SignatureWithExpiry",
        name: "stakerSignatureAndExpiry",
        type: "tuple"
      },
      {
        components: [
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes"
          },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256"
          }
        ],
        internalType: "struct ISignatureUtils.SignatureWithExpiry",
        name: "approverSignatureAndExpiry",
        type: "tuple"
      },
      {
        internalType: "bytes32",
        name: "approverSalt",
        type: "bytes32"
      }
    ],
    name: "delegateToBySignature",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "delegatedTo",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address"
      }
    ],
    name: "delegationApprover",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    name: "delegationApproverSaltIsSpent",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "domainSeparator",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address"
      }
    ],
    name: "earningsReceiver",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "eigenPodManager",
    outputs: [
      {
        internalType: "contract IEigenPodManager",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "staker",
        type: "address"
      }
    ],
    name: "getDelegatableShares",
    outputs: [
      {
        internalType: "contract IStrategy[]",
        name: "",
        type: "address[]"
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        internalType: "contract IStrategy[]",
        name: "strategies",
        type: "address[]"
      }
    ],
    name: "getOperatorShares",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IStrategy[]",
        name: "strategies",
        type: "address[]"
      }
    ],
    name: "getWithdrawalDelay",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "staker",
        type: "address"
      },
      {
        internalType: "contract IStrategy",
        name: "strategy",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256"
      }
    ],
    name: "increaseDelegatedShares",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "initialOwner",
        type: "address"
      },
      {
        internalType: "contract IPauserRegistry",
        name: "_pauserRegistry",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "initialPausedStatus",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_minWithdrawalDelayBlocks",
        type: "uint256"
      },
      {
        internalType: "contract IStrategy[]",
        name: "_strategies",
        type: "address[]"
      },
      {
        internalType: "uint256[]",
        name: "_withdrawalDelayBlocks",
        type: "uint256[]"
      }
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "staker",
        type: "address"
      }
    ],
    name: "isDelegated",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address"
      }
    ],
    name: "isOperator",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IStrategy[]",
            name: "strategies",
            type: "address[]"
          },
          {
            internalType: "uint256[]",
            name: "shares",
            type: "uint256[]"
          },
          {
            internalType: "address",
            name: "staker",
            type: "address"
          },
          {
            components: [
              {
                internalType: "address",
                name: "withdrawer",
                type: "address"
              },
              {
                internalType: "uint96",
                name: "nonce",
                type: "uint96"
              }
            ],
            internalType: "struct IStrategyManager.DeprecatedStruct_WithdrawerAndNonce",
            name: "withdrawerAndNonce",
            type: "tuple"
          },
          {
            internalType: "uint32",
            name: "withdrawalStartBlock",
            type: "uint32"
          },
          {
            internalType: "address",
            name: "delegatedAddress",
            type: "address"
          }
        ],
        internalType: "struct IStrategyManager.DeprecatedStruct_QueuedWithdrawal[]",
        name: "withdrawalsToMigrate",
        type: "tuple[]"
      }
    ],
    name: "migrateQueuedWithdrawals",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "minWithdrawalDelayBlocks",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "earningsReceiver",
            type: "address"
          },
          {
            internalType: "address",
            name: "delegationApprover",
            type: "address"
          },
          {
            internalType: "uint32",
            name: "stakerOptOutWindowBlocks",
            type: "uint32"
          }
        ],
        internalType: "struct IDelegationManager.OperatorDetails",
        name: "newOperatorDetails",
        type: "tuple"
      }
    ],
    name: "modifyOperatorDetails",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address"
      }
    ],
    name: "operatorDetails",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "earningsReceiver",
            type: "address"
          },
          {
            internalType: "address",
            name: "delegationApprover",
            type: "address"
          },
          {
            internalType: "uint32",
            name: "stakerOptOutWindowBlocks",
            type: "uint32"
          }
        ],
        internalType: "struct IDelegationManager.OperatorDetails",
        name: "",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      },
      {
        internalType: "contract IStrategy",
        name: "",
        type: "address"
      }
    ],
    name: "operatorShares",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newPausedStatus",
        type: "uint256"
      }
    ],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "pauseAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "index",
        type: "uint8"
      }
    ],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "pauserRegistry",
    outputs: [
      {
        internalType: "contract IPauserRegistry",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    name: "pendingWithdrawals",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "contract IStrategy[]",
            name: "strategies",
            type: "address[]"
          },
          {
            internalType: "uint256[]",
            name: "shares",
            type: "uint256[]"
          },
          {
            internalType: "address",
            name: "withdrawer",
            type: "address"
          }
        ],
        internalType: "struct IDelegationManager.QueuedWithdrawalParams[]",
        name: "queuedWithdrawalParams",
        type: "tuple[]"
      }
    ],
    name: "queueWithdrawals",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "earningsReceiver",
            type: "address"
          },
          {
            internalType: "address",
            name: "delegationApprover",
            type: "address"
          },
          {
            internalType: "uint32",
            name: "stakerOptOutWindowBlocks",
            type: "uint32"
          }
        ],
        internalType: "struct IDelegationManager.OperatorDetails",
        name: "registeringOperatorDetails",
        type: "tuple"
      },
      {
        internalType: "string",
        name: "metadataURI",
        type: "string"
      }
    ],
    name: "registerAsOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newMinWithdrawalDelayBlocks",
        type: "uint256"
      }
    ],
    name: "setMinWithdrawalDelayBlocks",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IPauserRegistry",
        name: "newPauserRegistry",
        type: "address"
      }
    ],
    name: "setPauserRegistry",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IStrategy[]",
        name: "strategies",
        type: "address[]"
      },
      {
        internalType: "uint256[]",
        name: "withdrawalDelayBlocks",
        type: "uint256[]"
      }
    ],
    name: "setStrategyWithdrawalDelayBlocks",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "slasher",
    outputs: [
      {
        internalType: "contract ISlasher",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "stakerNonce",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address"
      }
    ],
    name: "stakerOptOutWindowBlocks",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "strategyManager",
    outputs: [
      {
        internalType: "contract IStrategyManager",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IStrategy",
        name: "",
        type: "address"
      }
    ],
    name: "strategyWithdrawalDelayBlocks",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "staker",
        type: "address"
      }
    ],
    name: "undelegate",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "withdrawalRoots",
        type: "bytes32[]"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newPausedStatus",
        type: "uint256"
      }
    ],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "metadataURI",
        type: "string"
      }
    ],
    name: "updateOperatorMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
var DelegationManager__factory = class {
  static abi = _abi;
  static createInterface() {
    return new import_ethers2.utils.Interface(_abi);
  }
  static connect(address, signerOrProvider) {
    return new import_ethers2.Contract(address, _abi, signerOrProvider);
  }
};

// src/eigenlayer/contracts/delegationManagerContract.ts
function delegationManagerContract(signerOrProvider, delegationManagerContract2 = DelegationManagerContract) {
  return DelegationManager__factory.connect(
    delegationManagerContract2,
    signerOrProvider
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  constants,
  delegationManagerContract,
  getOperatorDelegatorsHistory
});
//# sourceMappingURL=index.js.map