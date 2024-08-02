import * as _polkadot_api from '@polkadot/api';
import { ApiPromise } from '@polkadot/api';
import { Hash } from '@polkadot/types/interfaces';

type Staking_Active_Era_Json = {
    index: number;
    start: number;
};
declare const activeEra: (api: ApiPromise) => Promise<Staking_Active_Era_Json>;

type Staking_Ledger_Json = {
    stash: string;
    total: number;
    active: number;
    unlocking: string[];
    legacyClaimedRewards: number[];
};
declare function ledger(apiPromise: ApiPromise, address: string): Promise<Staking_Ledger_Json | null>;

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
declare function account(apiPromise: ApiPromise, address: string): Promise<Staking_Account_Json | null>;

declare function getAccountData(apiPromise: ApiPromise, address: string): Promise<Staking_Account_Json | null>;

declare const getController: (apiPromise: ApiPromise, address: string) => Promise<string | null>;

interface Bump {
    (): number;
}
declare function getAccountNonce(apiPromise: ApiPromise, account: string): Promise<number>;
declare function getAccountNonceAndBump(apiPromise: ApiPromise, account: string): Promise<[number, Bump]>;

type Staking_Eras_Reward_Points_Json = {
    total: number;
    individual: {
        [validator: string]: number;
    };
};
declare function erasRewardPoints(apiPromise: ApiPromise, era: number): Promise<Staking_Eras_Reward_Points_Json>;

declare function getErasRewardPoints(apiPromise: ApiPromise, era: number): Promise<Staking_Eras_Reward_Points_Json>;

type LinkType = "account" | "address" | "a" | "extrinsic" | "transaction" | "t" | "validator" | "v";
declare function polkadotExplorerUrl(networkName: string, domain?: string): (type: LinkType, addressOrHash: string | Hash) => string;

type Proxy_Proxies_Json = [
    {
        delegate: string;
        proxyType: "Any" | "NonTransfer" | "Governance" | "Staking";
        delay: number;
    }[],
    number
];
declare function proxies(apiPromise: ApiPromise, address: string): Promise<Proxy_Proxies_Json>;

declare function palletVersion$2(apiPromise: ApiPromise): Promise<number>;

declare const index$4_proxies: typeof proxies;
declare namespace index$4 {
  export { palletVersion$2 as palletVersion, index$4_proxies as proxies };
}

declare function accountNextIndex(apiPromise: ApiPromise, account: string): Promise<number>;

declare function palletVersion$1(apiPromise: ApiPromise): Promise<number>;

declare const index$3_account: typeof account;
declare const index$3_accountNextIndex: typeof accountNextIndex;
declare namespace index$3 {
  export { index$3_account as account, index$3_accountNextIndex as accountNextIndex, palletVersion$1 as palletVersion };
}

declare const bonded: (api: ApiPromise, address: string) => Promise<string | null>;

declare function erasValidatorReward(apiPromise: ApiPromise, era: number): Promise<number | null>;

type Staking_Nominators_Json = {
    targets: string[];
    submittedIn: number;
    suppressed: boolean;
};
declare function nominators(apiPromise: ApiPromise, address: string): Promise<Staking_Nominators_Json>;

declare function palletVersion(apiPromise: ApiPromise): Promise<number>;

type Staking_Validators_Json = {
    commission: number;
    blocked: boolean;
};
declare function validators(apiPromise: ApiPromise, validatorAddress: string): Promise<Staking_Validators_Json>;

declare const index$2_activeEra: typeof activeEra;
declare const index$2_bonded: typeof bonded;
declare const index$2_erasRewardPoints: typeof erasRewardPoints;
declare const index$2_erasValidatorReward: typeof erasValidatorReward;
declare const index$2_ledger: typeof ledger;
declare const index$2_nominators: typeof nominators;
declare const index$2_palletVersion: typeof palletVersion;
declare const index$2_validators: typeof validators;
declare namespace index$2 {
  export { index$2_activeEra as activeEra, index$2_bonded as bonded, index$2_erasRewardPoints as erasRewardPoints, index$2_erasValidatorReward as erasValidatorReward, index$2_ledger as ledger, index$2_nominators as nominators, index$2_palletVersion as palletVersion, index$2_validators as validators };
}

declare namespace index$1 {
  export { index$4 as proxy, index$2 as staking, index$3 as system };
}

declare namespace index {
  export { index$1 as query };
}

declare const getActiveEra: (apiPromise: _polkadot_api.ApiPromise) => Promise<Staking_Active_Era_Json>;
declare const getCurrentEra: (apiPromise: _polkadot_api.ApiPromise) => Promise<Staking_Active_Era_Json>;

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
  export { index as api, _polkadot_getAccountData as getAccountData, _polkadot_getAccountNonce as getAccountNonce, _polkadot_getAccountNonceAndBump as getAccountNonceAndBump, _polkadot_getActiveEra as getActiveEra, _polkadot_getController as getController, _polkadot_getCurrentEra as getCurrentEra, _polkadot_getErasRewardPoints as getErasRewardPoints, _polkadot_getLedgerData as getLedgerData, _polkadot_polkadotExplorerUrl as polkadotExplorerUrl };
}

export { _polkadot as _, getCurrentEra as a, getLedgerData as b, getAccountData as c, getController as d, getAccountNonce as e, getAccountNonceAndBump as f, getActiveEra as g, getErasRewardPoints as h, index as i, polkadotExplorerUrl as p };
