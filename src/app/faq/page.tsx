import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';
import { faqs, siteConfig } from '@/lib/utils';
import { generateFAQSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Find answers to common questions about NDIS, our disability support services, and My Circles of Care on the Central Coast NSW.',
  openGraph: {
    title: 'Frequently Asked Questions | My Circles of Care',
    description:
      'Find answers to common questions about NDIS, our disability support services, and My Circles of Care on the Central Coast NSW.',
  },
};

// Categorize FAQs
const faqCategories = {
  'About NDIS': faqs.filter((faq) =>
    ['What is the NDIS?', 'Am I eligible for NDIS?'].includes(faq.question)
  ),
  'About My Circles of Care': faqs.filter((faq) =>
    [
      'Does My Circles of Care service the Central Coast?',
      'How do I get started with My Circles of Care?',
      'Is My Circles of Care a registered NDIS provider?',
      'Can I choose my own support workers?',
    ].includes(faq.question)
  ),
  'Our Services': faqs.filter((faq) =>
    [
      'What services does My Circles of Care offer?',
      'What is Support Coordination?',
    ].includes(faq.question)
  ),
};

export default function FAQPage() {
  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-500 via-secondary-600 to-secondary-700 py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-200">
              Find answers to common questions about NDIS, our services, and how My Circles
              of Care can support you on the Central Coast.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* About NDIS */}
            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                About NDIS
              </h2>
              <FAQAccordion items={faqCategories['About NDIS']} category="About NDIS" />
            </div>

            {/* About My Circles of Care */}
            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                About My Circles of Care
              </h2>
              <FAQAccordion
                items={faqCategories['About My Circles of Care']}
                category="About My Circles of Care"
              />
            </div>

            {/* Our Services */}
            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                Our Services
              </h2>
              <FAQAccordion items={faqCategories['Our Services']} category="Our Services" />
            </div>

            {/* Still Have Questions */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center mt-16">
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                Still Have Questions?
              </h2>
              <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                Cannot find the answer you are looking for? We are here to help. Contact our
                friendly team and we will be happy to assist you.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors duration-200"
                >
                  Contact Us
                </Link>
                <a
                  href={siteConfig.phoneLink}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-primary-500 text-primary-500 hover:bg-primary-50 font-semibold rounded-lg transition-colors duration-200"
                >
                  <Phone className="w-4 h-4" />
                  Call {siteConfig.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
            Take the first step towards achieving your goals. Contact us today for a free
            consultation and discover how we can support your NDIS journey.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors duration-200 text-lg shadow-lg"
          >
            Get Your Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
