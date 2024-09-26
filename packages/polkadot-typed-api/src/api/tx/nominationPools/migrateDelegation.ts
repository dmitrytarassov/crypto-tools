import { ApiPromise } from "@polkadot/api";
import { SubmittableExtrinsic } from "@polkadot/api/promise/types";

export async function claimPayoutOther(
  apiPromise: ApiPromise,
  other: string
): Promise<SubmittableExtrinsic> {
  return apiPromise.tx.nominationPools.claimPayoutOther(other);
}
