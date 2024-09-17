import { ApiPromise } from "@polkadot/api";

export async function validatorCount(apiPromise: ApiPromise): Promise<number> {
  const result = await apiPromise.query.staking.validatorCount();

  return result.toJSON() as unknown as number;
}
