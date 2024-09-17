import { afterAll, beforeAll, describe, expect, it } from "@jest/globals";
import { ApiPromise } from "@polkadot/api";

import { number } from "./number";

import { getConnection } from "../../../../../tests/polkadot/test_utils/getConnection";

describe("number", () => {
  let connection: ApiPromise;

  beforeAll(async () => {
    connection = await getConnection("polkadot");
  });

  afterAll(() => {
    connection.disconnect();
  });

  it("should get number value", async () => {
    const value = await number(connection);

    expect(value === null || typeof value === "number").toBeTruthy();

    if (value) {
      expect(value).toBeGreaterThan(0);
    }
  });
});
