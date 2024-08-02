import { ApiPromise } from "@polkadot/api";

export type Staking_Active_Era_Json = {
  index: number;
  start: number;
};

export const activeEra = async (
  api: ApiPromise
): Promise<Staking_Active_Era_Json> => {
  const era = (await api.query.staking.activeEra()).toJSON();
  return era as unknown as Staking_Active_Era_Json;
};
