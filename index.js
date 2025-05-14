const { v4: uuidV4 } = require('uuid')
const NodeCache = require('node-cache')
const { ACError } = require('ac-custom-error')
const redisLock = function() {
  // Private Variablen in der Closure
  let redis
  let cache
  let logger = console
  let logLevel = 'log'
  let suppressMismatch = false

  /**
   * @param params.redis {Instance} Redis instance to use - use IORedis or any other Redis package that supports async/await, if not provided, node-cache is used
   * @param params.logger {Instance} optional logger (e.g. Winston). Falls back to console
   * @param params.logLevel {String} optional logLevel
   */
  const init = async({ reInit, redis: redisInstance, logger: loggerInstance = console, logLevel: logLevelValue = 'log', suppressMismatch: suppressMismatchValue = false }) => {
    // only initialize if instance does not exist
    if (reInit) redis = undefined
    redis = redisInstance
    if (!redis) {
      cache = new NodeCache()
    }
    logger = logger || loggerInstance
    logLevel = logLevel || logLevelValue
    suppressMismatch = suppressMismatch || suppressMismatchValue
    // make a test connection
    if (redis) {
      const testKey = uuidV4()
      try {
        await redis.set(testKey, 1, 'EX', 1)
      }
      catch(err) {
        logger['error']({ message: 'cannotConnectToRedis' })
        throw err
      }
    }
  }

  /**
   * @param params.redisKey {String} REQUIRED identifier
   * @param params.expires {Integer} optional seconds to expire the key automatically
   */
  const lockKey = async({ redisKey, expires = 10, value = uuidV4() }) => {
    if (!redisKey) throw new ACError('lockKey_redisKey_isRequired')
    if (redis) {
      const checkValue = await redis.set(redisKey, value, 'EX', expires, 'NX')
      if (checkValue === 'OK') return value
      else throw new ACError('resource_locked', 423)
    }
    else {
      const checKValue = cache.get(redisKey)
      if (checKValue) throw new ACError('resource_locked', 423)
      cache.set(redisKey, value, expires)
      return value
    }
  }

  const releaseLock = async({ redisKey, value, suppressMismatch: suppressMismatchParam = suppressMismatch }) => {
    if (!redisKey) throw new ACError('releaseLock_redisKey_isRequired')
    // check value
    if (value) {
      let checKValue
      if (redis) {
        checKValue = await redis.get(redisKey)
      }
      else {
        checKValue = cache.get(redisKey)
      }
      if (checKValue !== value) {
        if (suppressMismatchParam) return // exit without error
        throw new ACError('releaseLock_valueMismatch')
      }
    }
    // delete key
    if (redis) {
      await redis.del(redisKey)
    }
    else {
      cache.del(redisKey)
    }
  }

  return {
    init,
    lockKey,
    releaseLock
  }
}

module.exports = redisLock()