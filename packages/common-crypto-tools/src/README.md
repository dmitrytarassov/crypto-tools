# The list of common tools for web3 and crypto

## Tools
- [abbreviateAddress](#abbreviateaddress) - truncate address, like `0x387...dCE`
- [removeLeading0x](https://github.com/dmitrytarassov/crypto-tools/blob/main/src/common/README.md#removeleading0x) - remove leading 0x from string, useful for logs parsing `0x387...dCE` -> `387...dCE`
- [toBigNumber](#to_big_number) - transform any digital value to `EthersBigNumber`
- [toBigFloat](#to_big_float) - transform any digital value to floated `BigNumber`

### <a name="abbreviateaddress"></a>abbreviateAddress
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

### <a name="removeleading0x"></a>removeLeading0x
**Usage**
```typescript
import { removeLeading0x } from "common-crypto-tools/common";

removeLeading0x("0x60b521110672f6f871978fd3ac4a835b5e30c3fa727c04c70dbc543fcad38b0e"); // 60b521110672f6f871978fd3ac4a835b5e30c3fa727c04c70dbc543fcad38b0e
```

**Params**
- value: `string`

**Return value**
```typescript
string
```

### <a name="to_big_number"></a>toBigNumber
**Usage**
```typescript
import { toBigNumber } from "common-crypto-tools/common";

const value = toBigNumber(123321); // BigNumber.from(123321)
```

**Params**
- value: `BigNumber | Bytes | bigint | string | number`

**Return value**
```typescript
BigNumber
```

### <a name="to_big_float"></a>toBigFloat
**Usage**
```typescript
import { toBigFloat } from "common-crypto-tools/common";

const value = toBigFloat(123321.1234); // new BigNumber(123321.1234)
```

**Params**
- value: `EthersBigNumber | string | number`

**Return value**
```typescript
BigNumber
```