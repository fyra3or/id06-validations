'use strict'

const fp = require('fastify-plugin')

const yearMatch = '(19|20)\\d\\d';
const yearMatchTwoDigits = '\\d{2}';
const yearMatchThreeDigits = '[9,0]\\d{2}';
const monthMatch = '(0[1-9]|1[012])';
const dayMatch = '(0[1-9]|[12][0-9]|3[01])';

module.exports = fp(async function (fastify, opts) {
  fastify.decorate('getPersonIdRegExp', function ({ countryCode }) {
    if (!countryCode) {
      throw new Error('countryCode is required in getPersonIdRegexp')
    }

    const uppercaseCountryCode = countryCode.toUpperCase();

    switch (uppercaseCountryCode) {
      //EU / ESS
      case 'BG':
        return new RegExp(String.raw`^\d\d${monthMatch}${dayMatch}\d{4}$`);
      case 'CZ':
        return new RegExp(String.raw`^\d\d\d\d${dayMatch}\/\d{3,4}$`);
      case 'DK':
        return new RegExp(String.raw`^\d{6}-\d{4}$`);
      case 'EE':
        return new RegExp(String.raw`^\d${yearMatchTwoDigits}${monthMatch}${dayMatch}\d{4}$`);
      case 'FI':
        return new RegExp(String.raw`^${dayMatch}${monthMatch}${yearMatchTwoDigits}[-,+,.,A]\d{3}[0-Za-z]$`);
      case 'IS':
        return new RegExp(String.raw`^${dayMatch}${monthMatch}${yearMatchTwoDigits}-\d{4}$`);
      case 'LT':
        return new RegExp(String.raw`^\d${yearMatchTwoDigits}${monthMatch}${dayMatch}\d{4}$`);
      case 'LV':
        return new RegExp(String.raw`^${dayMatch}${monthMatch}${yearMatchTwoDigits}-\d{5}$`);
      case 'MT':
        return new RegExp(String.raw`^\d{7}[A-Za-z]$`);
      case 'NO':
        return new RegExp(String.raw`^${dayMatch}${monthMatch}${yearMatchTwoDigits}\d{5}$`);
      case 'PL':
        return new RegExp(String.raw`^${yearMatchTwoDigits}\d{2}${dayMatch}\d{5}$`);
      case 'PT':
        return new RegExp(String.raw`^\d{7,8}|[A-Za-z]{2}\d{8}$`);
      case 'RO':
        return new RegExp(String.raw`^${yearMatchTwoDigits}${monthMatch}${dayMatch}\d{6}$`);
      case 'SE':
        return new RegExp(String.raw`^${yearMatch}${monthMatch}${dayMatch}[-|+]{0,1}\d{4}$`);
      case 'SI':
        return new RegExp(String.raw`^${dayMatch}${monthMatch}${yearMatchThreeDigits}\d{6}$`);
      case 'SK':
        return new RegExp(String.raw`^${yearMatchTwoDigits}\d{2}${dayMatch}\/\d{3,4}$`);

      //Outside EU / ESS
      case 'AL':
        return new RegExp(String.raw`^[a-zA-Z]{1}\d{8}[a-zA-Z]{1}$`);
      case 'AR':
        return new RegExp(String.raw`^\d{8}$`);
      case 'AZ':
        return new RegExp(String.raw`^(\d[a-zA-z]\d[a-zA-z]\d[a-zA-z]{2})|(\d{2}[a-zA-z]{4}\d[a-zA-z])$`);
      case 'BA':
        return new RegExp(String.raw`^\d{13}$`);
      case 'BY':
        return new RegExp(String.raw`^\d{7}[a-zA-z]\d{3}[a-zA-z]{2}\d$`);
      case 'CO':
        return new RegExp(String.raw`^[a-zA-z]{2}\d{7,9}$`);
      case 'DO':
        return new RegExp(String.raw`^\d{3}[-,+,.,A]\d{7}[-,+,.,A]\d$`);
      case 'ER':
        return new RegExp(String.raw`^\d{7}$`);
      case 'GE':
        return new RegExp(String.raw`^\d{11}$`);
      case 'GT':
        return new RegExp(String.raw`^\d{6}$`);
      case 'IL':
        return new RegExp(String.raw`^\d[-,+,.,A]\d{7}[-,+,.,A]\d$`);
      case 'JO':
        return new RegExp(String.raw`^\d{10}$`);
      case 'KGZ':
        return new RegExp(String.raw`^\d{14}$`);
      case 'KR':
        return new RegExp(String.raw`^\d{7}$`);
      case 'KW':
        return new RegExp(String.raw`^\d{12}$`);
      case 'KZ':
        return new RegExp(String.raw`^${yearMatchTwoDigits}${monthMatch}${dayMatch}\d{6}$`);
      case 'MD':
        return new RegExp(String.raw`^\d{13}$`);
      case 'ME':
        return new RegExp(String.raw`^\d{13}$`);
      case 'MK':
        return new RegExp(String.raw`^${dayMatch}${monthMatch}${yearMatchThreeDigits}\d{6}$`);
      case 'MN':
        return new RegExp(String.raw`^[a-zA-Z]\s[a-zA-Z]\s{2}\d{8}$`);
      case 'MY':
        return new RegExp(String.raw`^${yearMatchTwoDigits}${monthMatch}${dayMatch}\d{6}$`);
      case 'PA':
        return new RegExp(String.raw`^\d[-,+,.,A]\d{3}[-,+,.,A]\d{3}$`);
      case 'PE':
        return new RegExp(String.raw`^\d{8}$`);
      case 'PY':
        return new RegExp(String.raw`^\d{7}$`);
      case 'RS':
        return new RegExp(String.raw`^\d{13}$`);
      case 'SG':
        return new RegExp(String.raw`^[a-zA-Z]\d{7}[a-zA-Z]$`);
      case 'TH':
        return new RegExp(String.raw`^\d{13}$`);
      case 'TR':
        return new RegExp(String.raw`^\d{11}$`);
      case 'TW':
        return new RegExp(String.raw`^[a-zA-Z]\d{9}$`);
      case 'UA':
        return new RegExp(String.raw`^(\d{10})|(\d{10}-\d{4})$`);
      case 'UY':
        return new RegExp(String.raw`^\d{2}[-,+,.,A]\d{3}[-,+,.,A]\d{3}[-,+,.,A]\d$`);
      case 'VE':
        return new RegExp(String.raw`^\d{7,8}$`);
      case 'ZA':
        return new RegExp(String.raw`^${yearMatchTwoDigits}${monthMatch}${dayMatch}\d{7}$`);
      default:
        return new RegExp(String.raw`^.+$`);
    }
  })
})
