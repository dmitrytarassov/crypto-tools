import { afterAll, beforeAll, describe, expect, it } from "@jest/globals";
import { ApiPromise } from "@polkadot/api";

import { upgradedToU32RefCount } from "./upgradedToU32RefCount";

import { getConnection } from "../../../test_utils/getConnection";

describe("upgradedToU32RefCount", () => {
  let connection: ApiPromise;

  beforeAll(async () => {
    connection = await getConnection("polkadot");
  });

  afterAll(() => {
    connection.disconnect();
  });

  it("should get upgradedToU32RefCount value", async () => {
    const value = await upgradedToU32RefCount(connection);

    expect(typeof value === "boolean").toBeTruthy();
  });
});
