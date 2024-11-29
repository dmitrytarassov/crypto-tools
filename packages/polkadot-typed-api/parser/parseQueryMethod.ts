import { StorageEntryMetadataV14 } from "@polkadot/types/interfaces/metadata/types";
import { Registry } from "@polkadot/types/types";

import { _RegistryType, getTypeDef } from "./getTypeDef";

export function parseQueryMethod(
  method: StorageEntryMetadataV14,
  registry: Registry
) {
  const methodName = method.name.toString();
  const methodType = method.type;
  const methodTypeName = methodType.type;

  console.log(`\t\t${methodName} - ${methodTypeName} - ${methodType}`);

  let argumentsTypes: _RegistryType[] = [];
  let returnType: _RegistryType[] = [];

  // console.log(method.docs.join("\n"));
  // console.log(getTypeDef(methodType.asMap.key.toString(), registry));
  // console.log(getTypeDef(methodType.asMap.value.toString(), registry));

  if (methodType.isMap) {
    argumentsTypes = getTypeDef(methodType.asMap.key.toString(), registry);
    returnType = getTypeDef(methodType.asMap.value.toString(), registry);
  } else {
    // console.log("?", methodType.asPlain.toString());
    returnType = getTypeDef(methodType.asPlain.toString(), registry);
    // returnType = methodType.asPlain;
  }

  console.log(
    `\t\t\tArguments: ${argumentsTypes.map((e) => e.type).join(", ")}`
  );

  console.log(
    `\t\t\tReturn: {${returnType
      .map((e) => `${e.name}: ${e.type}`)
      .join(", ")}}`
  );

  // console.log(
  //   "\t\t\targumentsType ",
  //   argumentsType ? argumentsType.toString() : null
  // );

  // const argumentsTypeString = argumentsType
  //   ? registry.lookup.getTypeDef(+argumentsType.toString()).type
  //   : null;

  // console.log("\t\t\targumentsTypeString ", argumentsTypeString);

  // const keyType = null;
}
