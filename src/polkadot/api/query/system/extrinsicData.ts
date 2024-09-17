import { ApiPromise } from "@polkadot/api";

/**
 * @deprecated Always returns 0x
 * Extrinsics data for the current block (maps an extrinsic's index to its data).
 */
export async function extrinsicData(
  apiPromise: ApiPromise,
  index: number
): Promise<string> {
  const data = await apiPromise.query.system.extrinsicData(index);

  return data.toJSON() as unknown as string;
}
