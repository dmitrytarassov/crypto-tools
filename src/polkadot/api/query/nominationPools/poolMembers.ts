import { ApiPromise } from "@polkadot/api";
import { Nomination_Pools_Pool_Members_Json } from "@polkadot/types/api/query/nominationPools";
import { Nomination_Pools_Pool_Members_Entries } from "@polkadot/types/api/query/nominationPools/poolMembers";
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
