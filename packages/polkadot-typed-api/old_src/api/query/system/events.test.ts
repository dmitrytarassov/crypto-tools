import { afterAll, beforeAll, describe, expect, it } from "@jest/globals";
import { ApiPromise } from "@polkadot/api";

import { events } from "./events";

import { getConnection } from "../../../test_utils/getConnection";

describe("events", () => {
  let connection: ApiPromise;

  beforeAll(async () => {
    connection = await getConnection("polkadot");
  });

  afterAll(() => {
    connection.disconnect();
  });

  it("should get events for current block value", async () => {
    const value = await events(connection);

    // it's impossible to test that. sorry
    expect(Array.isArray(value)).toBeTruthy();
  });
});
