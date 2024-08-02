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

// src/polkadot/index.ts
var polkadot_exports = {};
__export(polkadot_exports, {
  api: () => api_exports,
  getAccountData: () => getAccountData,
  getAccountNonce: () => getAccountNonce,
  getAccountNonceAndBump: () => getAccountNonceAndBump,
  getActiveEra: () => getActiveEra2,
  getController: () => getController,
  getCurrentEra: () => getCurrentEra,
  getErasRewardPoints: () => getErasRewardPoints,
  getLedgerData: () => getLedgerData,
  polkadotExplorerUrl: () => polkadotExplorerUrl
});
module.exports = __toCommonJS(polkadot_exports);

// src/polkadot/api/index.ts
var api_exports = {};
__export(api_exports, {
  query: () => query_exports
});

// src/polkadot/api/query/index.ts
var query_exports = {};
__export(query_exports, {
  proxy: () => proxy_exports,
  staking: () => staking_exports,
  system: () => system_exports
});

// src/polkadot/api/query/proxy/index.ts
var proxy_exports = {};
__export(proxy_exports, {
  palletVersion: () => palletVersion,
  proxies: () => proxies
});

// src/polkadot/api/query/proxy/proxies.ts
async function proxies(apiPromise, address) {
  const proxies2 = await apiPromise.query.proxy.proxies(address);
  return proxies2;
}

// src/polkadot/api/query/proxy/palletVersion.ts
async function palletVersion(apiPromise) {
  return (await apiPromise.query.proxy.palletVersion()).toJSON();
}

// src/polkadot/api/query/system/index.ts
var system_exports = {};
__export(system_exports, {
  account: () => account,
  accountNextIndex: () => accountNextIndex,
  palletVersion: () => palletVersion2
});

// src/polkadot/api/query/system/account.ts
async function account(apiPromise, address) {
  const data = await apiPromise.query.system.account(address);
  return data.toJSON();
}

// src/polkadot/api/query/system/accountNextIndex.ts
async function accountNextIndex(apiPromise, account2) {
  const nonce = await apiPromise.rpc.system.accountNextIndex(account2);
  return parseInt(nonce.toString(), 10);
}

// src/polkadot/api/query/system/palletVersion.ts
async function palletVersion2(apiPromise) {
  return (await apiPromise.query.system.palletVersion()).toJSON();
}

// src/polkadot/api/query/staking/index.ts
var staking_exports = {};
__export(staking_exports, {
  activeEra: () => activeEra,
  bonded: () => bonded,
  erasRewardPoints: () => erasRewardPoints,
  erasValidatorReward: () => erasValidatorReward,
  ledger: () => ledger,
  nominators: () => nominators,
  palletVersion: () => palletVersion3,
  validators: () => validators
});

// src/polkadot/api/query/staking/activeEra.ts
var activeEra = async (api) => {
  const era = (await api.query.staking.activeEra()).toJSON();
  return era;
};

// src/polkadot/api/query/staking/bonded.ts
var import_util_crypto = require("@polkadot/util-crypto");
var bonded = async (api, address) => {
  if (!(0, import_util_crypto.isAddress)(address)) {
    throw new Error(`${address} is not an address`);
  }
  const response = await api.query.staking.bonded(address);
  if (response && response.toString()) {
    return response.toString();
  }
  return null;
};

// src/polkadot/api/query/staking/erasRewardPoints.ts
async function erasRewardPoints(apiPromise, era) {
  if (era < 0) {
    throw new Error(`Provided Era: ${era} is less than zero`);
  }
  const points = await apiPromise.query.staking.erasRewardPoints(era);
  return points.toJSON();
}

// src/polkadot/api/query/staking/erasValidatorReward.ts
async function erasValidatorReward(apiPromise, era) {
  if (era < 0) {
    throw new Error(`Provided Era: ${era} is less than zero`);
  }
  const points = await apiPromise.query.staking.erasValidatorReward(era);
  return points.toJSON();
}

// src/polkadot/api/query/staking/ledger.ts
async function ledger(apiPromise, address) {
  const data = await apiPromise.query.staking.ledger(address);
  return data.toJSON();
}

// src/polkadot/api/query/staking/nominators.ts
async function nominators(apiPromise, address) {
  const result = await apiPromise.query.staking.nominators(address);
  return result.toJSON();
}

// src/polkadot/api/query/staking/palletVersion.ts
async function palletVersion3(apiPromise) {
  return (await apiPromise.query.staking.palletVersion()).toJSON();
}

// src/polkadot/api/query/staking/validators.ts
async function validators(apiPromise, validatorAddress) {
  const result = await apiPromise.query.staking.validators(validatorAddress);
  return result.toJSON();
}

// src/polkadot/account/getLedgerData.ts
async function getLedgerData(apiPromise, address) {
  return query_exports.staking.ledger(apiPromise, address);
}

// src/polkadot/account/getAccountData.ts
async function getAccountData(apiPromise, address) {
  return query_exports.system.account(apiPromise, address);
}

// src/polkadot/staking/getController.ts
var getController = async (apiPromise, address) => {
  return query_exports.staking.bonded(apiPromise, address);
};

// src/polkadot/account/getAccountNonce.ts
async function getAccountNonce(apiPromise, account2) {
  return query_exports.system.accountNextIndex(apiPromise, account2);
}
async function getAccountNonceAndBump(apiPromise, account2) {
  const nonce = await getAccountNonce(apiPromise, account2);
  let i = 0;
  return [
    nonce,
    () => {
      i++;
      return nonce + i;
    }
  ];
}

// src/polkadot/staking/getErasRewardPoints.ts
async function getErasRewardPoints(apiPromise, era) {
  return query_exports.staking.erasRewardPoints(apiPromise, era);
}

// src/polkadot/common/polkadotExplorerUrl.ts
var linkType = {
  account: "account",
  address: "account",
  a: "account",
  extrinsic: "extrinsic",
  transaction: "extrinsic",
  t: "extrinsic",
  validator: "validator",
  v: "validator"
};
function polkadotExplorerUrl(networkName, domain = "subscan.io") {
  return function(type, addressOrHash) {
    const value = typeof addressOrHash === "string" ? addressOrHash : addressOrHash.toHuman();
    return `https://${networkName.toLowerCase()}.${domain}/${linkType[type]}/${value}`;
  };
}

// src/polkadot/staking/getActiveEra.ts
var getActiveEra = async (apiPromise) => {
  return query_exports.staking.activeEra(apiPromise);
};

// src/polkadot/index.ts
var getActiveEra2 = getActiveEra;
var getCurrentEra = getActiveEra;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  api,
  getAccountData,
  getAccountNonce,
  getAccountNonceAndBump,
  getActiveEra,
  getController,
  getCurrentEra,
  getErasRewardPoints,
  getLedgerData,
  polkadotExplorerUrl
});
//# sourceMappingURL=index.js.map