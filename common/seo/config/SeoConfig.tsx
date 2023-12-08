import { DefaultSeoProps } from 'next-seo';

const NEXT_SEO_CONFIG = {
  defaultTitle: 'Company Title',
  description: 'Comapny Description',
  canonical: '#',
  openGraph: {
    type: 'website',
    title: 'Company',
    description: 'Comapny Description',
    images: [
      {
        url: '/vercel.svg',
        width: 640,
        height: 640,
        alt: 'company-logo',
      },
    ],
    url: '#',
    locale: 'en_US',
    site_name: 'Company',
  },
  twitter: {
    cardType: 'summary',
    site: '',
    handle: '',
  },
} as DefaultSeoProps;

export default NEXT_SEO_CONFIG;
