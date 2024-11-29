import { afterAll, beforeAll, describe, expect, it } from "@jest/globals";
import { ApiPromise } from "@polkadot/api";

import { bondedPools } from "./bondedPools";

import { expectError } from "../../../test_utils/expectError";
import { getConnection } from "../../../test_utils/getConnection";

describe("bondedPools", () => {
  let connection: ApiPromise;

  beforeAll(async () => {
    connection = await getConnection("polkadot");
  });

  afterAll(() => {
    connection.disconnect();
  });

  it("should get real pool info", async () => {
    const data = await bondedPools(connection, 1);

    expect(data).not.toEqual(null);
  });

  it("should return null because wrong pool id", async () => {
    for (const id of [10000, "1000000"]) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const data = await bondedPools(connection, id);

      expect(data).toEqual(null);
    }
  });

  it("should throw error because of negative poolId", async () => {
    expectError(async () => {
      await bondedPools(connection, -1);
    }, "Unable to decode on index 0 createType(Lookup4):: u32: Negative number passed to unsigned type");
  });
});
