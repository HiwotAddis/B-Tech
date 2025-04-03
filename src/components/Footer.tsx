import React from 'react';
import { FaClock, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
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
            <h3 className="text-2xl font-bold mb-4">B-Tech</h3>
            <p className="text-gray-400">
              Empowering businesses through innovative technology solutions.
            </p>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Business Hours</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaClock className="mr-2 text-blue-500" />
                <span>Monday - Friday: 9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex items-center">
                <FaClock className="mr-2 text-blue-500" />
                <span>Saturday: 10:00 AM - 4:00 PM</span>
              </li>
              <li className="flex items-center">
                <FaClock className="mr-2 text-blue-500" />
                <span>Sunday: Closed</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaPhone className="mr-2 text-blue-500" />
                <span>+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-blue-500" />
                <span>info@btech.com</span>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-blue-500" />
                <span>123 Tech Street, Silicon Valley, CA</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-blue-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-blue-500 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/portfolio" className="hover:text-blue-500 transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} B-Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
