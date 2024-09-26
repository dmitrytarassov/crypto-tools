import { ApiPromise } from "@polkadot/api";
import { SubmittableExtrinsic } from "@polkadot/api/promise/types";

/**
 * `origin` bonds funds from `extra` for some pool member `member` into their respective
 */
export async function bondExtraOther(
  apiPromise: ApiPromise,
  member: string,
  extra: number | string
): Promise<SubmittableExtrinsic> {
  return apiPromise.tx.nominationPools.bondExtraOther(member, extra);
}
