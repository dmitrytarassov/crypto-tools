import { ApiPromise } from "@polkadot/api";

type LedgerResult = {
  stash: string;
  total: string;
  active: string;
  unlocking: string[];
  claimedRewards: number[];
};

export async function getLedgerBalance(
  apiPromise: ApiPromise,
  address: string
) {
  const data = await apiPromise.query.staking.ledger(address);
  const jsonData = data.toJSON() as unknown as LedgerResult | null;

  return jsonData;
}
