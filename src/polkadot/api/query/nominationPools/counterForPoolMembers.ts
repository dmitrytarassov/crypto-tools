import { ApiPromise } from "@polkadot/api";

export type Nomination_Pools_Counter_For_Pool_Members_Json = number;

export async function counterForPoolMembers(
  apiPromise: ApiPromise
): Promise<Nomination_Pools_Counter_For_Pool_Members_Json> {
  const data = await apiPromise.query.nominationPools.counterForPoolMembers();

  return data.toJSON() as any as Nomination_Pools_Counter_For_Pool_Members_Json;
}
