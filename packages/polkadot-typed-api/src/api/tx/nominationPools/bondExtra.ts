import { ApiPromise } from "@polkadot/api";
import { SubmittableExtrinsic } from "@polkadot/api/promise/types";

/**
 * Bond `extra` more funds from `origin` into the pool to which they already belong.
 */
export async function bondExtra(
  apiPromise: ApiPromise,
  extra: number | string
): Promise<SubmittableExtrinsic> {
  return apiPromise.tx.nominationPools.bondExtra(extra);
}
