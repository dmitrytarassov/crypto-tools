import { afterAll, beforeAll, describe, expect, it } from "@jest/globals";
import { ApiPromise } from "@polkadot/api";

import { account } from "./account";

import { getConnection } from "../../../test_utils/getConnection";

describe("account", () => {
  let connection: ApiPromise;

  beforeAll(async () => {
    connection = await getConnection("polkadot");
  });

  afterAll(() => {
    connection.disconnect();
  });

  it("should get account value", async () => {
    const value = await account(
      connection,
      "15Pd5Pn2FCe6CrJjUWmvGVqqMDZN7ZN2DWU5VaUXBcMAisAK"
    );

    expect(
      value === null || (typeof value === "object" && value !== null)
    ).toBeTruthy();

    if (value) {
      // it was "14" at 17 Sep 2024
      expect(value.nonce).toBeGreaterThanOrEqual(14);
    }
  });
});
