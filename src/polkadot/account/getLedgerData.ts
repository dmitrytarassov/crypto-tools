import { ApiPromise } from "@polkadot/api";

type Staking_Ledger_Json = {
  stash: string;
  total: number;
  active: number;
  unlocking: string[];
  legacyClaimedRewards: number[];
};

export async function getLedgerData(
  apiPromise: ApiPromise,
  address: string
): Promise<Staking_Ledger_Json | null> {
  const data = await apiPromise.query.staking.ledger(address);

  return data.toJSON() as unknown as Staking_Ledger_Json | null;
}
