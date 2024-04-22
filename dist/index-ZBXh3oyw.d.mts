import { BigNumberish, BigNumber } from 'ethers';

declare function toBigNumber(value: BigNumberish): BigNumber;

type Size = {
    start: number;
    end: number;
    include0x?: boolean;
};
type Options = {
    size: number | [number, number] | Size;
    symbolsCount?: number;
    symbol?: string;
    ignoreList?: string[];
};
declare function abbreviateAddress(address: string, options?: Options | number): string;

declare function removeLeading0x(data: string): string;

declare const _common_abbreviateAddress: typeof abbreviateAddress;
declare const _common_removeLeading0x: typeof removeLeading0x;
declare const _common_toBigNumber: typeof toBigNumber;
declare namespace _common {
  export { _common_abbreviateAddress as abbreviateAddress, _common_removeLeading0x as removeLeading0x, _common_toBigNumber as toBigNumber };
}

export { _common as _, abbreviateAddress as a, removeLeading0x as r, toBigNumber as t };
