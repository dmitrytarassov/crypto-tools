import { afterAll, beforeAll, describe, expect, it } from "@jest/globals";
import { ApiPromise } from "@polkadot/api";

import { validators } from "./validators";

import { getConnection } from "../../../../../tests/polkadot/test_utils/getConnection";
import { staking } from "../index";

describe("validators in the active set list", () => {
  let connection: ApiPromise;

  beforeAll(async () => {
    connection = await getConnection("polkadot");
  });

  afterAll(() => {
    connection.disconnect();
  });

  it("should get validators list", async () => {
    const list = await validators(connection);
    expect(Array.isArray(list)).toBeTruthy();
    expect(list.length).toBeGreaterThan(0);
    expect(typeof list[0]).toEqual("string");

    expect(list.length).toEqual(await staking.validatorCount(connection));
  });
});
