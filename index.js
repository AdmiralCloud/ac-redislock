const _ = require('lodash')
const uuidV4 = require('uuid/v4')

const redisLock = () => {
  /**
   * @param params.redis {Instance} REQUIRED Redis instance to use
   * @param params.logger {Instance} optional logger (e.g. Winston). Falls back to console
   * @param params.logLevel {String} optional logLevel
   */
  const init = (params) => {
    this.redis = params.redis
    this.logger = _.get(params, 'logger', console)
    this.logLevel = _.get(params, 'logLevel', 'silly')
  }

  /**
   * @param params.redisKey {String} REQUIRED identifier
   * @param params.expires {Integer} optional seconds to expire the key automatically
   * @param cb (err or null) err can be 423 (redis key is locked) or a real error or null
   */
  const lockKey = (params, cb) => {
    if (!this.redis) return cb({ message: 'redisNotAvailable', initiator: 'ac-redisLock' })

    const redisKey = params.redisKey
    if (!redisKey) return cb({ message: 'redisKey_isRequired', initiator: 'ac-redisLock' })
    const expires = (params.expires && parseInt(params.expires)) || 10 // 10 seconds default value
    const value = params.value || uuidV4()

    this.redis.set(redisKey, value, 'EX', expires, 'NX', (err, result) => {
      this.logger[this.logLevel]('ac-redisLock: REDIS LOCK status for key %s expires %s status %s', redisKey, expires, (result || 423))
      if (err) {
        if (_.get(err, 'message') === 'Connection is closed.') {
          return cb({ status: 503, message: 'redisDown' }) // return 503 to signal a problem with Redis
        }
        return cb(err)
      }
      if (result === 'OK') return cb(null, value)
      return cb(423) // the key is already locked
    })
  }

  return {
    init,
    lockKey
  }
}

module.exports = redisLock()
