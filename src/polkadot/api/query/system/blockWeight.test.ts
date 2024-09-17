import { afterAll, beforeAll, describe, expect, it } from "@jest/globals";
import { ApiPromise } from "@polkadot/api";

import { blockWeight } from "./blockWeight";

import { getConnection } from "../../../../../tests/polkadot/test_utils/getConnection";
import { toBigFloat } from "../../../../common";

describe("blockWeight", () => {
  let connection: ApiPromise;

  beforeAll(async () => {
    connection = await getConnection("polkadot");
  });

  afterAll(() => {
    connection.disconnect();
  });

  it("should get blockWeight", async () => {
    const value = await blockWeight(connection);

    expect(
      toBigFloat(value.mandatory.proofSize).isGreaterThanOrEqualTo(0)
    ).toBeTruthy();
    expect(
      toBigFloat(value.mandatory.refTime).isGreaterThanOrEqualTo(0)
    ).toBeTruthy();

    expect(
      toBigFloat(value.normal.proofSize).isGreaterThanOrEqualTo(0)
    ).toBeTruthy();
    expect(
      toBigFloat(value.normal.proofSize).isGreaterThanOrEqualTo(0)
    ).toBeTruthy();

    expect(
      toBigFloat(value.operational.proofSize).isGreaterThanOrEqualTo(0)
    ).toBeTruthy();
    expect(
      toBigFloat(value.operational.proofSize).isGreaterThanOrEqualTo(0)
    ).toBeTruthy();
  });
});
