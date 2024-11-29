import { ApiPromise } from "@polkadot/api";

/**
 * The number of events in the `Events<T>` list.
 */
/**
 * The number of events in the `Events&lt;T&gt;` list.
 */
export async function eventCount(apiPromise: ApiPromise): Promise<number> {
  const data = await apiPromise.query.system.eventCount();

  const JsonData = data.toJSON();

  return parseInt(`${JsonData}`, 10) as unknown as number;
}
