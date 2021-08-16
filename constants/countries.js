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
    validExamples: [defaultExample],
    notValidExamples: []
  },
  {
    code: 'BE',
    name: 'Belgium',
    format: defaultFormat,
    description: defaultLabel,
    validExamples: [defaultExample],
    notValidExamples: []
  },
  {
    code: 'BG',
    name: 'Bulgaria',
    format: 'YYMMDDNNNN',
    description: 'Edinen grazhdanski nomer',
    validExamples: ['8901011111'],
    notValidExamples: []
  },
  {
    code: 'CH',
    name: 'Switzerland',
    format: defaultFormat,
    description: defaultLabel,
    validExamples: [defaultExample],
    notValidExamples: []
  },
  {
    code: 'CY',
    name: 'Cyprus',
    format: defaultFormat,
    description: defaultLabel,
    validExamples: [defaultExample],
    notValidExamples: []
  },
  {
    code: 'CZ',
    name: 'Czech Republic',
    format: 'YYNNDD/NNN or YYNNDD/NNNN',
    description: 'Rodné číslo',
    validExamples: ['897701/111'],
    notValidExamples: []
  },
  {
    code: 'DE',
    name: 'Germany',
    format: defaultFormat,
    description: defaultLabel,
    validExamples: [defaultExample],
    notValidExamples: []
  },
  {
    code: 'DK',
    name: 'Denmark',
    format: 'NNNNNN-NNNN',
    description: 'Personnummer(CPR-nummer, det centrale personregister)',
    validExamples: ['111111-1111'],
    notValidExamples: []
  },
  {
    code: 'EE',
    name: 'Estonia',
    format: 'NYYMMDDNNNN',
    description: 'Isikukood',
    validExamples: ['18901011111'],
    notValidExamples: []
  },
  {
    code: 'ES',
    name: 'Spain',
    format: defaultFormat,
    description: defaultLabel,
    validExamples: [defaultExample],
    notValidExamples: []
  },
  {
    code: 'FI',
    name: 'Finland',
    format: 'DDMMYYXNNNZ',
    description: 'Henkilötunnus/Personbeteckning',
    validExamples: ['010189-111A'],
    notValidExamples: []
  },
  {
    code: 'FR',
    name: 'France',
    format: defaultFormat,
    description: defaultLabel,
    validExamples: [defaultExample],
    notValidExamples: []
  },
  {
    code: 'GB',
    name: 'Great Britain',
    format: defaultFormat,
    description: defaultLabel,
    validExamples: [defaultExample],
    notValidExamples: []
  },
  {
    code: 'GR',
    name: 'Greece',
    format: defaultFormat,
    description: defaultLabel,
    validExamples: [defaultExample],
    notValidExamples: []
  },
  {
    code: 'HR',
    name: 'Croatia',
    format: defaultFormat,
    description: defaultLabel,
    validExamples: [defaultExample],
    notValidExamples: []
  },
  {
    code: 'HU',
    name: 'Hungary',
    format: defaultFormat,
    description: defaultLabel,
    validExamples: [defaultExample],
    notValidExamples: []
  },
  {
    code: 'IE',
    name: 'Ireland',
    format: defaultFormat,
    description: defaultLabel,
    validExamples: [defaultExample],
    notValidExamples: []
  },
  {
    code: 'IS',
    name: 'Iceland',
    format: 'DDMMYY-NNNN',
    description: 'Kennitala',
    validExamples: ['010189-1111'],
    notValidExamples: []
  },
  {
    code: 'IT',
    name: 'Italy',
    format: defaultFormat,
    description: defaultLabel,
    validExamples: [defaultExample],
    notValidExamples: []
  },
  {
    code: 'LI',
    name: 'Liechtenstein',
    format: defaultFormat,
    description: defaultLabel,
    validExamples: [defaultExample],
    notValidExamples: []
  },
  {
    code: 'LT',
    name: 'Lithuania',
    format: 'NYYMMDDNNNN',
    description: 'Asmens kodas',
    validExamples: ['18901011111'],
    notValidExamples: []
  },
  {
    code: 'LU',
    name: 'Luxembourg',
    format: defaultFormat,
    description: defaultLabel,
    validExamples: [defaultExample],
    notValidExamples: []
  },
  {
    code: 'LV',
    name: 'Latvia',
    format: 'DDMMYY-NNNNN',
    description: 'Personas kods',
    validExamples: ['010189-11111'],
    notValidExamples: []
  },
  {
    code: 'MT',
    name: 'Malta',
    format: 'NNNNNNNL',
    description: 'ID number from the passport',
    validExamples: ['1111111A'],
    notValidExamples: []
  },
  {
    code: 'NL',
    name: 'Netherlands',
    format: defaultFormat,
    description: defaultLabel,
    validExamples: [defaultExample],
    notValidExamples: []
  },
  {
    code: 'NO',
    name: 'Norway',
    format: 'DDMMYYNNNNN',
    description: 'Fødelsenummer',
    validExamples: ['01018911111'],
    notValidExamples: []
  },
  {
    code: 'PL',
    name: 'Poland',
    format: 'YYNNDDNNNNN',
    description: 'Powszechny elektroniczny system ewidencji ludności',
    validExamples: ['89770111111'],
    notValidExamples: []
  },
  {
    code: 'PT',
    name: 'Portugal',
    format: 'NNNNNNN or NNNNNNNN or LLNNNNNNNN',
    description: 'Número de identificação civil',
    validExamples: ['1111111'],
    notValidExamples: []
  },
  {
    code: 'RO',
    name: 'Romania',
    format: 'YYMMDDNNNNNN',
    description: 'Cod numeric personal',
    validExamples: ['890101111111'],
    notValidExamples: []
  },
  {
    code: 'SE',
    name: 'Sweden',
    format: 'YYYYMMDD-NNNN',
    description: 'Personnummer',
    validExamples: ['19890101-1111'],
    notValidExamples: ['890101-1111']
  },
  {
    code: 'SI',
    name: 'Slovenia',
    format: 'DDMMYYYNNNNNN',
    description: 'Enotna matična številka občana',
    validExamples: ['0101989111111'],
    notValidExamples: []
  },
  {
    code: 'SK',
    name: 'Slovakia',
    format: 'YYNNDD/NNN or YYNNDD/NNNN',
    description: 'Rodné číslo',
    validExamples: ['897701/111'],
    notValidExamples: []
  },

  // Outside EU / ESS
  {
    code: 'AE',
    name: 'United Arab Emirates',
    format: defaultFormat,
    description: defaultLabel,
    validExamples: [defaultExample],
    notValidExamples: []
  },
  {
    code: 'AF',
    name: 'Afghanistan',
    format: defaultFormat,
    description: defaultLabel,
    validExamples: [defaultExample],
    notValidExamples: []
  },
  {
    code: 'AL',
    name: 'Albania',
    format: 'LNNNNNNNNL',
    description: 'Numri i identitetit',
    validExamples: ['A11111111A'],
    notValidExamples: []
  },
  {
    code: 'AR',
    name: 'Argentina',
    format: 'NNNNNNNN',
    description: 'Personal number',
    validExamples: ['11111111'],
    notValidExamples: []
  },
  {
    code: 'AU',
    name: 'Australia',
    format: defaultFormat,
    description: defaultLabel,
    validExamples: [defaultExample],
    notValidExamples: []
  },
  {
    code: 'AZ',
    name: 'Azerbaijan',
    format: 'NLNLNLL or NNLLLLNL',
    description: 'Personal number',
    validExamples: ['1A1A1AA'],
    notValidExamples: []
  },
  {
    code: 'BA',
    name: 'Bosnia and Herzegovina',
    format: 'NNNNNNNNNNNNN',
    description: 'Jedinstveni matični broj građana',
    validExamples: ['1111111111111'],
    notValidExamples: []
  },
  {
    code: 'BR',
    name: 'Brazil',
    format: defaultFormat,
    description: defaultLabel,
    validExamples: [defaultExample],
    notValidExamples: []
  },
  {
    code: 'BY',
    name: 'Belarus',
    format: 'NNNNNNNLNNNLLN',
    description: 'Identification number',
    validExamples: ['1111111A111AA1'],
    notValidExamples: []
  },
  {
    code: 'CA',
    name: 'Canada',
    format: defaultFormat,
    description: defaultLabel,
    validExamples: [defaultExample],
    notValidExamples: []
  },
  {
    code: 'CI',
    name: 'Côte d\'Ivoire',
    format: defaultFormat,
    description: defaultLabel,
    validExamples: [defaultExample],
    notValidExamples: []
  },
  {
    code: 'CL',
    name: 'Chile',
    format: defaultFormat,
    description: defaultLabel,
    validExamples: [defaultExample],
    notValidExamples: []
  },
  {
    code: 'CM',
    name: 'Cameroon',
    format: defaultFormat,
    description: defaultLabel,
    validExamples: [defaultExample],
    notValidExamples: []
  },
  {
    code: 'CN',
    name: 'China',
    format: defaultFormat,
    description: defaultLabel,
    validExamples: [defaultExample],
    notValidExamples: []
  },
  {
    code: 'CO',
    name: 'Colombia',
    format: 'LLNNNNNNN, LLNNNNNNNN or LLNNNNNNNNN',
    description: 'Personal number',
    validExamples: ['AA11111111'],
    notValidExamples: []
  },
  {
    code: 'CR',
    name: 'Costa Rica',
    format: defaultFormat,
    description: defaultLabel,
    validExamples: [defaultExample],
    notValidExamples: []
  },
  {
    code: 'DO',
    name: 'Dominican Republic',
    format: 'NNNXNNNNNNNXN',
    description: 'Personal number',
    validExamples: ['111-1111111-1'],
    notValidExamples: []
  },
  {
    code: 'DZ',
    name: 'Algeria',
    format: defaultFormat,
    description: defaultLabel,
    validExamples: [defaultExample],
    notValidExamples: []
  },
  {
    code: 'EC',
    name: 'Ecuador',
    format: defaultFormat,
    description: defaultLabel,
    validExamples: [defaultExample],
    notValidExamples: []
  },
  {
    code: 'EG',
    name: 'Egypt',
    format: defaultFormat,
    description: defaultLabel,
    validExamples: [defaultExample],
    notValidExamples: []
  },
  {
    code: 'ER',
    name: 'Eritrea',
    format: 'NNNNNNN',
    description: 'ID number',
    validExamples: ['1111111'],
    notValidExamples: []
  },
  {
    code: 'ET',
    name: 'Ethiopia',
    format: defaultFormat,
    description: defaultLabel,
    validExamples: [defaultExample],
    notValidExamples: []
  },
  {
    code: 'GE',
    name: 'Georgia',
    format: 'NNNNNNNNNNN',
    description: 'Personal number',
    validExamples: ['11111111111'],
    notValidExamples: []
  },
  {
    code: 'GH',
    name: 'Ghana',
    format: defaultFormat,
    description: defaultLabel,
    validExamples: [defaultExample],
    notValidExamples: []
  },
  {
    code: 'GT',
    name: 'Guatemala',
    format: 'NNNNNN',
    description: 'ID number',
    validExamples: ['111111'],
    notValidExamples: []
  },
  {
    code: 'IL',
    name: 'Israel',
    format: 'NXNNNNNNNXN',
    description: 'ID number',
    validExamples: ['1-1111111-1'],
    notValidExamples: []
  },
  {
    code: 'IN',
    name: 'India',
    format: defaultFormat,
    description: defaultLabel,
    validExamples: [defaultExample],
    notValidExamples: []
  },
  {
    code: 'IQ',
    name: 'Iraq',
    format: defaultFormat,
    description: defaultLabel,
    validExamples: [defaultExample],
    notValidExamples: []
  },
  {
    code: 'IR',
    name: 'Iran',
    format: defaultFormat,
    description: defaultLabel,
    validExamples: [defaultExample],
    notValidExamples: []
  },
  {
    code: 'JO',
    name: 'Jordan',
    format: 'NNNNNNNNNN',
    description: 'National number',
    validExamples: ['1111111111'],
    notValidExamples: []
  },
  {
    code: 'JP',
    name: 'Japan',
    format: defaultFormat,
    description: defaultLabel,
    validExamples: [defaultExample],
    notValidExamples: []
  },
  {
    code: 'KGZ',
    name: 'Kyrgyzstan',
    format: 'NNNNNNNNNNNNNN',
    description: 'Personal number',
    validExamples: ['11111111111111'],
    notValidExamples: []
  },
  {
    code: 'KR',
    name: 'Republic of Korea (South Korea)',
    format: 'NNNNNNN',
    description: 'Personal number',
    validExamples: ['1111111'],
    notValidExamples: []
  },
  {
    code: 'KW',
    name: 'Kuwait',
    format: 'NNNNNNNNNNNN',
    description: 'Civil number',
    validExamples: ['111111111111'],
    notValidExamples: []
  },
  {
    code: 'KZ',
    name: 'Kazakhstan',
    format: 'YYMMDDNNNNNN',
    description: 'ID number',
    validExamples: ['890101111111'],
    notValidExamples: []
  },
  {
    code: 'LB',
    name: 'Lebanon',
    format: defaultFormat,
    description: defaultLabel,
    validExamples: [defaultExample],
    notValidExamples: []
  },
  {
    code: 'MA',
    name: 'Morocco',
    format: defaultFormat,
    description: defaultLabel,
    validExamples: [defaultExample],
    notValidExamples: []
  },
  {
    code: 'MD',
    name: 'Moldavia',
    format: 'NNNNNNNNNNNNN',
    description: 'Numarul de Identificare',
    validExamples: ['1111111111111'],
    notValidExamples: []
  },
  {
    code: 'ME',
    name: 'Montenegro',
    format: 'NNNNNNNNNNNNN',
    description: 'Jedinstveni matični broj građana',
    validExamples: ['1111111111111'],
    notValidExamples: []
  },
  {
    code: 'MK',
    name: 'North Macedonia',
    format: 'DDMMYYYNNNNNN',
    description: 'Unique Master Citizen Number',
    validExamples: ['0101989111111'],
    notValidExamples: []
  },
  {
    code: 'MN',
    name: 'Mongolia',
    format: 'LBLBBNNNNNNNN',
    description: 'Personal number',
    validExamples: ['A A  11111111'],
    notValidExamples: []
  },
  {
    code: 'MX',
    name: 'Mexico',
    format: defaultFormat,
    description: defaultLabel,
    validExamples: [defaultExample],
    notValidExamples: []
  },
  {
    code: 'MY',
    name: 'Malaysia',
    format: 'YYMMDDNNNNNN',
    description: 'Identity number',
    validExamples: ['890101111111'],
    notValidExamples: []
  },
  {
    code: 'NG',
    name: 'Nigeria',
    format: defaultFormat,
    description: defaultLabel,
    validExamples: [defaultExample],
    notValidExamples: []
  },
  {
    code: 'NZ',
    name: 'New Zealand',
    format: defaultFormat,
    description: defaultLabel,
    validExamples: [defaultExample],
    notValidExamples: []
  },
  {
    code: 'PA',
    name: 'Panama',
    format: 'NXNNNXNNN',
    description: 'Personal number',
    validExamples: ['1-111-111'],
    notValidExamples: []
  },
  {
    code: 'PE',
    name: 'Peru',
    format: 'NNNNNNNN',
    description: 'National ID number',
    validExamples: ['11111111'],
    notValidExamples: []
  },
  {
    code: 'PH',
    name: 'Philippines',
    format: defaultFormat,
    description: defaultLabel,
    validExamples: [defaultExample],
    notValidExamples: []
  },
  {
    code: 'PK',
    name: 'Pakistan',
    format: defaultFormat,
    description: defaultLabel,
    validExamples: [defaultExample],
    notValidExamples: []
  },
  {
    code: 'PY',
    name: 'Paraguay',
    format: 'NNNNNNN',
    description: 'ID number',
    validExamples: ['1111111'],
    notValidExamples: []
  },
  {
    code: 'RS',
    name: 'Serbia',
    format: 'NNNNNNNNNNNNN',
    description: 'Jedinstveni matični broj građana',
    validExamples: ['1111111111111'],
    notValidExamples: []
  },
  {
    code: 'RU',
    name: 'Russia',
    format: defaultFormat,
    description: defaultLabel,
    validExamples: [defaultExample],
    notValidExamples: []
  },
  {
    code: 'RW',
    name: 'Rwanda',
    format: defaultFormat,
    description: defaultLabel,
    validExamples: [defaultExample],
    notValidExamples: []
  },
  {
    code: 'SG',
    name: 'Singapore',
    format: 'LNNNNNNNL',
    description: 'National ID number',
    validExamples: ['A1111111A'],
    notValidExamples: []
  },
  {
    code: 'SY',
    name: 'Syrian Arab Republic (Syria)',
    format: defaultFormat,
    description: defaultLabel,
    validExamples: [defaultExample],
    notValidExamples: []
  },
  {
    code: 'TH',
    name: 'Thailand',
    format: 'NNNNNNNNNNNNN',
    description: 'Identification number',
    validExamples: ['1111111111111'],
    notValidExamples: []
  },
  {
    code: 'TR',
    name: 'Turkey',
    format: 'NNNNNNNNNNN',
    description: 'Türkiye Cumhuriyeti Kimlik Numarası',
    validExamples: ['11111111111'],
    notValidExamples: []
  },
  {
    code: 'TW',
    name: 'Taiwan',
    format: 'LNNNNNNNNN',
    description: 'Personal ID number',
    validExamples: ['A111111111'],
    notValidExamples: []
  },
  {
    code: 'UA',
    name: 'Ukraine',
    format: 'NNNNNNNNNN or NNNNNNNN-NNNNN',
    description: 'Personal or record number',
    validExamples: ['1111111111-1111'],
    notValidExamples: []
  },
  {
    code: 'US',
    name: 'United States of America',
    format: defaultFormat,
    description: defaultLabel,
    validExamples: [defaultExample],
    notValidExamples: []
  },
  {
    code: 'UY',
    name: 'Uruguay',
    format: 'NNXNNNXNNNXN',
    description: 'Personal number',
    validExamples: ['11-111-111-1'],
    notValidExamples: []
  },
  {
    code: 'UZ',
    name: 'Uzbekistan',
    format: defaultFormat,
    description: defaultLabel,
    validExamples: [defaultExample],
    notValidExamples: []
  },
  {
    code: 'VE',
    name: 'Venezuela',
    format: 'NNNNNNN or NNNNNNNN',
    description: 'Personal number',
    validExamples: ['1111111'],
    notValidExamples: []
  },
  {
    code: 'VN',
    name: 'Viet Nam',
    format: defaultFormat,
    description: defaultLabel,
    validExamples: [defaultExample],
    notValidExamples: []
  },
  {
    code: 'YE',
    name: 'Yemen',
    format: defaultFormat,
    description: defaultLabel,
    validExamples: [defaultExample],
    notValidExamples: []
  },
  {
    code: 'ZA',
    name: 'South Africa',
    format: 'YYMMDDNNNNNNN',
    description: 'Identity number',
    validExamples: ['8901011111111'],
    notValidExamples: []
  },
];

module.exports = countries
