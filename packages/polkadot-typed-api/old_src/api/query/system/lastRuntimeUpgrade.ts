import { ApiPromise } from "@polkadot/api";

import { System_Last_Runtime_Upgrade_Json } from "../../../types/api/query/system";

/**
 * Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
 */
export async function lastRuntimeUpgrade(
  apiPromise: ApiPromise
): Promise<System_Last_Runtime_Upgrade_Json> {
  const data = await apiPromise.query.system.lastRuntimeUpgrade();

  return data.toJSON() as unknown as System_Last_Runtime_Upgrade_Json;
}
