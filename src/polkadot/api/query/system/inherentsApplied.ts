import { ApiPromise } from "@polkadot/api";

/**
 * Whether all inherents have been applied.
 */
export async function inherentsApplied(
  apiPromise: ApiPromise
): Promise<boolean> {
  const data = await apiPromise.query.system.inherentsApplied();

  return data.toJSON() as unknown as boolean;
}
