import { BrokenNumberType } from "../../../common/BrokenNumberType";

export type Nomination_Pools_Reward_Pools_Json = {
  lastRecordedRewardCounter: BrokenNumberType;
  lastRecordedTotalPayouts: BrokenNumberType;
  totalRewardsClaimed: BrokenNumberType;
  totalCommissionPending: BrokenNumberType;
  totalCommissionClaimed: BrokenNumberType;
} | null;

export type Nomination_Pools_Reward_Pools_Entries = [
  number,
  Nomination_Pools_Reward_Pools_Json
][];
