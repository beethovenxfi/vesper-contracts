'use strict'

const testRunner = require('../../../utils/testRunner')

describe('aave VDAIe Pool', function () {
  testRunner('VDAIe', ['Curve_aave_DAIe'], [{ debtRatio: 10000 }])
})
