import { ApiPromise } from "@polkadot/api";

import { BrokenNumberType } from "../types/BrokenNumberType";

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

export async function subPoolsStorage(
  apiPromise: ApiPromise,
  poolId: number
): Promise<Nomination_Pools_Sub_Pools_Storage_Json> {
  const data = await apiPromise.query.nominationPools.subPoolsStorage(poolId);

  return data.toJSON() as any as Nomination_Pools_Sub_Pools_Storage_Json;
}
