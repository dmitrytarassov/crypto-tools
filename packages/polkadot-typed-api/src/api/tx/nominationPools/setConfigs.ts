import { ApiPromise } from "@polkadot/api";
import { SubmittableExtrinsic } from "@polkadot/api/promise/types";

export async function setCommissionMax(
  apiPromise: ApiPromise,
  poolId: number,
  maxCommission: number
): Promise<SubmittableExtrinsic> {
  return apiPromise.tx.nominationPools.setCommissionMax(poolId, maxCommission);
}
