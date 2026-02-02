import Link from 'next/link';
import { ArrowRight, Phone, MessageCircle, ClipboardList, Rocket } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import ServiceCard from '@/components/ServiceCard';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { services, siteConfig } from '@/lib/utils';
import { NDISJourneyIllustration, CirclesDecoration } from '@/components/illustrations';

// How It Works steps data
const howItWorksSteps = [
  {
    step: 1,
    title: 'Get in Touch',
    description: 'Reach out to us via phone, email, or our contact form. We are here to listen.',
    icon: Phone,
  },
  {
    step: 2,
    title: 'Free Consultation',
    description: 'Meet with our team to discuss your needs, goals, and how we can help.',
    icon: MessageCircle,
  },
  {
    step: 3,
    title: 'Personalized Plan',
    description: 'We create a tailored support plan designed around your unique needs.',
    icon: ClipboardList,
  },
  {
    step: 4,
    title: 'Start Your Journey',
    description: 'Begin receiving the support you need to achieve your goals and live your best life.',
    icon: Rocket,
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <HeroSection />

      {/* Services Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary-500 mb-4">
              Our NDIS Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive disability support services tailored to your individual needs.
              We help you navigate the NDIS and achieve your goals.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>

          {/* View All Services Link */}
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center text-primary-500 font-semibold hover:text-primary-600 transition-colors"
            >
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <CirclesDecoration className="absolute inset-0 w-full h-full opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary-500 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Getting started with My Circles of Care is simple. Here is how we help you
              on your journey to better support.
            </p>
            {/* Journey Illustration */}
            <div className="max-w-3xl mx-auto mb-12">
              <NDISJourneyIllustration className="w-full" />
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorksSteps.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.step}
                  className="relative text-center"
                >
                  {/* Step Number & Icon */}
                  <div className="relative inline-flex items-center justify-center mb-6">
                    <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {item.step}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl font-semibold text-secondary-500 mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600">
                    {item.description}
                  </p>

                  {/* Connector Line (hidden on mobile and last item) */}
                  {item.step < 4 && (
                    <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gray-200">
                      <div className="absolute right-0 -top-1 w-2 h-2 border-t-2 border-r-2 border-gray-300 rotate-45" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-500 to-primary-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Take the first step towards the support you deserve. Contact us today for a
              free, no-obligation consultation and discover how we can help you achieve your goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-500 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg shadow-lg"
              >
                Get Your Free Consultation
              </Link>
              <a
                href={siteConfig.phoneLink}
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white/10 transition-colors duration-200 text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                {siteConfig.phone}
              </a>
            </div>

            <p className="text-white/80 text-sm">
              Serving the Central Coast NSW including Gosford, Wyong, Woy Woy, Tuggerah, and Terrigal
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
