import { ApiPromise } from "@polkadot/api";
import { SubmittableExtrinsic } from "@polkadot/api/promise/types";

/**
 * Set or remove a pool's commission claim permission.
 */
export async function setCommissionClaimPermission(
  apiPromise: ApiPromise,
  poolId: number,
  permission?: "Permissionless" | string
): Promise<SubmittableExtrinsic> {
  return apiPromise.tx.nominationPools.setCommissionClaimPermission(
    poolId,
    permission
  );
}
