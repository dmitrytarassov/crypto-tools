import { ApiPromise } from "@polkadot/api";

import { Nomination_Pools_Max_Pool_Members_Per_Pool_Json } from "../../../types/api/query/nominationPools";

/*
 * Maximum number of members that may belong to pool. If `None`, then the count of
 */
export async function maxPoolMembersPerPool(
  apiPromise: ApiPromise
): Promise<Nomination_Pools_Max_Pool_Members_Per_Pool_Json> {
  const data = await apiPromise.query.nominationPools.maxPoolMembersPerPool();

  return data.toJSON() as any as Nomination_Pools_Max_Pool_Members_Per_Pool_Json;
}
