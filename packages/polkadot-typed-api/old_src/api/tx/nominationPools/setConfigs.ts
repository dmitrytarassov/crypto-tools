import { ApiPromise } from "@polkadot/api";
import { SubmittableExtrinsic } from "@polkadot/api/promise/types";

interface PoolConfig {
  minJoinBond: bigint | number;
  minCreateBond: bigint | number;
  maxMembers: number;
  maxPoolCommission: bigint | number;
}

/**
 * Update configurations for the nomination pools. The origin for this call must be
 */
export async function setConfigs(
  apiPromise: ApiPromise,
  poolId: number,
  config: PoolConfig
): Promise<SubmittableExtrinsic> {
  return apiPromise.tx.nominationPools.setConfigs(poolId, config);
}
