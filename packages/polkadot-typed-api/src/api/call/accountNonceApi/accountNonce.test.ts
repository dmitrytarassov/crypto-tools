import { afterAll, beforeAll, describe, expect, it } from "@jest/globals";
import { ApiPromise } from "@polkadot/api";
import { toBigNumber } from "common-crypto-tools/common";

import { accountNonce } from "./accountNonce";

import { getConnection } from "../../../test_utils/getConnection";

describe("accountNonce", () => {
  let connection: ApiPromise;

  beforeAll(async () => {
    connection = await getConnection("polkadot");
  });

  afterAll(() => {
    connection.disconnect();
  });

  it("should get accountNonce", async () => {
    const account = "12UuStFjF4MbPAYnWgMdyMjE3yPbH7vPQxms9HdQ7jUFt4D7";

    const data = await accountNonce(connection, account);

    expect(toBigNumber(data).gte(0)).toBeTruthy();
  });
});
