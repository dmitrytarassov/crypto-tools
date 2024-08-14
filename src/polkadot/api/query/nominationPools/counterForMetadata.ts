import { ApiPromise } from "@polkadot/api";
import { Nomination_Pools_Counter_For_Metadata_Json } from "@polkadot/types/api/query/nominationPools";

/*
 *Counter for the related counted storage map
 */
export async function counterForMetadata(
  apiPromise: ApiPromise
): Promise<Nomination_Pools_Counter_For_Metadata_Json> {
  const data = await apiPromise.query.nominationPools.counterForMetadata();

  return data.toJSON() as any as Nomination_Pools_Counter_For_Metadata_Json;
}
