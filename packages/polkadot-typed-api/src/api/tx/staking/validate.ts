import { ApiPromise } from "@polkadot/api";
import { SubmittableExtrinsic } from "@polkadot/api/promise/types";

/**
 * Payouts stakers based on the provided conditions such as blocked status and commission.
 *
 * This function generates a transaction to validate the staking conditions (blocked and commission) using
 * the Polkadot API and returns a SubmittableExtrinsic object that can be signed and submitted.
 *
 * @param {ApiPromise} apiPromise - The instance of the Polkadot API that provides access to the blockchain.
 * @param {boolean} blocked - The blocked status indicating whether the staking rewards are blocked.
 * @param {number} commission - The commission percentage to be applied when distributing rewards.
 *
 * @returns {Promise<SubmittableExtrinsic>} A promise that resolves to a SubmittableExtrinsic, which can be used to submit the transaction.
 */
export async function validate(
  apiPromise: ApiPromise,
  blocked: boolean,
  commission: number
): Promise<SubmittableExtrinsic> {
  return apiPromise.tx.staking.validate({ blocked, commission });
}
