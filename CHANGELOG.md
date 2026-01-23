
## [6.0.1](https://github.com/admiralcloud/ac-redislock/compare/v6.0.0..v6.0.1) (2026-01-23 13:29:32)


### Bug Fix

* **App:** Package updates | MP | [580ac9df0337a7d066cd2f3f77f400f5adf7209f](https://github.com/admiralcloud/ac-redislock/commit/580ac9df0337a7d066cd2f3f77f400f5adf7209f)    
Package updates  
Related issues:
 
# [6.0.0](https://github.com/admiralcloud/ac-redislock/compare/v5.0.3..v6.0.0) (2025-11-25 15:28:59)


### Bug Fix

* **App:** Node 20+ is now required | MP | [87fc845249990a1ff3c8eee7af21022f5e5792da](https://github.com/admiralcloud/ac-redislock/commit/87fc845249990a1ff3c8eee7af21022f5e5792da)    
Node 20+ is now required  
Related issues:
* **App:** add getLock method to retrieve lock value if it exist | VD | [a85189f0f5540fbdec60a9ebba80f9627f4a71be](https://github.com/admiralcloud/ac-redislock/commit/a85189f0f5540fbdec60a9ebba80f9627f4a71be)    
add getLock method to retrieve lock value if it exist  
Related issues:
### Chores

* **release:** v5.0.4 [ci skip] | [9799c8327ea0b578bd7985fb9ed1a5aa4985a817](https://github.com/admiralcloud/ac-redislock/commit/9799c8327ea0b578bd7985fb9ed1a5aa4985a817)    

### Chores

* **Misc:** Updated packages | VD | [294605939f078c249f17e8a1ec24bf833fd109db](https://github.com/admiralcloud/ac-redislock/commit/294605939f078c249f17e8a1ec24bf833fd109db)    
Updated packages  
Related issues:
## BREAKING CHANGES
* **App:** Node 20+ is now required

## [5.0.4](https://github.com/admiralcloud/ac-redislock/compare/v5.0.3..v5.0.4) (2025-11-21 16:04:35)


### Bug Fix

* **App:** add getLock method to retrieve lock value if it exist | VD | [a85189f0f5540fbdec60a9ebba80f9627f4a71be](https://github.com/admiralcloud/ac-redislock/commit/a85189f0f5540fbdec60a9ebba80f9627f4a71be)    
add getLock method to retrieve lock value if it exist  
Related issues:
### Chores

* **Misc:** Updated packages | VD | [294605939f078c249f17e8a1ec24bf833fd109db](https://github.com/admiralcloud/ac-redislock/commit/294605939f078c249f17e8a1ec24bf833fd109db)    
Updated packages  
Related issues:

## [5.0.3](https://github.com/admiralcloud/ac-redislock/compare/v5.0.2..v5.0.3) (2025-09-19 05:25:29)


### Bug Fix

* **Misc:** Package updates | MP | [60e9b63209e9284e966e148af0841ba3f6d5da39](https://github.com/admiralcloud/ac-redislock/commit/60e9b63209e9284e966e148af0841ba3f6d5da39)    
Package updates  
Related issues:

## [5.0.2](https://github.com/admiralcloud/ac-redislock/compare/v5.0.1..v5.0.2) (2025-08-30 06:45:27)


### Bug Fix

* **App:** Package updates | MP | [28524c4601016f74495ab80dc3faf99492f0a016](https://github.com/admiralcloud/ac-redislock/commit/28524c4601016f74495ab80dc3faf99492f0a016)    
Package updates  
Related issues:

## [5.0.1](https://github.com/admiralcloud/ac-redislock/compare/v5.0.0..v5.0.1) (2025-05-14 06:27:08)


### Bug Fix

* **App:** Use closure instead of this | MP | [9ad7de8db078ea1a3637e80a81ad088b663213a4](https://github.com/admiralcloud/ac-redislock/commit/9ad7de8db078ea1a3637e80a81ad088b663213a4)    
To support different scenarios we internally use closure instead of this  
Related issues:
 
# [5.0.0](https://github.com/admiralcloud/ac-redislock/compare/v4.0.0..v5.0.0) (2025-05-12 06:59:29)


### Bug Fix

* **App:** Throw error in case resource is locked | MP | [642d2532a1aa89526ad1bc00bd67836632e38204](https://github.com/admiralcloud/ac-redislock/commit/642d2532a1aa89526ad1bc00bd67836632e38204)    
Throw an error (ACError class) with code 423  
Related issues:
### Chores

* **App:** Updated packages | MP | [77fb232c7ae5de3181209cb5733b69560d886499](https://github.com/admiralcloud/ac-redislock/commit/77fb232c7ae5de3181209cb5733b69560d886499)    
Updated packages  
Related issues:
## BREAKING CHANGES
* **App:** If resource is already locked, you will now get a string response (resource_locked) and a code 423. The error has a clear error message and the code 423 now.
<a name="4.0.0"></a>
 
# [4.0.0](https://github.com/admiralcloud/ac-redislock/compare/v3.0.0..v4.0.0) (2024-12-08 11:50:48)


### Refactor

* **App:** Use async/await | MP | [22b2e50ea2d2d7ce7a3dc00b9dda62411a3bee89](https://github.com/admiralcloud/ac-redislock/commit/22b2e50ea2d2d7ce7a3dc00b9dda62411a3bee89)    
ac-redisLock now uses async/await.  
Related issues: [undefined/undefined#master](undefined/browse/master)
### Documentation

* **App:** Info regarding version 4 | MP | [1293a61b44ffb2e5efb9799cb5de0bbe7b785eb0](https://github.com/admiralcloud/ac-redislock/commit/1293a61b44ffb2e5efb9799cb5de0bbe7b785eb0)    
Info that version 4 has breaking changes  
Related issues: [undefined/undefined#master](undefined/browse/master)
### Chores

* **App:** Updated packages | MP | [4f1e780af2c3f002187a275a30beb3bf82bb1bfb](https://github.com/admiralcloud/ac-redislock/commit/4f1e780af2c3f002187a275a30beb3bf82bb1bfb)    
Updated packages  
Related issues: [undefined/undefined#master](undefined/browse/master)
## BREAKING CHANGES
* **App:** This version no longer supports callbacks - async/await only!
<a name="3.0.0"></a>
 
# [3.0.0](https://github.com/admiralcloud/ac-redislock/compare/v2.0.1..v3.0.0) (2022-12-18 10:17:32)


### Bug Fix

* **App:** Package updates | MP | [f9d7d9af9dd472e7f1df08b406fbea2d4e9aba81](https://github.com/admiralcloud/ac-redislock/commit/f9d7d9af9dd472e7f1df08b406fbea2d4e9aba81)    
Package updates - Node 16 required  
Related issues: [undefined/undefined#master](undefined/browse/master)
### Documentation

* **App:** Added badge for Github action result | MP | [f0118059616a313ab816735fceb36d4341ca87f4](https://github.com/admiralcloud/ac-redislock/commit/f0118059616a313ab816735fceb36d4341ca87f4)    
Added badge for Github action result  
Related issues: [undefined/undefined#master](undefined/browse/master)
### Chores

* **App:** Fixed workflows - fixed matrix | MP | [b4e3905b0d96c99b078d2ee03458993e892e7257](https://github.com/admiralcloud/ac-redislock/commit/b4e3905b0d96c99b078d2ee03458993e892e7257)    
Fixed workflows - fixed matrix  
Related issues: [undefined/undefined#master](undefined/browse/master)
* **App:** Fixed workflows - added Redis | MP | [8757bc716b91e28a537e4422ea3bcebd7577ad15](https://github.com/admiralcloud/ac-redislock/commit/8757bc716b91e28a537e4422ea3bcebd7577ad15)    
Fixed workflows - added Redis  
Related issues: [undefined/undefined#master](undefined/browse/master)
* **App:** Add automated tests on Github | MP | [5f76ab0824925340d25ee8c0391cc86eca1c6d8d](https://github.com/admiralcloud/ac-redislock/commit/5f76ab0824925340d25ee8c0391cc86eca1c6d8d)    
Add automated tests on Github  
Related issues: [undefined/undefined#master](undefined/browse/master)
## BREAKING CHANGES
* **App:** Node 16+ required
<a name="2.0.1"></a>

## [2.0.1](https://github.com/admiralcloud/ac-redislock/compare/v2.0.0..v2.0.1) (2022-07-22 05:29:36)


### Bug Fix

* **App:** Package updates | MP | [5948b5e625caf1441c865927adaf7b49d551249d](https://github.com/admiralcloud/ac-redislock/commit/5948b5e625caf1441c865927adaf7b49d551249d)    
Package updates  
Related issues: [/issues#undefined](https://github.com//issues/undefined)
<a name="2.0.0"></a>
 
# [2.0.0](https://github.com/admiralcloud/ac-redislock/compare/v1.0.11..v2.0.0) (2022-04-29 12:10:20)


### Feature

* **App:** ac-redislock is now only initialized once | MP | [b5a944f5d878f8120110fc2882203c5706cdc9dc](https://github.com/admiralcloud/ac-redislock/commit/b5a944f5d878f8120110fc2882203c5706cdc9dc)    
If you run init again, it will not have any effect  
Related issues: [undefined/undefined#master](undefined/browse/master)
### Chores

* **App:** Move package to AdmiralCloud aG | MP | [54ee5e169b933e33ed661082c1d99f5276acd9e5](https://github.com/admiralcloud/ac-redislock/commit/54ee5e169b933e33ed661082c1d99f5276acd9e5)    
Move ac-redisLock to AdmiralCloud AG  
Related issues: [/issues#undefined](https://github.com//issues/undefined)
### Chores

* **App:** Updated packages | MP | [876dcdddfa21ca911d2abfe9b7bb5c4ff84f334b](https://github.com/admiralcloud/ac-redislock/commit/876dcdddfa21ca911d2abfe9b7bb5c4ff84f334b)    
Updated packages  
Related issues: [undefined/undefined#master](undefined/browse/master)
## BREAKING CHANGES
* **App:** See README for breaking changes
<a name="1.0.11"></a>

## [1.0.11](https://github.com/mmpro/ac-redislock/compare/v1.0.10..v1.0.11) (2021-10-09 10:10:08)


### Bug Fix

* **App:** Package update | MP | [be29af27ba86907a85116dbfcbf8813a2fad3ec5](https://github.com/mmpro/ac-redislock/commit/be29af27ba86907a85116dbfcbf8813a2fad3ec5)    
Package update
<a name="1.0.10"></a>

## [1.0.10](https://github.com/mmpro/ac-redislock/compare/v1.0.9..v1.0.10) (2021-05-07 11:28:22)


### Bug Fix

* **App:** Add option to suppress mismatch warning when releasing a key | MP | [aff7e74ba0e0a5a4eadd50b48eaac1fff880117c](https://github.com/mmpro/ac-redislock/commit/aff7e74ba0e0a5a4eadd50b48eaac1fff880117c)    
if true, no warning will be logged if the value does not match the stored one
### Chores

* **App:** Updated packages | MP | [543baf7c56beedb80aa89f9b4e40c5473c316075](https://github.com/mmpro/ac-redislock/commit/543baf7c56beedb80aa89f9b4e40c5473c316075)    
Updated packages
### Chores

* **App:** Updated gitignore | MP | [c16054f9d50d5100f2771a73a566a266fe540a8d](https://github.com/mmpro/ac-redislock/commit/c16054f9d50d5100f2771a73a566a266fe540a8d)    
Updated ignore
<a name="1.0.9"></a>

## [1.0.9](https://github.com/mmpro/ac-redislock/compare/v1.0.8..v1.0.9) (2020-12-04 08:29:13)


### Bug Fix

* **App:** Bring back singleton approach | MP | [753fece644e44333cddafc4b0dd5f9289a896979](https://github.com/mmpro/ac-redislock/commit/753fece644e44333cddafc4b0dd5f9289a896979)    
Bring back singleton approach
### Chores

* **App:** Updated packages | MP | [226bf1b875525d8516df3113bb4bff540ea778d7](https://github.com/mmpro/ac-redislock/commit/226bf1b875525d8516df3113bb4bff540ea778d7)    
Updated packages
<a name="1.0.8"></a>

## [1.0.8](https://github.com/mmpro/ac-redislock/compare/v1.0.7..v1.0.8) (2020-11-23 19:14:04)


### Bug Fix

* **App:** Use vars instead of this | MP | [1b9279e0a51f68dd8b85427770ac287b693c071a](https://github.com/mmpro/ac-redislock/commit/1b9279e0a51f68dd8b85427770ac287b693c071a)    
Use vars instead of this
### Chores

* **App:** Updated ESLint config | MP | [445fa5a172074296576b3e8caacd09e49116cc45](https://github.com/mmpro/ac-redislock/commit/445fa5a172074296576b3e8caacd09e49116cc45)    
Updated ESLint config
<a name="1.0.7"></a>

## [1.0.7](https://github.com/mmpro/ac-redislock/compare/v1.0.6..v1.0.7) (2020-11-22 09:13:15)


### Bug Fix

* **App:** Package updates | MP | [3779d9cec07981324c42aff4a84074bc3f6f6329](https://github.com/mmpro/ac-redislock/commit/3779d9cec07981324c42aff4a84074bc3f6f6329)    
Package updates
<a name="1.0.6"></a>

## [1.0.6](https://github.com/mmpro/ac-redislock/compare/v1.0.5..v1.0.6) (2020-05-04 19:22:06)


### Bug Fix

* **App:** Improved error message for lockValue mismatch | MP | [c7d6036693cbd74b8a3811317fc45654b96f2978](https://github.com/mmpro/ac-redislock/commit/c7d6036693cbd74b8a3811317fc45654b96f2978)    
Improved error message for lockValue mismatch
### Refactor

* **App:** Replaced uuid with latest version | MP | [8a0768e69f1586b93fecb9a559b3ba6e7d8537a8](https://github.com/mmpro/ac-redislock/commit/8a0768e69f1586b93fecb9a559b3ba6e7d8537a8)    
Replaced uuid with latest version
### Chores

* **App:** Prepare package for ac-semantic-release | MP | [32e6493b86871493692dd338203fe0f8aacf36c8](https://github.com/mmpro/ac-redislock/commit/32e6493b86871493692dd338203fe0f8aacf36c8)    
Prepare package for ac-semantic-release
<a name="1.0.5"></a>
## [1.0.5](https://github.com/mmpro/ac-redislock/compare/v1.0.4...v1.0.5) (2020-01-29 10:03)


### Bug Fixes

* **RedisLock:** Typo fix | MP ([1ba5e257fb43e0ba0a8a64e72a02bf9d2d87dde3](https://github.com/mmpro/ac-redislock/commit/1ba5e257fb43e0ba0a8a64e72a02bf9d2d87dde3))    
  Make sure error is only logged if there is an error



<a name="1.0.4"></a>
## [1.0.4](https://github.com/mmpro/ac-redislock/compare/v1.0.3...v1.0.4) (2020-01-29 08:12)


### Bug Fixes

* **RedisLock:** ReleaseLock's callback is now optional | MP ([9ef6a5e7b66d55c32e478221b7b8677ca2c7fa46](https://github.com/mmpro/ac-redislock/commit/9ef6a5e7b66d55c32e478221b7b8677ca2c7fa46))    
  ReleaseLock's callback is now optional



<a name="1.0.3"></a>
## [1.0.3](https://github.com/mmpro/ac-redislock/compare/v1.0.2...v1.0.3) (2019-12-28 13:07)


### Bug Fixes

* **RedisLock:** Improved init | MP ([e86cabeb398c425b9d4f41754eb1f0886bf39db4](https://github.com/mmpro/ac-redislock/commit/e86cabeb398c425b9d4f41754eb1f0886bf39db4))    
  Init now makes a test call and returns an optional callback.



<a name="1.0.2"></a>
## [1.0.2](https://github.com/mmpro/ac-redislock/compare/v1.0.1...v1.0.2) (2019-05-06 09:30)


### Bug Fixes

* **RedisLock:** Improved error messages | MP ([d0f03fd](https://github.com/mmpro/ac-redislock/commit/d0f03fd))    
  Improved error messages



<a name="1.0.1"></a>
## [1.0.1](https://github.com/mmpro/ac-redislock/compare/v1.0.0...v1.0.1) (2019-05-05 11:03)


### Bug Fixes

* **RedisLock:** Added releaseLock function | MP ([ad8453c](https://github.com/mmpro/ac-redislock/commit/ad8453c))    
  Added releaseLock function



<a name="1.0.0"></a>
# 1.0.0 (2018-08-01 14:46)


### Bug Fixes

* **RedisLock:** Initial version | MP ([d672f19](https://github.com/mmpro/ac-redislock/commit/d672f19))    
  Initial version



