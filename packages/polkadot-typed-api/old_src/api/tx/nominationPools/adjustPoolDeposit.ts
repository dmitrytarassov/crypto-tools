import { ApiPromise } from "@polkadot/api";
import { SubmittableExtrinsic } from "@polkadot/api/promise/types";

/**
 * Top up the deficit or withdraw the excess ED from the pool.
 */
export async function adjustPoolDeposit(
  apiPromise: ApiPromise,
  poolId: number
): Promise<SubmittableExtrinsic> {
  return apiPromise.tx.nominationPools.adjustPoolDeposit(poolId);
}
