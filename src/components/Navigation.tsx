"use client"; 
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.nav-item', {
        y: -20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out'
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.to('.mobile-menu', {
        height: 'auto',
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    } else {
      gsap.to('.mobile-menu', {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in'
      });
    }
  }, [isOpen]);

  return (
    <nav ref={navRef} className="fixed w-full bg-blue-50/90 backdrop-blur-sm z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-item text-blue-800 hover:text-blue-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-blue-800 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="mobile-menu md:hidden overflow-hidden h-0 opacity-0">
        <div className="bg-blue-50 px-4 py-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 text-blue-800 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
