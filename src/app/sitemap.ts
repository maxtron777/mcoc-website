import { MetadataRoute } from 'next';
import { services, locations } from '@/lib/utils';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mycirclesofcare.com.au';

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ndis-resources`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/for-families`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];

  // Service pages
  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Location pages
  const locationPages = locations.map((location) => ({
    url: `${baseUrl}/locations/${location.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...locationPages];
}
