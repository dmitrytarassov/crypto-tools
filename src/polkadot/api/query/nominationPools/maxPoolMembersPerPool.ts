import { ApiPromise } from "@polkadot/api";

export type Nomination_Pools_Max_Pool_Members_Per_Pool_Json = number | null;

export async function maxPoolMembersPerPool(
  apiPromise: ApiPromise
): Promise<Nomination_Pools_Max_Pool_Members_Per_Pool_Json> {
  const data = await apiPromise.query.nominationPools.maxPoolMembersPerPool();

  return data.toJSON() as any as Nomination_Pools_Max_Pool_Members_Per_Pool_Json;
}
