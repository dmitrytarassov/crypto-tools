import { ApiPromise } from "@polkadot/api";
import { SubmittableExtrinsic } from "@polkadot/api/promise/types";

/**
 * Pay out a page of the stakers behind a validator for the given era and page.
 */
export async function payoutStakersByPage(
  apiPromise: ApiPromise,
  validatorStash: string,
  era: number,
  page: number
): Promise<SubmittableExtrinsic> {
  return apiPromise.tx.staking.payoutStakersByPage(validatorStash, era, page);
}
