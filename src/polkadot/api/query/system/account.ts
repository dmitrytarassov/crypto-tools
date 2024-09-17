import { ApiPromise } from "@polkadot/api";
import { System_Account_Json } from "@polkadotTypes/api/query/system";

/*
 * The full account information for a particular account ID.
 */
export async function account(
  apiPromise: ApiPromise,
  address: string
): Promise<System_Account_Json | null> {
  const data = await apiPromise.query.system.account(address);

  return data.toJSON() as unknown as System_Account_Json | null;
}
