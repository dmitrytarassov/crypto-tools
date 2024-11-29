import { ApiPromise } from "@polkadot/api";

/**
 * Retrieve authority identifiers of the current and next authority set.
 */
export async function authorities(apiPromise: ApiPromise): Promise<string[]> {
  const data = await apiPromise.call.authorityDiscoveryApi.authorities();

  return data.toJSON() as any as string[];
}
