import { ApiPromise } from "@polkadot/api";

/**
 * The current time for the current block.
 */
export async function now(apiPromise: ApiPromise): Promise<number> {
  const now = await apiPromise.query.timestamp.now();

  return parseInt(now.toString(), 10);
}
