import { ApiPromise } from "@polkadot/api";
import { SubmittableExtrinsic } from "@polkadot/api/promise/types";

/**
 * Same as the [`transfer_allow_death`] call, but with a check that the transfer will not
 */
export async function transferKeepAlive(
  apiPromise: ApiPromise,
  dest: string,
  value: string | number
): Promise<SubmittableExtrinsic> {
  return apiPromise.tx.balances.transferKeepAlive(dest, value);
}
