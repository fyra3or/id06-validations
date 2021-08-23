'use strict'

const { test } = require('tap')
const { build } = require('../../helper')
const specification = require('../../../constants/spec-v2.3')
const sweden = specification.find((country) => country.code === 'SE');

test('api: valid swedish identifier', async (t) => {
  const app = build(t)

  const res = await app.inject({
    url: `/api/validate?identifier=${sweden.examples.valid[0]}&countryCode=${sweden.code}`
  })
  t.same(JSON.parse(res.payload), {
    countryCode: sweden.code,
    identifier: sweden.examples.valid[0],
    isValid: true
  })
})

test('api: invalid swedish identifier', async (t) => {
  const app = build(t)

  const res = await app.inject({
    url: `/api/validate?identifier=${sweden.examples.inValid[0]}&countryCode=${sweden.code}`
  })
  t.same(JSON.parse(res.payload), {
    countryCode: sweden.code,
    identifier: sweden.examples.inValid[0],
    isValid: false
  })
})
