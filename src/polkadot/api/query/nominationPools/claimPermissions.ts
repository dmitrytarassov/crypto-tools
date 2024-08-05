import { ApiPromise } from "@polkadot/api";

import { ClaimPermission } from "./types";

export type Nomination_Pools_Claim_Permission_Json = ClaimPermission;

export async function claimPermissions(
  apiPromise: ApiPromise,
  address: string
): Promise<Nomination_Pools_Claim_Permission_Json> {
  const data = await apiPromise.query.nominationPools.claimPermissions(address);

  return data.toJSON() as any as Nomination_Pools_Claim_Permission_Json;
}
