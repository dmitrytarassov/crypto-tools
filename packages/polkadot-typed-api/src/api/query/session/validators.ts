import { ApiPromise } from "@polkadot/api";

export async function validators(apiPromise: ApiPromise): Promise<string[]> {
  const data = await apiPromise.query.session.validators();

  return data.toJSON() as unknown as string[];
}
