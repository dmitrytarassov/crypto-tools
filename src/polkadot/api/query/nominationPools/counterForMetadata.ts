import { ApiPromise } from "@polkadot/api";

export type Nomination_Pools_Counter_For_Metadata_Json = number;

export async function counterForMetadata(
  apiPromise: ApiPromise
): Promise<Nomination_Pools_Counter_For_Metadata_Json> {
  const data = await apiPromise.query.nominationPools.counterForMetadata();

  return data.toJSON() as any as Nomination_Pools_Counter_For_Metadata_Json;
}
