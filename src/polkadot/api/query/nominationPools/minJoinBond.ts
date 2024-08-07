import { ApiPromise } from "@polkadot/api";

export type Nomination_Pools_Min_Join_Bond_Json = number | null;

/*
 * Minimum amount to bond to join a pool.
 */
export async function minJoinBond(
  apiPromise: ApiPromise
): Promise<Nomination_Pools_Min_Join_Bond_Json> {
  const data = await apiPromise.query.nominationPools.minJoinBond();

  return data.toJSON() as any as Nomination_Pools_Min_Join_Bond_Json;
}
