'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { generateBreadcrumbSchema } from '@/lib/schema';
import { siteConfig } from '@/lib/utils';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  // Build schema items with full URLs
  const schemaItems = [
    { name: 'Home', url: siteConfig.url },
    ...items.map((item) => ({
      name: item.label,
      url: item.href ? `${siteConfig.url}${item.href}` : siteConfig.url,
    })),
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(schemaItems);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav aria-label="Breadcrumb" className="py-4">
        <ol className="flex items-center flex-wrap gap-2 text-sm">
          <li className="flex items-center">
            <Link
              href="/"
              className="text-gray-500 hover:text-primary-500 transition-colors flex items-center gap-1"
              aria-label="Home"
            >
              <Home className="w-4 h-4" />
              <span className="sr-only sm:not-sr-only">Home</span>
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              <ChevronRight className="w-4 h-4 text-gray-400 mx-2" aria-hidden="true" />
              {item.href && index < items.length - 1 ? (
                <Link
                  href={item.href}
                  className="text-gray-500 hover:text-primary-500 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-900 font-medium" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
