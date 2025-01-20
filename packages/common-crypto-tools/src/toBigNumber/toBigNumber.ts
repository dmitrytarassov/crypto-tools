import { BigNumber, BigNumberish } from "ethers";

export function toBigNumber(value: BigNumberish): BigNumber {
  return BigNumber.from(value);
}
