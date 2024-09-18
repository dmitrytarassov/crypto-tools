import { afterAll, beforeAll, describe, expect, it } from "@jest/globals";
import { ApiPromise } from "@polkadot/api";

import { extrinsicData } from "./extrinsicData";

import { getConnection } from "../../../test_utils/getConnection";

describe("extrinsicData", () => {
  let connection: ApiPromise;

  beforeAll(async () => {
    connection = await getConnection("polkadot");
  });

  afterAll(() => {
    connection.disconnect();
  });

  it("should get extrinsicData value", async () => {
    const value = await extrinsicData(connection, 22574470);

    expect(typeof value === "string").toBeTruthy();
    expect(value).toEqual("0x"); // always returns 0x
  });
});
