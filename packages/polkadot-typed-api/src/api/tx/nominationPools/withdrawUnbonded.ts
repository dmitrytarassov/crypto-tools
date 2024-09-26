import { ApiPromise } from "@polkadot/api";
import { SubmittableExtrinsic } from "@polkadot/api/promise/types";

/**
 * Withdraw unbonded funds from `member_account`. If no bonded funds can be unbonded, an
 */
export async function withdrawUnbonded(
  apiPromise: ApiPromise,
  memberAccount: string,
  numSlashingSpans: number
): Promise<SubmittableExtrinsic> {
  return apiPromise.tx.nominationPools.withdrawUnbonded(
    memberAccount,
    numSlashingSpans
  );
}
