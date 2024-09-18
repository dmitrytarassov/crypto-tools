import { describe, it, expect } from "@jest/globals";

import {
  addHTMLBreaksToAddress,
  invisibleSpace,
} from "./addHTMLBreaksToAddress";

import { expectError } from "../../../test_utils/expectError";

describe("addHTMLBreaksToAddress", function () {
  it("should add 1 invisible space", () => {
    expect(addHTMLBreaksToAddress("asdfg")).toEqual(`asdf${invisibleSpace}g`);
  });

  it("should add many invisible spaces", () => {
    expect(addHTMLBreaksToAddress("asdfghjklqwertyuiop")).toEqual(
      `asdf${invisibleSpace}ghjk${invisibleSpace}lqwe${invisibleSpace}rtyu${invisibleSpace}iop`
    );
  });

  it("should add many invisible spaces each 6 symbols", () => {
    expect(addHTMLBreaksToAddress("asdfghjklqwertyuiop", 6)).toEqual(
      `asdfgh${invisibleSpace}jklqwe${invisibleSpace}rtyuio${invisibleSpace}p`
    );
  });

  it("should not add invisible space because string is too small", () => {
    expect(addHTMLBreaksToAddress("asdfg", 10)).toEqual("asdfg");
  });

  it("should not add invisible space to empty string", () => {
    expect(addHTMLBreaksToAddress("")).toEqual("");
  });

  it("should throw error because invalid param", () => {
    expectError(() => {
      addHTMLBreaksToAddress("asdfg", -10);
    }, "Param lettersBeforeSpace is to small: -10");
  });
});
