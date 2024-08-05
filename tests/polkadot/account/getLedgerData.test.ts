import { afterAll, beforeAll, describe, expect, it } from "@jest/globals";
import { ApiPromise } from "@polkadot/api";

import { getLedgerData } from "../../../src/polkadot";
import { expectError } from "../../test_utils/expectError";
import { polkadotAccount } from "../test_utils/constants";
import { getConnection } from "../test_utils/getConnection";

describe("getLedgerData", () => {
  let connection: ApiPromise;

  beforeAll(async () => {
    connection = await getConnection("polkadot");
  });

  afterAll(() => {
    connection.disconnect();
  });

  it("should return real data", async () => {
    const data = await getLedgerData(connection, polkadotAccount);
    if (data) {
      expect(Array.isArray(data.legacyClaimedRewards)).toBeTruthy();
      expect(typeof data.legacyClaimedRewards[0]).toEqual("number");
      expect(Array.isArray(data.unlocking)).toBeTruthy();
      expect(data.total).toBeGreaterThan(0);
      expect(data.active).toBeGreaterThan(0);
      expect(data.stash).toEqual(polkadotAccount);
    }
  });

  it("should throw error because of wrong address", async () => {
    expectError(async () => {
      await getLedgerData(connection, "address");
    }, "Decoding address: Invalid decoded address checksum");
  });

  afterAll(async () => {
    await connection.disconnect();
  });
});
