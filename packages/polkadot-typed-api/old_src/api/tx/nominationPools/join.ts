import { ApiPromise } from "@polkadot/api";
import { SubmittableExtrinsic } from "@polkadot/api/promise/types";

/**
 * Stake funds with a pool. The amount to bond is transferred from the member to the
 */
export async function join(
  apiPromise: ApiPromise,
  amount: string | number,
  poolId: number
): Promise<SubmittableExtrinsic> {
  return apiPromise.tx.nominationPools.join(amount, poolId);
}
