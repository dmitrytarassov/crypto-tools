export { getLedgerData } from "./account/getLedgerData";
export { getAccountData } from "./account/getAccountData";
export { getController } from "./staking/getController";
export {
  getAccountNonce,
  getAccountNonceAndBump,
} from "./account/getAccountNonce";
export { getErasRewardPoints } from "./staking/getErasRewardPoints";
export { polkadotExplorerUrl } from "./common/polkadotExplorerUrl";

import * as _getActiveEra from "./staking/getActiveEra";
export const getActiveEra = _getActiveEra.getActiveEra;
export const getCurrentEra = _getActiveEra.getActiveEra;

export * as api from "./api";
