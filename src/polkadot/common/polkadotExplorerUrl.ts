import { Hash } from "@polkadot/types/interfaces";

type LinkType =
  | "account"
  | "address"
  | "a"
  | "extrinsic"
  | "transaction"
  | "t"
  | "validator"
  | "v";

const linkType: {
  [key in LinkType]: string;
} = {
  account: "account",
  address: "account",
  a: "account",
  extrinsic: "extrinsic",
  transaction: "extrinsic",
  t: "extrinsic",
  validator: "validator",
  v: "validator",
};

export function polkadotExplorerUrl(
  networkName: string,
  domain = "subscan.io"
) {
  return function (type: LinkType, addressOrHash: string | Hash): string {
    const value =
      typeof addressOrHash === "string"
        ? addressOrHash
        : addressOrHash.toHuman();

    return `https://${networkName.toLowerCase()}.${domain}/${
      linkType[type]
    }/${value}`;
  };
}
