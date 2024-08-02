import { ApiPromise } from "@polkadot/api";

import * as api from "../api";
import { Staking_Active_Era_Json } from "../api/query/staking/activeEra";

export const getActiveEra = async (
  apiPromise: ApiPromise
): Promise<Staking_Active_Era_Json> => {
  return api.query.staking.activeEra(apiPromise);
};
