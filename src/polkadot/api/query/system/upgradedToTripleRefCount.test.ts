import { afterAll, beforeAll, describe, expect, it } from "@jest/globals";
import { ApiPromise } from "@polkadot/api";

import { upgradedToTripleRefCount } from "./upgradedToTripleRefCount";

import { getConnection } from "../../../../../tests/polkadot/test_utils/getConnection";

describe("upgradedToTripleRefCount", () => {
  let connection: ApiPromise;

  beforeAll(async () => {
    connection = await getConnection("polkadot");
  });

  afterAll(() => {
    connection.disconnect();
  });

  it("should get upgradedToTripleRefCount value", async () => {
    const value = await upgradedToTripleRefCount(connection);

    expect(typeof value === "boolean").toBeTruthy();
  });
});
