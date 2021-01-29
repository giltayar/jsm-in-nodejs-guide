import assert from 'assert'
import {banner} from '../src/main.mjs'

assert.strict.match(banner, /42/)

console.log(banner)
