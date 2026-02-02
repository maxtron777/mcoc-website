'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { cn, siteConfig, services } from '@/lib/utils';

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: services.map((service) => ({
      label: service.title,
      href: `/services/${service.id}`,
    })),
  },
  { label: 'NDIS Resources', href: '/ndis-resources' },
  { label: 'For Families', href: '/for-families' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-white/95 backdrop-blur-sm py-4'
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center flex-shrink-0"
            onClick={closeMenu}
          >
            <Image
              src="/images/logo.png"
              alt={`${siteConfig.name} Logo`}
              width={180}
              height={60}
              className="h-12 w-auto md:h-14"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <>
                    <button
                      className="flex items-center px-4 py-2 text-gray-700 hover:text-primary-500 font-medium transition-colors"
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      aria-expanded={activeDropdown === item.label}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          'ml-1 h-4 w-4 transition-transform duration-200',
                          activeDropdown === item.label ? 'rotate-180' : ''
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        'absolute left-0 top-full pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200',
                        activeDropdown === item.label
                          ? 'opacity-100 visible'
                          : ''
                      )}
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <div className="bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-500 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                        <div className="border-t border-gray-100 mt-2 pt-2">
                          <Link
                            href="/services"
                            className="block px-4 py-2 text-primary-500 font-medium hover:bg-primary-50 transition-colors"
                          >
                            View All Services
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-gray-700 hover:text-primary-500 font-medium transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Phone CTA Button - Desktop */}
          <div className="hidden lg:flex items-center">
            <a
              href={siteConfig.phoneLink}
              className="btn-primary flex items-center gap-2"
            >
              <Phone className="h-5 w-5" />
              <span>{siteConfig.phone}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-primary-500 transition-colors"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden fixed inset-0 top-[64px] bg-white z-40 transition-transform duration-300 ease-in-out overflow-y-auto',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="container-custom py-6">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <div>
                    <button
                      className="flex items-center justify-between w-full px-4 py-3 text-lg text-gray-700 hover:text-primary-500 hover:bg-gray-50 rounded-lg font-medium transition-colors"
                      onClick={() => toggleDropdown(item.label)}
                      aria-expanded={activeDropdown === item.label}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          'h-5 w-5 transition-transform duration-200',
                          activeDropdown === item.label ? 'rotate-180' : ''
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        'overflow-hidden transition-all duration-300',
                        activeDropdown === item.label
                          ? 'max-h-[500px] opacity-100'
                          : 'max-h-0 opacity-0'
                      )}
                    >
                      <ul className="pl-4 py-2 space-y-1">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block px-4 py-2 text-gray-600 hover:text-primary-500 hover:bg-gray-50 rounded-lg transition-colors"
                              onClick={closeMenu}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                        <li>
                          <Link
                            href="/services"
                            className="block px-4 py-2 text-primary-500 font-medium hover:bg-primary-50 rounded-lg transition-colors"
                            onClick={closeMenu}
                          >
                            View All Services
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-lg text-gray-700 hover:text-primary-500 hover:bg-gray-50 rounded-lg font-medium transition-colors"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Phone CTA */}
          <div className="mt-6 px-4">
            <a
              href={siteConfig.phoneLink}
              className="btn-primary w-full flex items-center justify-center gap-2"
              onClick={closeMenu}
            >
              <Phone className="h-5 w-5" />
              <span>Call {siteConfig.phone}</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
