import { ApiPromise } from "@polkadot/api";
import { SubmittableExtrinsic } from "@polkadot/api/promise/types";

/**
 * Set the commission change rate for a pool.
 */
export async function setCommissionChangeRate(
  apiPromise: ApiPromise,
  poolId: number,
  changeRate: {
    maxIncrease: number;
    minDelay: number;
  }
): Promise<SubmittableExtrinsic> {
  return apiPromise.tx.nominationPools.setCommissionChangeRate(
    poolId,
    changeRate
  );
}
