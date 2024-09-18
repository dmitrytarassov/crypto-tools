import { ApiPromise } from "@polkadot/api";
import { Staking_Active_Era_Json } from "../../../types/api/query/staking";

export const activeEra = async (
  api: ApiPromise
): Promise<Staking_Active_Era_Json> => {
  const era = (await api.query.staking.activeEra()).toJSON();
  return era as unknown as Staking_Active_Era_Json;
};
