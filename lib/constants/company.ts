export const COMPANY = {
  NIT: '300625197',
  NAME: 'Andrés Raxón',
  COMMERCIAL_NAME: 'andrsrxn',
  LEGAL_NAME: 'Carlos Andrés Raxón Castañeda',

  EMAIL_ADDRESSES: {
    VERIFIED_SENDING: 'updates',
    VERIFIED_RECEIVING: 'web',
    INFO: 'info',
  },
  DOCS: {
    CV: {
      URL: '/docs/cv.pdf',
      LABEL: 'Andrés Raxón - CV.pdf',
    },
    CV_EN: {
      URL: '/docs/cv-english.pdf',
      LABEL: 'Andrés Raxón - CV - English.pdf',
    },
  },
  SOCIAL_MEDIA: {
    INSTAGRAM: {
      LABEL: 'Instagram',
      USER: '@andrsrxn',
      URL: 'https://www.instagram.com/andrsrxn',
    },
    WHATSAPP: {
      LABEL: 'WhatsApp',
      USER: 'andrsrxn',
      URL: 'https://wa.me/message/SZWJ4FNBEJHID1',
    },
    LINKEDIN: {
      LABEL: 'LinkedIn',
      USER: 'andrsrxn',
      URL: 'https://www.linkedin.com/in/andrsrxn/',
    },
    GITHUB: {
      LABEL: 'GitHub',
      USER: 'andrsrxn',
      URL: 'https://github.com/andrsrxn',
    },
  },
  ADDRESS: {
    LOCALITY: 'Mixco',
    COUNTRY: 'Guatemala',
    COUNTRY_CODE: 'GT',
    REGION: 'Guatemala',
    POSTAL_CODE: '01057',
  },
} as const
