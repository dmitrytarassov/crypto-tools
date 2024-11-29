export function generateQueryMethod(
  name: string,
  argumentsTypes: {
    name: string;
    type: string;
  }[],
  returnType: string
): string {
  return `${name}(${argumentsTypes.map(
    (arg) => `${arg.name}: ${arg.type}`
  )}): Promise<${returnType}>`;
}
