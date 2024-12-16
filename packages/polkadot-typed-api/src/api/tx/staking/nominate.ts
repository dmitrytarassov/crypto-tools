import { ApiPromise } from "@polkadot/api";
import { SubmittableExtrinsic } from "@polkadot/api/promise/types";

/**
 * Declare the desire to nominate targets for the origin controller.
*/
export async function nominate(
  apiPromise: ApiPromise,
  targets: string[],
): Promise<SubmittableExtrinsic> {
  return apiPromise.tx.staking.nominate(targets);
}
