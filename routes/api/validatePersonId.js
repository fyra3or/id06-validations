'use strict'

const personIdCountries = require('../../constants/countries')

module.exports = async function (fastify, opts) {
  fastify.route({
    method: 'GET',
    url: '/validatePersonId',
    schema: {
      querystring: {
        countryCode: { type: 'string' },
        personId: { type: 'string' }
      },
      response: {
        200: {
          type: 'object',
          properties: {
            countryCode: { type: 'string' },
            personId: { type: 'string' },
            isValid: { type: 'boolean' }
          }
        }
      }
    },
    handler: async (request, reply) => {
      const { countryCode, personId } = request.query
      const isValid = fastify.validatePersonId({ countryCode, personId })
      return { countryCode, personId, isValid }
    }
  })
}
