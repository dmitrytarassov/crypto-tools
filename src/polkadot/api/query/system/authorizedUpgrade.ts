import { ApiPromise } from "@polkadot/api";

/**
 * @deprecated Always returns null
 * `Some` if a code upgrade has been authorized.
 */
export async function authorizedUpgrade(
  apiPromise: ApiPromise
): Promise<boolean | null> {
  const data = await apiPromise.query.system.authorizedUpgrade();

  const JsonData = data.toJSON();

  if (!JsonData) {
    return null;
  }

  return JsonData as unknown as boolean;
}
