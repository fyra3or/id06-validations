'use strict'

const { test } = require('tap')
const { build } = require('../../helper')
const countries = require('../../../constants/countries')
const sweden = countries.find((country) => country.code === 'SE');

test('api: valid swedish person id', async (t) => {
  const app = build(t)

  const res = await app.inject({
    url: `/api/validate-person-id?personId=${sweden.validExamples[0]}&countryCode=${sweden.code}`
  })
  t.same(JSON.parse(res.payload), {
    countryCode: sweden.code,
    personId: sweden.validExamples[0],
    isValid: true
  })
})

test('api: invalid swedish person id', async (t) => {
  const app = build(t)

  const res = await app.inject({
    url: `/api/validate-person-id?personId=${sweden.notValidExamples[0]}&countryCode=${sweden.code}`
  })
  t.same(JSON.parse(res.payload), {
    countryCode: sweden.code,
    personId: sweden.notValidExamples[0],
    isValid: false
  })
})
