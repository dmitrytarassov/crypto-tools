// import { generateTypes, generateTypesFromEndpoint } from '@dedot/codegen';
// import { $Metadata, Metadata, PortableRegistry, RuntimeVersion } from 'dedot/codecs';
// import { ConstantExecutor, DedotClient, SubstrateRuntimeVersion } from 'dedot';
import { ApiPromise, WsProvider } from "@polkadot/api";

import * as net from "net";
import process from "process";

import { getTypeDef } from "./getTypeDef";
import { networks } from "./networks";
import { parsePallet } from "./parsePallet";

async function run() {
  for (const network of networks) {
    const connection = await ApiPromise.create({
      provider: new WsProvider(network.endpoint),
    });
    const { runtimeMetadata, registry } = connection; // Добавляем registry для работы с типами
    const { asLatest } = runtimeMetadata;
    const { pallets } = asLatest;

    for (const pallet of pallets) {
      parsePallet(pallet, registry);
      // const { name, storage } = pallet;
      // const palletName = name.toString();
      // console.log(`Pallet: ${palletName}`);
      //
      // if (storage.isSome) {
      //   const { items } = storage.unwrap();
      //
      //   console.log(`Query methods for ${palletName}:`);
      //
      //   for (const item of items) {
      //     const methodName = item.name.toString();
      //     const methodType = item.type;
      //     const methodTypeName = methodType.isMap ? "Map" : "Plain";
      //
      //     let keyType = null;
      //     let valueType = null;
      //
      //     if (methodType.isMap) {
      //       keyType =
      //         methodType.asMap.hashers.length === 1
      //           ? methodType.asMap.key
      //           : "MultiKey";
      //       valueType = methodType.asMap.value;
      //     } else {
      //       valueType = methodType.asPlain;
      //     }
      //
      //     const keyTypeStr = keyType
      //       ? registry.lookup.getTypeDef(+keyType.toString()).type
      //       : null;
      //     const valueTypeStr = registry.lookup.getTypeDef(
      //       +valueType.toString()
      //     ).type;
      //     const returnType = getTypeDef(connection, valueType.toString());
      //
      //     console.log(`  - ${methodName} (${methodTypeName})`);
      //     if (keyTypeStr) {
      //       console.log(`    Key type: ${keyTypeStr}`);
      //     }
      //     console.log(returnType);
      //   }
      // } else {
      //   console.log(`No query methods for ${palletName}`);
      // }
    }
  }

  console.log("DONE!");
}

run()
  .catch((e) => {
    console.log("error");
    console.log(e);
  })
  .finally(() => process.exit(0));
