import { expect } from "@jest/globals";

export async function expectError(
  fn: () => Promise<void> | void,
  expectedErrorTextPart: string
) {
  try {
    await fn();
  } catch (e: any) {
    expect(e.toString().includes(expectedErrorTextPart)).toBeTruthy();
  }
}
