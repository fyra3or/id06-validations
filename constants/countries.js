const defaultFormat = 'N/A';
const defaultLabel = 'Document number from the passport';
const defaultExample = '123456789';

const countries = [
  // EU / ESS
  {
    code: 'AT',
    name: 'Austria',
    format: defaultFormat,
    description: defaultLabel,
    examples: [defaultExample]
  },
  {
    code: 'BE',
    name: 'Belgium',
    format: defaultFormat,
    description: defaultLabel,
    examples: [defaultExample]
  },
  {
    code: 'BG',
    name: 'Bulgaria',
    format: 'YYMMDDNNNN',
    description: 'Edinen grazhdanski nomer',
    examples: ['8901011111']
  },
  {
    code: 'CH',
    name: 'Switzerland',
    format: defaultFormat,
    description: defaultLabel,
    examples: [defaultExample]
  },
  {
    code: 'CY',
    name: 'Cyprus',
    format: defaultFormat,
    description: defaultLabel,
    examples: [defaultExample]
  },
  {
    code: 'CZ',
    name: 'Czech Republic',
    format: 'YYNNDD/NNN or YYNNDD/NNNN',
    description: 'Rodné číslo',
    examples: ['897701/111']
  },
  {
    code: 'DE',
    name: 'Germany',
    format: defaultFormat,
    description: defaultLabel,
    examples: [defaultExample]
  },
  {
    code: 'DK',
    name: 'Denmark',
    format: 'NNNNNN-NNNN',
    description: 'Personnummer(CPR-nummer, det centrale personregister)',
    examples: ['111111-1111']
  },
  {
    code: 'EE',
    name: 'Estonia',
    format: 'NYYMMDDNNNN',
    description: 'Isikukood',
    examples: ['18901011111']
  },
  {
    code: 'ES',
    name: 'Spain',
    format: defaultFormat,
    description: defaultLabel,
    examples: [defaultExample]
  },
  {
    code: 'FI',
    name: 'Finland',
    format: 'DDMMYYXNNNZ',
    description: 'Henkilötunnus/Personbeteckning',
    examples: ['010189-111A']
  },
  {
    code: 'FR',
    name: 'France',
    format: defaultFormat,
    description: defaultLabel,
    examples: [defaultExample]
  },
  {
    code: 'GB',
    name: 'Great Britain',
    format: defaultFormat,
    description: defaultLabel,
    examples: [defaultExample]
  },
  {
    code: 'GR',
    name: 'Greece',
    format: defaultFormat,
    description: defaultLabel,
    examples: [defaultExample]
  },
  {
    code: 'HR',
    name: 'Croatia',
    format: defaultFormat,
    description: defaultLabel,
    examples: [defaultExample]
  },
  {
    code: 'HU',
    name: 'Hungary',
    format: defaultFormat,
    description: defaultLabel,
    examples: [defaultExample]
  },
  {
    code: 'IE',
    name: 'Ireland',
    format: defaultFormat,
    description: defaultLabel,
    examples: [defaultExample]
  },
  {
    code: 'IS',
    name: 'Iceland',
    format: 'DDMMYY-NNNN',
    description: 'Kennitala',
    examples: ['010189-1111']
  },
  {
    code: 'IT',
    name: 'Italy',
    format: defaultFormat,
    description: defaultLabel,
    examples: [defaultExample]
  },
  {
    code: 'LI',
    name: 'Liechtenstein',
    format: defaultFormat,
    description: defaultLabel,
    examples: [defaultExample]
  },
  {
    code: 'LT',
    name: 'Lithuania',
    format: 'NYYMMDDNNNN',
    description: 'Asmens kodas',
    examples: ['18901011111']
  },
  {
    code: 'LU',
    name: 'Luxembourg',
    format: defaultFormat,
    description: defaultLabel,
    examples: [defaultExample]
  },
  {
    code: 'LV',
    name: 'Latvia',
    format: 'DDMMYY-NNNNN',
    description: 'Personas kods',
    examples: ['010189-11111']
  },
  {
    code: 'MT',
    name: 'Malta',
    format: 'NNNNNNNL',
    description: 'ID number from the passport',
    examples: ['1111111A']
  },
  {
    code: 'NL',
    name: 'Netherlands',
    format: defaultFormat,
    description: defaultLabel,
    examples: [defaultExample]
  },
  {
    code: 'NO',
    name: 'Norway',
    format: 'DDMMYYNNNNN',
    description: 'Fødelsenummer',
    examples: ['01018911111']
  },
  {
    code: 'PL',
    name: 'Poland',
    format: 'YYNNDDNNNNN',
    description: 'Powszechny elektroniczny system ewidencji ludności',
    examples: ['89770111111']
  },
  {
    code: 'PT',
    name: 'Portugal',
    format: 'NNNNNNN or NNNNNNNN or LLNNNNNNNN',
    description: 'Número de identificação civil',
    examples: ['1111111']
  },
  {
    code: 'RO',
    name: 'Romania',
    format: 'YYMMDDNNNNNN',
    description: 'Cod numeric personal',
    examples: ['890101111111']
  },
  {
    code: 'SE',
    name: 'Sweden',
    format: 'YYYYMMDD-NNNN',
    description: 'Personnummer',
    examples: ['19890101-1111']
  },
  {
    code: 'SI',
    name: 'Slovenia',
    format: 'DDMMYYYNNNNNN',
    description: 'Enotna matična številka občana',
    examples: ['0101989111111']
  },
  {
    code: 'SK',
    name: 'Slovakia',
    format: 'YYNNDD/NNN or YYNNDD/NNNN',
    description: 'Rodné číslo',
    examples: ['897701/111']
  },

  // Outside EU / ESS
  {
    code: 'AE',
    name: 'United Arab Emirates',
    format: defaultFormat,
    description: defaultLabel,
    examples: [defaultExample]
  },
  {
    code: 'AF',
    name: 'Afghanistan',
    format: defaultFormat,
    description: defaultLabel,
    examples: [defaultExample]
  },
  {
    code: 'AL',
    name: 'Albania',
    format: 'LNNNNNNNNL',
    description: 'Numri i identitetit',
    examples: ['A11111111A']
  },
  {
    code: 'AR',
    name: 'Argentina',
    format: 'NNNNNNNN',
    description: 'Personal number',
    examples: ['11111111']
  },
  {
    code: 'AU',
    name: 'Australia',
    format: defaultFormat,
    description: defaultLabel,
    examples: [defaultExample]
  },
  {
    code: 'AZ',
    name: 'Azerbaijan',
    format: 'NLNLNLL or NNLLLLNL',
    description: 'Personal number',
    examples: ['1A1A1AA']
  },
  {
    code: 'BA',
    name: 'Bosnia and Herzegovina',
    format: 'NNNNNNNNNNNNN',
    description: 'Jedinstveni matični broj građana',
    examples: ['1111111111111']
  },
  {
    code: 'BR',
    name: 'Brazil',
    format: defaultFormat,
    description: defaultLabel,
    examples: [defaultExample]
  },
  {
    code: 'BY',
    name: 'Belarus',
    format: 'NNNNNNNLNNNLLN',
    description: 'Identification number',
    examples: ['1111111A111AA1']
  },
  {
    code: 'CA',
    name: 'Canada',
    format: defaultFormat,
    description: defaultLabel,
    examples: [defaultExample]
  },
  {
    code: 'CI',
    name: 'Côte d\'Ivoire',
    format: defaultFormat,
    description: defaultLabel,
    examples: [defaultExample]
  },
  {
    code: 'CL',
    name: 'Chile',
    format: defaultFormat,
    description: defaultLabel,
    examples: [defaultExample]
  },
  {
    code: 'CM',
    name: 'Cameroon',
    format: defaultFormat,
    description: defaultLabel,
    examples: [defaultExample]
  },
  {
    code: 'CN',
    name: 'China',
    format: defaultFormat,
    description: defaultLabel,
    examples: [defaultExample]
  },
  {
    code: 'CO',
    name: 'Colombia',
    format: 'LLNNNNNNN, LLNNNNNNNN or LLNNNNNNNNN',
    description: 'Personal number',
    examples: ['AA11111111']
  },
  {
    code: 'CR',
    name: 'Costa Rica',
    format: defaultFormat,
    description: defaultLabel,
    examples: [defaultExample]
  },
  {
    code: 'DO',
    name: 'Dominican Republic',
    format: 'NNNXNNNNNNNXN',
    description: 'Personal number',
    examples: ['111-1111111-1']
  },
  {
    code: 'DZ',
    name: 'Algeria',
    format: defaultFormat,
    description: defaultLabel,
    examples: [defaultExample]
  },
  {
    code: 'EC',
    name: 'Ecuador',
    format: defaultFormat,
    description: defaultLabel,
    examples: [defaultExample]
  },
  {
    code: 'EG',
    name: 'Egypt',
    format: defaultFormat,
    description: defaultLabel,
    examples: [defaultExample]
  },
  {
    code: 'ER',
    name: 'Eritrea',
    format: 'NNNNNNN',
    description: 'ID number',
    examples: ['1111111']
  },
  {
    code: 'ET',
    name: 'Ethiopia',
    format: defaultFormat,
    description: defaultLabel,
    examples: [defaultExample]
  },
  {
    code: 'GE',
    name: 'Georgia',
    format: 'NNNNNNNNNNN',
    description: 'Personal number',
    examples: ['11111111111']
  },
  {
    code: 'GH',
    name: 'Ghana',
    format: defaultFormat,
    description: defaultLabel,
    examples: [defaultExample]
  },
  {
    code: 'GT',
    name: 'Guatemala',
    format: 'NNNNNN',
    description: 'ID number',
    examples: ['111111']
  },
  {
    code: 'IL',
    name: 'Israel',
    format: 'NXNNNNNNNXN',
    description: 'ID number',
    examples: ['1-1111111-1']
  },
  {
    code: 'IN',
    name: 'India',
    format: defaultFormat,
    description: defaultLabel,
    examples: [defaultExample]
  },
  {
    code: 'IQ',
    name: 'Iraq',
    format: defaultFormat,
    description: defaultLabel,
    examples: [defaultExample]
  },
  {
    code: 'IR',
    name: 'Iran',
    format: defaultFormat,
    description: defaultLabel,
    examples: [defaultExample]
  },
  {
    code: 'JO',
    name: 'Jordan',
    format: 'NNNNNNNNNN',
    description: 'National number',
    examples: ['1111111111']
  },
  {
    code: 'JP',
    name: 'Japan',
    format: defaultFormat,
    description: defaultLabel,
    examples: [defaultExample]
  },
  {
    code: 'KGZ',
    name: 'Kyrgyzstan',
    format: 'NNNNNNNNNNNNNN',
    description: 'Personal number',
    examples: ['11111111111111']
  },
  {
    code: 'KR',
    name: 'Republic of Korea (South Korea)',
    format: 'NNNNNNN',
    description: 'Personal number',
    examples: ['1111111']
  },
  {
    code: 'KW',
    name: 'Kuwait',
    format: 'NNNNNNNNNNNN',
    description: 'Civil number',
    examples: ['111111111111']
  },
  {
    code: 'KZ',
    name: 'Kazakhstan',
    format: 'YYMMDDNNNNNN',
    description: 'ID number',
    examples: ['890101111111']
  },
  {
    code: 'LB',
    name: 'Lebanon',
    format: defaultFormat,
    description: defaultLabel,
    examples: [defaultExample]
  },
  {
    code: 'MA',
    name: 'Morocco',
    format: defaultFormat,
    description: defaultLabel,
    examples: [defaultExample]
  },
  {
    code: 'MD',
    name: 'Moldavia',
    format: 'NNNNNNNNNNNNN',
    description: 'Numarul de Identificare',
    examples: ['1111111111111']
  },
  {
    code: 'ME',
    name: 'Montenegro',
    format: 'NNNNNNNNNNNNN',
    description: 'Jedinstveni matični broj građana',
    examples: ['1111111111111']
  },
  {
    code: 'MK',
    name: 'North Macedonia',
    format: 'DDMMYYYNNNNNN',
    description: 'Unique Master Citizen Number',
    examples: ['0101989111111']
  },
  {
    code: 'MN',
    name: 'Mongolia',
    format: 'LBLBBNNNNNNNN',
    description: 'Personal number',
    examples: ['A A  11111111']
  },
  {
    code: 'MX',
    name: 'Mexico',
    format: defaultFormat,
    description: defaultLabel,
    examples: [defaultExample]
  },
  {
    code: 'MY',
    name: 'Malaysia',
    format: 'YYMMDDNNNNNN',
    description: 'Identity number',
    examples: ['890101111111']
  },
  {
    code: 'NG',
    name: 'Nigeria',
    format: defaultFormat,
    description: defaultLabel,
    examples: [defaultExample]
  },
  {
    code: 'NZ',
    name: 'New Zealand',
    format: defaultFormat,
    description: defaultLabel,
    examples: [defaultExample]
  },
  {
    code: 'PA',
    name: 'Panama',
    format: 'NXNNNXNNN',
    description: 'Personal number',
    examples: ['1-111-111']
  },
  {
    code: 'PE',
    name: 'Peru',
    format: 'NNNNNNNN',
    description: 'National ID number',
    examples: ['11111111']
  },
  {
    code: 'PH',
    name: 'Philippines',
    format: defaultFormat,
    description: defaultLabel,
    examples: [defaultExample]
  },
  {
    code: 'PK',
    name: 'Pakistan',
    format: defaultFormat,
    description: defaultLabel,
    examples: [defaultExample]
  },
  {
    code: 'PY',
    name: 'Paraguay',
    format: 'NNNNNNN',
    description: 'ID number',
    examples: ['1111111']
  },
  {
    code: 'RS',
    name: 'Serbia',
    format: 'NNNNNNNNNNNNN',
    description: 'Jedinstveni matični broj građana',
    examples: ['1111111111111']
  },
  {
    code: 'RU',
    name: 'Russia',
    format: defaultFormat,
    description: defaultLabel,
    examples: [defaultExample]
  },
  {
    code: 'RW',
    name: 'Rwanda',
    format: defaultFormat,
    description: defaultLabel,
    examples: [defaultExample]
  },
  {
    code: 'SG',
    name: 'Singapore',
    format: 'LNNNNNNNL',
    description: 'National ID number',
    examples: ['A1111111A']
  },
  {
    code: 'SY',
    name: 'Syrian Arab Republic (Syria)',
    format: defaultFormat,
    description: defaultLabel,
    examples: [defaultExample]
  },
  {
    code: 'TH',
    name: 'Thailand',
    format: 'NNNNNNNNNNNNN',
    description: 'Identification number',
    examples: ['1111111111111']
  },
  {
    code: 'TR',
    name: 'Turkey',
    format: 'NNNNNNNNNNN',
    description: 'Türkiye Cumhuriyeti Kimlik Numarası',
    examples: ['11111111111']
  },
  {
    code: 'TW',
    name: 'Taiwan',
    format: 'LNNNNNNNNN',
    description: 'Personal ID number',
    examples: ['A111111111']
  },
  {
    code: 'UA',
    name: 'Ukraine',
    format: 'NNNNNNNNNN or NNNNNNNN-NNNNN',
    description: 'Personal or record number',
    examples: ['1111111111-1111']
  },
  {
    code: 'US',
    name: 'United States of America',
    format: defaultFormat,
    description: defaultLabel,
    examples: [defaultExample]
  },
  {
    code: 'UY',
    name: 'Uruguay',
    format: 'NNXNNNXNNNXN',
    description: 'Personal number',
    examples: ['11-111-111-1']
  },
  {
    code: 'UZ',
    name: 'Uzbekistan',
    format: defaultFormat,
    description: defaultLabel,
    examples: [defaultExample]
  },
  {
    code: 'VE',
    name: 'Venezuela',
    format: 'NNNNNNN or NNNNNNNN',
    description: 'Personal number',
    examples: ['1111111']
  },
  {
    code: 'VN',
    name: 'Viet Nam',
    format: defaultFormat,
    description: defaultLabel,
    examples: [defaultExample]
  },
  {
    code: 'YE',
    name: 'Yemen',
    format: defaultFormat,
    description: defaultLabel,
    examples: [defaultExample]
  },
  {
    code: 'ZA',
    name: 'South Africa',
    format: 'YYMMDDNNNNNNN',
    description: 'Identity number',
    examples: ['8901011111111']
  },
];

module.exports = countries
