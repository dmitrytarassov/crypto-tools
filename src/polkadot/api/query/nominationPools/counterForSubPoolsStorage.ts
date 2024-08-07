import { ApiPromise } from "@polkadot/api";

export type Nomination_Pools_Counter_For_Sub_Pools_Storage_Json = number;

/*
 *Counter for the related counted storage map
 */
export async function counterForSubPoolsStorage(
  apiPromise: ApiPromise
): Promise<Nomination_Pools_Counter_For_Sub_Pools_Storage_Json> {
  const data =
    await apiPromise.query.nominationPools.counterForSubPoolsStorage();

  return data.toJSON() as any as Nomination_Pools_Counter_For_Sub_Pools_Storage_Json;
}
