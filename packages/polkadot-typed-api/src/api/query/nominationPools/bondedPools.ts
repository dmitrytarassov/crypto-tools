import { ApiPromise } from "@polkadot/api";

import { Nomination_Pools_Bonded_Pools_Json } from "../../../types/api/query/nominationPools";
import { Nomination_Pools_Bonded_Pools_Entries } from "../../../types/api/query/nominationPools/bondedPools";

function modifyPoolData(poolData: Nomination_Pools_Bonded_Pools_Json | null) {
  if (poolData && typeof poolData.points === "string") {
    // BECAUSE POLKADOT!!!!! { ..., points: "5,394,169,567,929,903" } it's not OK!!!!!
    poolData.points = `${poolData.points}`.replaceAll(",", "");
  }

  return poolData;
}

/*
 * Storage for bonded pools.
 */
export async function bondedPools(
  apiPromise: ApiPromise,
  poolId: number
): Promise<Nomination_Pools_Bonded_Pools_Json | null> {
  const data = await apiPromise.query.nominationPools.bondedPools(poolId);

  const poolData =
    data.toJSON() as any as Nomination_Pools_Bonded_Pools_Json | null;

  return modifyPoolData(poolData);
}

bondedPools.entries = async function (
  apiPromise: ApiPromise
): Promise<Nomination_Pools_Bonded_Pools_Entries> {
  const data = await apiPromise.query.nominationPools.bondedPools.entries();

  const result: Nomination_Pools_Bonded_Pools_Entries = [];

  data.forEach(([poolId, data]) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    result.push([+poolId.toHuman()[0], modifyPoolData(data.toJSON())]);
  });

  return result;
};
