import assert from 'assert'
import {banner as whiteBanner} from '03-multiple-exports'
import {banner as redBanner} from '03-multiple-exports/red'
import {banner as blueBanner} from '03-multiple-exports/blue'

assert.strict.match(whiteBanner, /The answer is.*42/)
assert.strict.match(redBanner, /The answer is.*42/)
assert.strict.match(blueBanner, /The answer is.*42/)

console.log(whiteBanner)
console.log(redBanner)
console.log(blueBanner)
