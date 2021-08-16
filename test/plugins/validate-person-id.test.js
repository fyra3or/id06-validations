'use strict'

const { test } = require('tap')
const Fastify = require('fastify')
const countries = require('../../constants/countries')
const ValidatePersonId = require('../../plugins/validate-person-id')
const GetPersonIdRegExp = require('../../plugins/get-person-id-regexp')

test('validate all countries', async (t) => {
  const fastify = Fastify()
  fastify.register(ValidatePersonId)
  fastify.register(GetPersonIdRegExp)

  await fastify.ready()

  countries.forEach((country) => {
    const countryCode = country.code;

    if (country.validExamples.length) {
      country.validExamples.forEach((personId) => {
        t.ok(fastify.validatePersonId({ personId, countryCode }), `${country.name}: ${personId} should be valid`)
      })
    }

    if (country.notValidExamples.length) {
      country.notValidExamples.forEach((personId) => {
        t.notOk(fastify.validatePersonId({ personId, countryCode }), `${country.name}: ${personId} should not be valid`)
      })
    }
  });
})

test('required params', async (t) => {
  const fastify = Fastify()
  fastify.register(ValidatePersonId)
  fastify.register(GetPersonIdRegExp)

  await fastify.ready()

  t.throws(() => {
    fastify.validatePersonId({ countryCode: '-' })
  }, {
    message: 'personId and countryCode is required in validatePersonId'
  }, 'Expected error was thrown')

  t.throws(() => {
    fastify.validatePersonId({ personId: '-' })
  }, {
    message: 'personId and countryCode is required in validatePersonId'
  }, 'Expected error was thrown')

  t.throws(() => {
    fastify.validatePersonId()
  }, {
    message: `Cannot destructure property 'personId' of 'undefined' as it is undefined.`
  }, 'Expected error was thrown')
})
