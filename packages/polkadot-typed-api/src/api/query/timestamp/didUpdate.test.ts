import { afterAll, beforeAll, describe, expect, it } from "@jest/globals";
import { ApiPromise } from "@polkadot/api";

import { didUpdate } from "./didUpdate";

import { getConnection } from "../../../test_utils/getConnection";

describe("didUpdate", () => {
  let connection: ApiPromise;

  beforeAll(async () => {
    connection = await getConnection("polkadot");
  });

  afterAll(() => {
    connection.disconnect();
  });

  it("should get didUpdate value", async () => {
    const value = await didUpdate(connection);

    expect(typeof value).toEqual("boolean");
  });
});
