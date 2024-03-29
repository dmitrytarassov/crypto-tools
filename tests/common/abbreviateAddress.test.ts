import { describe, it, expect } from "@jest/globals";

import { abbreviateAddress } from "../../src/common/abbreviateAddress";

describe("abbreviateAddress", () => {
  it("should work without params", () => {
    expect(
      abbreviateAddress("0x3877fbDe425d21f29F4cB3e739Cf75CDECf8EdCE")
    ).toEqual("0x3877...EdCE");
  });

  it("should work without symbols count", () => {
    expect(
      abbreviateAddress("0x3877fbDe425d21f29F4cB3e739Cf75CDECf8EdCE", 3)
    ).toEqual("0x387...dCE");
  });

  it("should work without options", () => {
    expect(
      abbreviateAddress("0x3877fbDe425d21f29F4cB3e739Cf75CDECf8EdCE", {
        size: 2,
      })
    ).toEqual("0x38...CE");

    expect(
      abbreviateAddress("0x3877fbDe425d21f29F4cB3e739Cf75CDECf8EdCE", {
        size: [1, 2],
      })
    ).toEqual("0x3...CE");

    expect(
      abbreviateAddress("0x3877fbDe425d21f29F4cB3e739Cf75CDECf8EdCE", {
        size: {
          start: 1,
          end: 2,
        },
      })
    ).toEqual("0x3...CE");

    expect(
      abbreviateAddress("0x3877fbDe425d21f29F4cB3e739Cf75CDECf8EdCE", {
        size: {
          start: 2,
          end: 2,
          include0x: true,
        },
      })
    ).toEqual("0x...CE");

    expect(
      abbreviateAddress("0x3877fbDe425d21f29F4cB3e739Cf75CDECf8EdCE", {
        size: 2,
        symbol: "-",
      })
    ).toEqual("0x38---CE");

    expect(
      abbreviateAddress("0x3877fbDe425d21f29F4cB3e739Cf75CDECf8EdCE", {
        size: 2,
        symbol: "-",
        symbolsCount: 2,
      })
    ).toEqual("0x38--CE");
  });
});
