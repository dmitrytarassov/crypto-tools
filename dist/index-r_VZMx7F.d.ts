import { ApiPromise } from '@polkadot/api';

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

declare const _polkadot_getAccountData: typeof getAccountData;
declare const _polkadot_getController: typeof getController;
declare const _polkadot_getLedgerData: typeof getLedgerData;
declare namespace _polkadot {
  export { _polkadot_getAccountData as getAccountData, _polkadot_getController as getController, _polkadot_getLedgerData as getLedgerData };
}

export { _polkadot as _, getAccountData as a, getController as b, getLedgerData as g };
