import { describe, expect, it } from "@jest/globals";
import { configDotenv } from "dotenv";
import { ethers } from "ethers";

import process from "process";

import { delegationManagerContract } from "./contracts/delegationManagerContract";

configDotenv();

const provider = new ethers.providers.JsonRpcProvider(
  `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_PRIVATE_KEY}`
);

describe("delegationManagerContract", () => {
  const realDelegator = "0x3877fbDe425d21f29F4cB3e739Cf75CDECf8EdCE";

  it("should create contract instance", () => {
    const contract = delegationManagerContract(provider);
    expect(typeof contract).toEqual("object");
    expect(contract).not.toEqual(null);
  });

  it("should contract have some methods", async () => {
    const contract = delegationManagerContract(provider);
    const data = await contract.getDelegatableShares(realDelegator);

    const addresses = data[0];
    const values = data[1];

    if (addresses.length > 0) {
      // EigenLayer: stETH Strategies
      // https://etherscan.io/address/0x93c4b944D05dfe6df7645A86cd2206016c51564D
      expect(
        addresses.includes("0x93c4b944D05dfe6df7645A86cd2206016c51564D")
      ).toBeTruthy();
      expect(values[0].gte(0)).toBeTruthy();
    }
  });

  it("should not call contract with wrong address", async () => {
    // realDelegator is not contract address
    const contract = delegationManagerContract(provider, realDelegator);

    try {
      await contract.getDelegatableShares(realDelegator);
      expect(true).toEqual(false);
    } catch (e: any) {
      expect(e.toString().includes("call revert exception")).toBeTruthy();
    }
  });
});
