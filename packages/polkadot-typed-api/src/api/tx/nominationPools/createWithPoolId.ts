import { ApiPromise } from "@polkadot/api";
import { SubmittableExtrinsic } from "@polkadot/api/promise/types";

export async function create(
  apiPromise: ApiPromise,
  amount: string | number,
  root: string,
  nominator: string,
  bouncer: string
): Promise<SubmittableExtrinsic> {
  return apiPromise.tx.nominationPools.create(amount, root, nominator, bouncer);
}
