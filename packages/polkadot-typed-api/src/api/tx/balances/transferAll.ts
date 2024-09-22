import { ApiPromise } from "@polkadot/api";
import { SubmittableExtrinsic } from "@polkadot/api/promise/types";

/**
 * Transfer the entire transferable balance from the caller account.
 */
export async function transferAll(
  apiPromise: ApiPromise,
  dest: string,
  keepAlive: boolean
): Promise<SubmittableExtrinsic> {
  return apiPromise.tx.balances.transferAll(dest, keepAlive);
}
