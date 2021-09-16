const defaultFormat = 'N/A';
const defaultPassportIdentifier = 'Document number from the passport';
const defaultPassportOrNationalIdIdentifier = 'Document number from the passport or national ID';
const defaultExample = '123456789';

const specification = [
  // EU / ESS
  {
    code: 'AT',
    name: 'Austria',
    format: defaultFormat,
    identifier: defaultPassportOrNationalIdIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'BE',
    name: 'Belgium',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
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
      valid: [
        '8901011111',
        '0001011111'
      ],
      inValid: []
    }
  },
  {
    code: 'CH',
    name: 'Switzerland',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'CY',
    name: 'Cyprus',
    format: defaultFormat,
    identifier: defaultPassportOrNationalIdIdentifier,
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
      valid: [
        '897701/111',
        '007701/111',
        '897701/1111',
        '007701/1111'
      ],
      inValid: []
    }
  },
  {
    code: 'DE',
    name: 'Germany',
    format: defaultFormat,
    identifier: defaultPassportOrNationalIdIdentifier,
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
      inValid: ['1111111111']
    }
  },
  {
    code: 'EE',
    name: 'Estonia',
    format: 'NYYMMDDNNNN',
    identifier: 'Isikukood',
    examples: {
      valid: [
        '18901011111',
        '10001011111'
      ],
      inValid: []
    }
  },
  {
    code: 'ES',
    name: 'Spain',
    format: defaultFormat,
    identifier: defaultPassportOrNationalIdIdentifier,
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
      valid: [
        '010189-111A',
        '010189+111A',
        '010189.111A',
        '010189A111A',
        '010100-111A',
        '010100+111A',
        '010100.111A',
        '010100A111A',
        '010189-1111',
        '010189+1111',
        '010189.1111',
        '010189A1111',
        '010100-1111',
        '010100+1111',
        '010100.1111',
        '010100A1111'
      ],
      inValid: [
        '010189111A',
        '0101891111'
      ]
    }
  },
  {
    code: 'FR',
    name: 'France',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'GB',
    name: 'Great Britain',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'GR',
    name: 'Greece',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'HR',
    name: 'Croatia',
    format: defaultFormat,
    identifier: defaultPassportOrNationalIdIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'HU',
    name: 'Hungary',
    format: defaultFormat,
    identifier: defaultPassportOrNationalIdIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'IE',
    name: 'Ireland',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
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
      valid: [
        '010189-1111',
        '010100-1111'
      ],
      inValid: [
        '0101891111'
      ]
    }
  },
  {
    code: 'IT',
    name: 'Italy',
    format: defaultFormat,
    identifier: defaultPassportOrNationalIdIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'LI',
    name: 'Liechtenstein',
    format: defaultFormat,
    identifier: 'No verifiable document at the moment',
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
      valid: [
        '18901011111',
        '10001011111'
      ],
      inValid: []
    }
  },
  {
    code: 'LU',
    name: 'Luxembourg',
    format: defaultFormat,
    identifier: defaultPassportOrNationalIdIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'LV',
    name: 'Latvia',
    format: 'DDMMYY-NNNNN or 32NNNN-NNNNN',
    identifier: 'Personas kods',
    examples: {
      valid: [
        '010189-11111',
        '010100-11111',
        '321111-11111'
      ],
      inValid: [
        '01018911111',
        '32111111111'
      ]
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
    identifier: defaultPassportIdentifier,
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
      valid: [
        '01018911111',
        '01010011111'
      ],
      inValid: []
    }
  },
  {
    code: 'PL',
    name: 'Poland',
    format: 'YYNNDDNNNNN',
    identifier: 'Powszechny elektroniczny system ewidencji ludności',
    examples: {
      valid: [
        '89770111111',
        '00770111111'
      ],
      inValid: []
    }
  },
  {
    code: 'PT',
    name: 'Portugal',
    format: 'NNNNNNN or NNNNNNNN or LLNNNNNNNN',
    identifier: 'Número de identificação civil',
    examples: {
      valid: [
        '1111111',
        '11111111',
        'AA11111111'
      ],
      inValid: []
    }
  },
  {
    code: 'RO',
    name: 'Romania',
    format: 'NYYMMDDNNNNNN',
    identifier: 'Cod numeric personal',
    examples: {
      valid: [
        '1890101111111',
        '1000101111111'
      ],
      inValid: []
    }
  },
  {
    code: 'SE',
    name: 'Sweden',
    format: 'YYYYMMDD-NNNN',
    identifier: 'Personnummer',
    examples: {
      valid: [
        '19890101-1111',
        '20000101-1111',
        '19890101+1111',
        '20000101+1111',
        '198901011111',
        '200001011111'
      ],
      inValid: [
        '890101-1111',
        '890101+1111',
        '8901011111'
      ]
    }
  },
  {
    code: 'SI',
    name: 'Slovenia',
    format: 'DDMMYYYNNNNNN',
    identifier: 'Enotna matična številka občana',
    examples: {
      valid: [
        '0101989111111',
        '0101000111111'
      ],
      inValid: []
    }
  },
  {
    code: 'SK',
    name: 'Slovakia',
    format: 'YYNNDD/NNN or YYNNDD/NNNN',
    identifier: 'Rodné číslo',
    examples: {
      valid: [
        '897701/111',
        '007701/111',
        '897701/1111',
        '007701/1111'
      ],
      inValid: [
        '897701111',
        '8977011111'
      ]
    }
  },

  // Outside EU / ESS
  {
    code: 'AE',
    name: 'United Arab Emirates',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'AF',
    name: 'Afghanistan',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
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
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'AZ',
    name: 'Azerbaijan',
    format: 'NLNLNLL, NNLLLLNL, NLLLLLN or NNLLLLN',
    identifier: 'Personal number',
    examples: {
      valid: [
        '1A1A1AA',
        '11AAAA1A',
        '1AAAAA1',
        '11AAAA1'
      ],
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
    identifier: defaultPassportIdentifier,
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
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'CI',
    name: 'Côte d\'Ivoire',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'CL',
    name: 'Chile',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'CM',
    name: 'Cameroon',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'CN',
    name: 'China',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'CO',
    name: 'Colombia',
    format: 'LLNNNNNNN, LLNNNNNNNN, LLNNNNNNNNN or LLNNNNNNNNNN',
    identifier: 'Personal number',
    examples: {
      valid: [
        'AA1111111',
        'AA11111111',
        'AA111111111',
        'AA1111111111'
      ],
      inValid: []
    }
  },
  {
    code: 'CR',
    name: 'Costa Rica',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
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
      valid: [
        '111-1111111-1',
        '111+1111111+1',
        '111.1111111.1',
        '111A1111111A1'
      ],
      inValid: [
        '11111111111',
        '1111111111-1',
        '111-11111111'
      ]
    }
  },
  {
    code: 'DZ',
    name: 'Algeria',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'EC',
    name: 'Ecuador',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'EG',
    name: 'Egypt',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
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
    identifier: defaultPassportIdentifier,
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
    identifier: defaultPassportIdentifier,
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
      valid: [
        '1-1111111-1',
        '1+1111111+1',
        '1.1111111.1',
        '1A1111111A1'
      ],
      inValid: [
        '111111111',
        '11111111-1',
        '1-11111111'
      ]
    }
  },
  {
    code: 'IN',
    name: 'India',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'IQ',
    name: 'Iraq',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'IR',
    name: 'Iran',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
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
    identifier: defaultPassportIdentifier,
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
      valid: [
        '890101111111',
        '000101111111'
      ],
      inValid: []
    }
  },
  {
    code: 'LB',
    name: 'Lebanon',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'MA',
    name: 'Morocco',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
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
      valid: [
        '0101989111111',
        '0101000111111'
      ],
      inValid: []
    }
  },
  {
    code: 'MN',
    name: 'Mongolia',
    format: 'LLLBNNNNNNNN or LBLBBNNNNNNNN',
    identifier: 'Personal number',
    examples: {
      valid: [
        'AAA 11111111',
        'A A  11111111'
      ],
      inValid: [
        'AAA11111111',
        'AA11111111',
        'A A11111111',
        'A A 11111111',
      ]
    }
  },
  {
    code: 'MX',
    name: 'Mexico',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
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
      valid: [
        '890101111111',
        '000101111111'
      ],
      inValid: []
    }
  },
  {
    code: 'NG',
    name: 'Nigeria',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'NZ',
    name: 'New Zealand',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
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
      valid: [
        '1-111-111',
        '1+111+111',
        '1.111.111',
        '1A111A111'
      ],
      inValid: [
        '1111-111',
        '1-111111',
        '1111111',
      ]
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
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'PK',
    name: 'Pakistan',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
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
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'RW',
    name: 'Rwanda',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
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
    identifier: defaultPassportIdentifier,
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
      valid: [
        '1111111111',
        '11111111-11111'
      ],
      inValid: [
        '1111111111111'
      ]
    }
  },
  {
    code: 'US',
    name: 'United States of America',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
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
      valid: [
        '11-111-111-1',
        '11+111+111+1',
        '11.111.111.1',
        '11A111A111A1'
      ],
      inValid: [
        '111111111',
        '11111-111-1',
        '11-111-1111',
        '11111111-1',
        '11-1111111',
        '11111-1111',
        '11-111111-1'
      ]
    }
  },
  {
    code: 'UZ',
    name: 'Uzbekistan',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
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
      valid: [
        '1111111',
        '11111111'
      ],
      inValid: []
    }
  },
  {
    code: 'VN',
    name: 'Viet Nam',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'YE',
    name: 'Yemen',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
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
      valid: [
        '8901011111111',
        '0001011111111'
      ],
      inValid: []
    }
  },

  // Manual control of documentation from countries outside of EU/EES
  // Individuals with documentation from the following countries, need to have their document manually checked
  {
    code: 'AD',
    name: 'Andorra',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'AG',
    name: 'Antigua and Barbuda',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'AM',
    name: 'Armenia',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'AO',
    name: 'Angola',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'BB',
    name: 'Barbados',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'BD',
    name: 'Bangladesh',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'BF',
    name: 'Burkina Faso',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'BH',
    name: 'Bahrain',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'BI',
    name: 'Burundi',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'BJ',
    name: 'Benin',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'BN',
    name: 'Brunei Darussalam',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'BO',
    name: 'Bolivia',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'BS',
    name: 'Bahamas',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'BT',
    name: 'Bhutan',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'BW',
    name: 'Botswana',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'BZ',
    name: 'Belize',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'CD',
    name: 'Congo, Democratic Republic of the',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'CF',
    name: 'Central African Republic',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'CG',
    name: 'Congo',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'CU',
    name: 'Cuba',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'CV',
    name: 'Cabo Verde',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'DJ',
    name: 'Djibouti',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'DM',
    name: 'Dominica',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'FJ',
    name: 'Fiji',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'FM',
    name: 'Micronesia, Federated States of',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'GA',
    name: 'Gabon',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'GD',
    name: 'Grenada',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'GM',
    name: 'Gambia',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'GN',
    name: 'Guinea',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'GQ',
    name: 'Equatorial Guinea',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'GW',
    name: 'Guinea - Bissau',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'GY',
    name: 'Guyana',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'HN',
    name: 'Honduras',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'HT',
    name: 'Haiti',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'ID',
    name: 'Indonesia',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'JM',
    name: 'Jamaica',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'KE',
    name: 'Kenya',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'KH',
    name: 'Cambodia',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'KI',
    name: 'Kiribati',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'KM',
    name: 'Comoros',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'KN',
    name: 'Saint Kitts and Nevis',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'KP',
    name: 'Korea, Democratic People’s Republic of',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'LA',
    name: 'Laos',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'LC',
    name: 'Saint Lucia',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'LI',
    name: 'Liechtenstein',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'LK',
    name: 'Sri Lanka',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'LR',
    name: 'Liberia',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'LS',
    name: 'Lesotho',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'LY',
    name: 'Libya',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'MC',
    name: 'Monaco',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'MG',
    name: 'Madagascar',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'MH',
    name: 'Marshall Islands',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'ML',
    name: 'Mali',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'MM',
    name: 'Myanmar',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'MR',
    name: 'Mauritania',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'MU',
    name: 'Mauritius',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'MV',
    name: 'Maldives',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'MW',
    name: 'Malawi',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'MZ',
    name: 'Mozambique',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'NA',
    name: 'Namibia',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'NE',
    name: 'Niger',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'NI',
    name: 'Nicaragua',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'NP',
    name: 'Nepal',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'NR',
    name: 'Nauru',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'OM',
    name: 'Oman',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'PG',
    name: 'Papua New Guinea',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'PS',
    name: 'Palestinian Territory',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'PW',
    name: 'Palau',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'QA',
    name: 'Qatar',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'SA',
    name: 'Saudi Arabia',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'SB',
    name: 'Solomon Islands',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'SC',
    name: 'Seychelles',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'SD',
    name: 'Sudan',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'SL',
    name: 'Sierra Leone',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'SM',
    name: 'San Marino',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'SN',
    name: 'Senegal',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'SO',
    name: 'Somalia',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'SR',
    name: 'Suriname',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'SS',
    name: 'South Sudan',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'ST',
    name: 'Sao Tome and Principe',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'SV',
    name: 'El Salvador',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'SZ',
    name: 'Eswatini',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'TD',
    name: 'Chad',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'TG',
    name: 'Togo',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'TJ',
    name: 'Tajikistan',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'TL',
    name: 'Timor - Leste',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'TM',
    name: 'Turkmenistan',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'TN',
    name: 'Tunisia',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'TO',
    name: 'Tonga',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'TT',
    name: 'Trinidad and Tobago',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'TV',
    name: 'Tuvalu',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'TZ',
    name: 'Tanzania, United Republic of',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'UG',
    name: 'Uganda',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'VC',
    name: 'Saint Vincent and the Grenadines',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'VU',
    name: 'Vanuatu',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'WS',
    name: 'Samoa',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'XK',
    name: 'Kosovo',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'ZM',
    name: 'Zambia',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  },
  {
    code: 'ZW',
    name: 'Zimbabwe',
    format: defaultFormat,
    identifier: defaultPassportIdentifier,
    examples: {
      valid: [defaultExample],
      inValid: []
    }
  }
];

module.exports = specification
