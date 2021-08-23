'use strict'

module.exports = async function (fastify, opts) {
  fastify.route({
    method: 'GET',
    url: '/validate',
    schema: {
      querystring: {
        countryCode: { type: 'string' },
        identifier: { type: 'string' }
      },
      response: {
        200: {
          type: 'object',
          properties: {
            countryCode: { type: 'string' },
            identifier: { type: 'string' },
            isValid: { type: 'boolean' }
          }
        }
      }
    },
    handler: async (request, reply) => {
      const { countryCode, identifier } = request.query
      const isValid = fastify.validateIdentifier({ countryCode, identifier })
      return { countryCode, identifier, isValid }
    }
  })
}
