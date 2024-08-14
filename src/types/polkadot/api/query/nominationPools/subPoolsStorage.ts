import { BrokenNumberType } from "@polkadot/types/common/BrokenNumberType";

export type Nomination_Pools_Sub_Pools_Storage_Json = {
  noEra: {
    points: BrokenNumberType;
    balance: BrokenNumberType;
  };
  withEra: Record<
    number,
    {
      points: BrokenNumberType;
      balance: BrokenNumberType;
    }
  >;
} | null;

export type Nomination_Pools_Sub_Pools_Storage_Entries = [
  number,
  Nomination_Pools_Sub_Pools_Storage_Json
][];
