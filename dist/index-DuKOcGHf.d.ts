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

type BrokenNumberType = number | string;

type Nomination_Pools_Bonded_Pools_Json = {
    commission: {
        current: [number, string] | null;
        max: number | null;
        changeRate: {
            maxIncrease: number;
            minDelay: number;
        } | null;
        throttleFrom: number | null;
        claimPermission: null;
    };
    memberCounter: number;
    points: BrokenNumberType;
    roles: {
        depositor: string;
        root: string;
        nominator: string;
        bouncer: string;
    };
    state: "Open" | "Destroying" | "Blocked";
} | null;
declare function bondedPools(apiPromise: ApiPromise, poolId: number): Promise<Nomination_Pools_Bonded_Pools_Json>;

type ClaimPermission = "Permissioned" | "PermissionlessCompound" | "PermissionlessWithdraw" | "PermissionlessAll";

type Nomination_Pools_Claim_Permission_Json = ClaimPermission;
declare function claimPermissions(apiPromise: ApiPromise, address: string): Promise<Nomination_Pools_Claim_Permission_Json>;

type Nomination_Pools_Counter_For_Bonded_Pools_Json = number;
declare function counterForBondedPools(apiPromise: ApiPromise): Promise<Nomination_Pools_Counter_For_Bonded_Pools_Json>;

type Nomination_Pools_Counter_For_Metadata_Json = number;
declare function counterForMetadata(apiPromise: ApiPromise): Promise<Nomination_Pools_Counter_For_Metadata_Json>;

type Nomination_Pools_Counter_For_Pool_Members_Json = number;
declare function counterForPoolMembers(apiPromise: ApiPromise): Promise<Nomination_Pools_Counter_For_Pool_Members_Json>;

type Nomination_Pools_Counter_For_Reverse_Pool_Id_Lookup_Json = number;
declare function counterForReversePoolIdLookup(apiPromise: ApiPromise): Promise<Nomination_Pools_Counter_For_Reverse_Pool_Id_Lookup_Json>;

type Nomination_Pools_Counter_For_Reward_Pools_Json = number;
declare function counterForRewardPools(apiPromise: ApiPromise): Promise<Nomination_Pools_Counter_For_Reward_Pools_Json>;

type Nomination_Pools_Counter_For_Sub_Pools_Storage_Json = number;
declare function counterForSubPoolsStorage(apiPromise: ApiPromise): Promise<Nomination_Pools_Counter_For_Sub_Pools_Storage_Json>;

type Nomination_Pools_Global_Max_Commission_Json$1 = number;
declare function globalMaxCommission(apiPromise: ApiPromise): Promise<Nomination_Pools_Global_Max_Commission_Json$1>;

type Nomination_Pools_Last_Pool_Id_Json = number;
declare function lastPoolId(apiPromise: ApiPromise): Promise<Nomination_Pools_Last_Pool_Id_Json>;

type Nomination_Pools_Max_Pool_Members_Json = number | null;
declare function maxPoolMembers(apiPromise: ApiPromise): Promise<Nomination_Pools_Max_Pool_Members_Json>;

type Nomination_Pools_Max_Pool_Members_Per_Pool_Json = number | null;
declare function maxPoolMembersPerPool(apiPromise: ApiPromise): Promise<Nomination_Pools_Max_Pool_Members_Per_Pool_Json>;

type Nomination_Pools_Max_Pools_Json = number | null;
declare function maxPools(apiPromise: ApiPromise): Promise<Nomination_Pools_Max_Pools_Json>;

type Nomination_Pools_Metadata_Json = string;
declare function metadata(apiPromise: ApiPromise, poolId: number): Promise<Nomination_Pools_Metadata_Json>;

type Nomination_Pools_Min_Create_Bond_Json = number | null;
declare function minCreateBond(apiPromise: ApiPromise): Promise<Nomination_Pools_Min_Create_Bond_Json>;

type Nomination_Pools_Min_Join_Bond_Json = number | null;
declare function minJoinBond(apiPromise: ApiPromise): Promise<Nomination_Pools_Min_Join_Bond_Json>;

declare const palletVersion$3: (apiPromise: _polkadot_api.ApiPromise) => Promise<number>;

type Nomination_Pools_Pool_Members_Json = {
    poolId: number;
    points: number;
    lastRecordedRewardCounter: BrokenNumberType;
    unbondingEras: Record<string, BrokenNumberType>;
} | null;
declare function poolMembers(apiPromise: ApiPromise, address: string): Promise<Nomination_Pools_Pool_Members_Json>;

type Nomination_Pools_Reverse_Pool_Id_Lookup_Json = number | null;
declare function reversePoolIdLookup(apiPromise: ApiPromise, address: string): Promise<Nomination_Pools_Reverse_Pool_Id_Lookup_Json>;

