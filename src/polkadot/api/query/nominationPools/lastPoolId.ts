import { ApiPromise } from "@polkadot/api";
import { Nomination_Pools_Last_Pool_Id_Json } from "@polkadot/types/api/query/nominationPools";

/*
 * Ever increasing number of all pools created so far.
 */
export async function lastPoolId(
  apiPromise: ApiPromise
): Promise<Nomination_Pools_Last_Pool_Id_Json> {
  const data = await apiPromise.query.nominationPools.lastPoolId();

  return data.toJSON() as any as Nomination_Pools_Last_Pool_Id_Json;
}
