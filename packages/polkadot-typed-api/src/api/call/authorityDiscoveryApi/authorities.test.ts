import { afterAll, beforeAll, describe, expect, it } from "@jest/globals";
import { ApiPromise } from "@polkadot/api";

import { authorities } from "./authorities";

import { getConnection } from "../../../test_utils/getConnection";

describe("authorities", () => {
  let connection: ApiPromise;

  beforeAll(async () => {
    connection = await getConnection("polkadot");
  });

  afterAll(() => {
    connection.disconnect();
  });

  it("should get authorities", async () => {
    const data = await authorities(connection);

    expect(Array.isArray(data)).toBeTruthy();
    expect(data.length).toBeGreaterThan(0);
    expect(typeof data[0]).toEqual("string");
    expect(data[0].startsWith("1")).toBeTruthy(); // is 0x for RAW
  });
});
