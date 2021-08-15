'use strict'

const personIdCountries = require('../../constants/countries')

module.exports = async function (fastify, opts) {
  // fastify.get('/countries', async function (request, reply) {
  //   return { countries: personIdCountries }
  // })
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
                  example: { type: 'string' },
                }
              }
            },
          }
        }
      }
    },
    handler: async (request, reply) => {
      return {
        countries: personIdCountries
      }
    }
  })
}
