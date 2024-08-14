import { ApiPromise } from "@polkadot/api";
import { Staking_Eras_Reward_Points_Json } from "@polkadot/types/api/query/staking";

export async function erasRewardPoints(
  apiPromise: ApiPromise,
  era: number
): Promise<Staking_Eras_Reward_Points_Json> {
  if (era < 0) {
    throw new Error(`Provided Era: ${era} is less than zero`);
  }

  const points = await apiPromise.query.staking.erasRewardPoints(era);
  return points.toJSON() as unknown as Staking_Eras_Reward_Points_Json;
}
