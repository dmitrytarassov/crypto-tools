export function abbreviateAddress(
  address: string,
  size = 4,
  dotsCount = 3
): string {
  if (address === "stakers") {
    return address;
  }
  if (size === -1) {
    return address;
  }
  return `${address.slice(0, size)}${".".repeat(dotsCount)}${address.slice(
    -size
  )}`;
}
