import assert from 'assert'
import {banner} from '../src/main.mjs'

assert.strict.match(banner, /The answer is.*42/)

console.log(banner)
