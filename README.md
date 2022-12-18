# AC RedisLock
This tool can be used to lock operations (e.g. make sure workers will fetch a job only once)

![example workflow](https://github.com/admiralcloud/ac-redislock/actions/workflows/node.js.yml/badge.svg)


## Breaking changes version 2
RedisLock will now be only initialized once - if parameters redis, logger, logLevel, suppressMismatch are already set (by first init call) they are re-used and no longer overwritten.

If you want the old behaviour, init again with parameter reInit=true.

## Requirements
Requires an existing Redis connection.

## Usage
Init function requires a valid redis instance.
+ redis - INSTANCE required Redis instance
+ logger - OPTIONAL INSTANCE logger instance (e.g. Winston)
+ logLevel - OPTIONAL STRING logLevel for the Redis operation
+ suppressMismatch - OPTIONAL BOOL - if true, release mismatches are not logged
+ reInit - OPTIONAL BOOL - if true, you can re-init ac-redisLock, otherwise existing values (from first init) will be used (the latter is the default behaviour)

Those options will init ac-redislock once. Calling it again will not have any effect as long as you do not use reInit=true.

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
+ suppressMismatch - if true, no warning will be logged if the value does not match the stored one (see "multiple processes" section)
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

## License
[MIT License](https://opensource.org/licenses/MIT) Copyright © 2009-present, AdmiralCloud, AdmiralCloud AG, Mark Poepping