import { Metadata } from 'next';
import Link from 'next/link';
import {
  Users,
  Heart,
  FileText,
  Home,
  Users2,
  Sparkles,
  ArrowRight,
  Phone,
} from 'lucide-react';
import { services, siteConfig } from '@/lib/utils';
import Breadcrumb from '@/components/Breadcrumb';
import {
  SupportCoordinationIllustration,
  PersonalCareIllustration,
  PlanManagementIllustration,
  IndependentLivingIllustration,
  CommunityParticipationIllustration,
  HouseholdTasksIllustration,
  CirclesDecoration,
} from '@/components/illustrations';

// Illustration mapping for services
const illustrationMap: Record<string, React.ReactNode> = {
  'support-coordination': <SupportCoordinationIllustration className="w-full h-32" />,
  'personal-activities': <PersonalCareIllustration className="w-full h-32" />,
  'plan-management': <PlanManagementIllustration className="w-full h-32" />,
  'support-independent-living': <IndependentLivingIllustration className="w-full h-32" />,
  'community-participation': <CommunityParticipationIllustration className="w-full h-32" />,
  'household-tasks': <HouseholdTasksIllustration className="w-full h-32" />,
};

export const metadata: Metadata = {
  title: 'Our NDIS Support Services | My Circles of Care',
  description:
    'Comprehensive NDIS support services on the Central Coast NSW including Support Coordination, Personal Care, Plan Management, Independent Living, Community Participation, and Household Tasks.',
  openGraph: {
    title: 'Our NDIS Support Services | My Circles of Care',
    description:
      'Comprehensive NDIS support services on the Central Coast NSW including Support Coordination, Personal Care, Plan Management, and more.',
    url: `${siteConfig.url}/services`,
  },
};

const iconMap: Record<string, React.ReactNode> = {
  Users: <Users className="w-10 h-10" />,
  Heart: <Heart className="w-10 h-10" />,
  FileText: <FileText className="w-10 h-10" />,
  Home: <Home className="w-10 h-10" />,
  Users2: <Users2 className="w-10 h-10" />,
  Sparkles: <Sparkles className="w-10 h-10" />,
};

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-600 text-white py-16 md:py-24">
        <div className="container-custom">
          <Breadcrumb items={[{ label: 'Services' }]} />
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">Our NDIS Support Services</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              At My Circles of Care, we provide comprehensive, person-centered NDIS
              support services across the Central Coast NSW. We celebrate your
              Diff-ability and work alongside you to achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50 relative overflow-hidden">
        <CirclesDecoration className="absolute inset-0 w-full h-full opacity-20" />
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="mb-4">How We Can Support You</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our range of services is designed to support your independence,
              wellbeing, and participation in the community. Each service is
              tailored to your individual needs and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <article
                key={service.id}
                className="card p-8 flex flex-col h-full group hover:shadow-xl transition-shadow duration-300"
              >
                {/* Service Illustration */}
                <div className="mb-4 group-hover:scale-105 transition-transform duration-300">
                  {illustrationMap[service.id] || (
                    <div className="text-primary-500">
                      {iconMap[service.icon]}
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  {service.longDescription}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span className="text-primary-500 mt-1">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${service.id}`}
                  className="inline-flex items-center gap-2 text-primary-500 font-semibold hover:gap-3 transition-all group-hover:text-primary-600"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-500 text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today for a free, no-obligation consultation. We&apos;ll
            discuss your needs and explain how our services can support your NDIS
            plan and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-white">
              Contact Us
            </Link>
            <a
              href={siteConfig.phoneLink}
              className="btn-white inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
