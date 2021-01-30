import assert from 'assert'
import {banner} from '08-jsdoc-typing'

assert.strict.match(banner(), /The answer is.*42/)

console.log(banner())
