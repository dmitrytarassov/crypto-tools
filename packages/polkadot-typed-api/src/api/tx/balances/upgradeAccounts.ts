import { ApiPromise } from "@polkadot/api";
import { SubmittableExtrinsic } from "@polkadot/api/promise/types";

/**
 * Upgrade a specified account.
 */
export async function upgradeAccounts(
  apiPromise: ApiPromise,
  who: string
): Promise<SubmittableExtrinsic> {
  return apiPromise.tx.balances.upgradeAccounts(who);
}
