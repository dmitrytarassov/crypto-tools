import { ApiPromise } from "@polkadot/api";
import { SubmittableExtrinsic } from "@polkadot/api/promise/types";

/**
 * Update the roles of the pool.
 */
export async function updateRoles(
  apiPromise: ApiPromise,
  poolId: number,
  root: string | null,
  nominator: string | null,
  bouncer: string | null
): Promise<SubmittableExtrinsic> {
  return apiPromise.tx.nominationPools.updateRoles(
    poolId,
    root,
    nominator,
    bouncer
  );
}
