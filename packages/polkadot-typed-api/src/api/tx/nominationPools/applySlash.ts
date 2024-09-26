import { ApiPromise } from "@polkadot/api";
import { SubmittableExtrinsic } from "@polkadot/api/promise/types";

/**
 * Apply a pending slash on a member.
 */
export async function applySlash(
  apiPromise: ApiPromise,
  memberAccount: string
): Promise<SubmittableExtrinsic> {
  return apiPromise.tx.nominationPools.applySlash(memberAccount);
}
