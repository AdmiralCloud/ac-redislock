# AC RedisLock
This tool can be used to lock operations (e.g. make sure workers will fetch a job only once)

![example workflow](https://github.com/admiralcloud/ac-redislock/actions/workflows/node.js.yml/badge.svg)

## Breaking chnages version 5
Instead of just returning 423, a locked resource will now throw an error with a clear error message "resource_locked" and a code 423. 

## Breaking changes version 4
Version 4 no longer supports callbacks! Please use async/await instead.

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
await redisLock.lockKey(params)
```

LockKey has the following parameters
+ redisKey - STRING required name for the key
+ expires - OPTIONAL INT seconds after the lock is released, defaults to 10 seconds
+ value - OPTIONAL STRING value for this redisKey. Use it to compare/secure lock values

Lock key throws an error 423 (if lock is already active) or otherwise returns the lock value, which can be used in releaseLock function.


```
await redisLock.releaseLock(params)
```

ReleaseKey has the following parameters
+ redisKey - STRING required name for the key
+ value - if set will be compared with the redisKey value before releasing. If not matching, the function will return an error message
+ suppressMismatch - if true, no warning will be logged if the value does not match the stored one (see "multiple processes" section)

getLock has following parameters
+ redisKey - STRING required name for the key
+ value - if set it will be used to match existing redisKey value before returning. If not matching, the function will return an error message

## Examples

```
const redisLock = require('ac-redislock')

// create a Redis instance (using io-redis)
const app.redisInstance = new Redis(options)

await redisLock.init({
  redis: app.redisInstance 
})

const params = {
  redisKey: 'someMeaningfulKey',
}
try {
   // value for this lock -> set as params.value for releaseLock
  const value = await redisLock.lockKey(params)
}
catch(err) {
  // err can be 423 -> key is locked
}

// retrieve lock value later if needed before releasing lock
const value = await redisLock.getLock(params)
console.log('lock value:', value)

// redisKey is deleted and lock released
await redisLock.releaseKey(params)

```

## Multiple Processes
If you use this package on multiple instances and want to make sure only of those instances processes a job we recommend to set suppressMismatch in order to avoid error messages if a process tries to release a key even though it did not lock it.

## Links
- [Website](https://www.admiralcloud.com/)

## License
[MIT License](https://opensource.org/licenses/MIT) Copyright © 2009-present, AdmiralCloud, AdmiralCloud AG, Mark Poepping