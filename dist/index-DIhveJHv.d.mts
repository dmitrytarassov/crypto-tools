import * as _polkadot_api from '@polkadot/api';
import { ApiPromise } from '@polkadot/api';
import { Hash } from '@polkadot/types/interfaces';

type Staking_Ledger_Json = {
    stash: string;
    total: string;
    active: string;
    unlocking: string[];
    claimedRewards: number[];
};
declare function getLedgerData(apiPromise: ApiPromise, address: string): Promise<Staking_Ledger_Json | null>;

type Staking_Account_Json = {
    nonce: number;
    consumers: number;
    providers: number;
    sufficients: number;
    data: {
        free: string;
        reserved: number;
        frozen: string;
        flags: string;
    };
};
declare function getAccountData(apiPromise: ApiPromise, address: string): Promise<Staking_Account_Json | null>;

declare const getController: (api: ApiPromise, address: string) => Promise<string | null>;

interface Bump {
    (): number;
}
declare function getAccountNonce(apiPromise: ApiPromise, account: string): Promise<number>;
declare function getAccountNonceAndBump(apiPromise: ApiPromise, account: string): Promise<[number, Bump]>;

type ErasRewardPointsResult = {
    total: number;
    individual: {
        [validator: string]: number;
    };
};
declare function getErasRewardPoints(apiPromise: ApiPromise, era: number): Promise<ErasRewardPointsResult>;

type LinkType = "account" | "address" | "a" | "extrinsic" | "transaction" | "t" | "validator" | "v";
declare function polkadotExplorerUrl(networkName: string, domain?: string): (type: LinkType, addressOrHash: string | Hash) => string;

declare const getActiveEra: (api: _polkadot_api.ApiPromise) => Promise<{
    index: number;
    start: number;
}>;
declare const getCurrentEra: (api: _polkadot_api.ApiPromise) => Promise<{
    index: number;
    start: number;
}>;

declare const _polkadot_getAccountData: typeof getAccountData;
declare const _polkadot_getAccountNonce: typeof getAccountNonce;
declare const _polkadot_getAccountNonceAndBump: typeof getAccountNonceAndBump;
declare const _polkadot_getActiveEra: typeof getActiveEra;
declare const _polkadot_getController: typeof getController;
declare const _polkadot_getCurrentEra: typeof getCurrentEra;
declare const _polkadot_getErasRewardPoints: typeof getErasRewardPoints;
declare const _polkadot_getLedgerData: typeof getLedgerData;
declare const _polkadot_polkadotExplorerUrl: typeof polkadotExplorerUrl;
declare namespace _polkadot {
  export { _polkadot_getAccountData as getAccountData, _polkadot_getAccountNonce as getAccountNonce, _polkadot_getAccountNonceAndBump as getAccountNonceAndBump, _polkadot_getActiveEra as getActiveEra, _polkadot_getController as getController, _polkadot_getCurrentEra as getCurrentEra, _polkadot_getErasRewardPoints as getErasRewardPoints, _polkadot_getLedgerData as getLedgerData, _polkadot_polkadotExplorerUrl as polkadotExplorerUrl };
}

export { _polkadot as _, getCurrentEra as a, getLedgerData as b, getAccountData as c, getController as d, getAccountNonce as e, getAccountNonceAndBump as f, getActiveEra as g, getErasRewardPoints as h, polkadotExplorerUrl as p };
