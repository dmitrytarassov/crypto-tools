import { ApiPromise } from "@polkadot/api";

export type Staking_Account_Json = {
  nonce: number;
  consumers: number;
  providers: number;
  sufficients: number;
  data: {
    free: string;
    reserved: number;
    frozen: string;
    flags: string;
  };
};

export async function account(
  apiPromise: ApiPromise,
  address: string
): Promise<Staking_Account_Json | null> {
  const data = await apiPromise.query.system.account(address);

  return data.toJSON() as unknown as Staking_Account_Json | null;
}
