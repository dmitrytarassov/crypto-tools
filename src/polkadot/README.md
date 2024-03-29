# The list of tools and interfaces for Polkadot Web3 Libraries

## Tools
- [getAccountData](#getaccountdata) - get account info, like balances, nonce, etc...
- [getLedgerData](#getledgerdata) - get staking data, like bonded / unbonded, rewards eras...

### <a name="getaccountdata"></a>getAccountData
**Params**
- apiPromise: instance of ApiPromise
- address: string

**Response**
```typescript
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
}
// or
null
```

### <a name="getledgerdata"></a>getLedgerData
**Params**
- apiPromise: instance of ApiPromise
- address: string

**Response**
```typescript
type Staking_Ledger_Json = {
  stash: string;
  total: string;
  active: string;
  unlocking: string[];
  claimedRewards: number[];
}
// or
null
```