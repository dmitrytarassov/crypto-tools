import { ApiPromise } from "@polkadot/api";

export type Nomination_Pools_Max_Pools_Json = number | null;

export async function maxPools(
  apiPromise: ApiPromise
): Promise<Nomination_Pools_Max_Pools_Json> {
  const data = await apiPromise.query.nominationPools.maxPools();

  return data.toJSON() as any as Nomination_Pools_Max_Pools_Json;
}
