# AC RedisLock
This tool can be used to lock operations (e.g. make sure workers will fetch a job only once)

## Requirements
Requires an existing Redis connection.

## Usage
Init function requires a valid redis instance.
+ redis - INSTANCE required Redis instance
+ logger - OPTIONAL INSTANCE logger instance (e.g. Winston)
+ logLevel - OPTIONAL STRING logLevel for the Redis operation

LockKey has the following parameters
+ redisKey - STRING required name for the key
+ expires - OPTIONAL INT seconds after the lock is released, defaults to 10 seconds
+ value - OPTIONAL STRING value for this redisKey. Use it to compare/secure lock values


ReleaseKey has the following parameters
+ redisKey - STRING required name for the key
+ value - if set will be compared with the redisKey value before releasing. If not matching, the function will return an error message


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
redisLock.lockKey(params, (err) => {
  // err can be 423 -> key is locked
  // or NULL -> key is not yet locked, but now is
})

redisLock.releaseKey(params, (err) => {
  // redisKey is deleted and lock released
})


```
## License
MIT

## Current issues/infos
NONE