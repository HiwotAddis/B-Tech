'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCode, FaPaintBrush, FaBullhorn, FaMobile } from 'react-icons/fa';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <FaCode className="w-12 h-12" />,
    number: "01",
    title: "Web Development",
    description: "Conveniently promote transparent materials and stand-alone strategic theme areas.",
    iconBg: "bg-violet-100",
  },
  {
    icon: <FaPaintBrush className="w-12 h-12" />,
    number: "02",
    title: "UI/UX Design",
    description: "Conveniently promote transparent materials and stand-alone strategic theme areas.",
    iconBg: "bg-blue-100",
  },
  {
    icon: <FaBullhorn className="w-12 h-12" />,
    number: "03",
    title: "Digital Marketing",
    description: "Conveniently promote transparent materials and stand-alone strategic theme areas.",
    iconBg: "bg-blue-100",
  },
  {
    icon: <FaMobile className="w-12 h-12" />,
    number: "04",
    title: "Mobile Development",
    description: "Conveniently promote transparent materials and stand-alone strategic theme areas.",
    iconBg: "bg-blue-100",
  }
];

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial opacity to 1 to prevent flash
      gsap.set('.service-card', { opacity: 1, y: 0 });
      
      // Animate on scroll
      gsap.from('.service-card', {
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center+=100',
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 text-blue-600">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We provide comprehensive IT solutions to help your business grow and succeed in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-16 mx-16 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group relative overflow-hidden rounded-3xl p-8 bg-white transition-all duration-500"
            >
              {/* Large Number */}
              <div className="absolute -right-0 -top-4 text-[120px] font-bold opacity-10 text-gray-900">
                {service.number}
              </div>

              {/* Icon */}
              <div className={`${service.iconBg} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 relative z-10`}>
                <div className="text-blue-600">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 relative z-10 group-hover:text-white transition-colors duration-500">
                {service.title}
              </h3>
              <p className="text-gray-600 relative z-10 group-hover:text-white/90 transition-colors duration-500">
                {service.description}
              </p>

              {/* Hover Effect - Fill from bottom right */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-200 transform origin-bottom-right scale-0 transition-transform duration-500 group-hover:scale-100"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4 mb-16">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 pb-4 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-300"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
