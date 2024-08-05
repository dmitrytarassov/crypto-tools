import { ApiPromise } from "@polkadot/api";

import { BrokenNumberType } from "../types/BrokenNumberType";

export type Nomination_Pools_Reward_Pools_Json = {
  lastRecordedRewardCounter: BrokenNumberType;
  lastRecordedTotalPayouts: BrokenNumberType;
  totalRewardsClaimed: BrokenNumberType;
  totalCommissionPending: BrokenNumberType;
  totalCommissionClaimed: BrokenNumberType;
} | null;

export async function rewardPools(
  apiPromise: ApiPromise,
  poolId: number
): Promise<Nomination_Pools_Reward_Pools_Json> {
  const data = await apiPromise.query.nominationPools.rewardPools(poolId);

  return data.toJSON() as any as Nomination_Pools_Reward_Pools_Json;
}
