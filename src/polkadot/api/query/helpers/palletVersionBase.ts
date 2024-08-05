import { ApiPromise } from "@polkadot/api";

export function palletVersionBase(palletName: string) {
  return async function (apiPromise: ApiPromise) {
    return (
      await apiPromise.query[palletName].palletVersion()
    ).toJSON() as unknown as number;
  };
}