type Nomination_Pools_Reward_Pools_Json = {
    lastRecordedRewardCounter: BrokenNumberType;
    lastRecordedTotalPayouts: BrokenNumberType;
    totalRewardsClaimed: BrokenNumberType;
    totalCommissionPending: BrokenNumberType;
    totalCommissionClaimed: BrokenNumberType;
} | null;
declare function rewardPools(apiPromise: ApiPromise, poolId: number): Promise<Nomination_Pools_Reward_Pools_Json>;

type Nomination_Pools_Sub_Pools_Storage_Json = {
    noEra: {
        points: BrokenNumberType;
        balance: BrokenNumberType;
    };
    withEra: Record<number, {
        points: BrokenNumberType;
        balance: BrokenNumberType;
    }>;
} | null;
declare function subPoolsStorage(apiPromise: ApiPromise, poolId: number): Promise<Nomination_Pools_Sub_Pools_Storage_Json>;

type Nomination_Pools_Global_Max_Commission_Json = BrokenNumberType;
declare function totalValueLocked(apiPromise: ApiPromise): Promise<Nomination_Pools_Global_Max_Commission_Json>;

declare const index$5_bondedPools: typeof bondedPools;
declare const index$5_claimPermissions: typeof claimPermissions;
declare const index$5_counterForBondedPools: typeof counterForBondedPools;
declare const index$5_counterForMetadata: typeof counterForMetadata;
declare const index$5_counterForPoolMembers: typeof counterForPoolMembers;
declare const index$5_counterForReversePoolIdLookup: typeof counterForReversePoolIdLookup;
declare const index$5_counterForRewardPools: typeof counterForRewardPools;
declare const index$5_counterForSubPoolsStorage: typeof counterForSubPoolsStorage;
declare const index$5_globalMaxCommission: typeof globalMaxCommission;
declare const index$5_lastPoolId: typeof lastPoolId;
declare const index$5_maxPoolMembers: typeof maxPoolMembers;
declare const index$5_maxPoolMembersPerPool: typeof maxPoolMembersPerPool;
declare const index$5_maxPools: typeof maxPools;
declare const index$5_metadata: typeof metadata;
declare const index$5_minCreateBond: typeof minCreateBond;
declare const index$5_minJoinBond: typeof minJoinBond;
declare const index$5_poolMembers: typeof poolMembers;
declare const index$5_reversePoolIdLookup: typeof reversePoolIdLookup;
declare const index$5_rewardPools: typeof rewardPools;
declare const index$5_subPoolsStorage: typeof subPoolsStorage;
declare const index$5_totalValueLocked: typeof totalValueLocked;
declare namespace index$5 {
  export { index$5_bondedPools as bondedPools, index$5_claimPermissions as claimPermissions, index$5_counterForBondedPools as counterForBondedPools, index$5_counterForMetadata as counterForMetadata, index$5_counterForPoolMembers as counterForPoolMembers, index$5_counterForReversePoolIdLookup as counterForReversePoolIdLookup, index$5_counterForRewardPools as counterForRewardPools, index$5_counterForSubPoolsStorage as counterForSubPoolsStorage, index$5_globalMaxCommission as globalMaxCommission, index$5_lastPoolId as lastPoolId, index$5_maxPoolMembers as maxPoolMembers, index$5_maxPoolMembersPerPool as maxPoolMembersPerPool, index$5_maxPools as maxPools, index$5_metadata as metadata, index$5_minCreateBond as minCreateBond, index$5_minJoinBond as minJoinBond, palletVersion$3 as palletVersion, index$5_poolMembers as poolMembers, index$5_reversePoolIdLookup as reversePoolIdLookup, index$5_rewardPools as rewardPools, index$5_subPoolsStorage as subPoolsStorage, index$5_totalValueLocked as totalValueLocked };
}

type Proxy_Proxies_Json = [
    {
        delegate: string;
        proxyType: "Any" | "NonTransfer" | "Governance" | "Staking";
        delay: number;
    }[],
    number
];
declare function proxies(apiPromise: ApiPromise, address: string): Promise<Proxy_Proxies_Json>;

declare const palletVersion$2: (apiPromise: _polkadot_api.ApiPromise) => Promise<number>;

declare const index$4_proxies: typeof proxies;
declare namespace index$4 {
  export { palletVersion$2 as palletVersion, index$4_proxies as proxies };
}

declare function accountNextIndex(apiPromise: ApiPromise, account: string): Promise<number>;

declare const palletVersion$1: (apiPromise: _polkadot_api.ApiPromise) => Promise<number>;

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

declare const palletVersion: (apiPromise: _polkadot_api.ApiPromise) => Promise<number>;

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
  export { index$5 as nominationPools, index$4 as proxy, index$2 as staking, index$3 as system };
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
