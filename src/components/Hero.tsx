'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import { FaArrowRight, FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Link from 'next/link';

const slides = [
  {
    title: "Innovative IT Solutions for Your Business Growth",
    subtitle: "IT Solutions & Technology",
    description: "Transform your business with our cutting-edge technology solutions. We deliver innovative digital services that drive growth and efficiency.",
    image: "/hero-image.jpg",
  },
  {
    title: "Digital Transformation That Drives Success",
    subtitle: "Digital Innovation",
    description: "Embrace the future with our comprehensive digital transformation services. We help businesses evolve in the digital age.",
    image: "/hero-image2.jpg",
  },
  {
    title: "Expert Software Development Services",
    subtitle: "Software Solutions",
    description: "Custom software solutions tailored to your business needs. We build scalable and secure applications that power your growth.",
    image: "/hero-image3.jpg",
  }
];

export default function Hero() {
  const heroRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef<NodeJS.Timeout>();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    slideInterval.current = setInterval(nextSlide, 5000);
    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade out current content
      gsap.to(['.hero-title', '.hero-subtitle', '.hero-text', '.hero-image'], {
        opacity: 0,
        y: 20,
        duration: 0.3,
        onComplete: () => {
          // Fade in new content
          gsap.to(['.hero-title', '.hero-subtitle', '.hero-text'], {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power3.out'
          });
          gsap.to('.hero-image', {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out'
          });
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, [currentSlide]);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 transition-opacity duration-500">
        <Image
          src={slides[currentSlide].image}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="hero-image opacity-0"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-16 mx-16 relative z-10">
        <div className="max-w-5xl">
          {/* Welcome Banner */}
          <div className="welcome-banner bg-gradient-to-r from-blue-500 to-black-500 text-white py-3 px-6 rounded-lg inline-block transform -rotate-2 mb-8 shadow-lg">
            <span className="text-xl font-bold">WELCOME TO B-TECH </span>
          </div>

          
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white">
              
            </h2>
          </div>

          <span className="hero-subtitle inline-block text-blue-400 font-semibold mb-4 opacity-0 text-lg">
            {slides[currentSlide].subtitle}
          </span>
          <h1 className="hero-title text-5xl md:text-6xl font-bold mb-6 text-white leading-tight opacity-0">
            {slides[currentSlide].title}
          </h1>
          <p className="hero-text text-lg text-gray-300 mb-8 opacity-0 max-w-2xl">
            {slides[currentSlide].description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="hero-button group bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-blue-700 shadow-lg hover:shadow-xl flex items-center gap-2">
              Get Started
              <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/services" className="hero-button bg-transparent font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-white/20 text-white hover:border-blue-600 hover:bg-blue-600">
              Our Services
            </Link>
          </div>
        </div>
      </div>

      {/* Slider Navigation */}
      <div className="absolute bottom-10 right-10 flex gap-4">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-blue-600 transition-colors flex items-center justify-center text-white"
        >
          <FaAngleLeft className="text-xl" />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-blue-600 transition-colors flex items-center justify-center text-white"
        >
          <FaAngleRight className="text-xl" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'w-8 bg-blue-600' : 'bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
