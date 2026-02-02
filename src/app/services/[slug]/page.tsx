import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Users,
  Heart,
  FileText,
  Home,
  Users2,
  Sparkles,
  Phone,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { services, siteConfig } from '@/lib/utils';
import { generateServiceSchema } from '@/lib/schema';
import Breadcrumb from '@/components/Breadcrumb';

const iconMap: Record<string, React.ReactNode> = {
  Users: <Users className="w-16 h-16" />,
  Heart: <Heart className="w-16 h-16" />,
  FileText: <FileText className="w-16 h-16" />,
  Home: <Home className="w-16 h-16" />,
  Users2: <Users2 className="w-16 h-16" />,
  Sparkles: <Sparkles className="w-16 h-16" />,
};

const smallIconMap: Record<string, React.ReactNode> = {
  Users: <Users className="w-8 h-8" />,
  Heart: <Heart className="w-8 h-8" />,
  FileText: <FileText className="w-8 h-8" />,
  Home: <Home className="w-8 h-8" />,
  Users2: <Users2 className="w-8 h-8" />,
  Sparkles: <Sparkles className="w-8 h-8" />,
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);

  if (!service) {
    return {
      title: 'Service Not Found | My Circles of Care',
    };
  }

  return {
    title: `${service.title} | NDIS Support | My Circles of Care`,
    description: service.longDescription,
    openGraph: {
      title: `${service.title} | NDIS Support | My Circles of Care`,
      description: service.longDescription,
      url: `${siteConfig.url}/services/${service.id}`,
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);

  if (!service) {
    notFound();
  }

  const serviceSchema = generateServiceSchema({
    title: service.title,
    description: service.longDescription,
    id: service.id,
  });

  // Get related services (exclude current service)
  const relatedServices = services
    .filter((s) => s.id !== service.id)
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-500 to-primary-600 text-white py-16 md:py-24">
          <div className="container-custom">
            <Breadcrumb
              items={[
                { label: 'Services', href: '/services' },
                { label: service.title },
              ]}
            />
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
              <div className="text-white/90">{iconMap[service.icon]}</div>
              <div className="flex-1">
                <h1 className="text-white mb-4">{service.title}</h1>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h2 className="mb-6">About This Service</h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {service.longDescription}
                </p>

                <h3 className="mb-6">What&apos;s Included</h3>
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="bg-gray-50 rounded-lg p-8 mb-8">
                  <h3 className="mb-4">We Celebrate Your Diff-ability</h3>
                  <p className="text-gray-700 leading-relaxed">
                    At My Circles of Care, we believe everyone deserves support that
                    recognizes and celebrates their unique abilities. Our{' '}
                    {service.title} service is designed to empower you, build your
                    independence, and help you achieve your personal goals.
                  </p>
                </div>

                <h3 className="mb-6">How We Deliver This Service</h3>
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold mb-2">Person-Centered</h4>
                    <p className="text-gray-600 text-sm">
                      Every support plan is tailored to your individual needs,
                      preferences, and goals.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold mb-2">Flexible Support</h4>
                    <p className="text-gray-600 text-sm">
                      We offer flexible arrangements to fit your lifestyle and
                      schedule.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold mb-2">Local Expertise</h4>
                    <p className="text-gray-600 text-sm">
                      Our team knows the Central Coast and can connect you with local
                      resources.
                    </p>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="text-lg font-semibold mb-2">Ongoing Support</h4>
                    <p className="text-gray-600 text-sm">
                      We&apos;re here for you every step of the way, adapting as your
                      needs change.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  {/* Contact Card */}
                  <div className="bg-primary-500 text-white rounded-lg p-8 mb-8">
                    <h3 className="text-white mb-4">Get Started Today</h3>
                    <p className="text-white/90 mb-6">
                      Ready to learn more about our {service.shortTitle} service?
                      Contact us for a free consultation.
                    </p>
                    <div className="space-y-4">
                      <Link href="/contact" className="btn-white w-full text-center">
                        Contact Us
                      </Link>
                      <a
                        href={siteConfig.phoneLink}
                        className="btn-white w-full text-center inline-flex items-center justify-center gap-2"
                      >
                        <Phone className="w-5 h-5" />
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>

                  {/* Service Areas */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold mb-4">Service Areas</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      We provide {service.shortTitle} services across the Central
                      Coast NSW, including:
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>Gosford</li>
                      <li>Wyong</li>
                      <li>Woy Woy</li>
                      <li>Tuggerah</li>
                      <li>Terrigal</li>
                      <li>And surrounding areas</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <h2 className="mb-8">Other Services You May Need</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedServices.map((relatedService) => (
                <Link
                  key={relatedService.id}
                  href={`/services/${relatedService.id}`}
                  className="card p-6 group"
                >
                  <div className="text-primary-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {smallIconMap[relatedService.icon]}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{relatedService.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {relatedService.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary-500 font-semibold text-sm group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-500 text-white section-padding">
          <div className="container-custom text-center">
            <h2 className="text-white mb-4">
              Ready to Start Your {service.shortTitle} Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today for a free, no-obligation consultation. We&apos;ll
              discuss how our {service.title} service can support your NDIS plan and
              help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-white">
                Book a Consultation
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
    </>
  );
}
