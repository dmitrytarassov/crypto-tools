import { describe, it, expect } from "@jest/globals";
import { BigNumber } from "ethers";

import { toBigNumber } from "../../src/common/toBigNumber";

describe("toBigNumber", () => {
  it("should convert from number", () => {
    expect(toBigNumber(1).toString()).toEqual("1");
    expect(toBigNumber(123456789).toString()).toEqual("123456789");
    expect(toBigNumber(-1).toString()).toEqual("-1");
    expect(toBigNumber(-123456789).toString()).toEqual("-123456789");
  });

  it("should convert from string", () => {
    expect(toBigNumber("1").toString()).toEqual("1");
    expect(toBigNumber("123456789").toString()).toEqual("123456789");
    expect(toBigNumber("-1").toString()).toEqual("-1");
    expect(toBigNumber("-123456789").toString()).toEqual("-123456789");
  });

  it("should convert from bigint", () => {
    expect(
      toBigNumber(BigInt(Number.MAX_SAFE_INTEGER * 123321)).toString()
    ).toEqual(
      BigNumber.from(BigInt(Number.MAX_SAFE_INTEGER * 123321)).toString()
    );
  });
});
