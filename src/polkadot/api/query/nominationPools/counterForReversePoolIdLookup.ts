import { ApiPromise } from "@polkadot/api";

export type Nomination_Pools_Counter_For_Reverse_Pool_Id_Lookup_Json = number;

export async function counterForReversePoolIdLookup(
  apiPromise: ApiPromise
): Promise<Nomination_Pools_Counter_For_Reverse_Pool_Id_Lookup_Json> {
  const data =
    await apiPromise.query.nominationPools.counterForReversePoolIdLookup();

  return data.toJSON() as any as Nomination_Pools_Counter_For_Reverse_Pool_Id_Lookup_Json;
}
