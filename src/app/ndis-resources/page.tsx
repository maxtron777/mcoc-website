import { Metadata } from 'next';
import Link from 'next/link';
import {
  Phone,
  ExternalLink,
  CheckCircle,
  Info,
  DollarSign,
  Users,
  Building2,
  Heart,
  FileText,
  HelpCircle,
} from 'lucide-react';
import { siteConfig } from '@/lib/utils';
import Breadcrumb from '@/components/Breadcrumb';
import {
  NDISJourneyIllustration,
  SupportCoordinationIllustration,
  PlanManagementIllustration,
  CirclesDecoration,
} from '@/components/illustrations';

export const metadata: Metadata = {
  title: 'NDIS Resources & Guides | My Circles of Care',
  description:
    'Learn about the NDIS, eligibility requirements, how funding works, and find useful resources. My Circles of Care helps you navigate the NDIS on the Central Coast NSW.',
  openGraph: {
    title: 'NDIS Resources & Guides | My Circles of Care',
    description:
      'Learn about the NDIS, eligibility requirements, how funding works, and find useful resources. My Circles of Care helps you navigate the NDIS.',
    url: `${siteConfig.url}/ndis-resources`,
  },
};

const fundingCategories = [
  {
    title: 'Core Supports',
    icon: <Heart className="w-8 h-8" />,
    description:
      'Funding for everyday activities including personal care, household tasks, transport, and community participation.',
    examples: [
      'Assistance with daily living',
      'Transport to appointments and activities',
      'Community access and social participation',
      'Consumables and equipment',
    ],
  },
  {
    title: 'Capacity Building',
    icon: <Users className="w-8 h-8" />,
    description:
      'Funding to build your skills and independence, helping you pursue your goals and live more independently.',
    examples: [
      'Support coordination',
      'Improved living arrangements',
      'Increased social and community participation',
      'Employment support',
    ],
  },
  {
    title: 'Capital Supports',
    icon: <Building2 className="w-8 h-8" />,
    description:
      'Funding for larger investments such as assistive technology, equipment, and home or vehicle modifications.',
    examples: [
      'Assistive technology',
      'Home modifications',
      'Specialist disability accommodation',
      'Vehicle modifications',
    ],
  },
];

const usefulLinks = [
  {
    title: 'NDIS Official Website',
    description: 'The official National Disability Insurance Scheme website with comprehensive information.',
    url: 'https://www.ndis.gov.au',
    icon: <FileText className="w-6 h-6" />,
  },
  {
    title: 'NDIS Quality and Safeguards Commission',
    description: 'Information about provider quality, safety, and making complaints.',
    url: 'https://www.ndiscommission.gov.au',
    icon: <CheckCircle className="w-6 h-6" />,
  },
  {
    title: 'Carers NSW',
    description: 'Support and resources for carers across New South Wales.',
    url: 'https://www.carersnsw.org.au',
    icon: <Heart className="w-6 h-6" />,
  },
  {
    title: 'Disability Advocacy NSW',
    description: 'Independent advocacy services for people with disability in NSW.',
    url: 'https://da.org.au',
    icon: <Users className="w-6 h-6" />,
  },
];

const eligibilityRequirements = [
  'Be aged under 65 when you first apply',
  'Be an Australian citizen, permanent resident, or hold a Protected Special Category Visa',
  'Have a permanent disability that significantly affects your daily life',
  'Have a disability that means you need support from others or equipment',
  'Have a disability likely to be lifelong',
];

