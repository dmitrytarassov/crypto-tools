import { describe, test, expect } from "@jest/globals";

import {
  addHTMLBreaksToAddress,
  invisibleSpace,
} from "./addHTMLBreaksToAddress";

describe("addHTMLBreaksToAddress", function () {
  test("should add 1 invisible space", () => {
    expect(addHTMLBreaksToAddress("asdfg")).toEqual(`asdf${invisibleSpace}g`);
  });

  test("should add many invisible spaces", () => {
    expect(addHTMLBreaksToAddress("asdfghjklqwertyuiop")).toEqual(
      `asdf${invisibleSpace}ghjk${invisibleSpace}lqwe${invisibleSpace}rtyu${invisibleSpace}iop`,
    );
  });

  test("should add many invisible spaces each 6 symbols", () => {
    expect(addHTMLBreaksToAddress("asdfghjklqwertyuiop", 6)).toEqual(
      `asdfgh${invisibleSpace}jklqwe${invisibleSpace}rtyuio${invisibleSpace}p`,
    );
  });

  test("should not add invisible space because string is too small", () => {
    expect(addHTMLBreaksToAddress("asdfg", 10)).toEqual("asdfg");
  });

  test("should not add invisible space to empty string", () => {
    expect(addHTMLBreaksToAddress("")).toEqual("");
  });

  test("should throw error because invalid param", () => {
    expect(() => {
      addHTMLBreaksToAddress("asdfg", -10);
    }).toThrow("Param lettersBeforeSpace is to small: -10");
  });

  test("should return empty string if address is empty", () => {
    expect(addHTMLBreaksToAddress()).toEqual("");
  });
});
