import { ApiPromise } from "@polkadot/api";
import {
  Nomination_Pools_Reward_Pools_Json,
  Nomination_Pools_Reward_Pools_Entries,
} from "@polkadotTypes/api/query/nominationPools";

/*
 * Reward pools. This is where there rewards for each pool accumulate. When a members payout is
 */
export async function rewardPools(
  apiPromise: ApiPromise,
  poolId: number
): Promise<Nomination_Pools_Reward_Pools_Json> {
  const data = await apiPromise.query.nominationPools.rewardPools(poolId);

  return data.toJSON() as any as Nomination_Pools_Reward_Pools_Json;
}

rewardPools.entries = async function (
  apiPromise: ApiPromise
): Promise<Nomination_Pools_Reward_Pools_Entries> {
  const data = await apiPromise.query.nominationPools.rewardPools.entries();

  const result: Nomination_Pools_Reward_Pools_Entries = [];

  data.forEach(([pool, value]) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    result.push([+pool.toHuman()[0], value.toJSON()]);
  });

  return result;
};
