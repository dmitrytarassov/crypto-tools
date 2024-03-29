export type Size = {
  start: number;
  end: number;
  include0x?: boolean;
};

export type Options = {
  size: number | [number, number] | Size;
  symbolsCount?: number;
  symbol?: string;
  ignoreList?: string[];
};

const defaults = {
  symbolsCount: 3,
  size: 4,
  symbol: ".",
};

export function abbreviateAddress(
  address: string,
  options?: Options | number
): string {
  if (
    typeof options === "object" &&
    options.ignoreList &&
    options?.ignoreList.includes(address)
  ) {
    return address;
  }

  if (
    typeof options === "object" &&
    typeof options?.size === "number" &&
    options?.size <= 0
  ) {
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

  const symbolsCount =
    (typeof options === "object" && options?.symbolsCount) ||
    defaults.symbolsCount;
  const symbol =
    typeof options === "object" && typeof options?.symbol !== "undefined"
      ? options.symbol
      : defaults.symbol;

  return `${address.slice(0, _symbolsAtStart)}${symbol.repeat(
    symbolsCount
  )}${address.slice(-_symbolsAtEnd)}`;
}
