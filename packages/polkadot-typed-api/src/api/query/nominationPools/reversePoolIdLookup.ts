import { ApiPromise } from "@polkadot/api";
import {
  Nomination_Pools_Reverse_Pool_Id_Lookup_Json,
  Nomination_Pools_Reverse_Pool_Id_Lookup_Entries,
} from "../../../types/api/query/nominationPools";

/*
 * A reverse lookup from the pool's account id to its id.
 */
export async function reversePoolIdLookup(
  apiPromise: ApiPromise,
  address: string
): Promise<Nomination_Pools_Reverse_Pool_Id_Lookup_Json> {
  const data = await apiPromise.query.nominationPools.reversePoolIdLookup(
    address
  );

  return data.toJSON() as any as Nomination_Pools_Reverse_Pool_Id_Lookup_Json;
}

reversePoolIdLookup.entries = async function (
  apiPromise: ApiPromise
): Promise<Nomination_Pools_Reverse_Pool_Id_Lookup_Entries> {
  const data =
    await apiPromise.query.nominationPools.reversePoolIdLookup.entries();

  const result: Nomination_Pools_Reverse_Pool_Id_Lookup_Entries = [];

  data.forEach(([address, poolId]) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    result.push([address.toHuman()[0], +poolId.toJSON()]);
  });

  return result;
};
