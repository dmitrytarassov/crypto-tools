import { ApiPromise } from "@polkadot/api";
import { SubmittableExtrinsic } from "@polkadot/api/promise/types";

/**
 * Bond `extra` more funds from `origin` into the pool to which they already belong.
 * Pass { FreeBalance: number | string } if you want to bond more funds
 * Pass { Rewards: null } if you want to bound your un untreated rewards
 */
export async function bondExtra(
  apiPromise: ApiPromise,
  extra: { FreeBalance: number | string } | { Rewards: null }
): Promise<SubmittableExtrinsic> {
  return apiPromise.tx.nominationPools.bondExtra(extra);
}
