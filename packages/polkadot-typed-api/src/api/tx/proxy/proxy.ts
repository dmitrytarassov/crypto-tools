import { ApiPromise } from "@polkadot/api";
import { SubmittableExtrinsic } from "@polkadot/api/promise/types";
import { PolkadotRuntimeProxyType } from "packages/polkadot-typed-api/src/types/api/tx/proxy";

/*
 * This function allows an account (proxy) to make a call on behalf of another account (real).
 * It requires the `real` account to have authorized the sender as a proxy with a specific type.
 *
 * @param {ApiPromise} apiPromise - The instance of the Polkadot API used to interact with the blockchain.
 * @param {string} real - The account that the proxy will make a call on behalf of.
 * @param {PolkadotRuntimeProxyType | null} force_proxy_type - The exact proxy type to be used and validated for this call.
 *                                        If null, the default proxy type is used.
 * @param {SubmittableExtrinsic} call - The call to be made by the real account via the proxy.
 *
 * @returns {Promise<SubmittableExtrinsic>} A promise that resolves to a SubmittableExtrinsic object representing the transaction
 * that can be signed and sent to the blockchain.
 *
 * @summary Dispatches a call on behalf of a real account through a proxy with the specified proxy type.
 */
export async function proxy(
  apiPromise: ApiPromise,
  real: string,
  force_proxy_type: PolkadotRuntimeProxyType | null,
  call: SubmittableExtrinsic
): Promise<SubmittableExtrinsic> {
  return apiPromise.tx.proxy.proxy(real, force_proxy_type, call);
}
