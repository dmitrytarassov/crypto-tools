import { ApiPromise } from "@polkadot/api";

export type Nomination_Pools_Max_Pool_Members_Json = number | null;

/*
 * Maximum number of members that can exist in the system. If `None`, then the count
 */
export async function maxPoolMembers(
  apiPromise: ApiPromise
): Promise<Nomination_Pools_Max_Pool_Members_Json> {
  const data = await apiPromise.query.nominationPools.maxPoolMembers();

  return data.toJSON() as any as Nomination_Pools_Max_Pool_Members_Json;
}
