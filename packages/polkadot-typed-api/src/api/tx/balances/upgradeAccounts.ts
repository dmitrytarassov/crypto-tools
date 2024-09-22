import { ApiPromise } from "@polkadot/api";
import { SubmittableExtrinsic } from "@polkadot/api/promise/types";

export async function forceUnreserve(
  apiPromise: ApiPromise,
  who: string,
  amount: string | number
): Promise<SubmittableExtrinsic> {
  return apiPromise.tx.balances.forceUnreserve(who, amount);
}
