import { afterAll, beforeAll, describe, expect, it } from "@jest/globals";
import { ApiPromise } from "@polkadot/api";

import { allExtrinsicsLen } from "./allExtrinsicsLen";

import { getConnection } from "../../../../../tests/polkadot/test_utils/getConnection";

describe("allExtrinsicsLen", () => {
  let connection: ApiPromise;

  beforeAll(async () => {
    connection = await getConnection("polkadot");
  });

  afterAll(() => {
    connection.disconnect();
  });

  it("should get allExtrinsicsLen value", async () => {
    const value = await allExtrinsicsLen(connection);

    expect(value === null || typeof value === "number").toBeTruthy();
    expect(value).toEqual(null); // Always returns null
  });
});
