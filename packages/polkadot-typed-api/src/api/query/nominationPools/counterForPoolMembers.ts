import { ApiPromise } from "@polkadot/api";

import { Nomination_Pools_Counter_For_Pool_Members_Json } from "../../../types/api/query/nominationPools";

/*
 *Counter for the related counted storage map
 */
export async function counterForPoolMembers(
  apiPromise: ApiPromise
): Promise<Nomination_Pools_Counter_For_Pool_Members_Json> {
  const data = await apiPromise.query.nominationPools.counterForPoolMembers();

  return data.toJSON() as any as Nomination_Pools_Counter_For_Pool_Members_Json;
}
