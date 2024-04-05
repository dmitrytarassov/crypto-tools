# The list of common tools for web3 and crypto

## Tools
- [abbreviateAddress](#abbreviateaddress) - truncate address, like `0x387...dCE`

### <a name="abbreviateaddress"></a>abbreviateAddress
**Usage**
```typescript
import { abbreviateAddress } from "common-crypto-tools";

const shortedAddress = await abbreviateAddress("account_address", 3); // "acc...ess"
```

**Params**
- address: string
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