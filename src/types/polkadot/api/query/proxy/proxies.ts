export type Proxy_Proxies_Json = [
  {
    delegate: string;
    proxyType: "Any" | "NonTransfer" | "Governance" | "Staking";
    delay: number;
  }[],
  number
];
