export function normalizeNetwork(network: string): string {
  const lowerCaseNetwork = network.toLowerCase();

  const networkMap: { [key: string]: string } = {
    eth: "ethereum",
    ethereum: "ethereum",
    arb: "arbitrum",
    arbitrum: "arbitrum",
    polygon: "polygon",
    matic: "polygon",
    bsc: "bsc",
    binance: "bsc",
    optimism: "optimism",
    opt: "optimism",
    fantom: "fantom",
    ftm: "fantom",
    avax: "avalanche",
    avalanche: "avalanche",
    sol: "solana",
    solana: "solana",
    tron: "tron",
    cosmos: "cosmos",
  };

  for (const key in networkMap) {
    if (lowerCaseNetwork.includes(key)) {
      return networkMap[key];
    }
  }

  throw new Error(`Unsupported network: ${network}`);
}
