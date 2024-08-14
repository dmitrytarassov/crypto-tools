import { ApiPromise } from "@polkadot/api";
import { System_Account_Json } from "@polkadot/types/api/query/system";

import * as api from "../api";

/**
 * @deprecated The method should not be used
 */
export async function getAccountData(
  apiPromise: ApiPromise,
  address: string
): Promise<System_Account_Json | null> {
  return api.query.system.account(apiPromise, address);
}
