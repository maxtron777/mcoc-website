import type { Metadata } from 'next';
import { Open_Sans, Roboto } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig } from '@/lib/utils';
import { generateLocalBusinessSchema, generateOrganizationSchema } from '@/lib/schema';

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
  weight: ['300', '400', '500', '600', '700'],
});

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  weight: ['300', '400', '500', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | NDIS Disability Support - Central Coast NSW`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'NDIS',
    'disability support',
    'Central Coast',
    'NSW',
    'support coordination',
    'plan management',
    'NDIS provider',
    'Gosford',
    'disability services',
    'My Circles of Care',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | NDIS Disability Support - Central Coast NSW`,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - We celebrate your Diff-ability`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | NDIS Disability Support - Central Coast NSW`,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = generateLocalBusinessSchema();
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="en-AU" className={`${openSans.variable} ${roboto.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ff5d10" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-500 focus:text-white focus:rounded-md"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
