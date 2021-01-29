import assert from 'assert'
import {banner as whiteBanner} from '04-multiple-exports'
import {banner as redBanner} from '04-multiple-exports/red'
import {banner as blueBanner} from '04-multiple-exports/blue'

assert.strict.match(whiteBanner, /The answer is.*42/)
assert.strict.match(redBanner, /The answer is.*42/)
assert.strict.match(blueBanner, /The answer is.*42/)

console.log(whiteBanner)
console.log(redBanner)
console.log(blueBanner)
