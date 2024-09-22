import { ApiPromise } from "@polkadot/api";
import { SubmittableExtrinsic } from "@polkadot/api/promise/types";

export async function transferKeepAlive(
  apiPromise: ApiPromise,
  dest: string,
  value: string | number
): Promise<SubmittableExtrinsic> {
  return apiPromise.tx.balances.transferAll(dest, value);
}
