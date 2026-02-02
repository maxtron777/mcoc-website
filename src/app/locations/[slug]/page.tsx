import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Phone,
  MapPin,
  CheckCircle,
  ArrowRight,
  Clock,
  Mail,
  Users,
  Heart,
  FileText,
  Home,
  Users2,
  Sparkles,
} from 'lucide-react';
import { siteConfig, services, locations } from '@/lib/utils';
import Breadcrumb from '@/components/Breadcrumb';

// Location-specific data
const locationData: Record<
  string,
  {
    name: string;
    description: string;
    nearbyAreas: string[];
    mapCoordinates: { lat: number; lng: number };
  }
> = {
  gosford: {
    name: 'Gosford',
    description:
      'Our main office is located in Gosford, the heart of the Central Coast. From here, we provide comprehensive NDIS support services to the Gosford area and surrounding suburbs.',
    nearbyAreas: ['East Gosford', 'West Gosford', 'Point Clare', 'Tascott', 'Kariong', 'Wyoming', 'Narara'],
    mapCoordinates: { lat: -33.4269, lng: 151.342 },
  },
  wyong: {
    name: 'Wyong',
    description:
      'We proudly serve the Wyong area, providing quality NDIS disability support services to participants and families in this vibrant Central Coast community.',
    nearbyAreas: ['Tuggerah', 'Kanwal', 'Hamlyn Terrace', 'Wadalba', 'Watanobbi', 'Charmhaven'],
    mapCoordinates: { lat: -33.2830, lng: 151.4223 },
  },
  'woy-woy': {
    name: 'Woy Woy',
    description:
      'Serving the beautiful Woy Woy Peninsula, we provide NDIS support services to participants living in this scenic part of the Central Coast.',
    nearbyAreas: ['Umina Beach', 'Ettalong Beach', 'Booker Bay', 'Blackwall', 'Koolewong', 'Tascott'],
    mapCoordinates: { lat: -33.4854, lng: 151.3234 },
  },
  tuggerah: {
    name: 'Tuggerah',
    description:
      'We provide comprehensive NDIS support services to participants in Tuggerah and the surrounding areas, helping them achieve their goals and live their best lives.',
    nearbyAreas: ['Berkeley Vale', 'Chittaway Bay', 'Tumbi Umbi', 'Killarney Vale', 'Long Jetty', 'The Entrance'],
    mapCoordinates: { lat: -33.3067, lng: 151.4167 },
  },
  terrigal: {
    name: 'Terrigal',
    description:
      'Serving the beautiful coastal community of Terrigal and surrounds, we provide quality NDIS disability support services tailored to your individual needs.',
    nearbyAreas: ['Wamberal', 'Avoca Beach', 'Erina', 'North Avoca', 'Matcham', 'Holgate'],
    mapCoordinates: { lat: -33.4467, lng: 151.4453 },
  },
  'central-coast': {
    name: 'Central Coast',
    description:
      'We proudly serve the entire Central Coast NSW region, providing comprehensive NDIS disability support services to participants and families from Gosford to The Entrance and everywhere in between.',
    nearbyAreas: ['Gosford', 'Wyong', 'Woy Woy', 'Tuggerah', 'Terrigal', 'The Entrance', 'Erina', 'Kariong'],
    mapCoordinates: { lat: -33.4269, lng: 151.342 },
  },
};

const iconMap: Record<string, React.ReactNode> = {
  Users: <Users className="w-6 h-6" />,
  Heart: <Heart className="w-6 h-6" />,
  FileText: <FileText className="w-6 h-6" />,
  Home: <Home className="w-6 h-6" />,
  Users2: <Users2 className="w-6 h-6" />,
  Sparkles: <Sparkles className="w-6 h-6" />,
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = locationData[slug];

  if (!location) {
    return {
      title: 'Location Not Found | My Circles of Care',
    };
  }

  const title = `NDIS Provider in ${location.name} | Disability Support | My Circles of Care`;
  const description = `My Circles of Care provides quality NDIS disability support services in ${location.name}, Central Coast NSW. Support Coordination, Personal Care, Plan Management, and more.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/locations/${slug}`,
    },
  };
}

