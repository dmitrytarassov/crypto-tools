# nominationPools

## Methods:

### adjustPoolDeposit(poolId)

Top up the deficit or withdraw the excess ED from the pool.

### applySlash(memberAccount)

Apply a pending slash on a member.

### bondExtra(extra)

Bond `extra` more funds from `origin` into the pool to which they already belong.

### bondExtraOther(member, extra)

`origin` bonds funds from `extra` for some pool member `member` into their respective

### chill(poolId)

Chill on behalf of the pool.

### claimCommission(poolId)

Claim pending commission.

### claimPayout()

A bonded member can use this to claim their payout based on the rewards that the pool

### claimPayoutOther(other)

`origin` can claim payouts on some pool member `other`'s behalf.

### create(amount, root, nominator, bouncer)

Create a new delegation pool.

### createWithPoolId(amount, root, nominator, bouncer, poolId)

Create a new delegation pool with a previously used pool id

### join(amount, poolId)

Stake funds with a pool. The amount to bond is transferred from the member to the

### migrateDelegation(memberAccount)

Migrates delegated funds from the pool account to the `member_account`.

### migratePoolToDelegateStake(poolId)

Migrate pool from [`adapter::StakeStrategyType::Transfer`] to

### nominate(poolId, validators)

Nominate on behalf of the pool.

### poolWithdrawUnbonded(poolId, numSlashingSpans)

Call `withdraw_unbonded` for the pools account. This call can be made by any account.

### setClaimPermission(permission)

Allows a pool member to set a claim permission to allow or disallow permissionless

### setCommission(poolId, newCommission)

Set the commission of a pool.

### setCommissionChangeRate(poolId, changeRate)

Set the commission change rate for a pool.

### setCommissionClaimPermission(poolId, permission)

Set or remove a pool's commission claim permission.

### setCommissionMax(poolId, maxCommission)

Set the maximum commission of a pool.

### setConfigs(minJoinBond, minCreateBond, maxPools, maxMembers, maxMembersPerPool, globalMaxCommission)

Update configurations for the nomination pools. The origin for this call must be

### setMetadata(poolId, metadata)

Set a new metadata for the pool.

### setState(poolId, state)

Set a new state for the pool.

### unbond(memberAccount, unbondingPoints)

Unbond up to `unbonding_points` of the `member_account`'s funds from the pool. It

### updateRoles(poolId, newRoot, newNominator, newBouncer)

Update the roles of the pool.

### withdrawUnbonded(memberAccount, numSlashingSpans)

Withdraw unbonded funds from `member_account`. If no bonded funds can be unbonded, an