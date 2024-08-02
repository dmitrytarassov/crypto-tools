import { ApiPromise } from "@polkadot/api";

export async function palletVersion(apiPromise: ApiPromise): Promise<number> {
  return (
    await apiPromise.query.staking.palletVersion()
  ).toJSON() as unknown as number;
}
