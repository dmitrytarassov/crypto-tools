import { describe, it, expect } from "@jest/globals";

import { abbreviateAddress } from "./abbreviateAddress";

describe("abbreviateAddress", () => {
  it("should work without params", () => {
    expect(
      abbreviateAddress("0x3877fbDe425d21f29F4cB3e739Cf75CDECf8EdCE"),
    ).toEqual("0x3877...EdCE");
  });

  it("should work without symbols count", () => {
    expect(
      abbreviateAddress("0x3877fbDe425d21f29F4cB3e739Cf75CDECf8EdCE", 3),
    ).toEqual("0x387...dCE");
  });

  it("should work without options", () => {
    expect(
      abbreviateAddress("0x3877fbDe425d21f29F4cB3e739Cf75CDECf8EdCE", {
        size: 2,
      }),
    ).toEqual("0x38...CE");

    expect(
      abbreviateAddress("0x3877fbDe425d21f29F4cB3e739Cf75CDECf8EdCE", {
        size: [1, 2],
      }),
    ).toEqual("0x3...CE");

    expect(
      abbreviateAddress("0x3877fbDe425d21f29F4cB3e739Cf75CDECf8EdCE", {
        size: {
          start: 1,
          end: 2,
        },
      }),
    ).toEqual("0x3...CE");

    expect(
      abbreviateAddress("0x3877fbDe425d21f29F4cB3e739Cf75CDECf8EdCE", {
        size: {
          start: 2,
          end: 2,
          include0x: true,
        },
      }),
    ).toEqual("0x...CE");

    expect(
      abbreviateAddress("0x3877fbDe425d21f29F4cB3e739Cf75CDECf8EdCE", {
        size: 2,
        symbol: "-",
      }),
    ).toEqual("0x38---CE");

    expect(
      abbreviateAddress("0x3877fbDe425d21f29F4cB3e739Cf75CDECf8EdCE", {
        size: 2,
        symbol: "-",
        symbolsCount: 2,
      }),
    ).toEqual("0x38--CE");

    expect(abbreviateAddress(undefined)).toEqual("...");
  });

  it("should ignore address from ignore list", () => {
    const ignore = "0x3877fbDe425d21f29F4cB3e739Cf75CDECf8EdCE";

    expect(
      abbreviateAddress(ignore, { size: 4, ignoreList: [ignore] }),
    ).toEqual(ignore);

    const anotherAddress = "0xaa77fbDe425d21f29F4cB3e739Cf75CDECf8EdCE";
    expect(
      abbreviateAddress(anotherAddress, { size: 4, ignoreList: [ignore] }),
    ).toEqual("0xaa77...EdCE");
  });

  it("should return the same address if size is less than 0", () => {
    const address = "0x3877fbDe425d21f29F4cB3e739Cf75CDECf8EdCE";

    expect(abbreviateAddress(address, { size: 0 })).toEqual(address);
    expect(abbreviateAddress(address, { size: -1 })).toEqual(address);
  });
});
