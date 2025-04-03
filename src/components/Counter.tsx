'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaClipboardCheck, FaUsers, FaUserTie, FaCertificate } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    icon: <FaClipboardCheck className="w-12 h-12" />,
    count: 986,
    label: 'Finished Project',
    bgClass: 'bg-[#F8F9FE]',
  },
  {
    icon: <FaUsers className="w-12 h-12" />,
    count: 896,
    label: 'Happy Clients',
    bgClass: 'bg-[#F8F9FE]',
  },
  {
    icon: <FaUserTie className="w-12 h-12" />,
    count: 396,
    label: 'Skilled Experts',
    bgClass: 'bg-[#F8F9FE]',
  },
  {
    icon: <FaCertificate className="w-12 h-12" />,
    count: 496,
    label: 'Honorable Awards',
    bgClass: 'bg-[#F8F9FE]',
  },
];

export default function Counter() {
  const counterRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate counters on scroll
      stats.forEach((stat, index) => {
        const counterElement = `.counter-${index}`;
        let currentCount = { value: 0 };

        gsap.to(currentCount, {
          value: stat.count,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: counterElement,
            start: 'top center+=100',
          },
          onUpdate: () => {
            const el = document.querySelector(counterElement);
            if (el) {
              el.textContent = Math.round(currentCount.value) + '+';
            }
          },
        });
      });

      // Animate items on scroll
      gsap.from('.counter-item', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: counterRef.current,
          start: 'top center+=100',
        },
      });
    }, counterRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={counterRef}
      className="py-10 bg-gradient-to-r from-blue-900 to-blue-200 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
        {/* Wave Animation */}
        <div className="absolute inset-0 opacity-20">
          <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
            <defs>
              <path id="wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="wave-parallax1">
              <use href="#wave" x="50" y="3" fill="rgba(255,255,255,0.7)" />
            </g>
            <g className="wave-parallax2">
              <use href="#wave" x="50" y="0" fill="rgba(255,255,255,0.5)" />
            </g>
            <g className="wave-parallax3">
              <use href="#wave" x="50" y="9" fill="rgba(255,255,255,0.3)" />
            </g>
            <g className="wave-parallax4">
              <use href="#wave" x="50" y="6" fill="rgba(255,255,255,0.2)" />
            </g>
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="counter-item flex flex-col items-center text-center text-white"
            >
              <div className="relative mb-6">
                <div className={`w-24 h-24 ${stat.bgClass} rounded-[20px] rotate-[10deg]`}></div>
                {/* Icon container */}
                <div className="absolute inset-0 flex items-center justify-center text-blue-900">
                  {stat.icon}
                </div>
              </div>
              <div className={`counter-${index} text-4xl font-bold mb-2 text-white`}>
                0+
              </div>
              <div className="text-base font-medium text-white/90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
