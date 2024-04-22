# The list of tools and interfaces for Polkadot Web3 Libraries

## Tools
- [getAccountData](#getaccountdata) - get account info, like balances, nonce, etc...
- [getLedgerData](#getledgerdata) - get staking data, like bonded / unbonded, rewards eras...
- [getController](#getcontroller) - get staking controller, for stash account
- [getAccountNonce](#getaccountnonce) - get account current nonce
- [getAccountNonceAndBump](#getaccountnonceandbump) - get account current nonce and bump function

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