export default function NDISResourcesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary-500 via-secondary-600 to-secondary-700 text-white py-16 md:py-24">
        <div className="container-custom">
          <Breadcrumb items={[{ label: 'NDIS Resources' }]} />
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">NDIS Resources & Guides</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Understanding the NDIS can be complex. We have put together helpful
              resources to guide you through the National Disability Insurance Scheme.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <CirclesDecoration className="absolute inset-0 w-full h-full opacity-20" />
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
              <Info className="w-8 h-8 text-primary-500" />
            </div>
            <h2 className="mb-6">Navigating the NDIS</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The National Disability Insurance Scheme (NDIS) is Australia&apos;s way of
              providing support to people with disability, their families, and carers.
              Whether you&apos;re new to the NDIS or looking to better understand your plan,
              these resources will help you make the most of the support available to you.
            </p>
            {/* Journey Illustration */}
            <div className="max-w-2xl mx-auto">
              <NDISJourneyIllustration className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* What is the NDIS Section */}
      <section className="section-padding bg-gray-50 relative overflow-hidden">
        <CirclesDecoration className="absolute inset-0 w-full h-full opacity-15" />
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">What is the NDIS?</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The National Disability Insurance Scheme (NDIS) is a national scheme
                that provides funding and support to Australians with permanent and
                significant disability. It represents a fundamental change in how
                disability support is funded and delivered in Australia.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Unlike previous systems, the NDIS gives you choice and control over
                your supports. You can decide which providers you work with, how your
                funding is managed, and how your supports are delivered to best meet
                your individual needs and goals.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The NDIS is not a welfare payment &mdash; it&apos;s an insurance scheme
                that provides support based on individual need. The goal is to help
                people with disability achieve their goals, participate in the community,
                gain employment, and live more independently.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-6">Key NDIS Principles</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900">Choice & Control</strong>
                    <span className="text-gray-600 text-sm">
                      You decide what supports you need and who provides them
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900">Person-Centered</strong>
                    <span className="text-gray-600 text-sm">
                      Your plan is based on your individual needs and goals
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900">Lifetime Approach</strong>
                    <span className="text-gray-600 text-sm">
                      Supports that invest in your skills and independence
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-gray-900">Community Inclusion</strong>
                    <span className="text-gray-600 text-sm">
                      Helping you participate fully in your community
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NDIS Eligibility Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-100 rounded-full mb-6">
                <HelpCircle className="w-8 h-8 text-secondary-500" />
              </div>
              <h2 className="mb-6">NDIS Eligibility</h2>
              <p className="text-lg text-gray-700">
                To access the NDIS, you need to meet certain eligibility requirements.
                Here are the key criteria you&apos;ll need to meet:
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <h3 className="text-xl font-bold mb-6">Eligibility Requirements</h3>
              <ul className="space-y-4">
                {eligibilityRequirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <Info className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Not Sure If You&apos;re Eligible?</h4>
                  <p className="text-gray-700 text-sm mb-4">
                    Eligibility can be complex, and there are different pathways to access
                    the NDIS. We can help you understand whether you might be eligible and
                    guide you through the application process.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-primary-500 font-semibold hover:text-primary-600 transition-colors"
                  >
                    Contact us for a free eligibility discussion
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How NDIS Funding Works Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-6">
              <DollarSign className="w-8 h-8 text-primary-500" />
            </div>
            <h2 className="mb-4">How NDIS Funding Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              NDIS funding is divided into three main categories, each designed to
              support different aspects of your life and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {fundingCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="text-primary-500 mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <p className="text-gray-700 mb-6">{category.description}</p>
                <h4 className="font-semibold text-gray-900 mb-3 text-sm">Examples include:</h4>
                <ul className="space-y-2">
                  {category.examples.map((example, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-primary-500 flex-shrink-0 mt-0.5" />
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Useful Links Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Useful Links</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These external resources provide valuable information about the NDIS,
              disability support, and advocacy services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {usefulLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors group"
              >
                <div className="text-primary-500 flex-shrink-0">{link.icon}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary-500 transition-colors flex items-center gap-2">
                    {link.title}
                    <ExternalLink className="w-4 h-4" />
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">{link.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* How We Can Help Section */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">How We Can Help</h2>
              <p className="text-lg text-gray-700">
                At My Circles of Care, we&apos;re here to support you through every
                step of your NDIS journey on the Central Coast.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-bold mb-3">Understanding Your Plan</h3>
                <p className="text-gray-600">
                  We help you understand your NDIS plan, what it covers, and how to
                  make the most of your funding to achieve your goals.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-bold mb-3">Support Coordination</h3>
                <p className="text-gray-600">
                  Our support coordinators connect you with the right providers and
                  services, ensuring your supports work together effectively.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-bold mb-3">Plan Reviews</h3>
                <p className="text-gray-600">
                  We help you prepare for plan reviews, gathering evidence and
                  documenting your achievements and changing needs.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-bold mb-3">Local Connections</h3>
                <p className="text-gray-600">
                  As a Central Coast provider, we have strong connections with local
                  services and can help you access community resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-500 text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">Need Help Understanding the NDIS?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We&apos;re here to help you navigate the NDIS and get the support you
            deserve. Contact us today for a free, no-obligation consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-white">
              Get Free Advice
            </Link>
            <a
              href={siteConfig.phoneLink}
              className="btn-white inline-flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
