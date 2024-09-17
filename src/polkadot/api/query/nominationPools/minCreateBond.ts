import { ApiPromise } from "@polkadot/api";
import { Nomination_Pools_Min_Create_Bond_Json } from "@polkadotTypes/api/query/nominationPools";

/*
 * Minimum bond required to create a pool.
 */
export async function minCreateBond(
  apiPromise: ApiPromise
): Promise<Nomination_Pools_Min_Create_Bond_Json> {
  const data = await apiPromise.query.nominationPools.minCreateBond();

  return data.toJSON() as any as Nomination_Pools_Min_Create_Bond_Json;
}
