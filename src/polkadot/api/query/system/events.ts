import { ApiPromise } from "@polkadot/api";
import { System_Events_Json } from "@polkadotTypes/api/query/system/events";

/**
 * Events deposited for the current block.
 */
export async function events(
  apiPromise: ApiPromise
): Promise<System_Events_Json> {
  const data = await apiPromise.query.system.events();

  return data.toJSON() as unknown as System_Events_Json;
}
