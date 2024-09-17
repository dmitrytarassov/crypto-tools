import { ApiPromise } from "@polkadot/api";
import { System_Execution_Phase_Json } from "@polkadotTypes/api/query/system";

/**
 * @deprecated Always returns null
 * The execution phase of the block.
 */
export async function executionPhase(
  apiPromise: ApiPromise
): Promise<System_Execution_Phase_Json> {
  const data = await apiPromise.query.system.executionPhase();

  return data.toJSON() as unknown as System_Execution_Phase_Json;
}
