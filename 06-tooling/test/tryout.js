import assert from 'assert'
import {banner} from '03-exports'

assert.strict.match(banner, /The answer is.*42/)

console.log(banner)
