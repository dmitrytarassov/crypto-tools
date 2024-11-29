import { afterAll, beforeAll, describe, expect, it } from "@jest/globals";
import { ApiPromise } from "@polkadot/api";

import { validatorCount } from "./validatorCount";

import { getConnection } from "../../../test_utils/getConnection";

describe("get active set size", () => {
  let connection: ApiPromise;

  beforeAll(async () => {
    connection = await getConnection("polkadot");
  });

  afterAll(() => {
    connection.disconnect();
  });

  it("should get active set size", async () => {
    const setSize = await validatorCount(connection);
    expect(typeof setSize).toEqual("number");
    expect(setSize).toBeGreaterThan(1);
  });
});
