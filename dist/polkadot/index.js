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

// src/polkadot/staking/getLedgerData.ts
async function getLedgerData(apiPromise, address) {
  const data = await apiPromise.query.staking.ledger(address);
  return data.toJSON();
}

// src/polkadot/balances/getAccountData.ts
async function getAccountData(apiPromise, address) {
  const data = await apiPromise.query.staking.account(address);
  return data.toJSON();
}

// src/polkadot/staking/getController.ts
var import_util_crypto = require("@polkadot/util-crypto");
var getController = async (api, address) => {
  if (!(0, import_util_crypto.isAddress)(address)) {
    throw new Error(`${address} is not an address`);
  }
  const response = await api.query.staking.bonded(address);
  if (response && response.toString()) {
    return response.toString();
  }
  return null;
};

// src/polkadot/account/getAccountNonce.ts
async function getAccountNonce(apiPromise, account) {
  const nonce = await apiPromise.rpc.system.accountNextIndex(account);
  return parseInt(nonce.toString(), 10);
}
async function getAccountNonceAndBump(apiPromise, account) {
  const nonce = await getAccountNonce(apiPromise, account);
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
  if (era < 0) {
    throw new Error(`Provided Era: ${era} is less than zero`);
  }
  const points = await apiPromise.query.staking.erasRewardPoints(era);
  return points.toJSON();
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
var getActiveEra = async (api) => {
  const era = (await api.query.staking.activeEra()).toString();
  return parseInt(era, 10);
};

// src/polkadot/index.ts
var getActiveEra2 = getActiveEra;
var getCurrentEra = getActiveEra;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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