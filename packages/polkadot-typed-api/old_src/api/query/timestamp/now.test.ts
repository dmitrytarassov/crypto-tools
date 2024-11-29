import { afterAll, beforeAll, describe, expect, it } from "@jest/globals";
import { ApiPromise } from "@polkadot/api";

import { now } from "./now";

import { getConnection } from "../../../test_utils/getConnection";

describe("now", () => {
  let connection: ApiPromise;

  beforeAll(async () => {
    connection = await getConnection("polkadot");
  });

  afterAll(() => {
    connection.disconnect();
  });

  it("should get now value", async () => {
    const value = await now(connection);

    expect(typeof value).toEqual("number");
    expect(value).toBeGreaterThan(0);
  });
});
