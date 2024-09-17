import { afterAll, beforeAll, describe, expect, it } from "@jest/globals";
import { ApiPromise } from "@polkadot/api";

import { authorizedUpgrade } from "./authorizedUpgrade";

import { getConnection } from "../../../../../tests/polkadot/test_utils/getConnection";

describe("authorizedUpgrade", () => {
  let connection: ApiPromise;

  beforeAll(async () => {
    connection = await getConnection("polkadot");
  });

  afterAll(() => {
    connection.disconnect();
  });

  it("should get authorizedUpgrade value", async () => {
    const value = await authorizedUpgrade(connection);

    expect(value === null || typeof value === "boolean").toBeTruthy();
    expect(value).toEqual(null); // Always returns null
  });
});
