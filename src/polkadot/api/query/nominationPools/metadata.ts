import { ApiPromise } from "@polkadot/api";

export type Nomination_Pools_Metadata_Json = string;

export async function metadata(
  apiPromise: ApiPromise,
  poolId: number
): Promise<Nomination_Pools_Metadata_Json> {
  const data = await apiPromise.query.nominationPools.metadata(poolId);

  return data.toJSON() as any as Nomination_Pools_Metadata_Json;
}
