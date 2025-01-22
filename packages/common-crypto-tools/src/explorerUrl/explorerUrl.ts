import { explorers } from "./constants/explorers";
import { Config } from "./types/config";
import { Explorer } from "./types/explorer";
import { normalizeNetwork } from "./utils/normalizeNetwork";

export function explorerUrl(network: string, config: Config = {}): Explorer {
  const normalizedNetwork = normalizeNetwork(network);

  const baseUrl = config.base || explorers[normalizedNetwork];
  console.log(baseUrl);
  if (!baseUrl) {
    throw new Error(`Explorer not found for network: ${normalizedNetwork}`);
  }

  return {
    tx: (txHash: string) => `${baseUrl}/${config.tx || "tx"}/${txHash}`,
    address: (address: string) =>
      `${baseUrl}/${config.address || "address"}/${address}`,
    block: (blockNumber: string | number) =>
      `${baseUrl}/${config.block || "block"}/${blockNumber}`,
  };
}
