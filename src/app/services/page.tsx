'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices.',
    icon: '🌐',
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript']
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: '📱',
    technologies: ['React Native', 'Flutter', 'iOS', 'Android']
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment solutions.',
    icon: '☁️',
    technologies: ['AWS', 'Azure', 'Google Cloud', 'DevOps']
  },
  {
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions powered by cutting-edge AI technologies.',
    icon: '🤖',
    technologies: ['TensorFlow', 'PyTorch', 'Computer Vision', 'NLP']
  },
  {
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets.',
    icon: '🔒',
    technologies: ['Penetration Testing', 'Security Audits', 'Encryption']
  },
  {
    title: 'UI/UX Design',
    description: 'Beautiful and intuitive user interfaces that drive engagement.',
    icon: '🎨',
    technologies: ['Figma', 'Adobe XD', 'User Research']
  },
  {
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights.',
    icon: '📊',
    technologies: ['Big Data', 'Business Intelligence', 'Data Visualization']
  },
  {
    title: 'IoT Solutions',
    description: 'Connect and manage your IoT devices with custom solutions.',
    icon: '🔌',
    technologies: ['IoT Platforms', 'Embedded Systems', 'Real-time Analytics']
  },
  {
    title: 'Blockchain Development',
    description: 'Secure and transparent blockchain solutions.',
    icon: '⛓️',
    technologies: ['Smart Contracts', 'DApps', 'Cryptocurrency']
  }
];

export default function ServicesPage() {
  const servicesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set('.services-header', {
        opacity: 0,
        y: 30
      });

      gsap.set('.service-card', {
        opacity: 0,
        y: 60
      });

      // Header animation
      gsap.to('.services-header', {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out'
      });

      // Service cards staggered animation
      gsap.to('.service-card', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: {
          amount: 1
        },
        ease: 'power3.out'
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

      // Contact section animation
      gsap.to('.contact-section', {
        y: 0,
        opacity: 1,
        duration: 1
      });
    }, servicesRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={servicesRef} className="min-h-screen bg-blue-50 pt-20 font-poppins">
      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="relative max-w-7xl mx-auto px-4">
            {/* Services Header */}
            <div className="relative py-20 mb-20 rounded-3xl overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0 bg-[url('/images/services-bg.jpg')] bg-cover bg-center bg-fixed">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100/40 to-blue-100/40 backdrop-blur-[2px]" />
              </div>

              <div className="relative text-center services-header">
                <h1 className="text-5xl md:text-6xl font-bold text-blue-600 mb-6 drop-shadow-lg">
                  Our Services
                </h1>
                <p className="text-xl text-black/90 max-w-3xl mx-auto drop-shadow-md">
                  We provide cutting-edge solutions tailored to your business needs
                </p>
              </div>
            </div>

            {/* Animated Background Patterns */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="pattern-circle absolute rounded-full bg-gradient-to-br from-blue-400/10 to-blue-300/5"
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

            {/* Services Grid */}
            <div className="services-grid relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="service-card group relative bg-white/80 backdrop-blur-sm rounded-[30px] p-8 overflow-hidden transition-all duration-500 hover:bg-white shadow-lg"
                  style={{ opacity: 0 }}
                >
                  {/* Hover Effect Background */}
                  <div className="absolute inset-0 bg-gradient-to-tl from-blue-400 via-blue-200 to-transparent opacity-0 transform origin-bottom-right scale-0 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:scale-100" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-16 h-16 mb-6 rounded-2xl bg-blue-100 flex items-center justify-center group-hover:bg-blue-200/80 transition-colors duration-500">
                      <div className="text-4xl text-blue-600 transition-all duration-500 group-hover:scale-110 transform">
                        {service.icon}
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-4 text-blue-900 transition-colors duration-500 group-hover:text-blue-700">
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 mb-6 transition-colors duration-500 group-hover:text-gray-800">
                      {service.description}
                    </p>

                    {/* Bottom Right Decoration */}
                    <div className="absolute bottom-0 right-0 w-32 h-32 transform translate-x-16 translate-y-16">
                      <div className="w-full h-full bg-gradient-to-tl from-blue-200 via-blue-100 to-transparent transform origin-bottom-right scale-0 transition-transform duration-500 group-hover:scale-100 rounded-tl-[60px]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section relative py-32 mb-32 opacity-0">
        <div className="absolute inset-0 z-0">
          <Image
            src="/contact-bg.jpg"
            alt="Contact Background"
            fill
            className="object-cover "
          />
        </div>
        <div className="container  mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need Any Kind Of Tech Solution For{' '}
              <span className="text-blue-400">Your Business?</span>
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors group"
            >
              GET IN TOUCH
              <svg
                className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