function generateLocationSchema(location: { name: string; mapCoordinates: { lat: number; lng: number } }, slug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteConfig.url}/locations/${slug}#organization`,
    name: `${siteConfig.name} - ${location.name}`,
    description: `NDIS disability support services in ${location.name}, Central Coast NSW.`,
    url: `${siteConfig.url}/locations/${slug}`,
    telephone: '+61413610404',
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postcode,
      addressCountry: 'AU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.mapCoordinates.lat,
      longitude: location.mapCoordinates.lng,
    },
    areaServed: {
      '@type': 'City',
      name: location.name,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: 'Central Coast',
        addressRegion: 'NSW',
        addressCountry: 'AU',
      },
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
    ],
    priceRange: '$$',
    paymentAccepted: ['NDIS Funding', 'Plan Managed', 'Self Managed'],
    sameAs: [siteConfig.social.facebook, siteConfig.social.linkedin],
  };
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params;
  const location = locationData[slug];

  if (!location) {
    notFound();
  }

  const locationSchema = generateLocationSchema(location, slug);

  const whyChooseUs = [
    {
      title: 'Local Expertise',
      description: `Our team knows ${location.name} and the Central Coast well. We can connect you with local services, community resources, and activities in your area.`,
    },
    {
      title: 'Person-Centered Care',
      description:
        'We put you at the center of everything we do. Your goals, preferences, and needs guide how we provide support.',
    },
    {
      title: 'Experienced Team',
      description:
        'Our support workers are carefully selected, trained, and matched to your needs, ensuring quality care every time.',
    },
    {
      title: 'Registered Provider',
      description:
        'As a registered NDIS provider, we meet all quality and safeguards standards, giving you peace of mind.',
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-500 to-primary-600 text-white py-16 md:py-24">
          <div className="container-custom">
            <Breadcrumb
              items={[
                { label: 'Locations', href: '/locations' },
                { label: location.name },
              ]}
            />
            <div className="max-w-3xl">
              <h1 className="text-white mb-6">
                NDIS Provider in {location.name}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                Quality disability support services for NDIS participants in{' '}
                {location.name} and surrounding areas on the Central Coast NSW.
              </p>
            </div>
          </div>
        </section>

        {/* About Location Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mb-6">NDIS Support in {location.name}</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {location.description}
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  At My Circles of Care, we understand the unique needs of{' '}
                  {location.name} residents. Our local knowledge means we can
                  connect you with the best services, activities, and resources
                  in your community.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Whether you need Support Coordination, personal care
                  assistance, help with household tasks, or support to
                  participate in your community, we are here to help you achieve
                  your NDIS goals.
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-16 h-16 text-primary-500 mx-auto mb-4" />
                  <p className="text-gray-600 font-semibold">{location.name}</p>
                  <p className="text-gray-500">Central Coast NSW</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Available Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">Services Available in {location.name}</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We offer comprehensive NDIS disability support services to help
                you achieve your goals and live your best life.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.id}`}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow group"
                >
                  <div className="text-primary-500 mb-4 group-hover:scale-110 transition-transform">
                    {iconMap[service.icon]}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-primary-500 font-semibold text-sm group-hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="mb-4">
                Why Choose My Circles of Care in {location.name}?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We are more than just a service provider &mdash; we are your
                partner in achieving your goals and living your best life.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <CheckCircle className="w-8 h-8 text-primary-500 mb-4" />
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Areas Served Section */}
        <section className="section-padding bg-primary-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="mb-4">Areas We Serve Near {location.name}</h2>
                <p className="text-lg text-gray-700">
                  In addition to {location.name}, we provide NDIS support
                  services to participants in these nearby areas:
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {location.nearbyAreas.map((area, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-4 py-2 bg-white rounded-full text-gray-700 shadow-sm"
                  >
                    <MapPin className="w-4 h-4 text-primary-500 mr-2" />
                    {area}
                  </span>
                ))}
              </div>

              <p className="text-center text-gray-600 mt-8">
                Not sure if we service your area?{' '}
                <Link
                  href="/contact"
                  className="text-primary-500 font-semibold hover:text-primary-600"
                >
                  Contact us
                </Link>{' '}
                and we&apos;ll let you know.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="mb-6">Contact Us</h2>
                  <p className="text-gray-700 mb-6">
                    Ready to get started with NDIS support in {location.name}?
                    Contact us today for a free, no-obligation consultation.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-primary-500 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Our Office</p>
                        <p className="text-gray-600">
                          {siteConfig.address.street}
                          <br />
                          {siteConfig.address.city}, {siteConfig.address.state}{' '}
                          {siteConfig.address.postcode}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-primary-500 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Phone</p>
                        <a
                          href={siteConfig.phoneLink}
                          className="text-primary-500 hover:text-primary-600"
                        >
                          {siteConfig.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-primary-500 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">Email</p>
                        <a
                          href={`mailto:${siteConfig.email}`}
                          className="text-primary-500 hover:text-primary-600"
                        >
                          {siteConfig.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-primary-500 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">
                          Business Hours
                        </p>
                        <p className="text-gray-600">
                          Monday - Friday: {siteConfig.businessHours.weekdays}
                          <br />
                          Weekends: {siteConfig.businessHours.weekends}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-8">
                  <h3 className="text-xl font-bold mb-4">Get Started Today</h3>
                  <p className="text-gray-700 mb-6">
                    Fill out our contact form or give us a call. We&apos;ll
                    arrange a free consultation to discuss your needs and how we
                    can help.
                  </p>
                  <div className="space-y-4">
                    <Link
                      href="/contact"
                      className="block w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors"
                    >
                      Contact Us
                    </Link>
                    <a
                      href={siteConfig.phoneLink}
                      className="block w-full bg-white border-2 border-primary-500 text-primary-500 hover:bg-primary-50 font-semibold py-3 px-6 rounded-lg text-center transition-colors"
                    >
                      <Phone className="w-5 h-5 inline mr-2" />
                      Call {siteConfig.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary-500 text-white section-padding">
          <div className="container-custom text-center">
            <h2 className="text-white mb-4">
              Ready to Start Your NDIS Journey in {location.name}?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and discover how we can
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
