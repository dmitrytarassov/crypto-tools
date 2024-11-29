# balances

## Methods:

### burn(value, keepAlive)

Burn the specified liquid free balance from the origin account.

### forceAdjustTotalIssuance(direction, delta)

Adjust the total issuance in a saturating way.

### forceSetBalance(who, newFree)

Set the regular balance of a given account.

### forceTransfer(source, dest, value)

Exactly as `transfer_allow_death`, except the origin must be root and the source account

### forceUnreserve(who, amount)

Unreserve some balance from a user by force.

### transferAll(dest, keepAlive)

Transfer the entire transferable balance from the caller account.

### transferAllowDeath(dest, value)

Transfer some liquid free balance to another account.

### transferKeepAlive(dest, value)

Same as the [`transfer_allow_death`] call, but with a check that the transfer will not

### upgradeAccounts(who)

Upgrade a specified account.