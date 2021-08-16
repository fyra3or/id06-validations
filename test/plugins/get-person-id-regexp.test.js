'use strict'

const { test } = require('tap')
const Fastify = require('fastify')
const GetPersonIdRegExp = require('../../plugins/get-person-id-regexp')

test('required params', async (t) => {
  const fastify = Fastify()
  fastify.register(GetPersonIdRegExp)

  await fastify.ready()

  t.throws(() => {
    fastify.getPersonIdRegExp({})
  }, {
    message: 'countryCode is required in getPersonIdRegexp'
  }, 'Expected error was thrown')
})
