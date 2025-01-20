import { describe, expect, it } from "@jest/globals";
import BigNumber from "bignumber.js";

import { toBigFloat, toBigNumber } from "../index";

describe("toBigFloat", () => {
  it("should convert from number", () => {
    expect(toBigFloat(1).toString()).toEqual("1");
    expect(toBigFloat(123456789).toString()).toEqual("123456789");
    expect(toBigFloat(-1).toString()).toEqual("-1");
    expect(toBigFloat(-123456789).toString()).toEqual("-123456789");
  });

  it("should convert from number with decimals", () => {
    expect(toBigFloat(1.1234).toString()).toEqual("1.1234");
    expect(toBigFloat("1.1232345234532452345234532453245").toString()).toEqual(
      "1.1232345234532452345234532453245",
    );
    expect(toBigFloat("-1.1232345234532452345234532453245").toString()).toEqual(
      "-1.1232345234532452345234532453245",
    );
  });

  it("should convert from string", () => {
    expect(toBigFloat("1").toString()).toEqual("1");
    expect(toBigFloat("123456789").toString()).toEqual("123456789");
    expect(toBigFloat("-1").toString()).toEqual("-1");
    expect(toBigFloat("-123456789").toString()).toEqual("-123456789");
  });

  it("should convert from EthersBigNumber", () => {
    expect(toBigFloat(toBigNumber("1")).toString()).toEqual("1");
    expect(toBigFloat(toBigNumber("123456789")).toString()).toEqual(
      "123456789",
    );
    expect(toBigFloat(toBigNumber("-1")).toString()).toEqual("-1");
    expect(toBigFloat(toBigNumber("-123456789")).toString()).toEqual(
      "-123456789",
    );
  });

  it("should convert from hex string", () => {
    expect(toBigFloat("0x1908b12a")).toEqual(new BigNumber(420000042));
  });
});
