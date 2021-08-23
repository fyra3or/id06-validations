'use strict'

const fp = require('fastify-plugin')

module.exports = fp(async function (fastify, opts) {
  fastify.decorate('validateIdentifier', function ({ identifier, countryCode }) {
    if (!identifier || !countryCode) {
      throw new Error('identifier and countryCode is required in validateIdentifier')
    }
    const regexp = fastify.getIdentifierRegExp({ countryCode });
    const matches = regexp.exec(identifier);
    return !!matches;
  })
})
