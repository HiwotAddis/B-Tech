'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { FaCertificate, FaUsers } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-image', {
        x: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
        }
      });

      gsap.from('.about-content', {
        x: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center',
        }
      });

      gsap.from('.feature-item', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.feature-grid',
          start: 'top center+=100',
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-col lg:flex-row items-center gap-12 mx-16">
          {/* Left side - Image */}
          <div className="lg:w-1/2 about-image mx-6">
            <div className="relative w-full aspect-[4/3] max-w-[600px]">
              <Image
                src="/about-image.jpg"
                alt="About B-Tech"
                fill
                className="object-cover rounded-[20px]"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-4xl font-bold">25</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="lg:w-1/2 about-content">
            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-600 font-semibold mb-4">
              ABOUT US
            </div>
            <h2 className="text-4xl font-bold mb-6">
              We Are Increasing Business Success With{' '}
              <span className="text-blue-600">IT Solution</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Collaboratively envisioneer user friendly supply chains and cross unit imperative. 
              Authoritatively fabricate competitive resource and holistic synergy. 
              Uniquely generate efficient schemas before future.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 feature-grid">
              <div className="feature-item flex items-start gap-4">
                <div className="text-blue-600">
                  <FaCertificate className="text-4xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Certified Company</h3>
                  <p className="text-gray-600">Best Provide Skills Services</p>
                </div>
              </div>
              <div className="feature-item flex items-start gap-4">
                <div className="text-blue-600">
                  <FaUsers className="text-4xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                  <p className="text-gray-600">100% Expert Team</p>
                </div>
              </div>
            </div>

            {/* Phone Number */}
            <div className="mt-8">
              <p className="text-gray-600">Call Us On:</p>
              <p className="text-2xl font-bold text-blue-600">+1 (234) 567-8901</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
