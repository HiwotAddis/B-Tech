'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Big Data Analysis",
    icon: "✓",
  },
  {
    title: "High Quality Security",
    icon: "✓",
  },
  {
    title: "24/7 Online Support",
    icon: "✓",
  },
  {
    title: "24/7 Expert Team",
    icon: "✓",
  },
  {
    title: "Business Improvement",
    icon: "✓",
  },
  {
    title: "Easy Solutions",
    icon: "✓",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const blobRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate blob shape
      const points = 8;
      const radius = 100;
      const blobAnimation = () => {
        const angles = Array.from({ length: points }, (_, i) => (i * 2 * Math.PI) / points);
        const newPath = angles.map((angle, i) => {
          const randomRadius = radius + gsap.utils.random(-20, 20);
          const x = Math.cos(angle) * randomRadius;
          const y = Math.sin(angle) * randomRadius;
          return `${i === 0 ? 'M' : 'L'} ${x},${y}`;
        }).join(' ') + 'Z';
        
        return newPath;
      };

      gsap.to(blobRef.current, {
        duration: 3,
        attr: { d: blobAnimation },
        repeat: -1,
        repeatRefresh: true,
        ease: "sine.inOut"
      });

      // Animate content on scroll
      gsap.from('.why-choose-content', {
        x: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top center+=100',
        },
      });

      // Animate features
      gsap.from('.feature-item', {
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.features-grid',
          start: 'top center+=100',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white" id="why-choose-us">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center mx-16 gap-6">
          {/* Left side - Content */}
          <div className="lg:w-1/2 why-choose-content">
            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-600 font-semibold mb-4">
              <span className="text-blue-600 font-semibold">WHY CHOOSE US</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">
              We Deal With The Aspects Professional{' '}
              <span className="text-blue-600">IT Services</span>
            </h2>
            <p className="text-gray-600 mb-8">
              Collaboratively envisioneer user friendly supply chains and cross unit
              imperative. Authoritative fabricate competitive resource and holistic.
            </p>

            <div className="features-grid grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="feature-item flex items-center space-x-2"
                >
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-sm">
                    {feature.icon}
                  </span>
                  <span className="text-gray-700">{feature.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image with blob border */}
          <div ref={imageRef} className="lg:w-1/2 relative">
            <div className="relative w-full aspect-[4/3]">
              {/* SVG Blob Border */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="-100 -100 200 200"
                // preserveAspectRatio="xMidYMid slice"
              >
                <defs>
                  <clipPath id="blob-shape">
                    <path
                      ref={blobRef}
                      d="M100,0 C100,50 50,100 0,100 C-50,100 -100,50 -100,0 C-100,-50 -50,-100 0,-100 C50,-100 100,-50 100,0"
                      fill="none"
                    />
                  </clipPath>
                </defs>
                <g clipPath="url(#blob-shape)">
                  <image
                    href="/why-choose-us.jpg"
                    width="300"
                    height="300"
                    x="-180"
                    y="-100"
                    // preserveAspectRatio="xMidYMid slice"
                  />
                </g>
                <path
                  ref={blobRef}
                  d="M100,0 C100,50 50,100 0,100 C-50,100 -100,50 -100,0 C-100,-50 -50,-100 0,-100 C50,-100 100,-50 100,0"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="1"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}