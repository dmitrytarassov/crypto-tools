import { ApiPromise } from "@polkadot/api";

/**
 * The current block number being processed. Set by `execute_block`.
 */
export async function number(apiPromise: ApiPromise): Promise<number | null> {
  const data = await apiPromise.query.system.number();

  const JsonData = data.toJSON();

  if (!JsonData) {
    return null;
  }

  return parseInt(`${JsonData}`, 10) as unknown as number;
}
