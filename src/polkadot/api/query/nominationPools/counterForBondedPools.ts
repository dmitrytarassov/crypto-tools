import { ApiPromise } from "@polkadot/api";

export type Nomination_Pools_Counter_For_Bonded_Pools_Json = number;

export async function counterForBondedPools(
  apiPromise: ApiPromise
): Promise<Nomination_Pools_Counter_For_Bonded_Pools_Json> {
  const data = await apiPromise.query.nominationPools.counterForBondedPools();

  return data.toJSON() as any as Nomination_Pools_Counter_For_Bonded_Pools_Json;
}
