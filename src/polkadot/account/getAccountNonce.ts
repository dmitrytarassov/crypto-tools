import { ApiPromise } from "@polkadot/api";

import * as api from "../api";

interface Bump {
  (): number;
}

export async function getAccountNonce(
  apiPromise: ApiPromise,
  account: string
): Promise<number> {
  return api.rpc.system.accountNextIndex(apiPromise, account);
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
