![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fdmitrytarassov%2Fcrypto-tools%2Frefs%2Fheads%2Fmain%2Fpackages%2Fcommon-crypto-tools%2Fpackage.json&query=%24.version&style=for-the-badge&label=Common%20Crypto%20Tools&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fcommon-crypto-tools)

# The list of common tools for web3 and crypto

#### Polkadot Typed Api was moved to another repository. [polkadot-typed-api](https://www.npmjs.com/package/polkadot-typed-api)
#### EigenLayer Tools were moved to another repository. [eigenlayer-tools](https://www.npmjs.com/package/eigenlayer-tools)

## Tools
- [abbreviateAddress](#abbreviateaddress) - truncate address, like `0x387...dCE`
- addHTMLBreaksToAddress - add invisible breaks to string, to make it breakable
- [removeLeading0x](#removeleading0x) - remove leading 0x from string, useful for logs parsing `0x387...dCE` -> `387...dCE`
- [toBigNumber](#to_big_number) - transform any digital value to `EthersBigNumber`
- [toBigFloat](#to_big_float) - transform any digital value to floated `BigNumber`
- [explorerUrl](#explorerUrl) - generates blockchain explorer URLs for transactions, addresses, and blocks.

## <a name="abbreviateaddress"></a>abbreviateAddress
**Usage**
```typescript
import { abbreviateAddress } from "common-crypto-tools";

const shortedAddress = await abbreviateAddress("account_address", 3); // "acc...ess"
```

**Params**
- address: `string`
- options or symbols count

**Options**

```typescript
type Size = {
  start: number;
  end: number;
  include0x?: boolean;
};

type Options = {
  size: number | [number, number] | Size;
  symbolsCount?: number;
  symbol?: string;
  ignoreList?: string[];
}
```

**Return value**
```typescript
string
```

**Examples**
```typescript
import { abbreviateAddress } from "common-crypto-tools";

abbreviateAddress("0x3877fbDe425d21f29F4cB3e739Cf75CDECf8EdCE")
// "0x3877...EdCE")

abbreviateAddress("0x3877fbDe425d21f29F4cB3e739Cf75CDECf8EdCE", 3)
// "0x387...dCE"

abbreviateAddress("0x3877fbDe425d21f29F4cB3e739Cf75CDECf8EdCE", {
  size: 2,
})
// "0x38...CE"
  
abbreviateAddress("0x3877fbDe425d21f29F4cB3e739Cf75CDECf8EdCE", {
  size: [1, 2],
})
// "0x3...CE"
  
abbreviateAddress("0x3877fbDe425d21f29F4cB3e739Cf75CDECf8EdCE", {
  size: {
    start: 1,
    end: 2,
  },
})
// "0x3...CE"
  
abbreviateAddress("0x3877fbDe425d21f29F4cB3e739Cf75CDECf8EdCE", {
  size: {
    start: 3,
    end: 2,
    include0x: true,
  },
})
// "0x3...CE"
  
abbreviateAddress("0x3877fbDe425d21f29F4cB3e739Cf75CDECf8EdCE", {
  size: 2,
  symbol: "-",
})
// "0x38---CE"
  
abbreviateAddress("0x3877fbDe425d21f29F4cB3e739Cf75CDECf8EdCE", {
  size: 2,
  symbol: "-",
  symbolsCount: 2,
})
// "0x38--CE"
```

## <a name="removeleading0x"></a>removeLeading0x
**Usage**
```typescript
import { removeLeading0x } from "common-crypto-tools";

removeLeading0x("0x60b521110672f6f871978fd3ac4a835b5e30c3fa727c04c70dbc543fcad38b0e"); // 60b521110672f6f871978fd3ac4a835b5e30c3fa727c04c70dbc543fcad38b0e
```

**Params**
- value: `string`

**Return value**
```typescript
string
```

## <a name="to_big_number"></a>toBigNumber
**Usage**
```typescript
import { toBigNumber } from "common-crypto-tools";

const value = toBigNumber(123321); // BigNumber.from(123321)
```

**Params**
- value: `BigNumber | Bytes | bigint | string | number`

**Return value**
```typescript
BigNumber
```

## <a name="to_big_float"></a>toBigFloat
**Usage**
```typescript
import { toBigFloat } from "common-crypto-tools";

const value = toBigFloat(123321.1234); // new BigNumber(123321.1234)
```

**Params**
- value: `EthersBigNumber | string | number`

**Return value**
```typescript
BigNumber
```

## <a name="explorerUrl"></a>explorerUrl

The `explorerUrl` function generates blockchain explorer URLs for transactions, addresses, and blocks. It supports multiple blockchain networks and allows customization of the base URL and paths.

### Features
- Generates URLs for transactions, addresses, and blocks.
- Supports Ethereum, Arbitrum, Polygon, Binance Smart Chain, Optimism, Fantom, Avalanche, Solana, Tron, and Cosmos.
- Allows customization of the base URL and path segments.

### Usage

#### Basic Usage
```typescript
import { explorerUrl } from 'common-crypto-tools';

// Ethereum Explorer
const ethExplorer = explorerUrl("ethereum");
console.log(ethExplorer.tx("0x123")); // Output: https://etherscan.io/tx/0x123
console.log(ethExplorer.address("0xabc")); // Output: https://etherscan.io/address/0xabc
console.log(ethExplorer.block(123456)); // Output: https://etherscan.io/block/123456

// Polygon Explorer
const polygonExplorer = explorerUrl("polygon");
console.log(polygonExplorer.tx("0x456")); // Output: https://polygonscan.com/tx/0x456
```

#### Customization
```typescript
// Custom Ethereum Explorer
const customEthExplorer = explorerUrl("ethereum", {
  base: "https://custom.etherscan.io",
  tx: "transaction",
  address: "addr",
  block: "blk",
});

console.log(customEthExplorer.tx("0x123")); // Output: https://custom.etherscan.io/transaction/0x123
console.log(customEthExplorer.address("0xabc")); // Output: https://custom.etherscan.io/addr/0xabc
console.log(customEthExplorer.block(123456)); // Output: https://custom.etherscan.io/blk/123456
```

#### Error Handling
```typescript
// Unsupported Network
try {
  explorerUrl("unknown");
} catch (error) {
  console.error(error.message); // Output: "Unsupported network: unknown"
}