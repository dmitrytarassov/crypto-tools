import { ApiPromise } from "@polkadot/api";
import { Staking_Ledger_Json } from "@polkadotTypes/api/query/staking";

import * as api from "../api";

/**
 * @deprecated The method should not be used
 */
export async function getLedgerData(
  apiPromise: ApiPromise,
  address: string
): Promise<Staking_Ledger_Json | null> {
  return api.query.staking.ledger(apiPromise, address);
}
