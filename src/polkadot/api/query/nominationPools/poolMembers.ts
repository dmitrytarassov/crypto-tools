import { ApiPromise } from "@polkadot/api";

import { Nomination_Pools_Reverse_Pool_Id_Lookup_Entries } from "./reversePoolIdLookup";

import { BrokenNumberType } from "../types/BrokenNumberType";

export type Nomination_Pools_Pool_Members_Json = {
  poolId: number;
  points: number;
  lastRecordedRewardCounter: BrokenNumberType;
  unbondingEras: Record<string, BrokenNumberType>;
} | null;

/*
 * Active members.
 */
export async function poolMembers(
  apiPromise: ApiPromise,
  address: string
): Promise<Nomination_Pools_Pool_Members_Json> {
  const data = await apiPromise.query.nominationPools.poolMembers(address);

  return data.toJSON() as any as Nomination_Pools_Pool_Members_Json;
}

export type Nomination_Pools_Pool_Members_Entries = [
  number,
  Nomination_Pools_Pool_Members_Json
][];

poolMembers.entries = async function (
  apiPromise: ApiPromise
): Promise<Nomination_Pools_Pool_Members_Entries> {
  const data = await apiPromise.query.nominationPools.poolMembers.entries();

  const result: Nomination_Pools_Pool_Members_Entries = [];

  data.forEach(([address, data]) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    result.push([+address.toHuman()[0], data.toJSON()]);
  });

  return result;
};
