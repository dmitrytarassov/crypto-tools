var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/polkadot/index.ts
var polkadot_exports = {};
__export(polkadot_exports, {
  getAccountData: () => getAccountData,
  getController: () => getController,
  getLedgerData: () => getLedgerData
});

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

// src/index.ts
var polkadot = polkadot_exports;
export {
  abbreviateAddress,
  polkadot
};
//# sourceMappingURL=index.mjs.map