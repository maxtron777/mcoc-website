import { Metadata } from 'next';
import Link from 'next/link';
import {
  Phone,
  Heart,
  Shield,
  MessageSquare,
  BookOpen,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Quote,
} from 'lucide-react';
import { siteConfig } from '@/lib/utils';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'For Families | Support for NDIS Participant Families | My Circles of Care',
  description:
    'Supporting your loved one with their NDIS journey can be challenging. My Circles of Care provides resources, guidance, and support for families on the Central Coast NSW.',
  openGraph: {
    title: 'For Families | Support for NDIS Participant Families | My Circles of Care',
    description:
      'Supporting your loved one with their NDIS journey can be challenging. My Circles of Care provides resources, guidance, and support for families.',
    url: `${siteConfig.url}/for-families`,
  },
};

const familySupportCards = [
  {
    icon: <Shield className="w-10 h-10" />,
    title: 'Peace of Mind',
    description:
      'Know that your loved one is receiving quality care from trained, compassionate support workers who understand their unique needs and treat them with dignity and respect.',
  },
  {
    icon: <Heart className="w-10 h-10" />,
    title: 'Respite Support',
    description:
      'Taking a break is important for your wellbeing too. Our support services give you time to rest and recharge, knowing your family member is in good hands.',
  },
  {
    icon: <MessageSquare className="w-10 h-10" />,
    title: 'Clear Communication',
    description:
      'We keep you informed about your loved one&apos;s progress, any concerns, and celebrate their achievements together. You are always part of the conversation.',
  },
  {
    icon: <BookOpen className="w-10 h-10" />,
    title: 'Guidance & Resources',
    description:
      'Navigating the NDIS can be overwhelming. We provide guidance, answer questions, and connect you with resources to help you support your family member effectively.',
  },
];

const familyFAQs = [
  {
    question: 'How do you keep families informed about their loved one\'s care?',
    answer:
      'We believe in open, transparent communication. Your support coordinator will provide regular updates, and we encourage ongoing dialogue about your loved one\'s progress, goals, and any concerns. We can tailor our communication to suit your preferences, whether that\'s phone calls, emails, or face-to-face meetings.',
  },
  {
    question: 'Can family members be involved in setting goals and plans?',
    answer:
      'Absolutely! While the NDIS is focused on the participant\'s choice and control, family members often play a crucial role in supporting decision-making. We welcome family input in goal-setting, plan reviews, and ongoing support decisions, always respecting the participant\'s preferences and autonomy.',
  },
  {
    question: 'What if I have concerns about my family member\'s support?',
    answer:
      'We take all concerns seriously. You can raise any issues directly with our team at any time. We have clear processes for addressing concerns and making adjustments to ensure your loved one receives the best possible support. Your feedback helps us continuously improve.',
  },
  {
    question: 'Is there support available for carers and families too?',
    answer:
      'Yes! While our primary focus is supporting NDIS participants, we understand that families and carers need support too. We can help connect you with carer support services, respite options, and community resources. We also work with organizations like Carers NSW to ensure families get the help they need.',
  },
];

const familyResources = [
  {
    title: 'Carers NSW',
    description: 'Support, information, and advocacy for carers in New South Wales.',
    url: 'https://www.carersnsw.org.au',
  },
  {
    title: 'Carer Gateway',
    description: 'Australian Government support and services for carers.',
    url: 'https://www.carergateway.gov.au',
  },
  {
    title: 'NDIS for Families',
    description: 'Official NDIS resources specifically for families and carers.',
    url: 'https://www.ndis.gov.au/understanding/families-and-carers',
  },
  {
    title: 'Family Advocacy',
    description: 'Advocacy and support for families of people with disability.',
    url: 'https://www.family-advocacy.com',
  },
];

