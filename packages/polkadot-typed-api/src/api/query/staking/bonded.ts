import { ApiPromise } from "@polkadot/api";

export const bonded = async (
  api: ApiPromise,
  address: string
): Promise<string | null> => {
  const response = await api.query.staking.bonded(address);

  if (response && response.toString()) {
    return response.toString();
  }

  return null;
};
