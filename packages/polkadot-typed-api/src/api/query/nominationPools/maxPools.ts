import { ApiPromise } from "@polkadot/api";

import { Nomination_Pools_Max_Pools_Json } from "../../../types/api/query/nominationPools";

/*
 * Maximum number of nomination pools that can exist. If `None`, then an unbounded number of
 */
export async function maxPools(
  apiPromise: ApiPromise
): Promise<Nomination_Pools_Max_Pools_Json> {
  const data = await apiPromise.query.nominationPools.maxPools();

  return data.toJSON() as any as Nomination_Pools_Max_Pools_Json;
}
