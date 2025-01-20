import { describe, expect, it } from "@jest/globals";

import { removeLeading0x } from "./removeLeading0x";

describe("removeLeading0x", () => {
  it("should not convert", () => {
    expect(removeLeading0x("asdfasdfasfdasdfasfasdf").toString()).toEqual(
      "asdfasdfasfdasdfasfasdf",
    );
  });

  it("should remove 0x from string start", () => {
    expect(removeLeading0x("0xasdfasdfasfdasdfasfasdf").toString()).toEqual(
      "asdfasdfasfdasdfasfasdf",
    );
  });

  it("should not remove 0x from string middle or end", () => {
    expect(removeLeading0x("asdfasdfasfdas0xdfasfasdf").toString()).toEqual(
      "asdfasdfasfdas0xdfasfasdf",
    );
    expect(removeLeading0x("asdfasdfasfdasdfasfasdf0x").toString()).toEqual(
      "asdfasdfasfdasdfasfasdf0x",
    );
  });

  it("should remove 0x from string start only", () => {
    expect(removeLeading0x("0xasdfasdfasfdas0xdfasfasdf").toString()).toEqual(
      "asdfasdfasfdas0xdfasfasdf",
    );
    expect(removeLeading0x("0xasdfasdfasfdasdfasfasdf0x").toString()).toEqual(
      "asdfasdfasfdasdfasfasdf0x",
    );
  });
});
