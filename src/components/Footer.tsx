import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import { siteConfig, services } from '@/lib/utils';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'NDIS Resources', href: '/ndis-resources' },
  { label: 'For Families', href: '/for-families' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-500 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Tagline */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo-white.png"
                alt={`${siteConfig.name} Logo`}
                width={180}
                height={60}
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-lg font-medium text-primary-300 mb-4">
              We celebrate your Diff-ability
            </p>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Trusted NDIS disability support provider on the Central Coast NSW.
              Empowering individuals to live their best lives with dignity and
              independence.
            </p>

            {/* NDIS Badge */}
            <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
              <div className="flex-shrink-0">
                <Image
                  src="/images/ndis-logo.png"
                  alt="NDIS Registered Provider"
                  width={60}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-white">
                  NDIS Registered Provider
                </p>
                <p className="text-xs text-gray-300">
                  Quality & Safeguards Certified
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary-300 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.id}`}
                    className="text-gray-300 hover:text-primary-300 transition-colors duration-200"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-primary-300 font-medium hover:text-primary-200 transition-colors duration-200"
                >
                  View All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.postcode}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-300 hover:text-primary-300 transition-colors duration-200"
                >
                  <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                  <span>
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.city}, {siteConfig.address.state}{' '}
                    {siteConfig.address.postcode}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.phoneLink}
                  className="flex items-center gap-3 text-gray-300 hover:text-primary-300 transition-colors duration-200"
                >
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <span>{siteConfig.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-gray-300 hover:text-primary-300 transition-colors duration-200"
                >
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
            </ul>

            {/* Social Media Links */}
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-3 text-white">Follow Us</h4>
              <div className="flex items-center gap-3">
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-full hover:bg-primary-500 transition-colors duration-200"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-full hover:bg-primary-500 transition-colors duration-200"
                  aria-label="Connect with us on LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link
                href="/privacy-policy"
                className="text-gray-400 hover:text-primary-300 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-gray-400 hover:text-primary-300 transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link
                href="/accessibility"
                className="text-gray-400 hover:text-primary-300 transition-colors duration-200"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
