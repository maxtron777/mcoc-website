import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { siteConfig } from '@/lib/utils';
import { LocationIllustration, CirclesDecoration } from '@/components/illustrations';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with My Circles of Care. Contact us for a free consultation about our NDIS disability support services on the Central Coast NSW.',
  openGraph: {
    title: 'Contact Us | My Circles of Care',
    description:
      'Get in touch with My Circles of Care. Contact us for a free consultation about our NDIS disability support services on the Central Coast NSW.',
  },
};

export default function ContactPage() {
  const fullAddress = `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.postcode}`;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-500 via-secondary-600 to-secondary-700 py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-200">
              Ready to start your journey with My Circles of Care? We would love to hear from you.
              Reach out for a free consultation and let us discuss how we can support you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form Column */}
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10">
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we will get back to you within 24-48 hours.
              </p>
              <ContactForm />
            </div>

            {/* Contact Info Column */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <a
                        href={siteConfig.phoneLink}
                        className="text-primary-500 hover:text-primary-600 transition-colors text-lg"
                      >
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-primary-500 hover:text-primary-600 transition-colors"
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Address</h3>
                      <address className="not-italic text-gray-600">
                        {siteConfig.address.street}
                        <br />
                        {siteConfig.address.city}, {siteConfig.address.state}{' '}
                        {siteConfig.address.postcode}
                      </address>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: {siteConfig.businessHours.weekdays}
                        <br />
                        Saturday - Sunday: {siteConfig.businessHours.weekends}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-primary-50 border border-primary-100 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Expected Response Time
                </h3>
                <p className="text-gray-600">
                  We aim to respond to all enquiries within 24-48 business hours. For urgent
                  matters, please call us directly at{' '}
                  <a
                    href={siteConfig.phoneLink}
                    className="text-primary-500 hover:text-primary-600 font-semibold"
                  >
                    {siteConfig.phone}
                  </a>
                  .
                </p>
              </div>

              {/* Location Illustration */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary-50 to-white flex items-center justify-center relative">
                  <CirclesDecoration className="absolute inset-0 w-full h-full opacity-30" />
                  <LocationIllustration className="w-full max-w-xs relative z-10" />
                </div>
                <div className="p-4 bg-gray-50">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-500 hover:text-primary-600 font-medium text-sm flex items-center gap-2"
                  >
                    <MapPin className="w-4 h-4" />
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Prefer to Talk?
          </h2>
          <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
            Give us a call for a friendly chat about how My Circles of Care can support
            you on your NDIS journey.
          </p>
          <a
            href={siteConfig.phoneLink}
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors duration-200 text-lg shadow-lg"
          >
            <Phone className="w-5 h-5" />
            Call {siteConfig.phone}
          </a>
        </div>
      </section>
    </>
  );
}
