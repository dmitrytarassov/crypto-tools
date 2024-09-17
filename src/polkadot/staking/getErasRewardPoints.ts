import { ApiPromise } from "@polkadot/api";
import { Staking_Eras_Reward_Points_Json } from "@polkadotTypes/api/query/staking";

import * as api from "../api";

export async function getErasRewardPoints(
  apiPromise: ApiPromise,
  era: number
): Promise<Staking_Eras_Reward_Points_Json> {
  return api.query.staking.erasRewardPoints(apiPromise, era);
}
