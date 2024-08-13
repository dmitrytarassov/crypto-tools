import { ApiPromise } from "@polkadot/api";

import * as api from "../api";
import { System_Account_Json } from "../api/query/system/account";

export async function getAccountData(
  apiPromise: ApiPromise,
  address: string
): Promise<System_Account_Json | null> {
  return api.query.system.account(apiPromise, address);
}
