import { ApiPromise } from "@polkadot/api";

import { Staking_Eras_Stakers_Overview_Json } from "../../../types/api/query/staking/erasStakersOverview";

export async function erasStakersOverview(
  apiPromise: ApiPromise,
  era: number,
  validator: string
): Promise<Staking_Eras_Stakers_Overview_Json> {
  const overview = await apiPromise.query.staking.erasStakersOverview(
    era,
    validator
  );
  return overview.toJSON() as unknown as Staking_Eras_Stakers_Overview_Json;
}
