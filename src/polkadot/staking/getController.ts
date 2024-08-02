import { ApiPromise } from "@polkadot/api";

import * as api from "../api";

export const getController = async (
  apiPromise: ApiPromise,
  address: string
): Promise<string | null> => {
  return api.query.staking.bonded(apiPromise, address);
};
