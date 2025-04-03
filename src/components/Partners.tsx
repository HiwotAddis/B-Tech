'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

const partners = [
  { name: 'Muast', logo: '/partners/Muast.jpg' },
  { name: 'Chatbot', logo: '/partners/Chatbot.jpg' },
  { name: 'Soluck', logo: '/partners/Soluck.jpg' },
  { name: 'Wattse', logo: '/partners/Wattse.jpg' },
  { name: 'Nextech', logo: '/partners/Nextech.jpg' },
];

export default function Partners() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const items = slider.children;
    const itemWidth = items[0].getBoundingClientRect().width + 64; // width + gap
    const totalWidth = itemWidth * items.length;

    const createAnimation = () => {
      const resetPosition = () => {
        gsap.set(slider, { x: 0 });
        createAnimation();
      };

      animationRef.current = gsap.to(slider, {
        x: -totalWidth / 2,
        duration: 20,
        ease: 'none',
        repeat: 0,
        onComplete: resetPosition
      });
    };

    createAnimation();

    // Pause on hover
    const handleMouseEnter = () => animationRef.current?.pause();
    const handleMouseLeave = () => animationRef.current?.play();

    slider.addEventListener('mouseenter', handleMouseEnter);
    slider.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      slider.removeEventListener('mouseenter', handleMouseEnter);
      slider.removeEventListener('mouseleave', handleMouseLeave);
      animationRef.current?.kill();
    };
  }, []);

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-12">Trusted by big companies</h2>
        <div className="relative">
          <div
            ref={sliderRef}
            className="flex items-center space-x-16"
            style={{ width: 'fit-content' }}
          >
            {/* Original items */}
            {partners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="inline-flex items-center justify-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                style={{ width: '200px', height: '100px', flexShrink: 0 }}
              >
                <div className="relative w-full h-full rounded-lg">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            ))}
            {/* Cloned items for seamless loop */}
            {partners.map((partner, index) => (
              <div
                key={`${partner.name}-clone-${index}`}
                className="inline-flex items-center justify-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                style={{ width: '200px', height: '100px', flexShrink: 0 }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
