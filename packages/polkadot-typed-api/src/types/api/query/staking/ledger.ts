import { BrokenNumberType } from "../../../common/BrokenNumberType";

export type Staking_Ledger_Json = {
  stash: string;
  total: number;
  active: number;
  unlocking: {
    value: BrokenNumberType;
    era: number;
  }[];
  legacyClaimedRewards: number[];
};
