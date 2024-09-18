import BigNumber from "bignumber.js";
import { BigNumber as EthersBigNumber } from "ethers";

export function toBigFloat(
  value: BigNumber.Value | EthersBigNumber
): BigNumber {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const _value: string = EthersBigNumber.isBigNumber(value)
    ? value.toString()
    : value;

  return new BigNumber(_value);
}
