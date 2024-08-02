import { ApiPromise } from "@polkadot/api";

export type Staking_Validators_Json = {
  commission: number;
  blocked: boolean;
};

export async function validators(
  apiPromise: ApiPromise,
  validatorAddress: string
): Promise<Staking_Validators_Json> {
  const result = await apiPromise.query.staking.validators(validatorAddress);

  return result.toJSON() as unknown as Staking_Validators_Json;
}
