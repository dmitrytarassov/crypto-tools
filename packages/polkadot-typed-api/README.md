# Polkadot Typed Api
The universal typed wrapper for polkadot ApiPromise.

## General idea

### Use this
```typescript
import { ApiPromise, WsProvider } from "@polkadot/api";
import { api } from "polkadot-typed-api";

const connecton = await ApiPromise.create({
  provider: new WsProvider(/*provider url*/),
});

const validators = await api.query.staking.validators(connecton);
```

### Instead of this
```typescript
import { ApiPromise, WsProvider } from "@polkadot/api";

const connecton = await ApiPromise.create({
  provider: new WsProvider(/*provider url*/),
});

const validators = await connecton.query.staking.validators();
```

### Because
```typescript
await api.query.staking.validators(connecton); // returns typed data
type Staking_Validators_Json = {
  commission: number;
  blocked: boolean;
};

await connecton.query.staking.validators(); // Returns Codec and you should guess what to do with that!
```

## Installation
```shell
npm i polkadot-typed-api
```

## Usage

### Import
```typescript
import { api } from "polkadot-typed-api";
```

### Typescript
```typescript
import { ApiPromise, WsProvider } from "@polkadot/api";
import { api } from "polkadot-typed-api";

const connecton = await ApiPromise.create({
  provider: new WsProvider(/*provider url*/),
});

const data = api["query" || "rpc" || "tx"][palletName][methodName](connection, ...params);
```

### Typed Pallets:
| Pallet                                                                                                                                                    | Fully Typed | Tests Coverage |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------:|:--------------:|
| [api.query.nominationPools](https://github.com/dmitrytarassov/crypto-tools/blob/main/packages/polkadot-typed-api/src/api/query/nominationPools/README.md) |      -      |       5%       |
| api.query.proxy                                                                                                                                           |      -      |       5%       |
| [api.query.system](https://github.com/dmitrytarassov/crypto-tools/blob/main/packages/polkadot-typed-api/src/api/query/system/README.md)                   |      +      |      100%      |
| [api.query.timestamp](https://github.com/dmitrytarassov/crypto-tools/blob/main/packages/polkadot-typed-api/src/api/query/timestamp/README.md)             |      +      |      100%      |
| api.query.session                                                                                                                                         |      -      |      10%       |
| api.query.staking                                                                                                                                         |      -      |       5%       |
| rpc.system.accountNextIndex                                                                                                                               |      -      |       1%       |
| [api.tx.balances](https://github.com/dmitrytarassov/crypto-tools/blob/main/packages/polkadot-typed-api/src/api/tx/balances/README.md)                     | + | 100% |

### Types usage
```typescript
import type { Staking_Ledger_Json } from "polkadot-typed-api/types/api/query/staking/ledger";
import { api } from "polkadot-typed-api";

// Define variable type
let unblocking: Staking_Ledger_Json['unlocking'] = [];

const data = await api.query.staking.ledger(connection, account); // Staking_Ledger_Json
if (data) {
  // Set-Up variable value
  unblocking = data.unblocking;
}
```

### Useful Utils
- `awaitTransaction` - await transaction cancellation
- `polkadotExplorerUrl` - get subscan or another explorer link url by params 

```typescript
import { utils } from "polkadot-typed-api";
```