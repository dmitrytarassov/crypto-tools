import { ApiPromise } from "@polkadot/api";
import { Nomination_Pools_Global_Max_Commission_Json } from "@polkadotTypes/api/query/nominationPools";

/*
 * The sum of funds across all pools.
 */
export async function totalValueLocked(
  apiPromise: ApiPromise
): Promise<Nomination_Pools_Global_Max_Commission_Json> {
  const data = await apiPromise.query.nominationPools.totalValueLocked();

  return data.toJSON() as any as Nomination_Pools_Global_Max_Commission_Json;
}
