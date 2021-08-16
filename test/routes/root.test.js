'use strict'

const { test } = require('tap')
const { build } = require('../helper')

test('default root route', async (t) => {
  const app = build(t)

  const res = await app.inject({
    url: '/'
  })
  t.equal(res.statusCode, 200)
  t.equal(res.headers['content-type'], 'text/html; charset=UTF-8')
})
