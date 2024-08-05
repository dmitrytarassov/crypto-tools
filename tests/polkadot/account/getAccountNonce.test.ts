import { afterAll, beforeAll, describe, expect, it } from "@jest/globals";
import { ApiPromise } from "@polkadot/api";

import { getAccountNonce } from "../../../src/polkadot";
import { expectError } from "../../test_utils/expectError";
import { polkadotAccount } from "../test_utils/constants";
import { getConnection } from "../test_utils/getConnection";

describe("getAccountNonce", () => {
  let connection: ApiPromise;

  beforeAll(async () => {
    connection = await getConnection("polkadot");
  });

  afterAll(() => {
    connection.disconnect();
  });

  it("should return nonce for real account", async () => {
    const nonce = await getAccountNonce(connection, polkadotAccount);
    expect(typeof nonce).toEqual("number");
  });

  it("should throw error because of wrong address", async () => {
    expectError(async () => {
      await getAccountNonce(connection, "address");
    }, "Decoding address: Invalid decoded address checksum");
  });

  afterAll(async () => {
    await connection.disconnect();
  });
});
