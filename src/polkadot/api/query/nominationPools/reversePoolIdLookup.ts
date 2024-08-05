import { ApiPromise } from "@polkadot/api";

export type Nomination_Pools_Reverse_Pool_Id_Lookup_Json = number | null; // always null

export async function reversePoolIdLookup(
  apiPromise: ApiPromise,
  address: string
): Promise<Nomination_Pools_Reverse_Pool_Id_Lookup_Json> {
  const data = await apiPromise.query.nominationPools.reversePoolIdLookup(
    address
  );

  return data.toJSON() as any as Nomination_Pools_Reverse_Pool_Id_Lookup_Json;
}
