import { afterAll, beforeAll, describe, expect, it } from "@jest/globals";
import { ApiPromise } from "@polkadot/api";

import { metadata } from "./metadata";

import { expectError } from "../../../test_utils/expectError";
import { getConnection } from "../../../test_utils/getConnection";

describe("metadata", () => {
  let connection: ApiPromise;

  beforeAll(async () => {
    connection = await getConnection("polkadot");
  });

  afterAll(() => {
    connection.disconnect();
  });

  it("should get real pool metadata", async () => {
    const data = await metadata(connection, 1);

    expect(data.startsWith("0x")).toBeTruthy();
    expect(data.length > 2).toBeTruthy();
  });

  it("should get real pool metadata as string description", async () => {
    const data = await metadata(connection, 173);

    expect(data.startsWith("0x")).toBeFalsy();
    expect(typeof data === "string").toBeTruthy();
  });

  it("should return 0x because wrong pool id", async () => {
    for (const id of [10000, "1000000"]) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const data = await metadata(connection, id);

      expect(data).toEqual("");
    }
  });

  it("should throw error because of negative poolId", async () => {
    expectError(async () => {
      await metadata(connection, -1);
    }, "Unable to decode on index 0 createType(Lookup4):: u32: Negative number passed to unsigned type");
  });

  it("should throw error because of not number poolId", async () => {
    expectError(async () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await metadata(connection, "12s3");
    }, "Unable to decode on index 0 createType(Vec<StorageKey>):: createType(Lookup4):: Invalid character");
  });
});
