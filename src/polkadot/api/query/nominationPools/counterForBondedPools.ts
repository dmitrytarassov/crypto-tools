import { ApiPromise } from "@polkadot/api";
import { Nomination_Pools_Counter_For_Bonded_Pools_Json } from "@polkadot/types/api/query/nominationPools";

/*
 *Counter for the related counted storage map
 */
export async function counterForBondedPools(
  apiPromise: ApiPromise
): Promise<Nomination_Pools_Counter_For_Bonded_Pools_Json> {
  const data = await apiPromise.query.nominationPools.counterForBondedPools();

  return data.toJSON() as any as Nomination_Pools_Counter_For_Bonded_Pools_Json;
}
