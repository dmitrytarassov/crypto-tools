import { ApiPromise } from "@polkadot/api";

export type Nomination_Pools_Last_Pool_Id_Json = number;

/*
 * Ever increasing number of all pools created so far.
 */
export async function lastPoolId(
  apiPromise: ApiPromise
): Promise<Nomination_Pools_Last_Pool_Id_Json> {
  const data = await apiPromise.query.nominationPools.lastPoolId();

  return data.toJSON() as any as Nomination_Pools_Last_Pool_Id_Json;
}
