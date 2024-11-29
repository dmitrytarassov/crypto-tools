import { ApiPromise } from "@polkadot/api";
import { SubmittableExtrinsic } from "@polkadot/api/promise/types";

/**
 * Create a new delegation pool with a previously used pool id
 */
export async function createWithPoolId(
  apiPromise: ApiPromise,
  amount: string | number,
  root: string,
  nominator: string,
  bouncer: string,
  poolId: number
): Promise<SubmittableExtrinsic> {
  return apiPromise.tx.nominationPools.createWithPoolId(
    amount,
    root,
    nominator,
    bouncer,
    poolId
  );
}
