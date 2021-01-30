import assert from 'assert'
import {banner} from '07-typescript'

assert.strict.match(banner(), /The answer is.*42/)

console.log(banner())
