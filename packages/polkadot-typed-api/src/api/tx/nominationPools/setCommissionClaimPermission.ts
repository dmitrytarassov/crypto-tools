import { ApiPromise } from "@polkadot/api";
import { SubmittableExtrinsic } from "@polkadot/api/promise/types";

export async function setCommission(
  apiPromise: ApiPromise,
  poolId: number,
  newCommission?: [number, string] // [Perbill, AccountId32]
): Promise<SubmittableExtrinsic> {
  return apiPromise.tx.nominationPools.setCommission(poolId, newCommission);
}
