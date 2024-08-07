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

/*
 * Groups of unbonding pools. Each group of unbonding pools belongs to a
 */
export async function subPoolsStorage(
  apiPromise: ApiPromise,
  poolId: number
): Promise<Nomination_Pools_Sub_Pools_Storage_Json> {
  const data = await apiPromise.query.nominationPools.subPoolsStorage(poolId);

  return data.toJSON() as any as Nomination_Pools_Sub_Pools_Storage_Json;
}

export type Nomination_Pools_Sub_Pools_Storage_Entries = [
  number,
  Nomination_Pools_Sub_Pools_Storage_Json
][];

subPoolsStorage.entries = async function (
  apiPromise: ApiPromise
): Promise<Nomination_Pools_Sub_Pools_Storage_Entries> {
  const data = await apiPromise.query.nominationPools.subPoolsStorage.entries();

  const result: Nomination_Pools_Sub_Pools_Storage_Entries = [];

  data.forEach(([pool, value]) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    result.push([+pool.toHuman()[0], value.toJSON()]);
  });

  return result;
};
