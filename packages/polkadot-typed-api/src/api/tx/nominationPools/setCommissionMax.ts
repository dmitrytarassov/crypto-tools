import { ApiPromise } from "@polkadot/api";
import { SubmittableExtrinsic } from "@polkadot/api/promise/types";

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
