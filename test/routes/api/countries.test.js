'use strict'

const { test } = require('tap')
const { build } = require('../../helper')
const countries = require('../../../constants/countries')

test('index is loaded', async (t) => {
  const app = build(t)

  const res = await app.inject({
    url: '/api/countries'
  })
  t.same(JSON.parse(res.payload), { countries })
})
