import { ApiPromise } from "@polkadot/api";

import { BrokenNumberType } from "../types/BrokenNumberType";

export type Nomination_Pools_Pool_Members_Json = {
  poolId: number;
  points: number;
  lastRecordedRewardCounter: BrokenNumberType;
  unbondingEras: Record<string, BrokenNumberType>;
} | null;

export async function poolMembers(
  apiPromise: ApiPromise,
  address: string
): Promise<Nomination_Pools_Pool_Members_Json> {
  const data = await apiPromise.query.nominationPools.poolMembers(address);

  return data.toJSON() as any as Nomination_Pools_Pool_Members_Json;
}
