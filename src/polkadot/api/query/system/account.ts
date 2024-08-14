import { ApiPromise } from "@polkadot/api";
import { System_Account_Json } from "@polkadot/types/api/query/system";

export async function account(
  apiPromise: ApiPromise,
  address: string
): Promise<System_Account_Json | null> {
  const data = await apiPromise.query.system.account(address);

  return data.toJSON() as unknown as System_Account_Json | null;
}