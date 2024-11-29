import { ApiPromise } from "@polkadot/api";
import { SubmittableExtrinsic } from "@polkadot/api/promise/types";

/**
 * Allows a pool member to set a claim permission to allow or disallow permissionless
 */
export async function setClaimPermission(
  apiPromise: ApiPromise,
  permission:
    | "Permissioned"
    | "PermissionlessCompound"
    | "PermissionlessWithdraw"
    | "PermissionlessAll"
): Promise<SubmittableExtrinsic> {
  return apiPromise.tx.nominationPools.setClaimPermission(permission);
}
