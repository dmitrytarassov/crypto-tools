# system

## Methods:

### account(AccountId32): FrameSystemAccountInfo

The full account information for a particular account ID.

### Deprecated: ~~allExtrinsicsLen(): Option&lt;u32&gt;~~

Total length (in bytes) for all extrinsics put together, for the current block.

### Deprecated: ~~authorizedUpgrade(): Option&lt;FrameSystemCodeUpgradeAuthorization&gt;~~

`Some` if a code upgrade has been authorized.

### blockHash(u32): H256

Map of block numbers to block hashes.

### blockWeight(): FrameSupportDispatchPerDispatchClassWeight

The current weight for the block.

### digest(): SpRuntimeDigest

Digest of the current block, also part of the block header.

### eventCount(): u32

The number of events in the `Events&lt;T&gt;` list.

### events(): Vec&lt;FrameSystemEventRecord&gt;

Events deposited for the current block.

### Deprecated: ~~executionPhase(): Option&lt;FrameSystemPhase&gt;~~

The execution phase of the block.

### Deprecated: ~~extrinsicCount(): Option&lt;u32&gt;~~

Total extrinsics count for the current block.

### Deprecated: ~~extrinsicData(u32): Bytes~~

Extrinsics data for the current block (maps an extrinsic's index to its data).

### inherentsApplied(): bool

Whether all inherents have been applied.

### lastRuntimeUpgrade(): Option&lt;FrameSystemLastRuntimeUpgradeInfo&gt;

Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.

### number(): u32

The current block number being processed. Set by `execute_block`.

### palletVersion(): u16

Returns the current pallet version from storage

### parentHash(): H256

Hash of the previous block.

### upgradedToTripleRefCount(): bool

True if we have upgraded so that AccountInfo contains three types of `RefCount`. False

### upgradedToU32RefCount(): bool

True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.