import { ApiPromise } from "@polkadot/api";

interface Bump {
  (): number;
}

export async function getAccountNonce(
  apiPromise: ApiPromise,
  account: string
): Promise<number> {
  const nonce = await apiPromise.rpc.system.accountNextIndex(account);

  return parseInt(nonce.toString(), 10);
}

export async function getAccountNonceAndBump(
  apiPromise: ApiPromise,
  account: string
): Promise<[number, Bump]> {
  const nonce = await getAccountNonce(apiPromise, account);

  let i = 0;
  return [
    nonce,
    () => {
      i++;
      return nonce + i;
    },
  ];
}
