import { describe, expect, test } from "@jest/globals";

import { normalizeNetwork } from "./normalizeNetwork";

describe("normalizeNetwork", () => {
  test("should normalize Ethereum network names", () => {
    expect(normalizeNetwork("ethereum")).toBe("ethereum");
    expect(normalizeNetwork("ETH")).toBe("ethereum");
    expect(normalizeNetwork("eth-mainnet")).toBe("ethereum");
  });

  test("should normalize Arbitrum network names", () => {
    expect(normalizeNetwork("arbitrum")).toBe("arbitrum");
    expect(normalizeNetwork("arb-mainnet")).toBe("arbitrum");
    expect(normalizeNetwork("ARB")).toBe("arbitrum");
  });

  test("should normalize Polygon network names", () => {
    expect(normalizeNetwork("polygon")).toBe("polygon");
    expect(normalizeNetwork("matic")).toBe("polygon");
    expect(normalizeNetwork("polygon-mainnet")).toBe("polygon");
  });

  test("should normalize Binance Smart Chain network names", () => {
    expect(normalizeNetwork("bsc")).toBe("bsc");
    expect(normalizeNetwork("binance")).toBe("bsc");
    expect(normalizeNetwork("bsc-mainnet")).toBe("bsc");
  });

  test("should normalize Optimism network names", () => {
    expect(normalizeNetwork("optimism")).toBe("optimism");
    expect(normalizeNetwork("opt")).toBe("optimism");
    expect(normalizeNetwork("optimism-mainnet")).toBe("optimism");
  });

  test("should normalize Fantom network names", () => {
    expect(normalizeNetwork("fantom")).toBe("fantom");
    expect(normalizeNetwork("ftm")).toBe("fantom");
    expect(normalizeNetwork("fantom-mainnet")).toBe("fantom");
  });

  test("should normalize Avalanche network names", () => {
    expect(normalizeNetwork("avax")).toBe("avalanche");
    expect(normalizeNetwork("avalanche")).toBe("avalanche");
    expect(normalizeNetwork("avax-mainnet")).toBe("avalanche");
  });

  test("should normalize Solana network names", () => {
    expect(normalizeNetwork("solana")).toBe("solana");
    expect(normalizeNetwork("sol")).toBe("solana");
    expect(normalizeNetwork("solana-mainnet")).toBe("solana");
  });

  test("should normalize Tron network names", () => {
    expect(normalizeNetwork("tron")).toBe("tron");
    expect(normalizeNetwork("tron-mainnet")).toBe("tron");
  });

  test("should normalize Cosmos network names", () => {
    expect(normalizeNetwork("cosmos")).toBe("cosmos");
    expect(normalizeNetwork("cosmos-mainnet")).toBe("cosmos");
  });

  test("should throw an error for unsupported network", () => {
    expect(normalizeNetwork("unknown-network")).toEqual("unknown");
  });
});
