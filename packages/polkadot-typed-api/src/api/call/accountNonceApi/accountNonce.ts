import { ApiPromise } from "@polkadot/api";

/**
 * Get current account nonce of given `AccountId`.
 */
export async function accountNonce(
  apiPromise: ApiPromise,
  account: string
): Promise<number> {
  const data = await apiPromise.call.accountNonceApi.accountNonce(account);

  return data.toJSON() as any as number;
}
