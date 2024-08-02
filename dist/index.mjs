var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/common/index.ts
var common_exports = {};
__export(common_exports, {
  abbreviateAddress: () => abbreviateAddress,
  removeLeading0x: () => removeLeading0x,
  toBigNumber: () => toBigNumber
});

// src/common/toBigNumber.ts
import { BigNumber } from "ethers";
function toBigNumber(value) {
  return BigNumber.from(value);
}

// src/common/abbreviateAddress.ts
var defaults = {
  symbolsCount: 3,
  size: 4,
  symbol: "."
};
function abbreviateAddress(address, options) {
  if (typeof options === "object" && options.ignoreList && options?.ignoreList.includes(address)) {
    return address;
  }
  if (typeof options === "object" && typeof options?.size === "number" && options?.size <= 0) {
    return address;
  }
  let _symbolsAtStart = defaults.size;
  let _symbolsAtEnd = defaults.size;
  let include0x = false;
  if (typeof options === "number") {
    _symbolsAtStart = options;
    _symbolsAtEnd = options;
  } else if (typeof options === "object") {
    if (typeof options?.size === "number") {
      _symbolsAtStart = options.size;
      _symbolsAtEnd = options.size;
    } else if (Array.isArray(options?.size)) {
      const [s, e] = options.size;
      _symbolsAtStart = s;
      _symbolsAtEnd = e;
    } else if (options) {
      _symbolsAtStart = options.size.start;
      _symbolsAtEnd = options.size.end;
      include0x = !!options.size.include0x;
    }
  }
  if (!include0x && address.startsWith("0x")) {
    _symbolsAtStart += 2;
  }
  const symbolsCount = typeof options === "object" && options?.symbolsCount || defaults.symbolsCount;
  const symbol = typeof options === "object" && typeof options?.symbol !== "undefined" ? options.symbol : defaults.symbol;
  return `${address.slice(0, _symbolsAtStart)}${symbol.repeat(
    symbolsCount
  )}${address.slice(-_symbolsAtEnd)}`;
}

// src/common/removeLeading0x.ts
function removeLeading0x(data) {
  if (data.startsWith("0x")) {
    const [, , ...rest] = data;
    return rest.join("");
  }
  return data;
}

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
import { isAddress } from "@polkadot/util-crypto";
var bonded = async (api, address) => {
  if (!isAddress(address)) {
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

// src/index.ts
var polkadot = polkadot_exports;
var common = common_exports;
export {
  abbreviateAddress,
  common,
  polkadot
};
//# sourceMappingURL=index.mjs.map