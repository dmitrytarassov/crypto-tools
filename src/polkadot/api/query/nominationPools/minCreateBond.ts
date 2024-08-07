import { ApiPromise } from "@polkadot/api";

export type Nomination_Pools_Min_Create_Bond_Json = number | null;

/*
 * Minimum bond required to create a pool.
 */
export async function minCreateBond(
  apiPromise: ApiPromise
): Promise<Nomination_Pools_Min_Create_Bond_Json> {
  const data = await apiPromise.query.nominationPools.minCreateBond();

  return data.toJSON() as any as Nomination_Pools_Min_Create_Bond_Json;
}
