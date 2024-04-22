![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fdmitrytarassov%2Fcrypto-tools%2Fmain%2Fpackage.json&query=%24.version&style=for-the-badge&label=Common%20Crypto%20Tools&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fcommon-crypto-tools%3FactiveTab%3Dreadme)

# The list of tools for web3 and crypto

## [Tools](https://github.com/dmitrytarassov/crypto-tools/blob/main/src/common/README.md)
- [abbreviateAddress](https://github.com/dmitrytarassov/crypto-tools/blob/main/src/common/README.md#abbreviateaddress) - truncate address, like `0x387...dCE`
- [removeLeading0x](https://github.com/dmitrytarassov/crypto-tools/blob/main/src/common/README.md#removeleading0x) - remove leading 0x from string, useful for logs parsing `0x387...dCE` -> `387...dCE`
- [toBigNumber](https://github.com/dmitrytarassov/crypto-tools/blob/main/src/common/README.md#to_big_number) - transform any digital value to `BigNumber`

# [EigenLayer](https://github.com/dmitrytarassov/crypto-tools/blob/main/src/eigenlayer/README.md)
- [getOperatorDelegatorsHistory](https://github.com/dmitrytarassov/crypto-tools/blob/main/src/eigenlayer/README.md#getoperatordelegatorshistory) - history of increasing and decreasing restakes to operator
- [delegationManagerContract](https://github.com/dmitrytarassov/crypto-tools/blob/main/src/eigenlayer/README.md#delegationmanagercontract) - get delegationManagerContract contract instance

## [Polkadot](https://github.com/dmitrytarassov/crypto-tools/blob/main/src/polkadot/README.md)
### Account
- [getAccountData](https://github.com/dmitrytarassov/crypto-tools/blob/main/src/polkadot/README.md#getaccountdata) - get account info, like balances, nonce, etc...
- [getAccountNonce](https://github.com/dmitrytarassov/crypto-tools/blob/main/src/polkadot/README.md#getaccountnonce) - get account current nonce
- [getAccountNonceAndBump](https://github.com/dmitrytarassov/crypto-tools/blob/main/src/polkadot/README.md#getaccountnonceandbump) - get account current nonce and bump function

### Staking
- [getActiveEra | getCurrentEra](https://github.com/dmitrytarassov/crypto-tools/blob/main/src/polkadot/README.md#getactiveera) - get active era number
- [getController](https://github.com/dmitrytarassov/crypto-tools/blob/main/src/polkadot/README.md#getcontroller) - get staking controller, for stash account
- [getLedgerData](https://github.com/dmitrytarassov/crypto-tools/blob/main/src/polkadot/README.md#getledgerdata) - get staking data, like bonded / unbonded, rewards eras...
- [getErasRewardPoints](https://github.com/dmitrytarassov/crypto-tools/blob/main/src/polkadot/README.md#geterasrewardpoints) - get reward points for the selected era

### Common tools
- [polkadotExplorerUrl](https://github.com/dmitrytarassov/crypto-tools/blob/main/src/polkadot/README.md#polkadotexplorerurl) - get explorer url by network, type and hex data
