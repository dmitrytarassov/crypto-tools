import { ApiPromise } from "@polkadot/api";
import { Staking_Validators_Json } from "@polkadotTypes/api/query/staking";

export async function validators(
  apiPromise: ApiPromise,
  validatorAddress: string
): Promise<Staking_Validators_Json> {
  const result = await apiPromise.query.staking.validators(validatorAddress);

  return result.toJSON() as unknown as Staking_Validators_Json;
}
