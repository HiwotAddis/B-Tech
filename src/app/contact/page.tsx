'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function ContactPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation with floating effect
      gsap.to('.contact-header', {
        y: 15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      // Background patterns animation
      gsap.to('.pattern-circle', {
        y: 'random(-20, 20)',
        x: 'random(-20, 20)',
        rotation: 'random(-15, 15)',
        duration: 'random(3, 6)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: {
          amount: 4,
          from: 'random'
        }
      });

      // Form and info sections animation
      const elements = ['.contact-form', '.contact-info'];
      elements.forEach((el, i) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
          },
          y: 50,
          opacity: 0,
          duration: 1,
          delay: i * 0.2,
          ease: 'power3.out'
        });
      });

      // Input field focus animation
      document.querySelectorAll('input, textarea').forEach(el => {
        el.addEventListener('focus', () => {
          gsap.to(el, {
            scale: 1.02,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
        el.addEventListener('blur', () => {
          gsap.to(el, {
            scale: 1,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="relative min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 py-24 font-poppins">
      {/* Animated background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="pattern-circle absolute rounded-full bg-gradient-to-br from-blue-300/20 to-blue-200/10"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="contact-header text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto">
            Get in touch with us for any inquiries or collaboration opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="contact-form bg-white/60 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/50">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-blue-900 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-white/80 border border-blue-200 text-blue-900 placeholder-blue-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-blue-900 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-white/80 border border-blue-200 text-blue-900 placeholder-blue-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-blue-900 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg bg-white/80 border border-blue-200 text-blue-900 placeholder-blue-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-blue-900 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-white/80 border border-blue-200 text-blue-900 placeholder-blue-400 focus:outline-none focus:border-blue-500 transition-all duration-300"
                  placeholder="Your message here..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="contact-info space-y-8">
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/50">
              <h3 className="text-2xl font-semibold text-blue-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <a href="mailto:info@bekurtech.com" className="flex items-center text-blue-700 hover:text-blue-800 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                    <FaEnvelope className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-blue-600">info@b-tech.com</p>
                  </div>
                </a>
                <a href="tel:+15551234567" className="flex items-center text-blue-700 hover:text-blue-800 transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                    <FaPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-blue-600">+1 (555) 123-4567</p>
                  </div>
                </a>
                <div className="flex items-center text-blue-700 group">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <FaMapMarkerAlt className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-blue-600">123 Tech Street, Silicon Valley, CA 94025</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-white/50">
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.6282365564083!2d-122.08395708439737!3d37.42199997982367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1627875200000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-lg"
                />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
