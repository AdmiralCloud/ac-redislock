const redisLock = require('../index')
const expect = require('chai').expect
const { v4: uuidV4 } = require('uuid')

const Redis = require('ioredis')
const redis = new Redis()

const testkey = uuidV4()
const expectedLockValue = uuidV4()
let lockValue


describe('Prepare',  function() {
  this.timeout(5000)

  before((done) => {
    redisLock.init({
      redis
    }, done)
  })

  after(() => {
    redis.quit()
  })

  describe('Run test', () => {
    it('Lock for 2 seconds', done => {
      const params = {
        redisKey: testkey,
        value: expectedLockValue,
        expires: 2
      }
      redisLock.lockKey(params, (err, r) => {
        expect(null).to.be.null;
        expect(r).to.equal(expectedLockValue)
        return done()
      })
    })

    it('Lock again - should fail - key is locked', done => {
      const params = {
        redisKey: testkey,
        expires: 2
      }
      redisLock.lockKey(params, (err) => {
        expect(err).to.equal(423)
        return done()
      })
    })

    it('Wait for 2 seconds', done => {
      setTimeout(done, 2000)
    })

    it('Lock for 5 seconds - should work gain', done => {
      const params = {
        redisKey: testkey,
        value: expectedLockValue,
        expires: 2
      }
      redisLock.lockKey(params, (err, r) => {
        expect(err).to.equal(null)
        expect(r).to.equal(expectedLockValue)
        lockValue = r
        return done()
      })
    })

    it('Release lock', done => {
      const params = {
        redisKey: testkey,
        lockValue
      }
      redisLock.releaseLock(params, (err) => {
        expect(err).to.equal(null)
        return done()
      })
    })
  })
})

