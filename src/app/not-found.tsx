import Link from 'next/link';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center section-padding">
      <div className="container-custom text-center">
        <div className="max-w-2xl mx-auto">
          {/* 404 Number */}
          <h1 className="text-9xl font-bold text-primary-500 mb-4">404</h1>

          {/* Message */}
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
            It might have been moved or no longer exists.
          </p>

          {/* Helpful Links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/" className="btn-primary">
              <Home className="w-5 h-5 mr-2" />
              Go to Homepage
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn-secondary"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
          </div>

          {/* Quick Links */}
          <div className="border-t border-gray-200 pt-8">
            <p className="text-gray-600 mb-4">Or try one of these popular pages:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/services"
                className="text-primary-500 hover:text-primary-600 font-medium"
              >
                Our Services
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                href="/about"
                className="text-primary-500 hover:text-primary-600 font-medium"
              >
                About Us
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                href="/contact"
                className="text-primary-500 hover:text-primary-600 font-medium"
              >
                Contact
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                href="/faq"
                className="text-primary-500 hover:text-primary-600 font-medium"
              >
                FAQ
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <p className="text-gray-600">
              Need help? Call us at{' '}
              <a
                href="tel:+61413610404"
                className="text-primary-500 font-semibold hover:text-primary-600"
              >
                0413 610 404
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
