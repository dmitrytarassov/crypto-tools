import { afterAll, beforeAll, describe, expect, it } from "@jest/globals";
import { ApiPromise } from "@polkadot/api";

import { eventCount } from "./eventCount";

import { getConnection } from "../../../../../tests/polkadot/test_utils/getConnection";

describe("eventCount", () => {
  let connection: ApiPromise;

  beforeAll(async () => {
    connection = await getConnection("polkadot");
  });

  afterAll(() => {
    connection.disconnect();
  });

  it("should get eventCount value", async () => {
    const value = await eventCount(connection);

    expect(typeof value).toEqual("number");
  });
});
