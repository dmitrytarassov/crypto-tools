import { ApiPromise } from "@polkadot/api";

export type Nomination_Pools_Counter_For_Reward_Pools_Json = number;

/*
 *Counter for the related counted storage map
 */
export async function counterForRewardPools(
  apiPromise: ApiPromise
): Promise<Nomination_Pools_Counter_For_Reward_Pools_Json> {
  const data = await apiPromise.query.nominationPools.counterForRewardPools();

  return data.toJSON() as any as Nomination_Pools_Counter_For_Reward_Pools_Json;
}
