import { ApiPromise } from "@polkadot/api";
import { SubmittableExtrinsic } from "@polkadot/api/promise/types";

type PoolState = "Open" | "Blocked" | "Destroying";

/**
 * Set a new state for the pool.
 */
export async function setState(
  apiPromise: ApiPromise,
  poolId: number,
  state: PoolState
): Promise<SubmittableExtrinsic> {
  return apiPromise.tx.nominationPools.setState(poolId, state);
}
