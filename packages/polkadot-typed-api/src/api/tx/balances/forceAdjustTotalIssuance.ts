import { ApiPromise } from "@polkadot/api";
import { SubmittableExtrinsic } from "@polkadot/api/promise/types";

export async function burn(
  apiPromise: ApiPromise,
  value: string | number,
  keepAlive: boolean
): Promise<SubmittableExtrinsic> {
  return apiPromise.tx.balances.burn(value, keepAlive);
}
