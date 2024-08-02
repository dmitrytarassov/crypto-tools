import { ApiPromise } from "@polkadot/api";

export async function palletVersion(apiPromise: ApiPromise): Promise<number> {
  return (
    await apiPromise.query.proxy.palletVersion()
  ).toJSON() as unknown as number;
}
