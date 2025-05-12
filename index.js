const { v4: uuidV4 } = require('uuid')
const NodeCache = require('node-cache')
const { ACError } = require('ac-custom-error')


const redisLock = function() {
  /**
   * @param params.redis {Instance}  Redis instance to use - use IORedis or any other Redis package that supports async/await, if not provided, node-cache is used
   * @param params.logger {Instance} optional logger (e.g. Winston). Falls back to console
   * @param params.logLevel {String} optional logLevel
   */

  const init = async({ reInit, redis, logger = console, logLevel = 'log', suppressMismatch = false }) => {
    // only initialize if instance does not exist
    if (reInit) this.redis = undefined
    this.redis = redis
    if (!this.redis) {
      this.cache = new NodeCache()
    }
    this.logger = this.logger || logger
    this.logLevel = this.logLevel || logLevel
    this.suppressMismatch = this.suppressMismatch || suppressMismatch

    // make a test connection
    if (this.redis) {
      const testKey = uuidV4()
      try {
        await this.redis.set(testKey, 1, 'EX', 1)
      }
      catch(err) {
        this.logger['error']({ message: 'cannotConnectToRedis' })
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

    if (this.redis) {
      const checkValue = await this.redis.set(redisKey, value, 'EX', expires, 'NX')
      if (checkValue === 'OK') return value
      else throw new ACError('resource_locked', 423)
    }
    else {
      const checKValue = this.cache.get(redisKey)
      if (checKValue) throw new ACError('resource_locked', 423)
      this.cache.set(redisKey, value, expires)
      return value
    }
  }

  const releaseLock = async({ redisKey, value, suppressMismatch = this.suppressMismatch  }) => {
    if (!redisKey) throw new ACError('releaseLock_redisKey_isRequired')

    // check value
    if (value) {
      let checKValue
      if (this.redis) {
          checKValue = await this.redis.get(redisKey)
      }
      else {
       checKValue = this.cache.get(redisKey)
      }
      if (checKValue !== value) {
        if (suppressMismatch) return // exit without error 
        throw new ACError('releaseLock_valueMismatch')
      }
    }

    // delete key
    if (this.redis) {
      await this.redis.del(redisKey)
    }
    else {
      this.cache.del(redisKey)
    }
  }

  return {
    init,
    lockKey,
    releaseLock
  }
}

module.exports = redisLock()
