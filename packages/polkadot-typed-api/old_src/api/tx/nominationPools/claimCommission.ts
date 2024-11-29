import { ApiPromise } from "@polkadot/api";
import { SubmittableExtrinsic } from "@polkadot/api/promise/types";

/**
 * Claim pending commission.
 */
export async function claimCommission(
  apiPromise: ApiPromise,
  poolId: number
): Promise<SubmittableExtrinsic> {
  return apiPromise.tx.nominationPools.claimCommission(poolId);
}
