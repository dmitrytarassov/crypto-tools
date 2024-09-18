import type { Provider } from "@ethersproject/providers";
import { Signer } from "ethers";

import {
  DelegationManager,
  DelegationManager__factory,
} from "./typechain/ethers-v5/DelegationManager";

import { DelegationManagerContract } from "../constants";

export function delegationManagerContract(
  signerOrProvider: Provider | Signer,
  delegationManagerContract = DelegationManagerContract
): DelegationManager {
  return DelegationManager__factory.connect(
    delegationManagerContract,
    signerOrProvider
  );
}
