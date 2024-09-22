import { ApiPromise } from "@polkadot/api";
import { SubmittableExtrinsic } from "@polkadot/api/promise/types";

/**
 * Set the regular balance of a given account.
 */
export async function forceSetBalance(
  apiPromise: ApiPromise,
  who: string,
  newFree: string | number
): Promise<SubmittableExtrinsic> {
  return apiPromise.tx.balances.forceSetBalance(who, newFree);
}
