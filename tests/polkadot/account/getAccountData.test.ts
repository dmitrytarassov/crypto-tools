import { afterAll, beforeAll, describe, expect, it } from "@jest/globals";
import { ApiPromise } from "@polkadot/api";

import { getAccountData } from "../../../src/polkadot";
import { expectError } from "../../test_utils/expectError";
import { polkadotAccount } from "../test_utils/constants";
import { getConnection } from "../test_utils/getConnection";

describe("getAccountData", () => {
  let connection: ApiPromise;

  beforeAll(async () => {
    connection = await getConnection("polkadot");
  });

  afterAll(() => {
    connection.disconnect();
  });

  it("should return real data", async () => {
    const data = await getAccountData(connection, polkadotAccount);
    if (data) {
      expect(data.nonce).toBeGreaterThan(0);
      expect(data.consumers).toBeGreaterThan(0);
      expect(data.providers).toBeGreaterThan(0);
      expect(typeof data.sufficients).toEqual("number");
      expect(typeof data.data.free).toEqual("number");
      expect(typeof data.data.reserved).toEqual("number");
      expect(typeof data.data.frozen).toEqual("number");
      expect(data.data.flags.startsWith("0x")).toBeTruthy();
    }
  });

  it("should throw error because of wrong address", async () => {
    expectError(async () => {
      await getAccountData(connection, "address");
    }, "Decoding address: Invalid decoded address checksum");
  });

  afterAll(async () => {
    await connection.disconnect();
  });
});
