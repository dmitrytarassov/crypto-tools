import { afterAll, beforeAll, describe, expect, it } from "@jest/globals";
import { ApiPromise } from "@polkadot/api";

import { getAccountNonceAndBump } from "../../../src/polkadot";
import { polkadotAccount } from "../test_utils/constants";
import { getConnection } from "../test_utils/getConnection";

describe("getAccountNonceAndBump", () => {
  let connection: ApiPromise;

  beforeAll(async () => {
    connection = await getConnection("polkadot");
  });

  afterAll(() => {
    connection.disconnect();
  });

  it("should return nonce for real account", async () => {
    const [nonce, bump] = await getAccountNonceAndBump(
      connection,
      polkadotAccount
    );
    expect(typeof nonce).toEqual("number");
    expect(typeof bump).toEqual("function");

    expect(nonce + 1).toEqual(bump());
  });

  afterAll(async () => {
    await connection.disconnect();
  });
});
