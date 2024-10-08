import { ApiPromise } from "@polkadot/api";

import { Nomination_Pools_Counter_For_Reverse_Pool_Id_Lookup_Json } from "../../../types/api/query/nominationPools";

/*
 *Counter for the related counted storage map
 */
export async function counterForReversePoolIdLookup(
  apiPromise: ApiPromise
): Promise<Nomination_Pools_Counter_For_Reverse_Pool_Id_Lookup_Json> {
  const data =
    await apiPromise.query.nominationPools.counterForReversePoolIdLookup();

  return data.toJSON() as any as Nomination_Pools_Counter_For_Reverse_Pool_Id_Lookup_Json;
}
