import { ApiPromise } from "@polkadot/api";

/**
 * Hash of the previous block.
 */
export async function parentHash(apiPromise: ApiPromise): Promise<string> {
  const data = await apiPromise.query.system.parentHash();

  return data.toJSON() as unknown as string;
}
