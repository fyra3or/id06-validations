const defaultFormat = 'N/A';
const defaultIdentifier = 'Document number from the passport';
const defaultExample = '123456789';

const specification = [
  // EU / ESS
  {
    code: 'AT',
    name: 'Austria',
    format: defaultFormat,
    identifier: defaultIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'BE',
    name: 'Belgium',
    format: defaultFormat,
    identifier: defaultIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'BG',
    name: 'Bulgaria',
    format: 'YYMMDDNNNN',
    identifier: 'Edinen grazhdanski nomer',
    examples: {
      valid: ['8901011111'],
      inValid: []
    }
  },
  {
    code: 'CH',
    name: 'Switzerland',
    format: defaultFormat,
    identifier: defaultIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'CY',
    name: 'Cyprus',
    format: defaultFormat,
    identifier: defaultIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'CZ',
    name: 'Czech Republic',
    format: 'YYNNDD/NNN or YYNNDD/NNNN',
    identifier: 'Rodné číslo',
    examples: {
      valid: ['897701/111'],
      inValid: []
    }
  },
  {
    code: 'DE',
    name: 'Germany',
    format: defaultFormat,
    identifier: defaultIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'DK',
    name: 'Denmark',
    format: 'NNNNNN-NNNN',
    identifier: 'Personnummer(CPR-nummer, det centrale personregister)',
    examples: {
      valid: ['111111-1111'],
      inValid: []
    }
  },
  {
    code: 'EE',
    name: 'Estonia',
    format: 'NYYMMDDNNNN',
    identifier: 'Isikukood',
    examples: {
      valid: ['18901011111'],
      inValid: []
    }
  },
  {
    code: 'ES',
    name: 'Spain',
    format: defaultFormat,
    identifier: defaultIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'FI',
    name: 'Finland',
    format: 'DDMMYYXNNNZ',
    identifier: 'Henkilötunnus/Personbeteckning',
    examples: {
      valid: ['010189-111A'],
      inValid: []
    }
  },
  {
    code: 'FR',
    name: 'France',
    format: defaultFormat,
    identifier: defaultIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'GB',
    name: 'Great Britain',
    format: defaultFormat,
    identifier: defaultIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'GR',
    name: 'Greece',
    format: defaultFormat,
    identifier: defaultIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'HR',
    name: 'Croatia',
    format: defaultFormat,
    identifier: defaultIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'HU',
    name: 'Hungary',
    format: defaultFormat,
    identifier: defaultIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'IE',
    name: 'Ireland',
    format: defaultFormat,
    identifier: defaultIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'IS',
    name: 'Iceland',
    format: 'DDMMYY-NNNN',
    identifier: 'Kennitala',
    examples: {
      valid: ['010189-1111'],
      inValid: []
    }
  },
  {
    code: 'IT',
    name: 'Italy',
    format: defaultFormat,
    identifier: defaultIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'LI',
    name: 'Liechtenstein',
    format: defaultFormat,
    identifier: defaultIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'LT',
    name: 'Lithuania',
    format: 'NYYMMDDNNNN',
    identifier: 'Asmens kodas',
    examples: {
      valid: ['18901011111'],
      inValid: []
    }
  },
  {
    code: 'LU',
    name: 'Luxembourg',
    format: defaultFormat,
    identifier: defaultIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'LV',
    name: 'Latvia',
    format: 'DDMMYY-NNNNN',
    identifier: 'Personas kods',
    examples: {
      valid: ['010189-11111'],
      inValid: []
    }
  },
  {
    code: 'MT',
    name: 'Malta',
    format: 'NNNNNNNL',
    identifier: 'ID number from the passport',
    examples: {
      valid: ['1111111A'],
      inValid: []
    }
  },
  {
    code: 'NL',
    name: 'Netherlands',
    format: defaultFormat,
    identifier: defaultIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'NO',
    name: 'Norway',
    format: 'DDMMYYNNNNN',
    identifier: 'Fødelsenummer',
    examples: {
      valid: ['01018911111'],
      inValid: []
    }
  },
  {
    code: 'PL',
    name: 'Poland',
    format: 'YYNNDDNNNNN',
    identifier: 'Powszechny elektroniczny system ewidencji ludności',
    examples: {
      valid: ['89770111111'],
      inValid: []
    }
  },
  {
    code: 'PT',
    name: 'Portugal',
    format: 'NNNNNNN or NNNNNNNN or LLNNNNNNNN',
    identifier: 'Número de identificação civil',
    examples: {
      valid: ['1111111'],
      inValid: []
    }
  },
  {
    code: 'RO',
    name: 'Romania',
    format: 'YYMMDDNNNNNN',
    identifier: 'Cod numeric personal',
    examples: {
      valid: ['890101111111'],
      inValid: []
    }
  },
  {
    code: 'SE',
    name: 'Sweden',
    format: 'YYYYMMDD-NNNN',
    identifier: 'Personnummer',
    examples: {
      valid: ['19890101-1111'],
      inValid: ['890101-1111']
    }
  },
  {
    code: 'SI',
    name: 'Slovenia',
    format: 'DDMMYYYNNNNNN',
    identifier: 'Enotna matična številka občana',
    examples: {
      valid: ['0101989111111'],
      inValid: []
    }
  },
  {
    code: 'SK',
    name: 'Slovakia',
    format: 'YYNNDD/NNN or YYNNDD/NNNN',
    identifier: 'Rodné číslo',
    examples: {
      valid: ['897701/111'],
      inValid: []
    }
  },

  // Outside EU / ESS
  {
    code: 'AE',
    name: 'United Arab Emirates',
    format: defaultFormat,
    identifier: defaultIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'AF',
    name: 'Afghanistan',
    format: defaultFormat,
    identifier: defaultIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'AL',
    name: 'Albania',
    format: 'LNNNNNNNNL',
    identifier: 'Numri i identitetit',
    examples: {
      valid: ['A11111111A'],
      inValid: []
    }
  },
  {
    code: 'AR',
    name: 'Argentina',
    format: 'NNNNNNNN',
    identifier: 'Personal number',
    examples: {
      valid: ['11111111'],
      inValid: []
    }
  },
  {
    code: 'AU',
    name: 'Australia',
    format: defaultFormat,
    identifier: defaultIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'AZ',
    name: 'Azerbaijan',
    format: 'NLNLNLL or NNLLLLNL',
    identifier: 'Personal number',
    examples: {
      valid: ['1A1A1AA'],
      inValid: []
    }
  },
  {
    code: 'BA',
    name: 'Bosnia and Herzegovina',
    format: 'NNNNNNNNNNNNN',
    identifier: 'Jedinstveni matični broj građana',
    examples: {
      valid: ['1111111111111'],
      inValid: []
    }
  },
  {
    code: 'BR',
    name: 'Brazil',
    format: defaultFormat,
    identifier: defaultIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'BY',
    name: 'Belarus',
    format: 'NNNNNNNLNNNLLN',
    identifier: 'Identification number',
    examples: {
      valid: ['1111111A111AA1'],
      inValid: []
    }
  },
  {
    code: 'CA',
    name: 'Canada',
    format: defaultFormat,
    identifier: defaultIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'CI',
    name: 'Côte d\'Ivoire',
    format: defaultFormat,
    identifier: defaultIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'CL',
    name: 'Chile',
    format: defaultFormat,
    identifier: defaultIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'CM',
    name: 'Cameroon',
    format: defaultFormat,
    identifier: defaultIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'CN',
    name: 'China',
    format: defaultFormat,
    identifier: defaultIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'CO',
    name: 'Colombia',
    format: 'LLNNNNNNN, LLNNNNNNNN or LLNNNNNNNNN',
    identifier: 'Personal number',
    examples: {
      valid: ['AA11111111'],
      inValid: []
    }
  },
  {
    code: 'CR',
    name: 'Costa Rica',
    format: defaultFormat,
    identifier: defaultIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'DO',
    name: 'Dominican Republic',
    format: 'NNNXNNNNNNNXN',
    identifier: 'Personal number',
    examples: {
      valid: ['111-1111111-1'],
      inValid: []
    }
  },
  {
    code: 'DZ',
    name: 'Algeria',
    format: defaultFormat,
    identifier: defaultIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'EC',
    name: 'Ecuador',
    format: defaultFormat,
    identifier: defaultIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'EG',
    name: 'Egypt',
    format: defaultFormat,
    identifier: defaultIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'ER',
    name: 'Eritrea',
    format: 'NNNNNNN',
    identifier: 'ID number',
    examples: {
      valid: ['1111111'],
      inValid: []
    }
  },
  {
    code: 'ET',
    name: 'Ethiopia',
    format: defaultFormat,
    identifier: defaultIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'GE',
    name: 'Georgia',
    format: 'NNNNNNNNNNN',
    identifier: 'Personal number',
    examples: {
      valid: ['11111111111'],
      inValid: []
    }
  },
  {
    code: 'GH',
    name: 'Ghana',
    format: defaultFormat,
    identifier: defaultIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'GT',
    name: 'Guatemala',
    format: 'NNNNNN',
    identifier: 'ID number',
    examples: {
      valid: ['111111'],
      inValid: []
    }
  },
  {
    code: 'IL',
    name: 'Israel',
    format: 'NXNNNNNNNXN',
    identifier: 'ID number',
    examples: {
      valid: ['1-1111111-1'],
      inValid: []
    }
  },
  {
    code: 'IN',
    name: 'India',
    format: defaultFormat,
    identifier: defaultIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'IQ',
    name: 'Iraq',
    format: defaultFormat,
    identifier: defaultIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'IR',
    name: 'Iran',
    format: defaultFormat,
    identifier: defaultIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'JO',
    name: 'Jordan',
    format: 'NNNNNNNNNN',
    identifier: 'National number',
    examples: {
      valid: ['1111111111'],
      inValid: []
    }
  },
  {
    code: 'JP',
    name: 'Japan',
    format: defaultFormat,
    identifier: defaultIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'KGZ',
    name: 'Kyrgyzstan',
    format: 'NNNNNNNNNNNNNN',
    identifier: 'Personal number',
    examples: {
      valid: ['11111111111111'],
      inValid: []
    }
  },
  {
    code: 'KR',
    name: 'Republic of Korea (South Korea)',
    format: 'NNNNNNN',
    identifier: 'Personal number',
    examples: {
      valid: ['1111111'],
      inValid: []
    }
  },
  {
    code: 'KW',
    name: 'Kuwait',
    format: 'NNNNNNNNNNNN',
    identifier: 'Civil number',
    examples: {
      valid: ['111111111111'],
      inValid: []
    }
  },
  {
    code: 'KZ',
    name: 'Kazakhstan',
    format: 'YYMMDDNNNNNN',
    identifier: 'ID number',
    examples: {
      valid: ['890101111111'],
      inValid: []
    }
  },
  {
    code: 'LB',
    name: 'Lebanon',
    format: defaultFormat,
    identifier: defaultIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'MA',
    name: 'Morocco',
    format: defaultFormat,
    identifier: defaultIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'MD',
    name: 'Moldavia',
    format: 'NNNNNNNNNNNNN',
    identifier: 'Numarul de Identificare',
    examples: {
      valid: ['1111111111111'],
      inValid: []
    }
  },
  {
    code: 'ME',
    name: 'Montenegro',
    format: 'NNNNNNNNNNNNN',
    identifier: 'Jedinstveni matični broj građana',
    examples: {
      valid: ['1111111111111'],
      inValid: []
    }
  },
  {
    code: 'MK',
    name: 'North Macedonia',
    format: 'DDMMYYYNNNNNN',
    identifier: 'Unique Master Citizen Number',
    examples: {
      valid: ['0101989111111'],
      inValid: []
    }
  },
  {
    code: 'MN',
    name: 'Mongolia',
    format: 'LBLBBNNNNNNNN',
    identifier: 'Personal number',
    examples: {
      valid: ['A A  11111111'],
      inValid: []
    }
  },
  {
    code: 'MX',
    name: 'Mexico',
    format: defaultFormat,
    identifier: defaultIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'MY',
    name: 'Malaysia',
    format: 'YYMMDDNNNNNN',
    identifier: 'Identity number',
    examples: {
      valid: ['890101111111'],
      inValid: []
    }
  },
  {
    code: 'NG',
    name: 'Nigeria',
    format: defaultFormat,
    identifier: defaultIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'NZ',
    name: 'New Zealand',
    format: defaultFormat,
    identifier: defaultIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'PA',
    name: 'Panama',
    format: 'NXNNNXNNN',
    identifier: 'Personal number',
    examples: {
      valid: ['1-111-111'],
      inValid: []
    }
  },
  {
    code: 'PE',
    name: 'Peru',
    format: 'NNNNNNNN',
    identifier: 'National ID number',
    examples: {
      valid: ['11111111'],
      inValid: []
    }
  },
  {
    code: 'PH',
    name: 'Philippines',
    format: defaultFormat,
    identifier: defaultIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'PK',
    name: 'Pakistan',
    format: defaultFormat,
    identifier: defaultIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'PY',
    name: 'Paraguay',
    format: 'NNNNNNN',
    identifier: 'ID number',
    examples: {
      valid: ['1111111'],
      inValid: []
    }
  },
  {
    code: 'RS',
    name: 'Serbia',
    format: 'NNNNNNNNNNNNN',
    identifier: 'Jedinstveni matični broj građana',
    examples: {
      valid: ['1111111111111'],
      inValid: []
    }
  },
  {
    code: 'RU',
    name: 'Russia',
    format: defaultFormat,
    identifier: defaultIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'RW',
    name: 'Rwanda',
    format: defaultFormat,
    identifier: defaultIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'SG',
    name: 'Singapore',
    format: 'LNNNNNNNL',
    identifier: 'National ID number',
    examples: {
      valid: ['A1111111A'],
      inValid: []
    }
  },
  {
    code: 'SY',
    name: 'Syrian Arab Republic (Syria)',
    format: defaultFormat,
    identifier: defaultIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'TH',
    name: 'Thailand',
    format: 'NNNNNNNNNNNNN',
    identifier: 'Identification number',
    examples: {
      valid: ['1111111111111'],
      inValid: []
    }
  },
  {
    code: 'TR',
    name: 'Turkey',
    format: 'NNNNNNNNNNN',
    identifier: 'Türkiye Cumhuriyeti Kimlik Numarası',
    examples: {
      valid: ['11111111111'],
      inValid: []
    }
  },
  {
    code: 'TW',
    name: 'Taiwan',
    format: 'LNNNNNNNNN',
    identifier: 'Personal ID number',
    examples: {
      valid: ['A111111111'],
      inValid: []
    }
  },
  {
    code: 'UA',
    name: 'Ukraine',
    format: 'NNNNNNNNNN or NNNNNNNN-NNNNN',
    identifier: 'Personal or record number',
    examples: {
      valid: ['1111111111-1111'],
      inValid: []
    }
  },
  {
    code: 'US',
    name: 'United States of America',
    format: defaultFormat,
    identifier: defaultIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'UY',
    name: 'Uruguay',
    format: 'NNXNNNXNNNXN',
    identifier: 'Personal number',
    examples: {
      valid: ['11-111-111-1'],
      inValid: []
    }
  },
  {
    code: 'UZ',
    name: 'Uzbekistan',
    format: defaultFormat,
    identifier: defaultIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'VE',
    name: 'Venezuela',
    format: 'NNNNNNN or NNNNNNNN',
    identifier: 'Personal number',
    examples: {
      valid: ['1111111'],
      inValid: []
    }
  },
  {
    code: 'VN',
    name: 'Viet Nam',
    format: defaultFormat,
    identifier: defaultIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'YE',
    name: 'Yemen',
    format: defaultFormat,
    identifier: defaultIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'ZA',
    name: 'South Africa',
    format: 'YYMMDDNNNNNNN',
    identifier: 'Identity number',
    examples: {
      valid: ['8901011111111'],
      inValid: []
    }
  },
];

module.exports = specification
