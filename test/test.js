const redisLock = require('../index')
const expect = require('chai').expect
const { v4: uuidV4 } = require('uuid')
const { setTimeout: sleep } = require('node:timers/promises')

const Redis = require('ioredis')
const redis = new Redis()

const testkey = uuidV4()
const expectedLockValue = uuidV4()
let lockValue


describe('Use Redis',  function() {
  this.timeout(5000)

  before(async() => {
    await redisLock.init({
      redis
    })
  })

  after(() => {
    redis.quit()
  })

  describe('Run test', () => {
    it('Lock for 2 seconds', async() => {
      const params = {
        redisKey: testkey,
        value: expectedLockValue,
        expires: 2
      }
      const r = await redisLock.lockKey(params)
      expect(r).to.equal(expectedLockValue)
    })

    it('Lock again - should fail - key is locked', async() => {
      const params = {
        redisKey: testkey,
        expires: 2
      }
      try {
        await redisLock.lockKey(params)
      }
      catch(err) {
        expect(err).to.equal(423)
      }
    })

    it('Wait for 2 seconds', async() => {
      await sleep(2000)
    })

    it('Lock for 5 seconds - should work gain', async() => {
      const params = {
        redisKey: testkey,
        value: expectedLockValue,
        expires: 2
      }
      const r = await redisLock.lockKey(params)
      expect(r).to.equal(expectedLockValue)
      lockValue = r
    })

    it('Release lock', async() => {
      const params = {
        redisKey: testkey,
        value: lockValue
      }
      await redisLock.releaseLock(params)
    })
  })

  describe('Release with value mismatch', () => {
    it('Lock for 10 seconds', async() => {
      const params = {
        redisKey: testkey,
        value: expectedLockValue,
        expires: 10
      }
      const r = await redisLock.lockKey(params)
      expect(r).to.equal(expectedLockValue)
    })

    it('Lock again - should fail - key is locked', async() => {
      const params = {
        redisKey: testkey,
      }
      try {
        await redisLock.lockKey(params)
      }
      catch(err) {
        expect(err).to.equal(423)
      }
    })

    it('Release lock with wrong value', async() => {
      const params = {
        redisKey: testkey,
        value: 'abc'
      }
      try {
        await redisLock.releaseLock(params)
      }
      catch(err) {
        expect(err.message).to.equal('releaseLock_valueMismatch')
      }
    })

    it('Release lock with wrong value but suppress warning', async() => {
      const params = {
        redisKey: testkey,
        value: 'abc',
        suppressMismatch: true
      }
      await redisLock.releaseLock(params)
    })

    it('Release lock with correct value', async() => {
      const params = {
        redisKey: testkey,
        value: lockValue
      }
      await redisLock.releaseLock(params)
    })

    it('Lock again for 10 seconds - should work', async() => {
      const params = {
        redisKey: testkey,
        value: expectedLockValue,
        expires: 10
      }
      const r = await redisLock.lockKey(params)
      expect(r).to.equal(expectedLockValue)
    })

    it('Release lock once more with correct value', async() => {
      const params = {
        redisKey: testkey,
        value: lockValue
      }
      await redisLock.releaseLock(params)
    })

  })
})

describe('Use NodeCache',  function() {
  this.timeout(5000)

  describe('Prepare', () => {
    it('Init RedisLock', async() => {
      await redisLock.init({
        reInit: true
      })
    })
  })

  describe('Run test', () => {
    it('Lock for 2 seconds', async() => {
      const params = {
        redisKey: testkey,
        value: expectedLockValue,
        expires: 2
      }
      const r = await redisLock.lockKey(params)
      expect(r).to.equal(expectedLockValue)
    })

    it('Lock again - should fail - key is locked', async() => {
      const params = {
        redisKey: testkey,
        expires: 2
      }
      try {
        await redisLock.lockKey(params)
      }
      catch(err) {
        expect(err).to.equal(423)
      }
    })

    it('Wait for 2 seconds', async() => {
      await sleep(2000)
    })

    it('Lock for 5 seconds - should work gain', async() => {
      const params = {
        redisKey: testkey,
        value: expectedLockValue,
        expires: 2
      }
      const r = await redisLock.lockKey(params)
      expect(r).to.equal(expectedLockValue)
      lockValue = r
    })

    it('Release lock', async() => {
      const params = {
        redisKey: testkey,
        value: lockValue
      }
      await redisLock.releaseLock(params)
    })
  })

  describe('Release with value mismatch', () => {
    it('Lock for 10 seconds', async() => {
      const params = {
        redisKey: testkey,
        value: expectedLockValue,
        expires: 10
      }
      const r = await redisLock.lockKey(params)
      expect(r).to.equal(expectedLockValue)
    })

    it('Lock again - should fail - key is locked', async() => {
      const params = {
        redisKey: testkey,
      }
      try {
        await redisLock.lockKey(params)
      }
      catch(err) {
        expect(err).to.equal(423)
      }
    })

    it('Release lock with wrong value', async() => {
      const params = {
        redisKey: testkey,
        value: 'abc'
      }
      try {
        await redisLock.releaseLock(params)
      }
      catch(err) {
        expect(err.message).to.equal('releaseLock_valueMismatch')
      }
    })

    it('Release lock with wrong value but suppress warning', async() => {
      const params = {
        redisKey: testkey,
        value: 'abc',
        suppressMismatch: true
      }
      await redisLock.releaseLock(params)
    })

    it('Release lock with correct value', async() => {
      const params = {
        redisKey: testkey,
        value: lockValue
      }
      await redisLock.releaseLock(params)
    })

    it('Lock again for 10 seconds - should work', async() => {
      const params = {
        redisKey: testkey,
        value: expectedLockValue,
        expires: 10
      }
      const r = await redisLock.lockKey(params)
      expect(r).to.equal(expectedLockValue)
    })

    it('Release lock once more with correct value', async() => {
      const params = {
        redisKey: testkey,
        value: lockValue
      }
      await redisLock.releaseLock(params)
    })

  })
})