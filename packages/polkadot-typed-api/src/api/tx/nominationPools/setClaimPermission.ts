import { ApiPromise } from "@polkadot/api";
import { SubmittableExtrinsic } from "@polkadot/api/promise/types";

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
