import { ethers, BigNumber, Event, EventFilter, BaseContract, Signer, CallOverrides, BigNumberish, BytesLike, Overrides, ContractTransaction, PopulatedTransaction, utils } from 'ethers';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';

declare const EigenLayerDelegationContract = "0x39053D51B77DC0d36036Fc1fCc8Cb819df8Ef37A";
declare const DelegationManagerContract = "0x1784be6401339fc0fedf7e9379409f5c1bfe9dda";
declare const OperatorSharesDecreased = "0x6909600037b75d7b4733aedd815442b5ec018a827751c832aaff64eba5d6d2dd";
declare const OperatorSharesDecreasedAction = "OperatorSharesDecreased";
declare const OperatorSharesIncreased = "0x1ec042c965e2edd7107b51188ee0f383e22e76179041ab3a9d18ff151405166c";
declare const OperatorSharesIncreasedAction = "OperatorSharesIncreased";

declare const constants_DelegationManagerContract: typeof DelegationManagerContract;
declare const constants_EigenLayerDelegationContract: typeof EigenLayerDelegationContract;
declare const constants_OperatorSharesDecreased: typeof OperatorSharesDecreased;
declare const constants_OperatorSharesDecreasedAction: typeof OperatorSharesDecreasedAction;
declare const constants_OperatorSharesIncreased: typeof OperatorSharesIncreased;
declare const constants_OperatorSharesIncreasedAction: typeof OperatorSharesIncreasedAction;
declare namespace constants {
  export { constants_DelegationManagerContract as DelegationManagerContract, constants_EigenLayerDelegationContract as EigenLayerDelegationContract, constants_OperatorSharesDecreased as OperatorSharesDecreased, constants_OperatorSharesDecreasedAction as OperatorSharesDecreasedAction, constants_OperatorSharesIncreased as OperatorSharesIncreased, constants_OperatorSharesIncreasedAction as OperatorSharesIncreasedAction };
}

type OperatorReStakerAction = {
    amount: BigNumber;
    block: BigNumber;
    action: typeof OperatorSharesDecreasedAction | typeof OperatorSharesIncreasedAction;
};
declare function getOperatorDelegatorsHistory(provider: ethers.providers.JsonRpcProvider, { fromBlock, toBlock, operator, delegationContract, }: {
    fromBlock?: number;
    toBlock?: number;
    operator: string;
    delegationContract?: string;
}): Promise<Map<string, OperatorReStakerAction[]>>;

interface TypedEvent<TArgsArray extends Array<any> = any, TArgsObject = any> extends Event {
    args: TArgsArray & TArgsObject;
}
interface TypedEventFilter<_TEvent extends TypedEvent> extends EventFilter {
}
interface TypedListener<TEvent extends TypedEvent> {
    (...listenerArg: [...__TypechainArgsArray<TEvent>, TEvent]): void;
}
type __TypechainArgsArray<T> = T extends TypedEvent<infer U> ? U : never;
interface OnEvent<TRes> {
    <TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>, listener: TypedListener<TEvent>): TRes;
    (eventName: string, listener: Listener): TRes;
}

