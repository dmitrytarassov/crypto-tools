import { ApiPromise } from "@polkadot/api";

/**
 * @deprecated Always returns null
 * Total extrinsics count for the current block.
 */
export async function extrinsicCount(
  apiPromise: ApiPromise
): Promise<number | null> {
  const data = await apiPromise.query.system.extrinsicCount();

  const JsonData = data.toJSON();

  if (!JsonData) {
    return null;
  }

  return parseInt(`${JsonData}`, 10) as unknown as number;
}
