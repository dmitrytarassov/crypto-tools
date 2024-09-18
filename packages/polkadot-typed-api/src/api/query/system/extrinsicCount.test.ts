import { afterAll, beforeAll, describe, expect, it } from "@jest/globals";
import { ApiPromise } from "@polkadot/api";

import { extrinsicCount } from "./extrinsicCount";

import { getConnection } from "../../../test_utils/getConnection";

describe("extrinsicCount", () => {
  let connection: ApiPromise;

  beforeAll(async () => {
    connection = await getConnection("polkadot");
  });

  afterAll(() => {
    connection.disconnect();
  });

  it("should get extrinsicCount value", async () => {
    const value = await extrinsicCount(connection);

    expect(value === null || typeof value === "number").toBeTruthy();
    expect(value).toEqual(null); // Always returns null
  });
});
