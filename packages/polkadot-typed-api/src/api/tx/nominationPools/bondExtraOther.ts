import { ApiPromise } from "@polkadot/api";
import { SubmittableExtrinsic } from "@polkadot/api/promise/types";

export async function bondExtra(
  apiPromise: ApiPromise,
  extra: number | string
): Promise<SubmittableExtrinsic> {
  return apiPromise.tx.nominationPools.bondExtra(extra);
}
