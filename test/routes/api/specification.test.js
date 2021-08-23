'use strict'

const { test } = require('tap')
const { build } = require('../../helper')
const specification = require('../../../constants/spec-v2.3')

test('index is loaded', async (t) => {
  const app = build(t)

  const res = await app.inject({
    url: '/api/specification'
  })
  t.same(JSON.parse(res.payload), { specification })
})
