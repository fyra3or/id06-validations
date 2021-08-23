'use strict'

const specification = require('../../constants/spec-v2.3')

module.exports = async function (fastify, opts) {
  fastify.route({
    method: 'GET',
    url: '/specification',
    schema: {
      response: {
        200: {
          type: 'object',
          properties: {
            specification: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  code: { type: 'string' },
                  name: { type: 'string' },
                  format: { type: 'string' },
                  identifier: { type: 'string' },
                  examples: {
                    type: 'object',
                    properties: {
                      valid: { type: 'array' },
                      inValid: { type: 'array' },
                    }
                  }
                }
              }
            },
          }
        }
      }
    },
    handler: async (request, reply) => {
      return {
        specification
      }
    }
  })
}
