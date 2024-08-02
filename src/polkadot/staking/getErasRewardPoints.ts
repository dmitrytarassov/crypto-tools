import { ApiPromise } from "@polkadot/api";

import * as api from "../api";
import { Staking_Eras_Reward_Points_Json } from "../api/query/staking/erasRewardPoints";

export async function getErasRewardPoints(
  apiPromise: ApiPromise,
  era: number
): Promise<Staking_Eras_Reward_Points_Json> {
  return api.query.staking.erasRewardPoints(apiPromise, era);
}