// Client component for FAQ accordion
function FAQSection() {
  return (
    <div className="space-y-4">
      {familyFAQs.map((faq, index) => (
        <details
          key={index}
          className="group border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm"
        >
          <summary className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors list-none">
            <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
            <span className="flex-shrink-0 ml-2 text-primary-500">
              <ChevronDown className="w-5 h-5 group-open:hidden" />
              <ChevronUp className="w-5 h-5 hidden group-open:block" />
            </span>
          </summary>
          <div className="px-6 pb-4 text-gray-600 leading-relaxed">
            {faq.answer}
          </div>
        </details>
      ))}
    </div>
  );
}

export default function ForFamiliesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-600 text-white py-16 md:py-24">
        <div className="container-custom">
          <Breadcrumb items={[{ label: 'For Families' }]} />
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">Supporting Your Loved One&apos;s NDIS Journey</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Caring for a family member with disability takes love, patience, and
              dedication. We are here to support your whole family through the NDIS
              journey.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mb-6">We Understand the Challenges</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Being a family member or carer of someone with disability comes with
                  unique joys and challenges. We know you want the very best for your
                  loved one, and navigating the NDIS system while managing your own
                  responsibilities can be overwhelming.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  At My Circles of Care, we see the whole picture. We understand that
                  supporting one person often means supporting an entire family. That&apos;s
                  why we work closely with families to ensure everyone feels informed,
                  supported, and confident in the care being provided.
                </p>
              </div>
              <div className="bg-primary-50 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-4">You Are Not Alone</h3>
                <p className="text-gray-700 mb-6">
                  Many families share similar experiences &mdash; the worry about finding
                  the right support, the stress of managing appointments and paperwork,
                  the hope for their loved one&apos;s future.
                </p>
                <p className="text-gray-700">
                  We have been privileged to walk alongside hundreds of families on the
                  Central Coast. We are here to make this journey easier for you and
                  your loved one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We're Here for You Too Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">We&apos;re Here for You Too</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              While the NDIS plan belongs to your family member, we recognize that
              families are often integral to providing support and making decisions.
              We respect the important role you play and ensure you feel included,
              informed, and valued throughout our partnership.
            </p>
            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Whether you&apos;re a parent, sibling, partner, or extended family member,
              we welcome your involvement and work to build a relationship of trust and
              open communication. Your insights help us provide better support for your
              loved one.
            </p>
          </div>
        </div>
      </section>

      {/* How We Support Families Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">How We Support Families</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our approach considers the needs of your whole family, not just the
              NDIS participant.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {familySupportCards.map((card, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-primary-500 mb-4 flex justify-center">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Family Questions Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Common Family Questions</h2>
              <p className="text-lg text-gray-600">
                We know families have many questions. Here are answers to some of the
                most common concerns we hear.
              </p>
            </div>

            <FAQSection />

            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">Have more questions?</p>
              <Link
                href="/contact"
                className="inline-flex items-center text-primary-500 font-semibold hover:text-primary-600 transition-colors"
              >
                Contact us &mdash; we are happy to help
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Family Resources Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Family Resources</h2>
              <p className="text-lg text-gray-600">
                These resources provide additional support, information, and services
                for families and carers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {familyResources.map((resource, index) => (
                <a
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors group"
                >
                  <BookOpen className="w-6 h-6 text-primary-500 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 group-hover:text-primary-500 transition-colors flex items-center gap-2">
                      {resource.title}
                      <ExternalLink className="w-4 h-4" />
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">{resource.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Quote className="w-12 h-12 text-primary-300 mx-auto mb-6" />
            <blockquote className="text-2xl text-gray-800 font-medium mb-6 leading-relaxed">
              &ldquo;Finding My Circles of Care was a blessing for our family. They
              don&apos;t just support our son &mdash; they support all of us. The team
              keeps us informed, includes us in decisions, and genuinely cares about
              our family&apos;s wellbeing. The peace of mind knowing he&apos;s in such
              caring hands is invaluable.&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-primary-200 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary-500" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">Margaret T.</p>
                <p className="text-primary-500 text-sm">Parent of NDIS Participant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-500 text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">Let Us Support Your Family</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We would love to meet you and discuss how we can support your loved one
            and your family. Contact us today for a free, no-obligation consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-white">
              Get in Touch
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
