import { ethers, BigNumber } from 'ethers';

declare const EigenLayerDelegationContract = "0x39053D51B77DC0d36036Fc1fCc8Cb819df8Ef37A";
declare const OperatorSharesDecreased = "0x6909600037b75d7b4733aedd815442b5ec018a827751c832aaff64eba5d6d2dd";
declare const OperatorSharesDecreasedAction = "OperatorSharesDecreased";
declare const OperatorSharesIncreased = "0x1ec042c965e2edd7107b51188ee0f383e22e76179041ab3a9d18ff151405166c";
declare const OperatorSharesIncreasedAction = "OperatorSharesIncreased";

declare const constants_EigenLayerDelegationContract: typeof EigenLayerDelegationContract;
declare const constants_OperatorSharesDecreased: typeof OperatorSharesDecreased;
declare const constants_OperatorSharesDecreasedAction: typeof OperatorSharesDecreasedAction;
declare const constants_OperatorSharesIncreased: typeof OperatorSharesIncreased;
declare const constants_OperatorSharesIncreasedAction: typeof OperatorSharesIncreasedAction;
declare namespace constants {
  export { constants_EigenLayerDelegationContract as EigenLayerDelegationContract, constants_OperatorSharesDecreased as OperatorSharesDecreased, constants_OperatorSharesDecreasedAction as OperatorSharesDecreasedAction, constants_OperatorSharesIncreased as OperatorSharesIncreased, constants_OperatorSharesIncreasedAction as OperatorSharesIncreasedAction };
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

export { constants, getOperatorDelegatorsHistory };
