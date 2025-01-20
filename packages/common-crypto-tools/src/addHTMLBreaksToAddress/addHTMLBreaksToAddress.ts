export const invisibleSpace = "&#8203;";

export function addHTMLBreaksToAddress(
  address: string,
  lettersBeforeSpace = 4,
): string {
  if (lettersBeforeSpace < 0) {
    throw new Error(
      `Param lettersBeforeSpace is to small: ${lettersBeforeSpace}`,
    );
  }

  let result = "";

  for (let i = 0; i < address.length; i++) {
    if (i > 0 && i % lettersBeforeSpace === 0) {
      result += invisibleSpace;
    }
    result += address[i];
  }

  return result;
}
