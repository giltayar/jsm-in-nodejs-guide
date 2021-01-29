import assert from 'assert'
import {banner} from '05-dual-mode-library'

assert.strict.match(banner, /The answer is.*42/)

console.log(banner)
