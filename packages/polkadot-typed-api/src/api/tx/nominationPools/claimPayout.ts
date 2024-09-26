import { ApiPromise } from "@polkadot/api";
import { SubmittableExtrinsic } from "@polkadot/api/promise/types";

/**
 * A bonded member can use this to claim their payout based on the rewards that the pool
 */
export async function claimPayout(
  apiPromise: ApiPromise
): Promise<SubmittableExtrinsic> {
  return apiPromise.tx.nominationPools.claimPayout();
}
