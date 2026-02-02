import { Metadata } from 'next';
import Link from 'next/link';
import {
  Heart,
  MapPin,
  Zap,
  Users,
  Phone,
  Star,
  Shield,
  Award,
} from 'lucide-react';
import { siteConfig, stats } from '@/lib/utils';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'About Us | My Circles of Care | NDIS Provider Central Coast',
  description:
    'Learn about My Circles of Care, a trusted NDIS disability support provider on the Central Coast NSW. We celebrate your Diff-ability and provide person-centered care.',
  openGraph: {
    title: 'About Us | My Circles of Care | NDIS Provider Central Coast',
    description:
      'Learn about My Circles of Care, a trusted NDIS disability support provider on the Central Coast NSW. We celebrate your Diff-ability.',
    url: `${siteConfig.url}/about`,
  },
};

const values = [
  {
    icon: <Heart className="w-10 h-10" />,
    title: 'Person-Centered',
    description:
      'Every person is unique. We tailor our support to your individual needs, preferences, and goals, ensuring you are at the center of everything we do.',
  },
  {
    icon: <MapPin className="w-10 h-10" />,
    title: 'Local Expertise',
    description:
      'As a Central Coast-based provider, we have deep knowledge of local resources, services, and community connections to benefit you.',
  },
  {
    icon: <Zap className="w-10 h-10" />,
    title: 'Flexible Support',
    description:
      'Life changes, and so do your needs. We offer flexible support arrangements that adapt to your circumstances and evolving goals.',
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: 'Holistic Approach',
    description:
      'We look at the whole picture. Our support considers all aspects of your wellbeing, from daily activities to social connections and personal growth.',
  },
];

const whyChooseUs = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Registered NDIS Provider',
    description:
      'We meet all NDIS Quality and Safeguards Commission standards, giving you peace of mind.',
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: 'Experienced Team',
    description:
      'Our support workers are carefully selected, trained, and matched to your needs.',
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: 'Local Knowledge',
    description:
      'We know the Central Coast and can connect you with the best local resources.',
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Genuine Care',
    description:
      'We truly care about your wellbeing and celebrate every achievement with you.',
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-600 text-white py-16 md:py-24">
        <div className="container-custom">
          <Breadcrumb items={[{ label: 'About Us' }]} />
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">About My Circles of Care</h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              We are a trusted NDIS disability support provider on the Central Coast
              NSW, dedicated to empowering individuals to live their best lives.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                My Circles of Care was founded with a simple but powerful mission: to
                provide genuine, person-centered support that empowers individuals
                with disabilities to achieve their goals and live fulfilling lives.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Based in Gosford on the beautiful Central Coast of NSW, we understand
                the unique needs of our local community. Our team is passionate about
                making a real difference in the lives of the people we support and
                their families.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We believe that everyone deserves support that recognizes their
                unique abilities and potential. That&apos;s why we don&apos;t just
                provide services &mdash; we build genuine relationships and celebrate
                every achievement, big or small.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
              <div className="text-center p-8">
                <Users className="w-16 h-16 text-primary-500 mx-auto mb-4" />
                <p className="text-gray-500">Team Photo Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diff-ability Section */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">We Celebrate Your Diff-ability</h2>
            <p className="text-2xl text-primary-600 font-semibold mb-6">
              &ldquo;We celebrate your Diff-ability!&rdquo;
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              At My Circles of Care, we believe that disability is not a limitation
              &mdash; it&apos;s a different ability. Every person has unique
              strengths, talents, and potential. Our role is to support you in
              discovering and celebrating what makes you uniquely you.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We don&apos;t focus on what you can&apos;t do. Instead, we work
              alongside you to build on your strengths, overcome challenges, and
              achieve your personal goals. Whether it&apos;s gaining independence,
              connecting with your community, or pursuing your passions, we&apos;re
              here to support your journey every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape how we deliver
              support to our participants and their families.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="text-primary-500 mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary-500 text-white py-16">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section Placeholder */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our dedicated team of support coordinators and workers are passionate
              about making a difference in the lives of the people we support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member Placeholder 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-200 aspect-square flex items-center justify-center">
                <Users className="w-16 h-16 text-gray-400" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">Leadership Team</h3>
                <p className="text-primary-500 mb-3">Founders & Directors</p>
                <p className="text-gray-600 text-sm">
                  Passionate leaders dedicated to providing exceptional NDIS support
                  services.
                </p>
              </div>
            </div>

            {/* Team Member Placeholder 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-200 aspect-square flex items-center justify-center">
                <Users className="w-16 h-16 text-gray-400" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">Support Coordinators</h3>
                <p className="text-primary-500 mb-3">NDIS Specialists</p>
                <p className="text-gray-600 text-sm">
                  Expert coordinators who help navigate the NDIS and connect you with
                  the right services.
                </p>
              </div>
            </div>

            {/* Team Member Placeholder 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-200 aspect-square flex items-center justify-center">
                <Users className="w-16 h-16 text-gray-400" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-1">Support Workers</h3>
                <p className="text-primary-500 mb-3">Care Team</p>
                <p className="text-gray-600 text-sm">
                  Compassionate support workers matched to your individual needs and
                  preferences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Why Choose My Circles of Care?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We&apos;re more than just a service provider &mdash; we&apos;re your
              partner in achieving your goals and living your best life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-primary-500 mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-500 text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">Ready to Join Our Circle?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We&apos;d love to hear from you. Contact us today for a free
            consultation and discover how we can support your NDIS journey.
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
