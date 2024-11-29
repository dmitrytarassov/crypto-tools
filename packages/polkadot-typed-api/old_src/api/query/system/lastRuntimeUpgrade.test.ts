import { afterAll, beforeAll, describe, expect, it } from "@jest/globals";
import { ApiPromise } from "@polkadot/api";

import { lastRuntimeUpgrade } from "./lastRuntimeUpgrade";

import { getConnection } from "../../../test_utils/getConnection";

describe("lastRuntimeUpgrade", () => {
  let connection: ApiPromise;

  beforeAll(async () => {
    connection = await getConnection("polkadot");
  });

  afterAll(() => {
    connection.disconnect();
  });

  it("should get lastRuntimeUpgrade value", async () => {
    const value = await lastRuntimeUpgrade(connection);

    expect(value.specVersion).toBeGreaterThan(0);
    expect(value.specName.length).toBeGreaterThan(0);
  });
});
