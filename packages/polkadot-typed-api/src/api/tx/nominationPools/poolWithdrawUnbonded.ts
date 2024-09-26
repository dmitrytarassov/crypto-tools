import { ApiPromise } from "@polkadot/api";
import { SubmittableExtrinsic } from "@polkadot/api/promise/types";

/**
 * Call `withdraw_unbonded` for the pools account. This call can be made by any account.
 */
export async function poolWithdrawUnbonded(
  apiPromise: ApiPromise,
  poolId: number,
  numSlashingSpans: number
): Promise<SubmittableExtrinsic> {
  return apiPromise.tx.nominationPools.poolWithdrawUnbonded(
    poolId,
    numSlashingSpans
  );
}
