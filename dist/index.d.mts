import { _ as _polkadot } from './index-r_VZMx7F.mjs';
import '@polkadot/api';

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

declare const polkadot: typeof _polkadot;

export { abbreviateAddress, polkadot };
