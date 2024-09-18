import { afterAll, beforeAll, describe, expect, it } from "@jest/globals";
import { ApiPromise } from "@polkadot/api";

import { claimPermissions } from "./claimPermissions";

import { expectError } from "../../../test_utils/expectError";
import { getConnection } from "../../../test_utils/getConnection";

describe("claimPermissions", () => {
  let connection: ApiPromise;

  beforeAll(async () => {
    connection = await getConnection("polkadot");
  });

  afterAll(() => {
    connection.disconnect();
  });

  it("should get real pool claimPermissions", async () => {
    const data = await claimPermissions(
      connection,
      "13ND8U27NcjPzNgidG264x2XJdEvc7hgd9ZTcHxCxvjL4aXi"
    );

    expect(
      [
        "Permissioned",
        "PermissionlessCompound",
        "PermissionlessWithdraw",
        "PermissionlessAll",
      ].includes(data)
    ).toBeTruthy();
  });

  it("should return Permissioned for non pool address", async () => {
    const data = await claimPermissions(
      connection,
      "15FLczYwbtWUA5mwhoCaT5EV4r7jovwRjuiodp777qspBnct"
    );

    expect(data).toEqual("Permissioned");
  });
  //
  it("should throw error because of wrong pool address", async () => {
    const wrongAddress = "asdasd";
    expectError(async () => {
      await claimPermissions(connection, wrongAddress);
    }, `Unable to decode on index 0 createType(Lookup0):: Decoding ${wrongAddress}: Invalid decoded address length`);
  });
});
