import { ApiPromise } from "@polkadot/api";
import { Registry } from "@polkadot/types/types";

type RegistryType = {
  [field: string]: string | RegistryType;
};

export type _RegistryType = {
  name: string;
  type: string;
};

export function getTypeDef(
  typeId: string,
  registry: Registry
): _RegistryType[] {
  const result: _RegistryType[] = [];

  const _type = registry.lookup.getTypeDef(+typeId);

  if (_type.sub) {
    if (Array.isArray(_type.sub)) {
      _type.sub.forEach((sub, index) => {
        const subName = sub.name;
        const subType = sub.type;

        result.push({
          name: subName || `arg${index}`,
          type: subType,
        });
      });
    } else {
      // console.log(_type.index);
      result.push({
        name: _type.name || "arg",
        type: _type.index + _type.type,
      });
    }
  }

  // console.log(registry.lookup.getTypeDef(+typeId));

  // const def = registry.lookup.getSiType(+typeId).def;
  //
  // if (def && !def.isPrimitive && def.isComposite) {
  //   const structInfo = def.asComposite.fields;
  //
  //   if (structInfo) {
  //     const fields: RegistryType = {};
  //     for (const field of structInfo) {
  //       const fieldType = getTypeDef(field.type.toString(), registry);
  //       const fieldName = field.name.unwrapOr("unknown");
  //       fields[`${fieldName}`] = fieldType;
  //     }
  //     result[typeString] = fields;
  //   }
  // } else {
  //   result[typeString] = def.type;
  // }

  return result;
}
