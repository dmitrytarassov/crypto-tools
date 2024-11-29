import {
  MetadataLatest,
  PalletMetadataV15,
} from "@polkadot/types/interfaces/metadata/types";
import { Registry } from "@polkadot/types/types";

import { parseQueryMethod } from "./parseQueryMethod";

export function parsePallet(pallet: PalletMetadataV15, registry: Registry) {
  const { name, storage } = pallet;
  // const palletName = name.toString();
  console.log(`parsing pallet ${name}`);

  if (storage.isSome) {
    console.log(`\t- query`);
    const { items } = storage.unwrap();
    for (const item of items) {
      parseQueryMethod(item, registry);
    }
  } else {
    console.log(`\t- no query`);
  }
}
