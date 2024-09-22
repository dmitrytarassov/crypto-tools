import { ApiPromise } from "@polkadot/api";
import { SubmittableExtrinsic } from "@polkadot/api/promise/types";

export async function forceTransfer(
  apiPromise: ApiPromise,
  source: string,
  dest: string,
  value: string | number
): Promise<SubmittableExtrinsic> {
  return apiPromise.tx.balances.forceTransfer(source, dest, value);
}
