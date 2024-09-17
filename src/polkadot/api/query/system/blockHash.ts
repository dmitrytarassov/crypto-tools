import { ApiPromise } from "@polkadot/api";

/**
 * Map of block numbers to block hashes.
 */
export async function blockHash(
  apiPromise: ApiPromise,
  block: number
): Promise<string | null> {
  const data = await apiPromise.query.system.blockHash(block);

  const JsonData = data.toJSON();

  if (
    !JsonData ||
    JsonData ===
      "0x0000000000000000000000000000000000000000000000000000000000000000"
  ) {
    return null;
  }

  return JsonData as unknown as string;
}
