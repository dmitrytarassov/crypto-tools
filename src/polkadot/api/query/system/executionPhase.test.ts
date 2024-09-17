import { afterAll, beforeAll, describe, expect, it } from "@jest/globals";
import { ApiPromise } from "@polkadot/api";

import { executionPhase } from "./executionPhase";

import { getConnection } from "../../../../../tests/polkadot/test_utils/getConnection";

describe("executionPhase", () => {
  let connection: ApiPromise;

  beforeAll(async () => {
    connection = await getConnection("polkadot");
  });

  afterAll(() => {
    connection.disconnect();
  });

  it("should get executionPhase value", async () => {
    const value = await executionPhase(connection);

    expect(value === null || typeof value === "string").toBeTruthy();
  });
});
