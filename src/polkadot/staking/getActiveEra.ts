import { ApiPromise } from "@polkadot/api";

export const getActiveEra = async (api: ApiPromise): Promise<number> => {
  const era = (await api.query.staking.activeEra()).toString();
  return parseInt(era, 10);
};