declare namespace IDelegationManager {
    type OperatorDetailsStruct = {
        earningsReceiver: string;
        delegationApprover: string;
        stakerOptOutWindowBlocks: BigNumberish;
    };
    type OperatorDetailsStructOutput = [string, string, number] & {
        earningsReceiver: string;
        delegationApprover: string;
        stakerOptOutWindowBlocks: number;
    };
    type WithdrawalStruct = {
        staker: string;
        delegatedTo: string;
        withdrawer: string;
        nonce: BigNumberish;
        startBlock: BigNumberish;
        strategies: string[];
        shares: BigNumberish[];
    };
    type WithdrawalStructOutput = [
        string,
        string,
        string,
        BigNumber,
        number,
        string[],
        BigNumber[]
    ] & {
        staker: string;
        delegatedTo: string;
        withdrawer: string;
        nonce: BigNumber;
        startBlock: number;
        strategies: string[];
        shares: BigNumber[];
    };
    type QueuedWithdrawalParamsStruct = {
        strategies: string[];
        shares: BigNumberish[];
        withdrawer: string;
    };
    type QueuedWithdrawalParamsStructOutput = [
        string[],
        BigNumber[],
        string
    ] & {
        strategies: string[];
        shares: BigNumber[];
        withdrawer: string;
    };
}
declare namespace ISignatureUtils {
    type SignatureWithExpiryStruct = {
        signature: BytesLike;
        expiry: BigNumberish;
    };
    type SignatureWithExpiryStructOutput = [string, BigNumber] & {
        signature: string;
        expiry: BigNumber;
    };
}
declare namespace IStrategyManager {
    type DeprecatedStruct_WithdrawerAndNonceStruct = {
        withdrawer: string;
        nonce: BigNumberish;
    };
    type DeprecatedStruct_WithdrawerAndNonceStructOutput = [
        string,
        BigNumber
    ] & {
        withdrawer: string;
        nonce: BigNumber;
    };
    type DeprecatedStruct_QueuedWithdrawalStruct = {
        strategies: string[];
        shares: BigNumberish[];
        staker: string;
        withdrawerAndNonce: IStrategyManager.DeprecatedStruct_WithdrawerAndNonceStruct;
        withdrawalStartBlock: BigNumberish;
        delegatedAddress: string;
    };
    type DeprecatedStruct_QueuedWithdrawalStructOutput = [
        string[],
        BigNumber[],
        string,
        IStrategyManager.DeprecatedStruct_WithdrawerAndNonceStructOutput,
        number,
        string
    ] & {
        strategies: string[];
        shares: BigNumber[];
        staker: string;
        withdrawerAndNonce: IStrategyManager.DeprecatedStruct_WithdrawerAndNonceStructOutput;
        withdrawalStartBlock: number;
        delegatedAddress: string;
    };
}
interface DelegationManagerInterface extends utils.Interface {
    functions: {
        "DELEGATION_APPROVAL_TYPEHASH()": FunctionFragment;
        "DOMAIN_TYPEHASH()": FunctionFragment;
        "MAX_STAKER_OPT_OUT_WINDOW_BLOCKS()": FunctionFragment;
        "MAX_WITHDRAWAL_DELAY_BLOCKS()": FunctionFragment;
        "STAKER_DELEGATION_TYPEHASH()": FunctionFragment;
        "beaconChainETHStrategy()": FunctionFragment;
        "calculateCurrentStakerDelegationDigestHash(address,address,uint256)": FunctionFragment;
        "calculateDelegationApprovalDigestHash(address,address,address,bytes32,uint256)": FunctionFragment;
        "calculateStakerDelegationDigestHash(address,uint256,address,uint256)": FunctionFragment;
        "calculateWithdrawalRoot((address,address,address,uint256,uint32,address[],uint256[]))": FunctionFragment;
        "completeQueuedWithdrawal((address,address,address,uint256,uint32,address[],uint256[]),address[],uint256,bool)": FunctionFragment;
        "completeQueuedWithdrawals((address,address,address,uint256,uint32,address[],uint256[])[],address[][],uint256[],bool[])": FunctionFragment;
        "cumulativeWithdrawalsQueued(address)": FunctionFragment;
        "decreaseDelegatedShares(address,address,uint256)": FunctionFragment;
        "delegateTo(address,(bytes,uint256),bytes32)": FunctionFragment;
        "delegateToBySignature(address,address,(bytes,uint256),(bytes,uint256),bytes32)": FunctionFragment;
        "delegatedTo(address)": FunctionFragment;
        "delegationApprover(address)": FunctionFragment;
        "delegationApproverSaltIsSpent(address,bytes32)": FunctionFragment;
        "domainSeparator()": FunctionFragment;
        "earningsReceiver(address)": FunctionFragment;
        "eigenPodManager()": FunctionFragment;
        "getDelegatableShares(address)": FunctionFragment;
        "getOperatorShares(address,address[])": FunctionFragment;
        "getWithdrawalDelay(address[])": FunctionFragment;
        "increaseDelegatedShares(address,address,uint256)": FunctionFragment;
        "initialize(address,address,uint256,uint256,address[],uint256[])": FunctionFragment;
        "isDelegated(address)": FunctionFragment;
        "isOperator(address)": FunctionFragment;
        "migrateQueuedWithdrawals((address[],uint256[],address,(address,uint96),uint32,address)[])": FunctionFragment;
        "minWithdrawalDelayBlocks()": FunctionFragment;
        "modifyOperatorDetails((address,address,uint32))": FunctionFragment;
        "operatorDetails(address)": FunctionFragment;
        "operatorShares(address,address)": FunctionFragment;
        "owner()": FunctionFragment;
        "pause(uint256)": FunctionFragment;
        "pauseAll()": FunctionFragment;
        "paused(uint8)": FunctionFragment;
        "paused()": FunctionFragment;
        "pauserRegistry()": FunctionFragment;
        "pendingWithdrawals(bytes32)": FunctionFragment;
        "queueWithdrawals((address[],uint256[],address)[])": FunctionFragment;
        "registerAsOperator((address,address,uint32),string)": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setMinWithdrawalDelayBlocks(uint256)": FunctionFragment;
        "setPauserRegistry(address)": FunctionFragment;
        "setStrategyWithdrawalDelayBlocks(address[],uint256[])": FunctionFragment;
        "slasher()": FunctionFragment;
        "stakerNonce(address)": FunctionFragment;
        "stakerOptOutWindowBlocks(address)": FunctionFragment;
        "strategyManager()": FunctionFragment;
        "strategyWithdrawalDelayBlocks(address)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "undelegate(address)": FunctionFragment;
        "unpause(uint256)": FunctionFragment;
        "updateOperatorMetadataURI(string)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DELEGATION_APPROVAL_TYPEHASH" | "DOMAIN_TYPEHASH" | "MAX_STAKER_OPT_OUT_WINDOW_BLOCKS" | "MAX_WITHDRAWAL_DELAY_BLOCKS" | "STAKER_DELEGATION_TYPEHASH" | "beaconChainETHStrategy" | "calculateCurrentStakerDelegationDigestHash" | "calculateDelegationApprovalDigestHash" | "calculateStakerDelegationDigestHash" | "calculateWithdrawalRoot" | "completeQueuedWithdrawal" | "completeQueuedWithdrawals" | "cumulativeWithdrawalsQueued" | "decreaseDelegatedShares" | "delegateTo" | "delegateToBySignature" | "delegatedTo" | "delegationApprover" | "delegationApproverSaltIsSpent" | "domainSeparator" | "earningsReceiver" | "eigenPodManager" | "getDelegatableShares" | "getOperatorShares" | "getWithdrawalDelay" | "increaseDelegatedShares" | "initialize" | "isDelegated" | "isOperator" | "migrateQueuedWithdrawals" | "minWithdrawalDelayBlocks" | "modifyOperatorDetails" | "operatorDetails" | "operatorShares" | "owner" | "pause" | "pauseAll" | "paused(uint8)" | "paused()" | "pauserRegistry" | "pendingWithdrawals" | "queueWithdrawals" | "registerAsOperator" | "renounceOwnership" | "setMinWithdrawalDelayBlocks" | "setPauserRegistry" | "setStrategyWithdrawalDelayBlocks" | "slasher" | "stakerNonce" | "stakerOptOutWindowBlocks" | "strategyManager" | "strategyWithdrawalDelayBlocks" | "transferOwnership" | "undelegate" | "unpause" | "updateOperatorMetadataURI"): FunctionFragment;
    encodeFunctionData(functionFragment: "DELEGATION_APPROVAL_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "DOMAIN_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_STAKER_OPT_OUT_WINDOW_BLOCKS", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_WITHDRAWAL_DELAY_BLOCKS", values?: undefined): string;
    encodeFunctionData(functionFragment: "STAKER_DELEGATION_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "beaconChainETHStrategy", values?: undefined): string;
    encodeFunctionData(functionFragment: "calculateCurrentStakerDelegationDigestHash", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "calculateDelegationApprovalDigestHash", values: [string, string, string, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "calculateStakerDelegationDigestHash", values: [string, BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "calculateWithdrawalRoot", values: [IDelegationManager.WithdrawalStruct]): string;
    encodeFunctionData(functionFragment: "completeQueuedWithdrawal", values: [
        IDelegationManager.WithdrawalStruct,
        string[],
        BigNumberish,
        boolean
    ]): string;
    encodeFunctionData(functionFragment: "completeQueuedWithdrawals", values: [
        IDelegationManager.WithdrawalStruct[],
        string[][],
        BigNumberish[],
        boolean[]
    ]): string;
    encodeFunctionData(functionFragment: "cumulativeWithdrawalsQueued", values: [string]): string;
    encodeFunctionData(functionFragment: "decreaseDelegatedShares", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "delegateTo", values: [string, ISignatureUtils.SignatureWithExpiryStruct, BytesLike]): string;
    encodeFunctionData(functionFragment: "delegateToBySignature", values: [
        string,
        string,
        ISignatureUtils.SignatureWithExpiryStruct,
        ISignatureUtils.SignatureWithExpiryStruct,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "delegatedTo", values: [string]): string;
    encodeFunctionData(functionFragment: "delegationApprover", values: [string]): string;
    encodeFunctionData(functionFragment: "delegationApproverSaltIsSpent", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "domainSeparator", values?: undefined): string;
    encodeFunctionData(functionFragment: "earningsReceiver", values: [string]): string;
    encodeFunctionData(functionFragment: "eigenPodManager", values?: undefined): string;
    encodeFunctionData(functionFragment: "getDelegatableShares", values: [string]): string;
    encodeFunctionData(functionFragment: "getOperatorShares", values: [string, string[]]): string;
    encodeFunctionData(functionFragment: "getWithdrawalDelay", values: [string[]]): string;
    encodeFunctionData(functionFragment: "increaseDelegatedShares", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        string[],
        BigNumberish[]
    ]): string;
    encodeFunctionData(functionFragment: "isDelegated", values: [string]): string;
    encodeFunctionData(functionFragment: "isOperator", values: [string]): string;
    encodeFunctionData(functionFragment: "migrateQueuedWithdrawals", values: [IStrategyManager.DeprecatedStruct_QueuedWithdrawalStruct[]]): string;
    encodeFunctionData(functionFragment: "minWithdrawalDelayBlocks", values?: undefined): string;
    encodeFunctionData(functionFragment: "modifyOperatorDetails", values: [IDelegationManager.OperatorDetailsStruct]): string;
    encodeFunctionData(functionFragment: "operatorDetails", values: [string]): string;
    encodeFunctionData(functionFragment: "operatorShares", values: [string, string]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pause", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "pauseAll", values?: undefined): string;
    encodeFunctionData(functionFragment: "paused(uint8)", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "paused()", values?: undefined): string;
    encodeFunctionData(functionFragment: "pauserRegistry", values?: undefined): string;
    encodeFunctionData(functionFragment: "pendingWithdrawals", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "queueWithdrawals", values: [IDelegationManager.QueuedWithdrawalParamsStruct[]]): string;
    encodeFunctionData(functionFragment: "registerAsOperator", values: [IDelegationManager.OperatorDetailsStruct, string]): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(functionFragment: "setMinWithdrawalDelayBlocks", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setPauserRegistry", values: [string]): string;
    encodeFunctionData(functionFragment: "setStrategyWithdrawalDelayBlocks", values: [string[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "slasher", values?: undefined): string;
    encodeFunctionData(functionFragment: "stakerNonce", values: [string]): string;
    encodeFunctionData(functionFragment: "stakerOptOutWindowBlocks", values: [string]): string;
    encodeFunctionData(functionFragment: "strategyManager", values?: undefined): string;
    encodeFunctionData(functionFragment: "strategyWithdrawalDelayBlocks", values: [string]): string;
    encodeFunctionData(functionFragment: "transferOwnership", values: [string]): string;
    encodeFunctionData(functionFragment: "undelegate", values: [string]): string;
    encodeFunctionData(functionFragment: "unpause", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateOperatorMetadataURI", values: [string]): string;
    decodeFunctionResult(functionFragment: "DELEGATION_APPROVAL_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DOMAIN_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_STAKER_OPT_OUT_WINDOW_BLOCKS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_WITHDRAWAL_DELAY_BLOCKS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "STAKER_DELEGATION_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "beaconChainETHStrategy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateCurrentStakerDelegationDigestHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateDelegationApprovalDigestHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateStakerDelegationDigestHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculateWithdrawalRoot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "completeQueuedWithdrawal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "completeQueuedWithdrawals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cumulativeWithdrawalsQueued", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseDelegatedShares", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegateTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegateToBySignature", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegatedTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegationApprover", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegationApproverSaltIsSpent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "domainSeparator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "earningsReceiver", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "eigenPodManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDelegatableShares", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOperatorShares", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getWithdrawalDelay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseDelegatedShares", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isDelegated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isOperator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "migrateQueuedWithdrawals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minWithdrawalDelayBlocks", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "modifyOperatorDetails", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "operatorDetails", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "operatorShares", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pauseAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused(uint8)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused()", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pauserRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pendingWithdrawals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "queueWithdrawals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerAsOperator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMinWithdrawalDelayBlocks", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPauserRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setStrategyWithdrawalDelayBlocks", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "slasher", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stakerNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stakerOptOutWindowBlocks", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "strategyManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "strategyWithdrawalDelayBlocks", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "undelegate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpause", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateOperatorMetadataURI", data: BytesLike): Result;
    events: {
        "Initialized(uint8)": EventFragment;
        "MinWithdrawalDelayBlocksSet(uint256,uint256)": EventFragment;
        "OperatorDetailsModified(address,(address,address,uint32))": EventFragment;
        "OperatorMetadataURIUpdated(address,string)": EventFragment;
        "OperatorRegistered(address,(address,address,uint32))": EventFragment;
        "OperatorSharesDecreased(address,address,address,uint256)": EventFragment;
        "OperatorSharesIncreased(address,address,address,uint256)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "Paused(address,uint256)": EventFragment;
        "PauserRegistrySet(address,address)": EventFragment;
        "StakerDelegated(address,address)": EventFragment;
        "StakerForceUndelegated(address,address)": EventFragment;
        "StakerUndelegated(address,address)": EventFragment;
        "StrategyWithdrawalDelayBlocksSet(address,uint256,uint256)": EventFragment;
        "Unpaused(address,uint256)": EventFragment;
        "WithdrawalCompleted(bytes32)": EventFragment;
        "WithdrawalMigrated(bytes32,bytes32)": EventFragment;
        "WithdrawalQueued(bytes32,(address,address,address,uint256,uint32,address[],uint256[]))": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MinWithdrawalDelayBlocksSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OperatorDetailsModified"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OperatorMetadataURIUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OperatorRegistered"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OperatorSharesDecreased"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OperatorSharesIncreased"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PauserRegistrySet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StakerDelegated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StakerForceUndelegated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StakerUndelegated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StrategyWithdrawalDelayBlocksSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WithdrawalCompleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WithdrawalMigrated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WithdrawalQueued"): EventFragment;
}
interface InitializedEventObject {
    version: number;
}
type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
interface MinWithdrawalDelayBlocksSetEventObject {
    previousValue: BigNumber;
    newValue: BigNumber;
}
type MinWithdrawalDelayBlocksSetEvent = TypedEvent<[
    BigNumber,
    BigNumber
], MinWithdrawalDelayBlocksSetEventObject>;
type MinWithdrawalDelayBlocksSetEventFilter = TypedEventFilter<MinWithdrawalDelayBlocksSetEvent>;
interface OperatorDetailsModifiedEventObject {
    operator: string;
    newOperatorDetails: IDelegationManager.OperatorDetailsStructOutput;
}
type OperatorDetailsModifiedEvent = TypedEvent<[
    string,
    IDelegationManager.OperatorDetailsStructOutput
], OperatorDetailsModifiedEventObject>;
type OperatorDetailsModifiedEventFilter = TypedEventFilter<OperatorDetailsModifiedEvent>;
interface OperatorMetadataURIUpdatedEventObject {
    operator: string;
    metadataURI: string;
}
type OperatorMetadataURIUpdatedEvent = TypedEvent<[
    string,
    string
], OperatorMetadataURIUpdatedEventObject>;
type OperatorMetadataURIUpdatedEventFilter = TypedEventFilter<OperatorMetadataURIUpdatedEvent>;
interface OperatorRegisteredEventObject {
    operator: string;
    operatorDetails: IDelegationManager.OperatorDetailsStructOutput;
}
type OperatorRegisteredEvent = TypedEvent<[
    string,
    IDelegationManager.OperatorDetailsStructOutput
], OperatorRegisteredEventObject>;
type OperatorRegisteredEventFilter = TypedEventFilter<OperatorRegisteredEvent>;
interface OperatorSharesDecreasedEventObject {
    operator: string;
    staker: string;
    strategy: string;
    shares: BigNumber;
}
type OperatorSharesDecreasedEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber
], OperatorSharesDecreasedEventObject>;
type OperatorSharesDecreasedEventFilter = TypedEventFilter<OperatorSharesDecreasedEvent>;
interface OperatorSharesIncreasedEventObject {
    operator: string;
    staker: string;
    strategy: string;
    shares: BigNumber;
}
type OperatorSharesIncreasedEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber
], OperatorSharesIncreasedEventObject>;
type OperatorSharesIncreasedEventFilter = TypedEventFilter<OperatorSharesIncreasedEvent>;
interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
type OwnershipTransferredEvent = TypedEvent<[
    string,
    string
], OwnershipTransferredEventObject>;
type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;
interface PausedEventObject {
    account: string;
    newPausedStatus: BigNumber;
}
type PausedEvent = TypedEvent<[string, BigNumber], PausedEventObject>;
type PausedEventFilter = TypedEventFilter<PausedEvent>;
interface PauserRegistrySetEventObject {
    pauserRegistry: string;
    newPauserRegistry: string;
}
type PauserRegistrySetEvent = TypedEvent<[
    string,
    string
], PauserRegistrySetEventObject>;
type PauserRegistrySetEventFilter = TypedEventFilter<PauserRegistrySetEvent>;
interface StakerDelegatedEventObject {
    staker: string;
    operator: string;
}
type StakerDelegatedEvent = TypedEvent<[
    string,
    string
], StakerDelegatedEventObject>;
type StakerDelegatedEventFilter = TypedEventFilter<StakerDelegatedEvent>;
interface StakerForceUndelegatedEventObject {
    staker: string;
    operator: string;
}
type StakerForceUndelegatedEvent = TypedEvent<[
    string,
    string
], StakerForceUndelegatedEventObject>;
type StakerForceUndelegatedEventFilter = TypedEventFilter<StakerForceUndelegatedEvent>;
interface StakerUndelegatedEventObject {
    staker: string;
    operator: string;
}
type StakerUndelegatedEvent = TypedEvent<[
    string,
    string
], StakerUndelegatedEventObject>;
type StakerUndelegatedEventFilter = TypedEventFilter<StakerUndelegatedEvent>;
interface StrategyWithdrawalDelayBlocksSetEventObject {
    strategy: string;
    previousValue: BigNumber;
    newValue: BigNumber;
}
type StrategyWithdrawalDelayBlocksSetEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], StrategyWithdrawalDelayBlocksSetEventObject>;
type StrategyWithdrawalDelayBlocksSetEventFilter = TypedEventFilter<StrategyWithdrawalDelayBlocksSetEvent>;
interface UnpausedEventObject {
    account: string;
    newPausedStatus: BigNumber;
}
type UnpausedEvent = TypedEvent<[
    string,
    BigNumber
], UnpausedEventObject>;
type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;
interface WithdrawalCompletedEventObject {
    withdrawalRoot: string;
}
type WithdrawalCompletedEvent = TypedEvent<[
    string
], WithdrawalCompletedEventObject>;
type WithdrawalCompletedEventFilter = TypedEventFilter<WithdrawalCompletedEvent>;
interface WithdrawalMigratedEventObject {
    oldWithdrawalRoot: string;
    newWithdrawalRoot: string;
}
type WithdrawalMigratedEvent = TypedEvent<[
    string,
    string
], WithdrawalMigratedEventObject>;
type WithdrawalMigratedEventFilter = TypedEventFilter<WithdrawalMigratedEvent>;
interface WithdrawalQueuedEventObject {
    withdrawalRoot: string;
    withdrawal: IDelegationManager.WithdrawalStructOutput;
}
type WithdrawalQueuedEvent = TypedEvent<[
    string,
    IDelegationManager.WithdrawalStructOutput
], WithdrawalQueuedEventObject>;
type WithdrawalQueuedEventFilter = TypedEventFilter<WithdrawalQueuedEvent>;
interface DelegationManager extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DelegationManagerInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        DELEGATION_APPROVAL_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        MAX_STAKER_OPT_OUT_WINDOW_BLOCKS(overrides?: CallOverrides): Promise<[BigNumber]>;
        MAX_WITHDRAWAL_DELAY_BLOCKS(overrides?: CallOverrides): Promise<[BigNumber]>;
        STAKER_DELEGATION_TYPEHASH(overrides?: CallOverrides): Promise<[string]>;
        beaconChainETHStrategy(overrides?: CallOverrides): Promise<[string]>;
        calculateCurrentStakerDelegationDigestHash(staker: string, operator: string, expiry: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        calculateDelegationApprovalDigestHash(staker: string, operator: string, _delegationApprover: string, approverSalt: BytesLike, expiry: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        calculateStakerDelegationDigestHash(staker: string, _stakerNonce: BigNumberish, operator: string, expiry: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        calculateWithdrawalRoot(withdrawal: IDelegationManager.WithdrawalStruct, overrides?: CallOverrides): Promise<[string]>;
        completeQueuedWithdrawal(withdrawal: IDelegationManager.WithdrawalStruct, tokens: string[], middlewareTimesIndex: BigNumberish, receiveAsTokens: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        completeQueuedWithdrawals(withdrawals: IDelegationManager.WithdrawalStruct[], tokens: string[][], middlewareTimesIndexes: BigNumberish[], receiveAsTokens: boolean[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        cumulativeWithdrawalsQueued(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        decreaseDelegatedShares(staker: string, strategy: string, shares: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        delegateTo(operator: string, approverSignatureAndExpiry: ISignatureUtils.SignatureWithExpiryStruct, approverSalt: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        delegateToBySignature(staker: string, operator: string, stakerSignatureAndExpiry: ISignatureUtils.SignatureWithExpiryStruct, approverSignatureAndExpiry: ISignatureUtils.SignatureWithExpiryStruct, approverSalt: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        delegatedTo(arg0: string, overrides?: CallOverrides): Promise<[string]>;
        delegationApprover(operator: string, overrides?: CallOverrides): Promise<[string]>;
        delegationApproverSaltIsSpent(arg0: string, arg1: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        domainSeparator(overrides?: CallOverrides): Promise<[string]>;
        earningsReceiver(operator: string, overrides?: CallOverrides): Promise<[string]>;
        eigenPodManager(overrides?: CallOverrides): Promise<[string]>;
        getDelegatableShares(staker: string, overrides?: CallOverrides): Promise<[string[], BigNumber[]]>;
        getOperatorShares(operator: string, strategies: string[], overrides?: CallOverrides): Promise<[BigNumber[]]>;
        getWithdrawalDelay(strategies: string[], overrides?: CallOverrides): Promise<[BigNumber]>;
        increaseDelegatedShares(staker: string, strategy: string, shares: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        initialize(initialOwner: string, _pauserRegistry: string, initialPausedStatus: BigNumberish, _minWithdrawalDelayBlocks: BigNumberish, _strategies: string[], _withdrawalDelayBlocks: BigNumberish[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        isDelegated(staker: string, overrides?: CallOverrides): Promise<[boolean]>;
        isOperator(operator: string, overrides?: CallOverrides): Promise<[boolean]>;
        migrateQueuedWithdrawals(withdrawalsToMigrate: IStrategyManager.DeprecatedStruct_QueuedWithdrawalStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        minWithdrawalDelayBlocks(overrides?: CallOverrides): Promise<[BigNumber]>;
        modifyOperatorDetails(newOperatorDetails: IDelegationManager.OperatorDetailsStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        operatorDetails(operator: string, overrides?: CallOverrides): Promise<[IDelegationManager.OperatorDetailsStructOutput]>;
        operatorShares(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        pause(newPausedStatus: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        pauseAll(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        "paused(uint8)"(index: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        "paused()"(overrides?: CallOverrides): Promise<[BigNumber]>;
        pauserRegistry(overrides?: CallOverrides): Promise<[string]>;
        pendingWithdrawals(arg0: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        queueWithdrawals(queuedWithdrawalParams: IDelegationManager.QueuedWithdrawalParamsStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        registerAsOperator(registeringOperatorDetails: IDelegationManager.OperatorDetailsStruct, metadataURI: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setMinWithdrawalDelayBlocks(newMinWithdrawalDelayBlocks: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setPauserRegistry(newPauserRegistry: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        setStrategyWithdrawalDelayBlocks(strategies: string[], withdrawalDelayBlocks: BigNumberish[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        slasher(overrides?: CallOverrides): Promise<[string]>;
        stakerNonce(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        stakerOptOutWindowBlocks(operator: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        strategyManager(overrides?: CallOverrides): Promise<[string]>;
        strategyWithdrawalDelayBlocks(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        undelegate(staker: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        unpause(newPausedStatus: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        updateOperatorMetadataURI(metadataURI: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    DELEGATION_APPROVAL_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    MAX_STAKER_OPT_OUT_WINDOW_BLOCKS(overrides?: CallOverrides): Promise<BigNumber>;
    MAX_WITHDRAWAL_DELAY_BLOCKS(overrides?: CallOverrides): Promise<BigNumber>;
    STAKER_DELEGATION_TYPEHASH(overrides?: CallOverrides): Promise<string>;
    beaconChainETHStrategy(overrides?: CallOverrides): Promise<string>;
    calculateCurrentStakerDelegationDigestHash(staker: string, operator: string, expiry: BigNumberish, overrides?: CallOverrides): Promise<string>;
    calculateDelegationApprovalDigestHash(staker: string, operator: string, _delegationApprover: string, approverSalt: BytesLike, expiry: BigNumberish, overrides?: CallOverrides): Promise<string>;
    calculateStakerDelegationDigestHash(staker: string, _stakerNonce: BigNumberish, operator: string, expiry: BigNumberish, overrides?: CallOverrides): Promise<string>;
    calculateWithdrawalRoot(withdrawal: IDelegationManager.WithdrawalStruct, overrides?: CallOverrides): Promise<string>;
    completeQueuedWithdrawal(withdrawal: IDelegationManager.WithdrawalStruct, tokens: string[], middlewareTimesIndex: BigNumberish, receiveAsTokens: boolean, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    completeQueuedWithdrawals(withdrawals: IDelegationManager.WithdrawalStruct[], tokens: string[][], middlewareTimesIndexes: BigNumberish[], receiveAsTokens: boolean[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    cumulativeWithdrawalsQueued(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    decreaseDelegatedShares(staker: string, strategy: string, shares: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    delegateTo(operator: string, approverSignatureAndExpiry: ISignatureUtils.SignatureWithExpiryStruct, approverSalt: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    delegateToBySignature(staker: string, operator: string, stakerSignatureAndExpiry: ISignatureUtils.SignatureWithExpiryStruct, approverSignatureAndExpiry: ISignatureUtils.SignatureWithExpiryStruct, approverSalt: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    delegatedTo(arg0: string, overrides?: CallOverrides): Promise<string>;
    delegationApprover(operator: string, overrides?: CallOverrides): Promise<string>;
    delegationApproverSaltIsSpent(arg0: string, arg1: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    domainSeparator(overrides?: CallOverrides): Promise<string>;
    earningsReceiver(operator: string, overrides?: CallOverrides): Promise<string>;
    eigenPodManager(overrides?: CallOverrides): Promise<string>;
    getDelegatableShares(staker: string, overrides?: CallOverrides): Promise<[string[], BigNumber[]]>;
    getOperatorShares(operator: string, strategies: string[], overrides?: CallOverrides): Promise<BigNumber[]>;
    getWithdrawalDelay(strategies: string[], overrides?: CallOverrides): Promise<BigNumber>;
    increaseDelegatedShares(staker: string, strategy: string, shares: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    initialize(initialOwner: string, _pauserRegistry: string, initialPausedStatus: BigNumberish, _minWithdrawalDelayBlocks: BigNumberish, _strategies: string[], _withdrawalDelayBlocks: BigNumberish[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    isDelegated(staker: string, overrides?: CallOverrides): Promise<boolean>;
    isOperator(operator: string, overrides?: CallOverrides): Promise<boolean>;
    migrateQueuedWithdrawals(withdrawalsToMigrate: IStrategyManager.DeprecatedStruct_QueuedWithdrawalStruct[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    minWithdrawalDelayBlocks(overrides?: CallOverrides): Promise<BigNumber>;
    modifyOperatorDetails(newOperatorDetails: IDelegationManager.OperatorDetailsStruct, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    operatorDetails(operator: string, overrides?: CallOverrides): Promise<IDelegationManager.OperatorDetailsStructOutput>;
    operatorShares(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
    owner(overrides?: CallOverrides): Promise<string>;
    pause(newPausedStatus: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    pauseAll(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    "paused(uint8)"(index: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    "paused()"(overrides?: CallOverrides): Promise<BigNumber>;
    pauserRegistry(overrides?: CallOverrides): Promise<string>;
    pendingWithdrawals(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    queueWithdrawals(queuedWithdrawalParams: IDelegationManager.QueuedWithdrawalParamsStruct[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    registerAsOperator(registeringOperatorDetails: IDelegationManager.OperatorDetailsStruct, metadataURI: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    renounceOwnership(overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setMinWithdrawalDelayBlocks(newMinWithdrawalDelayBlocks: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setPauserRegistry(newPauserRegistry: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    setStrategyWithdrawalDelayBlocks(strategies: string[], withdrawalDelayBlocks: BigNumberish[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    slasher(overrides?: CallOverrides): Promise<string>;
    stakerNonce(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    stakerOptOutWindowBlocks(operator: string, overrides?: CallOverrides): Promise<BigNumber>;
    strategyManager(overrides?: CallOverrides): Promise<string>;
    strategyWithdrawalDelayBlocks(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    transferOwnership(newOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    undelegate(staker: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    unpause(newPausedStatus: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    updateOperatorMetadataURI(metadataURI: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        DELEGATION_APPROVAL_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        MAX_STAKER_OPT_OUT_WINDOW_BLOCKS(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_WITHDRAWAL_DELAY_BLOCKS(overrides?: CallOverrides): Promise<BigNumber>;
        STAKER_DELEGATION_TYPEHASH(overrides?: CallOverrides): Promise<string>;
        beaconChainETHStrategy(overrides?: CallOverrides): Promise<string>;
        calculateCurrentStakerDelegationDigestHash(staker: string, operator: string, expiry: BigNumberish, overrides?: CallOverrides): Promise<string>;
        calculateDelegationApprovalDigestHash(staker: string, operator: string, _delegationApprover: string, approverSalt: BytesLike, expiry: BigNumberish, overrides?: CallOverrides): Promise<string>;
        calculateStakerDelegationDigestHash(staker: string, _stakerNonce: BigNumberish, operator: string, expiry: BigNumberish, overrides?: CallOverrides): Promise<string>;
        calculateWithdrawalRoot(withdrawal: IDelegationManager.WithdrawalStruct, overrides?: CallOverrides): Promise<string>;
        completeQueuedWithdrawal(withdrawal: IDelegationManager.WithdrawalStruct, tokens: string[], middlewareTimesIndex: BigNumberish, receiveAsTokens: boolean, overrides?: CallOverrides): Promise<void>;
        completeQueuedWithdrawals(withdrawals: IDelegationManager.WithdrawalStruct[], tokens: string[][], middlewareTimesIndexes: BigNumberish[], receiveAsTokens: boolean[], overrides?: CallOverrides): Promise<void>;
        cumulativeWithdrawalsQueued(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        decreaseDelegatedShares(staker: string, strategy: string, shares: BigNumberish, overrides?: CallOverrides): Promise<void>;
        delegateTo(operator: string, approverSignatureAndExpiry: ISignatureUtils.SignatureWithExpiryStruct, approverSalt: BytesLike, overrides?: CallOverrides): Promise<void>;
        delegateToBySignature(staker: string, operator: string, stakerSignatureAndExpiry: ISignatureUtils.SignatureWithExpiryStruct, approverSignatureAndExpiry: ISignatureUtils.SignatureWithExpiryStruct, approverSalt: BytesLike, overrides?: CallOverrides): Promise<void>;
        delegatedTo(arg0: string, overrides?: CallOverrides): Promise<string>;
        delegationApprover(operator: string, overrides?: CallOverrides): Promise<string>;
        delegationApproverSaltIsSpent(arg0: string, arg1: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        domainSeparator(overrides?: CallOverrides): Promise<string>;
        earningsReceiver(operator: string, overrides?: CallOverrides): Promise<string>;
        eigenPodManager(overrides?: CallOverrides): Promise<string>;
        getDelegatableShares(staker: string, overrides?: CallOverrides): Promise<[string[], BigNumber[]]>;
        getOperatorShares(operator: string, strategies: string[], overrides?: CallOverrides): Promise<BigNumber[]>;
        getWithdrawalDelay(strategies: string[], overrides?: CallOverrides): Promise<BigNumber>;
        increaseDelegatedShares(staker: string, strategy: string, shares: BigNumberish, overrides?: CallOverrides): Promise<void>;
        initialize(initialOwner: string, _pauserRegistry: string, initialPausedStatus: BigNumberish, _minWithdrawalDelayBlocks: BigNumberish, _strategies: string[], _withdrawalDelayBlocks: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        isDelegated(staker: string, overrides?: CallOverrides): Promise<boolean>;
        isOperator(operator: string, overrides?: CallOverrides): Promise<boolean>;
        migrateQueuedWithdrawals(withdrawalsToMigrate: IStrategyManager.DeprecatedStruct_QueuedWithdrawalStruct[], overrides?: CallOverrides): Promise<void>;
        minWithdrawalDelayBlocks(overrides?: CallOverrides): Promise<BigNumber>;
        modifyOperatorDetails(newOperatorDetails: IDelegationManager.OperatorDetailsStruct, overrides?: CallOverrides): Promise<void>;
        operatorDetails(operator: string, overrides?: CallOverrides): Promise<IDelegationManager.OperatorDetailsStructOutput>;
        operatorShares(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<string>;
        pause(newPausedStatus: BigNumberish, overrides?: CallOverrides): Promise<void>;
        pauseAll(overrides?: CallOverrides): Promise<void>;
        "paused(uint8)"(index: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        "paused()"(overrides?: CallOverrides): Promise<BigNumber>;
        pauserRegistry(overrides?: CallOverrides): Promise<string>;
        pendingWithdrawals(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        queueWithdrawals(queuedWithdrawalParams: IDelegationManager.QueuedWithdrawalParamsStruct[], overrides?: CallOverrides): Promise<string[]>;
        registerAsOperator(registeringOperatorDetails: IDelegationManager.OperatorDetailsStruct, metadataURI: string, overrides?: CallOverrides): Promise<void>;
        renounceOwnership(overrides?: CallOverrides): Promise<void>;
        setMinWithdrawalDelayBlocks(newMinWithdrawalDelayBlocks: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setPauserRegistry(newPauserRegistry: string, overrides?: CallOverrides): Promise<void>;
        setStrategyWithdrawalDelayBlocks(strategies: string[], withdrawalDelayBlocks: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        slasher(overrides?: CallOverrides): Promise<string>;
        stakerNonce(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        stakerOptOutWindowBlocks(operator: string, overrides?: CallOverrides): Promise<BigNumber>;
        strategyManager(overrides?: CallOverrides): Promise<string>;
        strategyWithdrawalDelayBlocks(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;
        undelegate(staker: string, overrides?: CallOverrides): Promise<string[]>;
        unpause(newPausedStatus: BigNumberish, overrides?: CallOverrides): Promise<void>;
        updateOperatorMetadataURI(metadataURI: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "MinWithdrawalDelayBlocksSet(uint256,uint256)"(previousValue?: null, newValue?: null): MinWithdrawalDelayBlocksSetEventFilter;
        MinWithdrawalDelayBlocksSet(previousValue?: null, newValue?: null): MinWithdrawalDelayBlocksSetEventFilter;
        "OperatorDetailsModified(address,(address,address,uint32))"(operator?: string | null, newOperatorDetails?: null): OperatorDetailsModifiedEventFilter;
        OperatorDetailsModified(operator?: string | null, newOperatorDetails?: null): OperatorDetailsModifiedEventFilter;
        "OperatorMetadataURIUpdated(address,string)"(operator?: string | null, metadataURI?: null): OperatorMetadataURIUpdatedEventFilter;
        OperatorMetadataURIUpdated(operator?: string | null, metadataURI?: null): OperatorMetadataURIUpdatedEventFilter;
        "OperatorRegistered(address,(address,address,uint32))"(operator?: string | null, operatorDetails?: null): OperatorRegisteredEventFilter;
        OperatorRegistered(operator?: string | null, operatorDetails?: null): OperatorRegisteredEventFilter;
        "OperatorSharesDecreased(address,address,address,uint256)"(operator?: string | null, staker?: null, strategy?: null, shares?: null): OperatorSharesDecreasedEventFilter;
        OperatorSharesDecreased(operator?: string | null, staker?: null, strategy?: null, shares?: null): OperatorSharesDecreasedEventFilter;
        "OperatorSharesIncreased(address,address,address,uint256)"(operator?: string | null, staker?: null, strategy?: null, shares?: null): OperatorSharesIncreasedEventFilter;
        OperatorSharesIncreased(operator?: string | null, staker?: null, strategy?: null, shares?: null): OperatorSharesIncreasedEventFilter;
        "OwnershipTransferred(address,address)"(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): OwnershipTransferredEventFilter;
        "Paused(address,uint256)"(account?: string | null, newPausedStatus?: null): PausedEventFilter;
        Paused(account?: string | null, newPausedStatus?: null): PausedEventFilter;
        "PauserRegistrySet(address,address)"(pauserRegistry?: null, newPauserRegistry?: null): PauserRegistrySetEventFilter;
        PauserRegistrySet(pauserRegistry?: null, newPauserRegistry?: null): PauserRegistrySetEventFilter;
        "StakerDelegated(address,address)"(staker?: string | null, operator?: string | null): StakerDelegatedEventFilter;
        StakerDelegated(staker?: string | null, operator?: string | null): StakerDelegatedEventFilter;
        "StakerForceUndelegated(address,address)"(staker?: string | null, operator?: string | null): StakerForceUndelegatedEventFilter;
        StakerForceUndelegated(staker?: string | null, operator?: string | null): StakerForceUndelegatedEventFilter;
        "StakerUndelegated(address,address)"(staker?: string | null, operator?: string | null): StakerUndelegatedEventFilter;
        StakerUndelegated(staker?: string | null, operator?: string | null): StakerUndelegatedEventFilter;
        "StrategyWithdrawalDelayBlocksSet(address,uint256,uint256)"(strategy?: null, previousValue?: null, newValue?: null): StrategyWithdrawalDelayBlocksSetEventFilter;
        StrategyWithdrawalDelayBlocksSet(strategy?: null, previousValue?: null, newValue?: null): StrategyWithdrawalDelayBlocksSetEventFilter;
        "Unpaused(address,uint256)"(account?: string | null, newPausedStatus?: null): UnpausedEventFilter;
        Unpaused(account?: string | null, newPausedStatus?: null): UnpausedEventFilter;
        "WithdrawalCompleted(bytes32)"(withdrawalRoot?: null): WithdrawalCompletedEventFilter;
        WithdrawalCompleted(withdrawalRoot?: null): WithdrawalCompletedEventFilter;
        "WithdrawalMigrated(bytes32,bytes32)"(oldWithdrawalRoot?: null, newWithdrawalRoot?: null): WithdrawalMigratedEventFilter;
        WithdrawalMigrated(oldWithdrawalRoot?: null, newWithdrawalRoot?: null): WithdrawalMigratedEventFilter;
        "WithdrawalQueued(bytes32,(address,address,address,uint256,uint32,address[],uint256[]))"(withdrawalRoot?: null, withdrawal?: null): WithdrawalQueuedEventFilter;
        WithdrawalQueued(withdrawalRoot?: null, withdrawal?: null): WithdrawalQueuedEventFilter;
    };
    estimateGas: {
        DELEGATION_APPROVAL_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_STAKER_OPT_OUT_WINDOW_BLOCKS(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_WITHDRAWAL_DELAY_BLOCKS(overrides?: CallOverrides): Promise<BigNumber>;
        STAKER_DELEGATION_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;
        beaconChainETHStrategy(overrides?: CallOverrides): Promise<BigNumber>;
        calculateCurrentStakerDelegationDigestHash(staker: string, operator: string, expiry: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        calculateDelegationApprovalDigestHash(staker: string, operator: string, _delegationApprover: string, approverSalt: BytesLike, expiry: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        calculateStakerDelegationDigestHash(staker: string, _stakerNonce: BigNumberish, operator: string, expiry: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        calculateWithdrawalRoot(withdrawal: IDelegationManager.WithdrawalStruct, overrides?: CallOverrides): Promise<BigNumber>;
        completeQueuedWithdrawal(withdrawal: IDelegationManager.WithdrawalStruct, tokens: string[], middlewareTimesIndex: BigNumberish, receiveAsTokens: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        completeQueuedWithdrawals(withdrawals: IDelegationManager.WithdrawalStruct[], tokens: string[][], middlewareTimesIndexes: BigNumberish[], receiveAsTokens: boolean[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        cumulativeWithdrawalsQueued(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        decreaseDelegatedShares(staker: string, strategy: string, shares: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        delegateTo(operator: string, approverSignatureAndExpiry: ISignatureUtils.SignatureWithExpiryStruct, approverSalt: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        delegateToBySignature(staker: string, operator: string, stakerSignatureAndExpiry: ISignatureUtils.SignatureWithExpiryStruct, approverSignatureAndExpiry: ISignatureUtils.SignatureWithExpiryStruct, approverSalt: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        delegatedTo(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        delegationApprover(operator: string, overrides?: CallOverrides): Promise<BigNumber>;
        delegationApproverSaltIsSpent(arg0: string, arg1: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        domainSeparator(overrides?: CallOverrides): Promise<BigNumber>;
        earningsReceiver(operator: string, overrides?: CallOverrides): Promise<BigNumber>;
        eigenPodManager(overrides?: CallOverrides): Promise<BigNumber>;
        getDelegatableShares(staker: string, overrides?: CallOverrides): Promise<BigNumber>;
        getOperatorShares(operator: string, strategies: string[], overrides?: CallOverrides): Promise<BigNumber>;
        getWithdrawalDelay(strategies: string[], overrides?: CallOverrides): Promise<BigNumber>;
        increaseDelegatedShares(staker: string, strategy: string, shares: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        initialize(initialOwner: string, _pauserRegistry: string, initialPausedStatus: BigNumberish, _minWithdrawalDelayBlocks: BigNumberish, _strategies: string[], _withdrawalDelayBlocks: BigNumberish[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        isDelegated(staker: string, overrides?: CallOverrides): Promise<BigNumber>;
        isOperator(operator: string, overrides?: CallOverrides): Promise<BigNumber>;
        migrateQueuedWithdrawals(withdrawalsToMigrate: IStrategyManager.DeprecatedStruct_QueuedWithdrawalStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        minWithdrawalDelayBlocks(overrides?: CallOverrides): Promise<BigNumber>;
        modifyOperatorDetails(newOperatorDetails: IDelegationManager.OperatorDetailsStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        operatorDetails(operator: string, overrides?: CallOverrides): Promise<BigNumber>;
        operatorShares(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        pause(newPausedStatus: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        pauseAll(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        "paused(uint8)"(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "paused()"(overrides?: CallOverrides): Promise<BigNumber>;
        pauserRegistry(overrides?: CallOverrides): Promise<BigNumber>;
        pendingWithdrawals(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        queueWithdrawals(queuedWithdrawalParams: IDelegationManager.QueuedWithdrawalParamsStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        registerAsOperator(registeringOperatorDetails: IDelegationManager.OperatorDetailsStruct, metadataURI: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setMinWithdrawalDelayBlocks(newMinWithdrawalDelayBlocks: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setPauserRegistry(newPauserRegistry: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        setStrategyWithdrawalDelayBlocks(strategies: string[], withdrawalDelayBlocks: BigNumberish[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        slasher(overrides?: CallOverrides): Promise<BigNumber>;
        stakerNonce(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        stakerOptOutWindowBlocks(operator: string, overrides?: CallOverrides): Promise<BigNumber>;
        strategyManager(overrides?: CallOverrides): Promise<BigNumber>;
        strategyWithdrawalDelayBlocks(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        undelegate(staker: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        unpause(newPausedStatus: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        updateOperatorMetadataURI(metadataURI: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        DELEGATION_APPROVAL_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DOMAIN_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_STAKER_OPT_OUT_WINDOW_BLOCKS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_WITHDRAWAL_DELAY_BLOCKS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        STAKER_DELEGATION_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        beaconChainETHStrategy(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calculateCurrentStakerDelegationDigestHash(staker: string, operator: string, expiry: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calculateDelegationApprovalDigestHash(staker: string, operator: string, _delegationApprover: string, approverSalt: BytesLike, expiry: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calculateStakerDelegationDigestHash(staker: string, _stakerNonce: BigNumberish, operator: string, expiry: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        calculateWithdrawalRoot(withdrawal: IDelegationManager.WithdrawalStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        completeQueuedWithdrawal(withdrawal: IDelegationManager.WithdrawalStruct, tokens: string[], middlewareTimesIndex: BigNumberish, receiveAsTokens: boolean, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        completeQueuedWithdrawals(withdrawals: IDelegationManager.WithdrawalStruct[], tokens: string[][], middlewareTimesIndexes: BigNumberish[], receiveAsTokens: boolean[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        cumulativeWithdrawalsQueued(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decreaseDelegatedShares(staker: string, strategy: string, shares: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        delegateTo(operator: string, approverSignatureAndExpiry: ISignatureUtils.SignatureWithExpiryStruct, approverSalt: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        delegateToBySignature(staker: string, operator: string, stakerSignatureAndExpiry: ISignatureUtils.SignatureWithExpiryStruct, approverSignatureAndExpiry: ISignatureUtils.SignatureWithExpiryStruct, approverSalt: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        delegatedTo(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        delegationApprover(operator: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        delegationApproverSaltIsSpent(arg0: string, arg1: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        domainSeparator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        earningsReceiver(operator: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        eigenPodManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDelegatableShares(staker: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getOperatorShares(operator: string, strategies: string[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getWithdrawalDelay(strategies: string[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increaseDelegatedShares(staker: string, strategy: string, shares: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        initialize(initialOwner: string, _pauserRegistry: string, initialPausedStatus: BigNumberish, _minWithdrawalDelayBlocks: BigNumberish, _strategies: string[], _withdrawalDelayBlocks: BigNumberish[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        isDelegated(staker: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isOperator(operator: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        migrateQueuedWithdrawals(withdrawalsToMigrate: IStrategyManager.DeprecatedStruct_QueuedWithdrawalStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        minWithdrawalDelayBlocks(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        modifyOperatorDetails(newOperatorDetails: IDelegationManager.OperatorDetailsStruct, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        operatorDetails(operator: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        operatorShares(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pause(newPausedStatus: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        pauseAll(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        "paused(uint8)"(index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "paused()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pauserRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pendingWithdrawals(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        queueWithdrawals(queuedWithdrawalParams: IDelegationManager.QueuedWithdrawalParamsStruct[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        registerAsOperator(registeringOperatorDetails: IDelegationManager.OperatorDetailsStruct, metadataURI: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        renounceOwnership(overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setMinWithdrawalDelayBlocks(newMinWithdrawalDelayBlocks: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setPauserRegistry(newPauserRegistry: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        setStrategyWithdrawalDelayBlocks(strategies: string[], withdrawalDelayBlocks: BigNumberish[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        slasher(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stakerNonce(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        stakerOptOutWindowBlocks(operator: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        strategyManager(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        strategyWithdrawalDelayBlocks(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferOwnership(newOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        undelegate(staker: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        unpause(newPausedStatus: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        updateOperatorMetadataURI(metadataURI: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}

declare function delegationManagerContract(signerOrProvider: Provider | Signer, delegationManagerContract?: string): DelegationManager;

export { constants, delegationManagerContract, getOperatorDelegatorsHistory };
