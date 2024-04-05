import { ApiPromise } from "@polkadot/api";
import { isAddress } from "@polkadot/util-crypto";

export const getController = async (
  api: ApiPromise,
  address: string
): Promise<string | null> => {
  if (!isAddress(address)) {
    throw new Error(`${address} is not an address`);
  }

  const response = await api.query.staking.bonded(address);
  if (response && response.toString()) {
    return response.toString();
  }

  return null;
};
