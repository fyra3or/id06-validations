'use strict'

const fp = require('fastify-plugin')

module.exports = fp(async function (fastify, opts) {
  fastify.decorate('validatePersonId', function ({ personId, countryCode }) {
    if (!personId || !countryCode) {
      throw new Error('personId and countryCode is required in validatePersonId')
    }
    const regexp = fastify.getPersonIdRegExp({ countryCode });
    const matches = regexp.exec(personId);
    return !!matches;
  })
})
