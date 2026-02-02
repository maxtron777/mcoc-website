import { siteConfig } from './utils';

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: 'MCOC',
    description: siteConfig.description,
    url: siteConfig.url,
    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.url}/images/logo.PNG`,
      width: 300,
      height: 100,
    },
    image: [`${siteConfig.url}/images/hero.jpg`],
    telephone: '+61413610404',
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postcode,
      addressCountry: 'AU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -33.4269,
      longitude: 151.342,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
    ],
    areaServed: [
      { '@type': 'City', name: 'Gosford' },
      { '@type': 'City', name: 'Wyong' },
      { '@type': 'City', name: 'Woy Woy' },
      { '@type': 'City', name: 'Tuggerah' },
      { '@type': 'AdministrativeArea', name: 'Central Coast', addressRegion: 'NSW', addressCountry: 'AU' },
    ],
    sameAs: [siteConfig.social.facebook, siteConfig.social.linkedin],
    priceRange: '$$',
    paymentAccepted: ['NDIS Funding', 'Plan Managed', 'Self Managed'],
    currenciesAccepted: 'AUD',
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.PNG`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+61413610404',
      contactType: 'customer service',
      areaServed: 'AU',
      availableLanguage: 'English',
    },
    sameAs: [siteConfig.social.facebook, siteConfig.social.linkedin],
  };
}

export function generateServiceSchema(service: {
  title: string;
  description: string;
  id: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    serviceType: service.title,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.name,
      '@id': `${siteConfig.url}/#organization`,
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Central Coast NSW',
    },
    audience: {
      '@type': 'PeopleAudience',
      audienceType: 'NDIS Participants',
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${siteConfig.url}/services/${service.id}`,
      servicePhone: '+61413610404',
    },
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
