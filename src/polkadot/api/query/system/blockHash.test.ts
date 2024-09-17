import { afterAll, beforeAll, describe, expect, it } from "@jest/globals";
import { ApiPromise } from "@polkadot/api";

import { blockHash } from "./blockHash";

import { getConnection } from "../../../../../tests/polkadot/test_utils/getConnection";

describe("blockHash", () => {
  let connection: ApiPromise;

  beforeAll(async () => {
    connection = await getConnection("polkadot");
  });

  afterAll(() => {
    connection.disconnect();
  });

  it("should get blockHash for real block", async () => {
    // https://polkadot.subscan.io/block/22574470
    const value = await blockHash(connection, 22574470);

    expect(value).toEqual(
      "0x727fc7331e425d352b877e9ef1b5ca8b4fd0f436c3b05d60d3f0c0564855a31a"
    );
  });

  it("should get null not block id", async () => {
    const value1 = await blockHash(connection, 23);
    expect(value1).toEqual(null);

    const value2 = await blockHash(connection, 2341234124);
    expect(value2).toEqual(null);
  });
});
