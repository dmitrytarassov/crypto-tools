import { ApiPromise } from "@polkadot/api";
import { SubmittableExtrinsic } from "@polkadot/api/promise/types";

/**
 * Nominate on behalf of the pool.
 */
export async function nominate(
  apiPromise: ApiPromise,
  poolId: number,
  validators: string[]
): Promise<SubmittableExtrinsic> {
  return apiPromise.tx.nominationPools.nominate(poolId, validators);
}
