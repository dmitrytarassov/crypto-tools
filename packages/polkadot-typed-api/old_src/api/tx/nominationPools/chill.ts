import { ApiPromise } from "@polkadot/api";
import { SubmittableExtrinsic } from "@polkadot/api/promise/types";

/**
 * Chill on behalf of the pool.
 */
export async function chill(
  apiPromise: ApiPromise,
  poolId: number
): Promise<SubmittableExtrinsic> {
  return apiPromise.tx.nominationPools.chill(poolId);
}
