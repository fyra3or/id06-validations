'use strict'

const { test } = require('tap')
const Fastify = require('fastify')
const specification = require('../../constants/spec-v2.3')
const ValidateIdentifier = require('../../plugins/validate-identifier')
const GetIdentifierRegExp = require('../../plugins/get-identifier-regexp')

test('validate full specification', async (t) => {
  const fastify = Fastify()
  fastify.register(ValidateIdentifier)
  fastify.register(GetIdentifierRegExp)

  await fastify.ready()

  specification.forEach((country) => {
    const countryCode = country.code;

    if (country.examples.valid.length) {
      country.examples.valid.forEach((identifier) => {
        t.ok(fastify.validateIdentifier({ identifier, countryCode }), `${country.name}: ${identifier} should be valid`)
      })
    }

    if (country.examples.inValid.length) {
      country.examples.inValid.forEach((identifier) => {
        t.notOk(fastify.validateIdentifier({ identifier, countryCode }), `${country.name}: ${identifier} should not be valid`)
      })
    }
  });
})

test('required params', async (t) => {
  const fastify = Fastify()
  fastify.register(ValidateIdentifier)
  fastify.register(GetIdentifierRegExp)

  await fastify.ready()

  t.throws(() => {
    fastify.validateIdentifier({ countryCode: '-' })
  }, {
    message: 'identifier and countryCode is required in validateIdentifier'
  }, 'Expected error was thrown')

  t.throws(() => {
    fastify.validateIdentifier({ identifier: '-' })
  }, {
    message: 'identifier and countryCode is required in validateIdentifier'
  }, 'Expected error was thrown')

  t.throws(() => {
    fastify.validateIdentifier()
  }, {
    message: `Cannot destructure property 'identifier' of 'undefined' as it is undefined.`
  }, 'Expected error was thrown')
})
