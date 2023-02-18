export enum PAGES {
  MAIN_LANDING = 'MAIN_LANDING'
}

export const AllMonth = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export const CALENDLY_LINKS = {
  HEADER: 'https://calendly.com/comfi_amal/30min?utm_campaign=&utm_medium=header&utm_source=website',
  HERO: 'https://calendly.com/comfi_amal/30min?utm_campaign=&utm_medium=hero&utm_source=website',
  FOOTER: 'https://calendly.com/comfi_amal/30min?utm_campaign=&utm_medium=footer&utm_source=website'
};

export const LEAD_MAGNET_FORM_LINK =
  'https://mc.us9.list-manage.com/signup-form/subscribe?u=0352cc16715cb6e672da3c52b&id=00de29e1f0';

export const COMFI_INTRO_LINK = 'https://youtu.be/akDP3SlwpBY';

export const FAQSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Which countries does Comfi support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Comfi is available to any of your customers that either have a Stripe account worldwide or a bank account in USA, UAE, Canada, UK, Germany, France, Netherlands, Ireland, Spain.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can any business work with Comfi?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Comfi works with subscription-based B2B companies. There are certain high risk categories, or ethically questionable businesses that Comfi may not work with.'
      }
    },
    {
      '@type': 'Question',
      name: 'How does Comfi’s pricing work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are no platform fees to integrate with Comfi. Our pricing is applied on every transaction made through Comfi, and calculated based on your industry and annual sales volumes. This includes all payment gateway charges without any hidden fees. To learn more, reach out to us at hi@comfi.app'
      }
    },
    {
      '@type': 'Question',
      name: 'How much time it takes to start?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A couple of minutes if you want to use Comfi only for generating payment links and embedding them into your invoices or sending separately to your customers. If you’d love to also integrate Comfi at your self-serve checkout through API that will take around 7-10 working days depending on your backlog.'
      }
    },
    {
      '@type': 'Question',
      name: 'What if a user wants to upgrade the plan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You should treat us a payment gateway that lets your customer pay for any invoice in chunks. If your customer wants to change his/her plan you should issue a new invoice that contains the amount payable which the customer can split again.'
      }
    }
  ]
};

export const landingSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'United Arab Emirates',
    addressRegion: 'Dubai',
    addressLocality: 'Barsha Heights',
    streetAddress: 'I-Rise Tower'
  },
  founders: [
    {
      '@type': 'Person',
      givenName: 'Sanjar',
      familyName: 'Samiev'
    },
    {
      '@type': 'Person',
      givenName: 'Alisher',
      familyName: 'Akbarov'
    },
    {
      '@type': 'Person',
      givenName: 'Amal',
      familyName: 'Abdullaev'
    },
    {
      '@type': 'Person',
      givenName: 'Alexander',
      familyName: 'Mushta'
    }
  ],
  foundingLocation: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'United Arab Emirates',
      addressRegion: 'Dubai',
      addressLocality: 'Barsha Heights',
      streetAddress: 'I-Rise Tower'
    }
  },
  location: {
    '@type': 'PostalAddress',
    addressCountry: 'United Arab Emirates',
    addressRegion: 'Dubai',
    addressLocality: 'Barsha Heights',
    streetAddress: 'I-Rise Tower'
  },
  brand: {
    '@type': 'Brand',
    logo: 'https://firebasestorage.googleapis.com/v0/b/comfi-prod.appspot.com/o/02.jpg?alt=media&token=e75663f3-2964-43ee-8b75-77d3df0419ea',
    slogan: 'Sell 2x more annual subscriptions',
    name: 'Comfi',
    description: 'Comfi is a Dubai based fintech startups helping SaaS businesses to sell 2x more annual subscriptions',
    image:
      'https://firebasestorage.googleapis.com/v0/b/comfi-prod.appspot.com/o/OG_NEW.jpg?alt=media&token=94a24c02-c00e-4582-9f38-e5357ad29948',
    url: 'https://comfi.app'
  },
  email: 'hi@comfi.app',
  foundingDate: '2022-06-15T11:16:11+0000',
  legalName: 'Comfi LTD',
  logo: 'https://firebasestorage.googleapis.com/v0/b/comfi-prod.appspot.com/o/02.jpg?alt=media&token=e75663f3-2964-43ee-8b75-77d3df0419ea',
  telephone: '+971544953954',
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    value: 20
  }
};

export const skeltonArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
