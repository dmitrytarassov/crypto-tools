export function removeLeading0x(data: string): string {
  if (data.startsWith("0x")) {
    const [, , ...rest] = data;
    return rest.join("");
  }

  return data;
}
