import { ApiPromise } from "@polkadot/api";

/**
 * True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
 */
export async function upgradedToTripleRefCount(
  apiPromise: ApiPromise
): Promise<boolean> {
  const data = await apiPromise.query.system.upgradedToTripleRefCount();

  return data.toJSON() as unknown as boolean;
}
