# The list of tools and interfaces for Polkadot Web3 Libraries

## api.query
The universal typed wrapper for polkadot ApiPromise.
### Pallets:
- [api.query.nominationPools](https://github.com/dmitrytarassov/crypto-tools/blob/main/src/polkadot/api/query/nominationPools/README.md)

## Tools:

### Account
- [getAccountData](#getaccountdata) - get account info, like balances, nonce, etc...
- [getAccountNonce](#getaccountnonce) - get account current nonce
- [getAccountNonceAndBump](#getaccountnonceandbump) - get account current nonce and bump function

### Staking
- [getActiveEra | getCurrentEra](#getactiveera) - get active era number
- [getController](#getcontroller) - get staking controller, for stash account
- [getLedgerData](#getledgerdata) - get staking data, like bonded / unbonded, rewards eras...
- [getErasRewardPoints](#geterasrewardpoints) - get reward points for the selected era

### Common tools
- [polkadotExplorerUrl](polkadotexplorerurl) - get explorer url by network, type and hex data

