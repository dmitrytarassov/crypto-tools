import { ApiPromise } from "@polkadot/api";
import { SubmittableExtrinsic } from "@polkadot/api/promise/types";

/**
 * Unbond up to `unbonding_points` of the `member_account`'s funds from the pool. It
 */
export async function unbond(
  apiPromise: ApiPromise,
  poolId: number,
  amount: bigint | number | string
): Promise<SubmittableExtrinsic> {
  return apiPromise.tx.nominationPools.unbond(poolId, amount);
}
