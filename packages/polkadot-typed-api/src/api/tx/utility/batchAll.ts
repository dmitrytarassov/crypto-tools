import { ApiPromise } from "@polkadot/api";
import { SubmittableExtrinsic } from "@polkadot/api/promise/types";

/**
 * Creates a batch of transactions to be executed atomically.
 */
export async function batchAll(
  apiPromise: ApiPromise,
  txs: SubmittableExtrinsic[],
): Promise<SubmittableExtrinsic> {
  return apiPromise.tx.utility.batchAll(txs);
}