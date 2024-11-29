import { ApiPromise } from "@polkadot/api";

import { BrokenNumberType } from "../../../types/common/BrokenNumberType";

export async function pendingRewards(
  apiPromise: ApiPromise,
  who: string
): Promise<BrokenNumberType> {
  const data = await apiPromise.call.nominationPoolsApi.pendingRewards(who);

  return data.toJSON() as any as BrokenNumberType;
}
