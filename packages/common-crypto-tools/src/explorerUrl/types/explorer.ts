export interface Explorer {
  tx: (txHash: string) => string;
  address: (address: string) => string;
  block: (blockNumber: string | number) => string;
}
