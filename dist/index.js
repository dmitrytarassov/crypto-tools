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

// src/index.ts
var src_exports = {};
__export(src_exports, {
  abbreviateAddress: () => abbreviateAddress,
  common: () => common,
  polkadot: () => polkadot
});
module.exports = __toCommonJS(src_exports);

// src/common/index.ts
var common_exports = {};
__export(common_exports, {
  abbreviateAddress: () => abbreviateAddress,
  removeLeading0x: () => removeLeading0x,
  toBigNumber: () => toBigNumber
});

// src/common/toBigNumber.ts
var import_ethers = require("ethers");
function toBigNumber(value) {
  return import_ethers.BigNumber.from(value);
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
  nominationPools: () => nominationPools_exports,
  proxy: () => proxy_exports,
  staking: () => staking_exports,
  system: () => system_exports
});

// src/polkadot/api/query/nominationPools/index.ts
var nominationPools_exports = {};
__export(nominationPools_exports, {
  bondedPools: () => bondedPools,
  claimPermissions: () => claimPermissions,
  counterForBondedPools: () => counterForBondedPools,
  counterForMetadata: () => counterForMetadata,
  counterForPoolMembers: () => counterForPoolMembers,
  counterForReversePoolIdLookup: () => counterForReversePoolIdLookup,
  counterForRewardPools: () => counterForRewardPools,
  counterForSubPoolsStorage: () => counterForSubPoolsStorage,
  globalMaxCommission: () => globalMaxCommission,
  lastPoolId: () => lastPoolId,
  maxPoolMembers: () => maxPoolMembers,
  maxPoolMembersPerPool: () => maxPoolMembersPerPool,
  maxPools: () => maxPools,
  metadata: () => metadata,
  minCreateBond: () => minCreateBond,
  minJoinBond: () => minJoinBond,
  palletVersion: () => palletVersion,
  poolMembers: () => poolMembers,
  reversePoolIdLookup: () => reversePoolIdLookup,
  rewardPools: () => rewardPools,
  subPoolsStorage: () => subPoolsStorage,
  totalValueLocked: () => totalValueLocked
});

// src/polkadot/api/query/nominationPools/bondedPools.ts
async function bondedPools(apiPromise, poolId) {
  const data = await apiPromise.query.nominationPools.bondedPools(poolId);
  return data.toJSON();
}
bondedPools.entries = async function(apiPromise) {
  const data = await apiPromise.query.nominationPools.bondedPools.entries();
  const result = [];
  data.forEach(([poolId, data2]) => {
    result.push([+poolId.toHuman()[0], data2.toHuman()]);
  });
  return result;
};

// src/polkadot/api/query/nominationPools/claimPermissions.ts
async function claimPermissions(apiPromise, address) {
  const data = await apiPromise.query.nominationPools.claimPermissions(address);
  return data.toJSON();
}
claimPermissions.entries = async function(apiPromise) {
  const data = await apiPromise.query.nominationPools.claimPermissions.entries();
  const result = [];
  data.forEach(([address, data2]) => {
    result.push([address.toHuman()[0], data2.toJSON()]);
  });
  return result;
};

// src/polkadot/api/query/nominationPools/counterForBondedPools.ts
async function counterForBondedPools(apiPromise) {
  const data = await apiPromise.query.nominationPools.counterForBondedPools();
  return data.toJSON();
}

// src/polkadot/api/query/nominationPools/counterForMetadata.ts
async function counterForMetadata(apiPromise) {
  const data = await apiPromise.query.nominationPools.counterForMetadata();
  return data.toJSON();
}

// src/polkadot/api/query/nominationPools/counterForPoolMembers.ts
async function counterForPoolMembers(apiPromise) {
  const data = await apiPromise.query.nominationPools.counterForPoolMembers();
  return data.toJSON();
}

// src/polkadot/api/query/nominationPools/counterForReversePoolIdLookup.ts
async function counterForReversePoolIdLookup(apiPromise) {
  const data = await apiPromise.query.nominationPools.counterForReversePoolIdLookup();
  return data.toJSON();
}

// src/polkadot/api/query/nominationPools/counterForRewardPools.ts
async function counterForRewardPools(apiPromise) {
  const data = await apiPromise.query.nominationPools.counterForRewardPools();
  return data.toJSON();
}

// src/polkadot/api/query/nominationPools/counterForSubPoolsStorage.ts
async function counterForSubPoolsStorage(apiPromise) {
  const data = await apiPromise.query.nominationPools.counterForSubPoolsStorage();
  return data.toJSON();
}

// src/polkadot/api/query/nominationPools/globalMaxCommission.ts
async function globalMaxCommission(apiPromise) {
  const data = await apiPromise.query.nominationPools.globalMaxCommission();
  return data.toJSON();
}

// src/polkadot/api/query/nominationPools/lastPoolId.ts
async function lastPoolId(apiPromise) {
  const data = await apiPromise.query.nominationPools.lastPoolId();
  return data.toJSON();
}

// src/polkadot/api/query/nominationPools/maxPoolMembers.ts
async function maxPoolMembers(apiPromise) {
  const data = await apiPromise.query.nominationPools.maxPoolMembers();
  return data.toJSON();
}

