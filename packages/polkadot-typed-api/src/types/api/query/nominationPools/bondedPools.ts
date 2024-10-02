import { BrokenNumberType } from "../../../common/BrokenNumberType";

export type Nomination_Pools_Bonded_Pools_Json = {
  commission: {
    current: [number, string] | null;
    max: number | null;
    changeRate: { maxIncrease: number; minDelay: number } | null;
    throttleFrom: number | null;
    claimPermission: null; // always null
  };
  memberCounter: number;
  points: BrokenNumberType;
  roles: {
    depositor: string;
    root: string;
    nominator: string;
    bouncer: string;
  };
  state: "Open" | "Destroying" | "Blocked";
};

export type Nomination_Pools_Bonded_Pools_Entries = [
  number,
  Nomination_Pools_Bonded_Pools_Json
][];
