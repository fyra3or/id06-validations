'use strict'

const { test } = require('tap')
const Fastify = require('fastify')
const GetIdentifierRegExp = require('../../plugins/get-identifier-regexp')

test('required params', async (t) => {
  const fastify = Fastify()
  fastify.register(GetIdentifierRegExp)

  await fastify.ready()

  t.throws(() => {
    fastify.getIdentifierRegExp({})
  }, {
    message: 'countryCode is required in getIdentifierRegExp'
  }, 'Expected error was thrown')
})
