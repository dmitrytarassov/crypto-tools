import { ApiPromise } from "@polkadot/api";

/**
 * Whether the timestamp has been updated in this block.
 */
export async function didUpdate(apiPromise: ApiPromise): Promise<boolean> {
  const didUpdate = await apiPromise.query.timestamp.didUpdate();

  return didUpdate.toJSON() as unknown as boolean;
}
