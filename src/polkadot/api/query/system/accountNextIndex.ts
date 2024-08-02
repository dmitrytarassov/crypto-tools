import { ApiPromise } from "@polkadot/api";

export async function accountNextIndex(
  apiPromise: ApiPromise,
  account: string
): Promise<number> {
  const nonce = await apiPromise.rpc.system.accountNextIndex(account);

  return parseInt(nonce.toString(), 10);
}
