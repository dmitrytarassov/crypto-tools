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
import { isAddress } from "@polkadot/util-crypto";
var getController = async (api, address) => {
  if (!isAddress(address)) {
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
  const era = (await api.query.staking.activeEra()).toJSON();
  return era;
};

// src/polkadot/index.ts
var getActiveEra2 = getActiveEra;
var getCurrentEra = getActiveEra;
export {
  getAccountData,
  getAccountNonce,
  getAccountNonceAndBump,
  getActiveEra2 as getActiveEra,
  getController,
  getCurrentEra,
  getErasRewardPoints,
  getLedgerData,
  polkadotExplorerUrl
};
//# sourceMappingURL=index.mjs.map