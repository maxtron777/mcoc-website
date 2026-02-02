'use client';

import Link from 'next/link';
import { Phone } from 'lucide-react';
import { siteConfig } from '@/lib/utils';
import { HeroCommunityIllustration } from '@/components/illustrations';

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center bg-gradient-to-br from-secondary-500 via-secondary-600 to-secondary-700 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary-500/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/10 rounded-full translate-x-1/2" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-primary-500/5 rounded-full translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="max-w-3xl lg:max-w-none">
          {/* Main Headline */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            We Celebrate Your{' '}
            <span className="text-primary-500">Diff-ability</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
            Trusted NDIS disability support provider on the Central Coast.
            We provide personalized care that empowers you to live your best life,
            achieve your goals, and connect with your community.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors duration-200 text-lg shadow-lg hover:shadow-xl"
            >
              Get Your Free Consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors duration-200 text-lg border-2 border-white/30"
            >
              Explore Our Services
            </Link>
          </div>

          {/* Phone Number */}
          <div className="flex items-center gap-3 text-white">
            <div className="flex items-center justify-center w-12 h-12 bg-primary-500 rounded-full">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-gray-300">Call us today</p>
              <a
                href={siteConfig.phoneLink}
                className="text-xl font-semibold hover:text-primary-300 transition-colors"
              >
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>

          {/* Hero Illustration */}
          <div className="hidden lg:flex justify-center items-center">
            <HeroCommunityIllustration className="w-full max-w-md xl:max-w-lg drop-shadow-2xl" />
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