// src/polkadot/api/query/nominationPools/maxPoolMembersPerPool.ts
async function maxPoolMembersPerPool(apiPromise) {
  const data = await apiPromise.query.nominationPools.maxPoolMembersPerPool();
  return data.toJSON();
}

// src/polkadot/api/query/nominationPools/maxPools.ts
async function maxPools(apiPromise) {
  const data = await apiPromise.query.nominationPools.maxPools();
  return data.toJSON();
}

// src/polkadot/api/query/nominationPools/metadata.ts
async function metadata(apiPromise, poolId) {
  const data = await apiPromise.query.nominationPools.metadata(poolId);
  return data.toHuman();
}
metadata.entries = async function(apiPromise) {
  const data = await apiPromise.query.nominationPools.metadata.entries();
  const result = [];
  data.forEach(([poolId, data2]) => {
    result.push([+poolId.toHuman()[0], data2.toHuman()]);
  });
  return result;
};

// src/polkadot/api/query/nominationPools/minCreateBond.ts
async function minCreateBond(apiPromise) {
  const data = await apiPromise.query.nominationPools.minCreateBond();
  return data.toJSON();
}

// src/polkadot/api/query/nominationPools/minJoinBond.ts
async function minJoinBond(apiPromise) {
  const data = await apiPromise.query.nominationPools.minJoinBond();
  return data.toJSON();
}

// src/polkadot/api/query/helpers/palletVersionBase.ts
function palletVersionBase(palletName) {
  return async function(apiPromise) {
    return (await apiPromise.query[palletName].palletVersion()).toJSON();
  };
}

// src/polkadot/api/query/nominationPools/palletVersion.ts
var palletVersion = palletVersionBase("nominationPools");

// src/polkadot/api/query/nominationPools/poolMembers.ts
async function poolMembers(apiPromise, address) {
  const data = await apiPromise.query.nominationPools.poolMembers(address);
  return data.toJSON();
}
poolMembers.entries = async function(apiPromise) {
  const data = await apiPromise.query.nominationPools.poolMembers.entries();
  const result = [];
  data.forEach(([address, data2]) => {
    result.push([+address.toHuman()[0], data2.toJSON()]);
  });
  return result;
};

// src/polkadot/api/query/nominationPools/reversePoolIdLookup.ts
async function reversePoolIdLookup(apiPromise, address) {
  const data = await apiPromise.query.nominationPools.reversePoolIdLookup(
    address
  );
  return data.toJSON();
}
reversePoolIdLookup.entries = async function(apiPromise) {
  const data = await apiPromise.query.nominationPools.reversePoolIdLookup.entries();
  const result = [];
  data.forEach(([address, poolId]) => {
    result.push([address.toHuman()[0], +poolId.toJSON()]);
  });
  return result;
};

// src/polkadot/api/query/nominationPools/rewardPools.ts
async function rewardPools(apiPromise, poolId) {
  const data = await apiPromise.query.nominationPools.rewardPools(poolId);
  return data.toJSON();
}
rewardPools.entries = async function(apiPromise) {
  const data = await apiPromise.query.nominationPools.rewardPools.entries();
  const result = [];
  data.forEach(([pool, value]) => {
    result.push([+pool.toHuman()[0], value.toJSON()]);
  });
  return result;
};

// src/polkadot/api/query/nominationPools/subPoolsStorage.ts
async function subPoolsStorage(apiPromise, poolId) {
  const data = await apiPromise.query.nominationPools.subPoolsStorage(poolId);
  return data.toJSON();
}
subPoolsStorage.entries = async function(apiPromise) {
  const data = await apiPromise.query.nominationPools.subPoolsStorage.entries();
  const result = [];
  data.forEach(([pool, value]) => {
    result.push([+pool.toHuman()[0], value.toJSON()]);
  });
  return result;
};

// src/polkadot/api/query/nominationPools/totalValueLocked.ts
async function totalValueLocked(apiPromise) {
  const data = await apiPromise.query.nominationPools.totalValueLocked();
  return data.toJSON();
}

// src/polkadot/api/query/proxy/index.ts
var proxy_exports = {};
__export(proxy_exports, {
  palletVersion: () => palletVersion2,
  proxies: () => proxies
});

// src/polkadot/api/query/proxy/proxies.ts
async function proxies(apiPromise, address) {
  const proxies2 = await apiPromise.query.proxy.proxies(address);
  return proxies2;
}

// src/polkadot/api/query/proxy/palletVersion.ts
var palletVersion2 = palletVersionBase("proxy");

// src/polkadot/api/query/system/index.ts
var system_exports = {};
__export(system_exports, {
  account: () => account,
  accountNextIndex: () => accountNextIndex,
  palletVersion: () => palletVersion3
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
var palletVersion3 = palletVersionBase("system");

// src/polkadot/api/query/staking/index.ts
var staking_exports = {};
__export(staking_exports, {
  activeEra: () => activeEra,
  bonded: () => bonded,
  erasRewardPoints: () => erasRewardPoints,
  erasValidatorReward: () => erasValidatorReward,
  ledger: () => ledger,
  nominators: () => nominators,
  palletVersion: () => palletVersion4,
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
var palletVersion4 = palletVersionBase("staking");

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  abbreviateAddress,
  common,
  polkadot
});
