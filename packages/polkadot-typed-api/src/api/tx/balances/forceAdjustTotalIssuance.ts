import { ApiPromise } from "@polkadot/api";
import { SubmittableExtrinsic } from "@polkadot/api/promise/types";

/**
 * Adjust the total issuance in a saturating way.
 */
export async function forceAdjustTotalIssuance(
  apiPromise: ApiPromise,
  direction: "Increase" | "Decrease",
  delta: number | string
): Promise<SubmittableExtrinsic> {
  return apiPromise.tx.balances.forceAdjustTotalIssuance(direction, delta);
}
