'use strict'

const countries = require('../../constants/countries')

module.exports = async function (fastify, opts) {
  fastify.route({
    method: 'GET',
    url: '/countries',
    schema: {
      response: {
        200: {
          type: 'object',
          properties: {
            countries: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  code: { type: 'string' },
                  name: { type: 'string' },
                  format: { type: 'string' },
                  description: { type: 'string' },
                  examples: { type: 'array' },
                }
              }
            },
          }
        }
      }
    },
    handler: async (request, reply) => {
      return {
        countries
      }
    }
  })
}
