import { ApiPromise } from "@polkadot/api";

/**
 * @deprecated Always returns null
 * Total length (in bytes) for all extrinsics put together, for the current block.
 */
export async function allExtrinsicsLen(
  apiPromise: ApiPromise
): Promise<number | null> {
  const data = await apiPromise.query.system.allExtrinsicsLen();

  const JsonData = data.toJSON();

  if (!JsonData) {
    return null;
  }

  return parseInt(`${JsonData}`, 10) as unknown as number;
}
