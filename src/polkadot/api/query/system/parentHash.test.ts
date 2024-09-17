import { afterAll, beforeAll, describe, expect, it } from "@jest/globals";
import { ApiPromise } from "@polkadot/api";

import { parentHash } from "./parentHash";

import { getConnection } from "../../../../../tests/polkadot/test_utils/getConnection";

describe("parentHash", () => {
  let connection: ApiPromise;

  beforeAll(async () => {
    connection = await getConnection("polkadot");
  });

  afterAll(() => {
    connection.disconnect();
  });

  it("should get parentHash value", async () => {
    const value = await parentHash(connection);

    expect(typeof value === "string").toBeTruthy();
    expect(value.startsWith("0x")).toBeTruthy();
  });
});
