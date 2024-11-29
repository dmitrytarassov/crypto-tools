import { ApiPromise } from "@polkadot/api";
import { SubmittableExtrinsic } from "@polkadot/api/promise/types";

interface PoolMetadata {
  metadata: string;
}

/**
 * Set a new metadata for the pool.
 */
export async function setMetadata(
  apiPromise: ApiPromise,
  poolId: number,
  metadata: PoolMetadata
): Promise<SubmittableExtrinsic> {
  return apiPromise.tx.nominationPools.setMetadata(poolId, metadata.metadata);
}
