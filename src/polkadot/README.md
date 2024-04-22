# The list of tools and interfaces for Polkadot Web3 Libraries

## Account
- [getAccountData](#getaccountdata) - get account info, like balances, nonce, etc...
- [getAccountNonce](#getaccountnonce) - get account current nonce
- [getAccountNonceAndBump](#getaccountnonceandbump) - get account current nonce and bump function

## Staking
- [getActiveEra | getCurrentEra](#getactiveera) - get active era number
- [getController](#getcontroller) - get staking controller, for stash account
- [getLedgerData](#getledgerdata) - get staking data, like bonded / unbonded, rewards eras...
- [getErasRewardPoints](#geterasrewardpoints) - get reward points for the selected era

## Common tools
- [polkadotExplorerUrl](polkadotexplorerurl) - get explorer url by network, type and hex data

## Account
### <a name="getaccountdata"></a>getAccountData
**Usage**
```typescript
import { getAccountData } from "common-crypto-tools/polkadot";

const data = await getAccountData(apiPromise, "account_address");
```

**Params**
- apiPromise: instance of ApiPromise
- address: string

**Return value**
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

### <a name="getaccountnonce"></a>getAccountNonce
**Usage**
```typescript
import { getAccountNonce } from "common-crypto-tools/polkadot";

const nonce = await getAccountNonce(apiPromise, "account_address");
```

### <a name="getaccountnonceandbump"></a>getAccountNonceAndBump
**Usage**
```typescript
import { getAccountNonceAndBump } from "common-crypto-tools/polkadot";

const [nonce, bump] = await getAccountNonceAndBump(apiPromise, "account_address");
// nonce === 42
const _nonce = bump(); // _nonce === 43
const __nonce = bump();// __nonce == 44
```

## Staking

### <a name="getactiveera"></a>getActiveEra or getCurrentEra
**Usage**
```typescript
import { getActiveEra, getCurrentEra } from "common-crypto-tools/polkadot";
// getActiveEra, getCurrentEra are symonims

const era = await getCurrentEra(apiPromise);
```

**Params**
- apiPromise: instance of ApiPromise

**Return value**
```typescript
type GetActiveEraResult = {
  index: number;
  start: number;
};
```

### <a name="getcontroller"></a>getController
**Usage**
```typescript
import { getController } from "common-crypto-tools/polkadot";

const controller = await getController(apiPromise, "account_address");
```

**Params**
- apiPromise: instance of ApiPromise
- address: string

**Return value**
```typescript
string | null
```

### <a name="getledgerdata"></a>getLedgerData
**Usage**
```typescript
import { getLedgerData } from "common-crypto-tools/polkadot";

const data = await getLedgerData(apiPromise, "account_address");
```

**Params**
- apiPromise: instance of ApiPromise
- address: string

**Return value**
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

### <a name="geterasrewardpoints"></a>getErasRewardPoints
**Usage**
```typescript
import { getErasRewardPoints } from "common-crypto-tools/polkadot";

const point = await getErasRewardPoints(apiPromise, 1420);
```

**Params**
- apiPromise: instance of ApiPromise
- era: number

**Return value**
```typescript
type ErasRewardPointsResult = {
  total: number;
  individual: {
    [validator: string]: number;
  };
}
```

## Common tools

### <a name="polkadotexplorerurl"></a>polkadotExplorerUrl
**Usage**
```typescript
import { polkadotExplorerUrl } from "common-crypto-tools/polkadot";

const explorer = polkadotExplorerUrl("polkadot");

explorer("account", "12zdkKxQqsdNXPJ5oDgLWtgRzGjhoKiShhkD26tXj8mPjaXA") // https://polkadot.subscan.io/account/12zdkKxQqsdNXPJ5oDgLWtgRzGjhoKiShhkD26tXj8mPjaXA
explorer("address", "12zdkKxQqsdNXPJ5oDgLWtgRzGjhoKiShhkD26tXj8mPjaXA") // https://polkadot.subscan.io/account/12zdkKxQqsdNXPJ5oDgLWtgRzGjhoKiShhkD26tXj8mPjaXA
explorer("a", "12zdkKxQqsdNXPJ5oDgLWtgRzGjhoKiShhkD26tXj8mPjaXA") // https://polkadot.subscan.io/account/12zdkKxQqsdNXPJ5oDgLWtgRzGjhoKiShhkD26tXj8mPjaXA

explorer("validator", "16DKyH4fggEXeGwCytqM19e9NFGkgR2neZPDJ5ta8BKpPbPK") // https://polkadot.subscan.io/validator/16DKyH4fggEXeGwCytqM19e9NFGkgR2neZPDJ5ta8BKpPbPK
explorer("v", "16DKyH4fggEXeGwCytqM19e9NFGkgR2neZPDJ5ta8BKpPbPK") // https://polkadot.subscan.io/validator/16DKyH4fggEXeGwCytqM19e9NFGkgR2neZPDJ5ta8BKpPbPK

explorer("extinsic", "20186359-2") // https://polkadot.subscan.io/extrinsic/20186359-2
explorer("transaction", "20186359-2") // https://polkadot.subscan.io/extrinsic/20186359-2
explorer("t", "20186359-2") // https://polkadot.subscan.io/extrinsic/20186359-2

const transactionHash: Hash = api.tx.staking.bond(...); 
// !! Hash is not the string
explorer("t", transactionHash) // https://polkadot.subscan.io/extrinsic/${stringified_hash}

const anotherExplorer = polkadotExplorerUrl("polkadot", "amazingexploreryounameit.io");
anotherExplorer("account", "12zdkKxQqsdNXPJ5oDgLWtgRzGjhoKiShhkD26tXj8mPjaXA") // https://polkadot.amazingexploreryounameit.io/account/12zdkKxQqsdNXPJ5oDgLWtgRzGjhoKiShhkD26tXj8mPjaXA
```
