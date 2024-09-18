import { ApiPromise } from "@polkadot/api";

import { Staking_Ledger_Json } from "../../../types/api/query/staking";

export async function ledger(
  apiPromise: ApiPromise,
  address: string
): Promise<Staking_Ledger_Json | null> {
  const data = await apiPromise.query.staking.ledger(address);

  return data.toJSON() as unknown as Staking_Ledger_Json | null;
}
