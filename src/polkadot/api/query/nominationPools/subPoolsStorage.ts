import { ApiPromise } from "@polkadot/api";
import {
  Nomination_Pools_Sub_Pools_Storage_Entries,
  Nomination_Pools_Sub_Pools_Storage_Json,
} from "@polkadotTypes/api/query/nominationPools";

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
