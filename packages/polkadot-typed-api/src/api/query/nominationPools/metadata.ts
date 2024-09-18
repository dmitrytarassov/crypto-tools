import { ApiPromise } from "@polkadot/api";

import {
  Nomination_Pools_Metadata_Json,
  Nomination_Pools_Metadata_Entries,
} from "../../../types/api/query/nominationPools";

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
