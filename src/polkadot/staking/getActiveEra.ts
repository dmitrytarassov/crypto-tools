import { ApiPromise } from "@polkadot/api";
import { Staking_Active_Era_Json } from "@polkadot/types/api/query/staking";

import * as api from "../api";

export const getActiveEra = async (
  apiPromise: ApiPromise
): Promise<Staking_Active_Era_Json> => {
  return api.query.staking.activeEra(apiPromise);
};
