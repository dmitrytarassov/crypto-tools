import { ApiPromise } from "@polkadot/api";

export type Proxy_Proxies_Json = [
  {
    delegate: string;
    proxyType: "Any" | "NonTransfer" | "Governance" | "Staking";
    delay: number;
  }[],
  number
];

export async function proxies(
  apiPromise: ApiPromise,
  address: string
): Promise<Proxy_Proxies_Json> {
  const proxies = await apiPromise.query.proxy.proxies(address);

  return proxies as unknown as Proxy_Proxies_Json;
}
