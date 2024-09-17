import { afterAll, beforeAll, describe, expect, it } from "@jest/globals";
import { ApiPromise } from "@polkadot/api";

import { inherentsApplied } from "./inherentsApplied";

import { getConnection } from "../../../../../tests/polkadot/test_utils/getConnection";

describe("inherentsApplied", () => {
  let connection: ApiPromise;

  beforeAll(async () => {
    connection = await getConnection("polkadot");
  });

  afterAll(() => {
    connection.disconnect();
  });

  it("should get inherentsApplied value", async () => {
    const value = await inherentsApplied(connection);

    expect(typeof value === "boolean").toBeTruthy();
  });
});
