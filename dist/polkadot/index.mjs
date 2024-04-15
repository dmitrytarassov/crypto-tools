// src/polkadot/balances/getLedgerData.ts
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
export {
  getAccountData,
  getController,
  getLedgerData
};
//# sourceMappingURL=index.mjs.map