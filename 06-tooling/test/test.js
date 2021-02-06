import mocha from 'mocha'
const {describe, it} = mocha
import {expect} from 'chai'
import * as td from 'testdouble'

import {banner} from '../src/main.js'

describe('main', function () {
  it('should return 42', async () => {
    expect(banner()).to.match(/The answer is.*42/)
  })

  it('should return 44 if add is mocked', async () => {
    td.replaceEsm('../src/add.js', {add: () => 44})

    const {banner} = await import('../src/main.js')

    expect(banner()).to.match(/The answer is.*44/)
  })
})
