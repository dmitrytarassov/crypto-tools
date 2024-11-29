import { ApiPromise } from "@polkadot/api";

import { Staking_Nominators_Json } from "../../../types/api/query/staking";

export async function nominators(
  apiPromise: ApiPromise,
  address: string
): Promise<Staking_Nominators_Json> {
  const result = await apiPromise.query.staking.nominators(address);

  return result.toJSON() as unknown as Staking_Nominators_Json;
}
