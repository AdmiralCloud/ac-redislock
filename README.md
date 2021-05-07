# AC RedisLock
This tool can be used to lock operations (e.g. make sure workers will fetch a job only once)

## Requirements
Requires an existing Redis connection.

## Usage
Init function requires a valid redis instance.
+ redis - INSTANCE required Redis instance
+ logger - OPTIONAL INSTANCE logger instance (e.g. Winston)
+ logLevel - OPTIONAL STRING logLevel for the Redis operation
+ suppressMismatch - OPTIONAL BOOL - if true, release mismatches are not logged

```
redisLock.lockKey(params, callback)
```

LockKey has the following parameters
+ redisKey - STRING required name for the key
+ expires - OPTIONAL INT seconds after the lock is released, defaults to 10 seconds
+ value - OPTIONAL STRING value for this redisKey. Use it to compare/secure lock values
+ callback - returns error 423 (if lock is already active) or null as error and the value of the lock (which can be used using releaseLock)


```
redisLock.releaseLock(params, [callback])
```

ReleaseKey has the following parameters
+ redisKey - STRING required name for the key
+ value - if set will be compared with the redisKey value before releasing. If not matching, the function will return an error message
+ suppressMismatch - if true, no warning will be locked if the value does not match the stored one (see "multiple processes" section)
+ optional callback - returns error or null

## Examples

```
const redisLock = require('ac-redislock')

// create a Redis instance (using io-redis)
const app.redisInstance = new Redis(options)

redisLock.init({
  redis: app.redisInstance 
})

const params = {
  redisKey: 'someMeaningfulKey',
}
redisLock.lockKey(params, (err, value) => {
  // err can be 423 -> key is locked
  // or NULL -> key is not yet locked, but now is
  // value for this lock -> set as params.value for releaseLock
})

redisLock.releaseKey(params, (err) => {
  // redisKey is deleted and lock released
})


```

## Multiple Processes
If you use thie package on multiple instances and want to make sure only of those instances processes a job we recommend to set suppressMismatch in order to avoid error messages if a process tries to release a key even though it did not lock it.

## Links
- [Website](https://www.admiralcloud.com/)
- [Twitter (@admiralcloud)](https://twitter.com/admiralcloud)
- [Facebook](https://www.facebook.com/MediaAssetManagement/)

## License
[MIT License](https://opensource.org/licenses/MIT) Copyright © 2009-present, AdmiralCloud, mmpro GmbH, Mark Poepping