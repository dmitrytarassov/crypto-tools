import { ApiPromise } from "@polkadot/api";

import {
  ClaimPermission,
  Nomination_Pools_Claim_Permission_Json,
} from "../../../types/api/query/nominationPools";

/*
 * Map from a pool member account to their opted claim permission.
 */
export async function claimPermissions(
  apiPromise: ApiPromise,
  address: string
): Promise<Nomination_Pools_Claim_Permission_Json> {
  const data = await apiPromise.query.nominationPools.claimPermissions(address);

  return data.toJSON() as any as Nomination_Pools_Claim_Permission_Json;
}

export type Nomination_Pools_Claim_Permission_Entries = [
  string,
  ClaimPermission
][];

claimPermissions.entries = async function (
  apiPromise: ApiPromise
): Promise<Nomination_Pools_Claim_Permission_Entries> {
  const data =
    await apiPromise.query.nominationPools.claimPermissions.entries();

  const result: Nomination_Pools_Claim_Permission_Entries = [];

  data.forEach(([address, data]) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    result.push([address.toHuman()[0], data.toJSON()]);
  });

  return result;
};
