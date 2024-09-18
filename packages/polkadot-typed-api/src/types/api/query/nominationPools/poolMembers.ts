import { BrokenNumberType } from "../../../common/BrokenNumberType";

export type Nomination_Pools_Pool_Members_Json = {
  poolId: number;
  points: number;
  lastRecordedRewardCounter: BrokenNumberType;
  unbondingEras: Record<string, BrokenNumberType>;
} | null;

export type Nomination_Pools_Pool_Members_Entries = [
  number,
  Nomination_Pools_Pool_Members_Json
][];
