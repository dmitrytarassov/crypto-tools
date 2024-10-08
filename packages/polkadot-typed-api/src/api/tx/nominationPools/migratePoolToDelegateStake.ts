import { ApiPromise } from "@polkadot/api";
import { SubmittableExtrinsic } from "@polkadot/api/promise/types";

/**
 * Migrate pool from [`adapter::StakeStrategyType::Transfer`] to
 */
export async function migratePoolToDelegateStake(
  apiPromise: ApiPromise,
  poolId: number
): Promise<SubmittableExtrinsic> {
  return apiPromise.tx.nominationPools.migratePoolToDelegateStake(poolId);
}
