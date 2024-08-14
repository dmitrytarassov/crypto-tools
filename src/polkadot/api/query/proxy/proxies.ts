import { ApiPromise } from "@polkadot/api";
import { Proxy_Proxies_Json } from "@polkadot/types/api/query/proxy";

export async function proxies(
  apiPromise: ApiPromise,
  address: string
): Promise<Proxy_Proxies_Json> {
  const proxies = await apiPromise.query.proxy.proxies(address);

  return proxies as unknown as Proxy_Proxies_Json;
}
