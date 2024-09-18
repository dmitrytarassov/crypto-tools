import { ApiPromise, WsProvider } from "@polkadot/api";
import { configDotenv } from "dotenv";

import process from "process";

configDotenv();

type NetworkName = "polkadot" | "kusama";

const rpcs: {
  [name in NetworkName]: string;
} = {
  polkadot: process.env.RPC_URL_POLKADOT!,
  kusama: process.env.RPC_URL_KUSAMA!,
};
export async function getConnection(
  networkName: NetworkName
): Promise<ApiPromise> {
  return await ApiPromise.create({
    provider: new WsProvider(rpcs[networkName]),
  });
}
