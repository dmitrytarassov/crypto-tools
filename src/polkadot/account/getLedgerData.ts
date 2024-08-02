import { ApiPromise } from "@polkadot/api";

import * as api from "../api";
import { Staking_Ledger_Json } from "../api/query/staking/ledger";

export async function getLedgerData(
  apiPromise: ApiPromise,
  address: string
): Promise<Staking_Ledger_Json | null> {
  return api.query.staking.ledger(apiPromise, address);
}
