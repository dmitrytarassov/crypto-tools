import { ApiPromise } from "@polkadot/api";

import { System_Block_Weight_Json } from "../../../types/api/query/system";

/**
 * The current weight for the block.
 */
export async function blockWeight(
  apiPromise: ApiPromise
): Promise<System_Block_Weight_Json> {
  const data = await apiPromise.query.system.blockWeight();

  return data.toJSON() as unknown as System_Block_Weight_Json;
}
