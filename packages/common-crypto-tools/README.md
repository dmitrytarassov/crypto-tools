![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fdmitrytarassov%2Fcrypto-tools%2Frefs%2Fheads%2Fmain%2Fpackages%2Fcommon-crypto-tools%2Fpackage.json&query=%24.version&style=for-the-badge&label=Common%20Crypto%20Tools&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Fcommon-crypto-tools)

# The list of common tools for web3 and crypto

#### Polkadot Typed Api was moved to another repository. [polkadot-typed-api](https://www.npmjs.com/package/polkadot-typed-api)
#### EigenLayer Tools were moved to another repository. [eigenlayer-tools](https://www.npmjs.com/package/eigenlayer-tools)

## Tools
- [abbreviateAddress](#abbreviateaddress) - truncate address, like `0x387...dCE`
- [addHTMLBreaksToAddress](#addHTMLBreaksToAddress) - add invisible breaks to string, to make it breakable
- [removeLeading0x](#removeleading0x) - remove leading 0x from string, useful for logs parsing `0x387...dCE` -> `387...dCE`
- [toBigNumber](#to_big_number) - transform any digital value to `EthersBigNumber`
- [toBigFloat](#to_big_float) - transform any digital value to floated `BigNumber`
- [explorerUrl](#explorerUrl) - generates blockchain explorer URLs for transactions, addresses, and blocks.

## <a name="abbreviateaddress"></a>abbreviateAddress

Shortens blockchain addresses by keeping characters at the start and end, replacing the middle with symbols.

### Parameters
- `address`: The blockchain address to abbreviate.
- `options`: Config for customization:
    - `number`: Sets characters to keep at start/end.
    - `Options` (object): Advanced settings like size, symbol, and ignore list.

### Usage

#### Default
```typescript
import { abbreviateAddress } from "common-crypto-tools";

abbreviateAddress("0x1234567890abcdef1234567890abcdef");
// Output: "0x1234...cdef"
```

#### Custom Size and Symbol
```typescript
abbreviateAddress("0x1234567890abcdef1234567890abcdef", {
  size: { start: 4, end: 4 },
  symbol: "*",
  symbolsCount: 5,
});
// Output: "0x1234*****cdef"
```

#### Ignore List
```typescript
abbreviateAddress("0x1234567890abcdef1234567890abcdef", {
  ignoreList: ["0x1234567890abcdef1234567890abcdef"],
});
// Output: "0x1234567890abcdef1234567890abcdef"
```

#### Advanced
```typescript
abbreviateAddress("0x1234567890abcdef1234567890abcdef", {
  size: [2, 6],
  symbol: ".",
});
// Output: "0x12...cdef12"
```

## <a name="addHTMLBreaksToAddress"></a>addHTMLBreaksToAddress

The `addHTMLBreaksToAddress` function adds invisible HTML breaks to a string (e.g., a blockchain address) at regular intervals, making it more readable or ensuring proper wrapping in HTML contexts.

### Parameters
- `address` (string): The input string to format. Defaults to an empty string.
- `lettersBeforeSpace` (number): The number of characters between each inserted invisible space. Must be a positive number.

### Returns
A `string` with invisible HTML breaks added at the specified intervals.

### Usage

#### Default Usage
```typescript
import { addHTMLBreaksToAddress } from 'common-crypto-tools';

console.log(addHTMLBreaksToAddress("0x1234567890abcdef"));
// Output: "0x123&#8203;4567&#8203;890a&#8203;bcde&#8203;f"
```

#### Custom Interval
```typescript
console.log(addHTMLBreaksToAddress("0x1234567890abcdef", 6));
// Output: "0x1234&#8203567890&#8203abcdef"
```

#### Error Handling
```typescript
try {
  addHTMLBreaksToAddress("0x1234567890abcdef", -1);
} catch (error) {
  console.error(error.message);
  // Output: "Param lettersBeforeSpace is to small: -1"
}
```

## <a name="removeleading0x"></a>removeLeading0x
Removes the `0x` prefix from a string if it exists.

### Parameters
- `data` (string): Input string.

### Returns
A string without the `0x` prefix, or the original string if no prefix is found.

### Examples
```typescript
removeLeading0x("0x123456"); // "123456"
removeLeading0x("123456");   // "123456"
removeLeading0x("0x");       // ""
```

## <a name="to_big_number"></a>toBigNumber
Converts a `BigNumberish` value into an Ethers `BigNumber` instance.

### Parameters
- `value` (`BigNumberish`): The input value to convert. Can be a number, string, or other compatible type.

### Returns
An Ethers `BigNumber` instance representing the input value.

### Examples
```typescript
import { toBigNumber } from 'common-crypto-tools';

// Convert number
console.log(toBigNumber(123).toString());
// Output: "123"

// Convert string
console.log(toBigNumber("456").toString());
// Output: "456"

// Convert hex string
console.log(toBigNumber("0x1a").toString());
// Output: "26"
```

## <a name="to_big_float"></a>toBigFloat
Converts a value (BigNumber, Ethers BigNumber, or other valid input) into a `BigNumber` instance for consistent floating-point operations.

### Parameters
- `value` (`BigNumber.Value | EthersBigNumber`): The input value to convert. Supports BigNumber-compatible formats or Ethers BigNumber.

### Returns
A `BigNumber` instance representing the input value.

### Examples
```typescript
import { toBigFloat } from 'common-crypto-tools';
import { BigNumber as EthersBigNumber } from 'ethers';

// Convert Ethers BigNumber
const ethersValue = EthersBigNumber.from("1000000000000000000");
console.log(toBigFloat(ethersValue).toString());
// Output: "1000000000000000000"

// Convert number
console.log(toBigFloat(123.456).toString());
// Output: "123.456"

// Convert string
console.log(toBigFloat("12345.6789").toString());
// Output: "12345.6789"
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