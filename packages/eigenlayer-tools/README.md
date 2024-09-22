![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fdmitrytarassov%2Fcrypto-tools%2Frefs%2Fheads%2Fmain%2Fpackages%2Feigenlayer-tools%2Fpackage.json&query=%24.version&style=for-the-badge&label=EigenLayer%20Tools&link=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Feigenlayer-tools)

# The list of common tools for [EigenLayer](https://eigenlayer.xyz/)

## Tools
- [getOperatorDelegatorsHistory](#getoperatordelegatorshistory) - history of increasing and decreasing restakes to operator

## Contacts | ethers-v5
- [delegationManagerContract](#delegationmanagercontract) - get delegationManagerContract contract instance

### <a name="getoperatordelegatorshistory"></a>getOperatorDelegatorsHistory
**Usage**
```typescript
import { getOperatorDelegatorsHistory } from "common-crypto-tools/eigenlayer";

const provider = new ethers.providers.JsonRpcProvider(
  "https://eth-mainnet.g.alchemy.com/v2/YOUR_API_KEY"
);

const data = await getOperatorDelegatorsHistory(provider, {
  fromBlock: 19576120,
  operator: "OPERATOR_CONTRACT",
}); // Map<string, Map<string, OperatorReStakerAction[]>>
```

**Params**
- provider: `ethers.providers.JsonRpcProvider`
- options: `Options`

**Options**

```typescript
type Options = {
  fromBlock?: number;
  toBlock?: number;
  operator: string;
  delegationContract?: string; // By default it's EigenLayerDelegationContract: 0x39053D51B77DC0d36036Fc1fCc8Cb819df8Ef37A
}
```

**Return value**
```typescript
// key is delegator address
Map<string, OperatorReStakerAction>

type OperatorReStakerAction = {
  amount: BigNumber;
  block: BigNumber;
  action:
    | typeof OperatorSharesDecreasedAction
    | typeof OperatorSharesIncreasedAction;
};
```

**Examples**
```typescript
import { getOperatorDelegatorsHistory } from "common-crypto-tools/eigenlayer";

const data = await getOperatorDelegatorsHistory(provider, {
  fromBlock: 19576120,
  operator: "0xd172a86a0f250aec23ee19c759a8e73621fe3c10",
});

const history = data.get("0x3877fbDe425d21f29F4cB3e739Cf75CDECf8EdCE");
```

### <a name="delegationmanagercontract"></a>delegationManagerContract
**Usage**
```typescript
import { delegationManagerContract } from "common-crypto-tools/eigenlayer";

const provider = new ethers.providers.JsonRpcProvider(
  "https://eth-mainnet.g.alchemy.com/v2/YOUR_API_KEY"
);

const contract = delegationManagerContract(provider);
// example
const data = await contract.getDelegatableShares("0x3877fbDe425d21f29F4cB3e739Cf75CDECf8EdCE");
```