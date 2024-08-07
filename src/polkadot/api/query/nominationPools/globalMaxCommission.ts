import { ApiPromise } from "@polkadot/api";

export type Nomination_Pools_Global_Max_Commission_Json = number;

/*
 * The maximum commission that can be charged by a pool. Used on commission payouts to bound
 */
export async function globalMaxCommission(
  apiPromise: ApiPromise
): Promise<Nomination_Pools_Global_Max_Commission_Json> {
  const data = await apiPromise.query.nominationPools.globalMaxCommission();

  return data.toJSON() as any as Nomination_Pools_Global_Max_Commission_Json;
}
