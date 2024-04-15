import { BigNumberish, BigNumber } from 'ethers';
import { _ as _polkadot } from './index-r_VZMx7F.js';
import '@polkadot/api';

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

declare const _common_abbreviateAddress: typeof abbreviateAddress;
declare const _common_toBigNumber: typeof toBigNumber;
declare namespace _common {
  export { _common_abbreviateAddress as abbreviateAddress, _common_toBigNumber as toBigNumber };
}

declare const polkadot: typeof _polkadot;
declare const common: typeof _common;

export { abbreviateAddress, common, polkadot };
