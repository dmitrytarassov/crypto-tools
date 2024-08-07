import { ApiPromise } from "@polkadot/api";

export type Nomination_Pools_Metadata_Json = string;

/*
 * Metadata for the pool.
 */
export async function metadata(
  apiPromise: ApiPromise,
  poolId: number
): Promise<Nomination_Pools_Metadata_Json> {
  const data = await apiPromise.query.nominationPools.metadata(poolId);

  return data.toHuman() as unknown as Nomination_Pools_Metadata_Json;
}

export type Nomination_Pools_Metadata_Entries = [number, string][];

metadata.entries = async function (
  apiPromise: ApiPromise
): Promise<Nomination_Pools_Metadata_Entries> {
  const data = await apiPromise.query.nominationPools.metadata.entries();

  const result: Nomination_Pools_Metadata_Entries = [];

  data.forEach(([poolId, data]) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    result.push([+poolId.toHuman()[0], data.toHuman()]);
  });

  return result;
};
