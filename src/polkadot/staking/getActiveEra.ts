import { ApiPromise } from "@polkadot/api";

type GetActiveEraResult = {
  index: number;
  start: number;
};

export const getActiveEra = async (
  api: ApiPromise
): Promise<GetActiveEraResult> => {
  const era = (await api.query.staking.activeEra()).toJSON();
  return era as unknown as GetActiveEraResult;
};
