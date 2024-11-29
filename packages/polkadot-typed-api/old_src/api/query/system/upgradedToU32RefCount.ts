import { ApiPromise } from "@polkadot/api";

/**
 * True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
 */
export async function upgradedToU32RefCount(
  apiPromise: ApiPromise
): Promise<boolean> {
  const data = await apiPromise.query.system.upgradedToU32RefCount();

  return data.toJSON() as unknown as boolean;
}
