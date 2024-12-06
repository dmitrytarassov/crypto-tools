# staking

## Methods:

### payoutStakers(validatorStash, era)

Pay out next page of the stakers behind a validator for the given era.

### payoutStakersByPage(validatorStash, era, page)

Pay out a page of the stakers behind a validator for the given era and page.

### validate(validatorPrefsObject)

generates a transaction to validate the staking conditions validatorPrefsObject: { blocked, commission }