import { ApiPromise } from "@polkadot/api";

import { System_Digest_Json } from "../../../types/api/query/system/digest";

/**
 * Digest of the current block, also part of the block header.
 */
export async function digest(
  apiPromise: ApiPromise
): Promise<System_Digest_Json> {
  const data = await apiPromise.query.system.digest();

  return data.toJSON() as unknown as System_Digest_Json;
}
