'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

const testimonials = [
  {
    id: 1,
    name: 'Abebe Chane',
    role: 'Head of Design, Layers',
    image: '/testimonials/person1.jpg',
    rating: 5,
    text: 'IT companies stay abreast of emerging technologies and industry trends to remain competitive and provide innovative solutions to their clients. This includes trends such as artificial intelligence.',
  },
  {
    id: 2,
    name: 'Sarah Yohannes',
    role: 'CTO, TechVision',
    image: '/testimonials/person2.jpg',
    rating: 5,
    text: 'Working with B-Tech has transformed our business operations. Their innovative solutions and dedicated support team have exceeded our expectations.',
  },
  {
    id: 3,
    name: 'Michael Alemu',
    role: 'CEO, InnovateCorp',
    image: '/testimonials/person3.jpg',
    rating: 5,
    text: 'The level of expertise and professionalism at B-Tech is outstanding. They delivered our project on time and with exceptional quality.',
  },
  {
    id: 4,
    name: 'Selam Tadesse',
    role: 'Product Manager, NextGen',
    image: '/testimonials/person4.jpg',
    rating: 5,
    text: 'Their commitment to excellence and customer satisfaction is remarkable. B-Tech has been instrumental in our digital transformation journey.',
  },
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout>();
  const animationRef = useRef<gsap.core.Timeline | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    // Clear any existing interval when changing slides
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Create animation timeline
    if (sliderRef.current) {
      if (animationRef.current) {
        animationRef.current.kill();
      }

      animationRef.current = gsap.timeline()
        .fromTo('.testimonial-content',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 }
        )
        .fromTo('.testimonial-image',
          { scale: 0.9, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5 },
          '-=0.3'
        );
    }

    // Set up auto-slide interval
    intervalRef.current = setInterval(nextSlide, 5000);

    // Cleanup
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [currentSlide]);

  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            What Our <span className="text-blue-600">Clients</span> Says
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Unveiling the extraordinary power, delving into the exceptionally powerfull
            features of data analysis.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative" ref={sliderRef}>
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors z-10"
          >
            ←
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors z-10"
          >
            →
          </button>

          {/* Testimonial Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 relative">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Image */}
              <div className="testimonial-image md:w-1/3 relative">
                <div className="w-48 h-48 rounded-2xl overflow-hidden relative">
                  <Image
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="testimonial-content md:w-2/3">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-600 text-lg mb-6">
                  "{testimonials[currentSlide].text}"
                </p>

                {/* Author */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900">
                    {testimonials[currentSlide].name}
                  </h4>
                  <p className="text-blue-600">
                    {testimonials[currentSlide].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
