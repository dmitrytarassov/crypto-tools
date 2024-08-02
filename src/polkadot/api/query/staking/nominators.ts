import { ApiPromise } from "@polkadot/api";

export type Staking_Nominators_Json = {
  targets: string[];
  submittedIn: number;
  suppressed: boolean;
};

export async function nominators(
  apiPromise: ApiPromise,
  address: string
): Promise<Staking_Nominators_Json> {
  const result = await apiPromise.query.staking.nominators(address);

  return result.toJSON() as unknown as Staking_Nominators_Json;
}
