import { ApiPromise } from "@polkadot/api";
import { SubmittableExtrinsic } from "@polkadot/api/promise/types";

/**
 * Pay out next page of the stakers behind a validator for the given era.
 */
export async function payoutStakers(
  apiPromise: ApiPromise,
  validatorStash: string,
  era: number
): Promise<SubmittableExtrinsic> {
  return apiPromise.tx.staking.payoutStakers(validatorStash, era);
}
