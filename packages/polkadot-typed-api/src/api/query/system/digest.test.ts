import { afterAll, beforeAll, describe, expect, it } from "@jest/globals";
import { ApiPromise } from "@polkadot/api";

import { digest } from "./digest";

import { getConnection } from "../../../test_utils/getConnection";

describe("digest", () => {
  let connection: ApiPromise;

  beforeAll(async () => {
    connection = await getConnection("polkadot");
  });

  afterAll(() => {
    connection.disconnect();
  });

  it("should get digest", async () => {
    const value = await digest(connection);

    expect(value.logs[0].preRuntime).toBeDefined();
    expect(typeof value.logs[0].preRuntime[0]).toEqual("string");
    expect(typeof value.logs[0].preRuntime[1]).toEqual("string");

    expect(value.logs[1].consensus).toBeDefined();
    expect(typeof value.logs[1].consensus[0]).toEqual("string");
    expect(typeof value.logs[1].consensus[1]).toEqual("string");
  });
});
