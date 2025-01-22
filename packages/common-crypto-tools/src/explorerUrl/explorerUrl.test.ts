import { describe, expect, test } from "@jest/globals";

import { explorerUrl } from "./explorerUrl";

describe("explorerUrl", () => {
  test("should generate transaction URL for Ethereum", () => {
    const ethExplorer = explorerUrl("ethereum");
    expect(ethExplorer.tx("0x123")).toBe("https://etherscan.io/tx/0x123");
  });

  test("should generate address URL for Ethereum", () => {
    const ethExplorer = explorerUrl("ethereum");
    expect(ethExplorer.address("0xabc")).toBe(
      "https://etherscan.io/address/0xabc",
    );
  });

  test("should generate block URL for Ethereum", () => {
    const ethExplorer = explorerUrl("ethereum");
    expect(ethExplorer.block(123456)).toBe("https://etherscan.io/block/123456");
  });

  test("should normalize network names (Arbitrum)", () => {
    const arbExplorer = explorerUrl("arb-mainnet");
    expect(arbExplorer.tx("0x456")).toBe("https://arbiscan.io/tx/0x456");
  });

  test("should generate URL for Fantom", () => {
    const fantomExplorer = explorerUrl("fantom");
    expect(fantomExplorer.tx("0x789")).toBe("https://ftmscan.com/tx/0x789");
  });

  test("should generate URL for Avalanche", () => {
    const avalancheExplorer = explorerUrl("avax-mainnet");
    expect(avalancheExplorer.address("0xghi")).toBe(
      "https://snowtrace.io/address/0xghi",
    );
  });

  test("should generate URL for Solana", () => {
    const solExplorer = explorerUrl("solana");
    expect(solExplorer.tx("0xsol")).toBe("https://solscan.io/tx/0xsol");
  });

  test("should generate URL for Tron", () => {
    const tronExplorer = explorerUrl("tron");
    expect(tronExplorer.address("0xtron")).toBe(
      "https://tronscan.org/address/0xtron",
    );
  });

  test("should generate URL for Cosmos", () => {
    const cosmosExplorer = explorerUrl("cosmos");
    expect(cosmosExplorer.block(987654)).toBe(
      "https://mintscan.io/block/987654",
    );
  });

  test("should generate custom transaction URL for Ethereum", () => {
    const ethExplorer = explorerUrl("ethereum", {
      base: "https://custom.etherscan.io",
      tx: "transaction",
    });
    expect(ethExplorer.tx("0x123")).toBe(
      "https://custom.etherscan.io/transaction/0x123",
    );
  });

  test("should generate custom address URL for Arbitrum", () => {
    const arbExplorer = explorerUrl("arbitrum", {
      base: "https://custom.arbiscan.io",
      address: "addr",
    });
    expect(arbExplorer.address("0xabc")).toBe(
      "https://custom.arbiscan.io/addr/0xabc",
    );
  });

  test("should generate custom block URL for Fantom", () => {
    const fantomExplorer = explorerUrl("fantom", {
      base: "https://custom.ftmscan.com",
      block: "blk",
    });
    expect(fantomExplorer.block(123456)).toBe(
      "https://custom.ftmscan.com/blk/123456",
    );
  });

  test("should generate URL with partial customization for Avalanche", () => {
    const avalancheExplorer = explorerUrl("avalanche", { tx: "txn" });
    expect(avalancheExplorer.tx("0x456")).toBe(
      "https://snowtrace.io/txn/0x456",
    );
    expect(avalancheExplorer.address("0xdef")).toBe(
      "https://snowtrace.io/address/0xdef",
    );
  });

  test("should throw error if custom base URL is missing", () => {
    expect(() => explorerUrl("unknown", { tx: "txn" })).toThrow(
      "Explorer not found for network: unknown",
    );
  });
});
