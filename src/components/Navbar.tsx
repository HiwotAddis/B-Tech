'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 shadow-lg backdrop-blur-sm' : 'bg-gray-900/80'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-20 h-20 relative">
              <Image
                src="/logo.png"
                alt="B-Tech"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-white hover:text-blue-400 transition-colors">
              Services
            </Link>
            <Link href="/portfolio" className="text-white hover:text-blue-400 transition-colors">
              Portfolio
            </Link>
            <Link href="/contact" className="text-white hover:text-blue-400 transition-colors">
              Contact
            </Link>
          </div>

          {/* Contact Button - Desktop */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white p-2 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'max-h-screen opacity-100 visible'
            : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <div className="bg-gray-900/95 backdrop-blur-sm px-6 py-4 space-y-4 shadow-lg">
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="block text-white hover:text-blue-400 transition-colors py-2"
          >
            Home
          </Link>
          <Link
            href="/services"
            onClick={closeMobileMenu}
            className="block text-white hover:text-blue-400 transition-colors py-2"
          >
            Services
          </Link>
          <Link
            href="/portfolio"
            onClick={closeMobileMenu}
            className="block text-white hover:text-blue-400 transition-colors py-2"
          >
            Portfolio
          </Link>
          <Link
            href="/contact"
            onClick={closeMobileMenu}
            className="block text-white hover:text-blue-400 transition-colors py-2"
          >
            Contact
          </Link>
          <Link
            href="/contact"
            onClick={closeMobileMenu}
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
