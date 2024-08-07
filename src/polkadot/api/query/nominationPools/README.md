# nominationPools

## Methods:

### bondedPools(u32): Option<PalletNominationPoolsBondedPoolInner>

 Storage for bonded pools.

### claimPermissions(AccountId32): PalletNominationPoolsClaimPermission

 Map from a pool member account to their opted claim permission.

### counterForBondedPools(): u32

Counter for the related counted storage map

### counterForMetadata(): u32

Counter for the related counted storage map

### counterForPoolMembers(): u32

Counter for the related counted storage map

### counterForReversePoolIdLookup(): u32

Counter for the related counted storage map

### counterForRewardPools(): u32

Counter for the related counted storage map

### counterForSubPoolsStorage(): u32

Counter for the related counted storage map

### globalMaxCommission(): Option<Perbill>

 The maximum commission that can be charged by a pool. Used on commission payouts to bound

### lastPoolId(): u32

 Ever increasing number of all pools created so far.

### maxPoolMembers(): Option<u32>

 Maximum number of members that can exist in the system. If `None`, then the count

### maxPoolMembersPerPool(): Option<u32>

 Maximum number of members that may belong to pool. If `None`, then the count of

### maxPools(): Option<u32>

 Maximum number of nomination pools that can exist. If `None`, then an unbounded number of

### metadata(u32): Bytes

 Metadata for the pool.

### minCreateBond(): u128

 Minimum bond required to create a pool.

### minJoinBond(): u128

 Minimum amount to bond to join a pool.

### palletVersion(): u16

Returns the current pallet version from storage

### poolMembers(AccountId32): Option<PalletNominationPoolsPoolMember>

 Active members.

### reversePoolIdLookup(AccountId32): Option<u32>

 A reverse lookup from the pool's account id to its id.

### rewardPools(u32): Option<PalletNominationPoolsRewardPool>

 Reward pools. This is where there rewards for each pool accumulate. When a members payout is

### subPoolsStorage(u32): Option<PalletNominationPoolsSubPools>

 Groups of unbonding pools. Each group of unbonding pools belongs to a

### totalValueLocked(): u128

 The sum of funds across all pools.