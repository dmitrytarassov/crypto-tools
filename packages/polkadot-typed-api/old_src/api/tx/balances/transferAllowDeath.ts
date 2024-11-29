import { ApiPromise } from "@polkadot/api";
import { SubmittableExtrinsic } from "@polkadot/api/promise/types";

/**
 * Transfer some liquid free balance to another account.
 */
export async function transferAllowDeath(
  apiPromise: ApiPromise,
  dest: string,
  value: string | number
): Promise<SubmittableExtrinsic> {
  return apiPromise.tx.balances.transferAllowDeath(dest, value);
}
