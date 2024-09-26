import { ApiPromise } from "@polkadot/api";
import { SubmittableExtrinsic } from "@polkadot/api/promise/types";

/**
 * Migrates delegated funds from the pool account to the `member_account`.
 */
export async function migrateDelegation(
  apiPromise: ApiPromise,
  memberAccount: string
): Promise<SubmittableExtrinsic> {
  return apiPromise.tx.nominationPools.migrateDelegation(memberAccount);
}
