'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform built with Next.js and Stripe, featuring real-time inventory management and AI-powered product recommendations.',
    image: '/portfolio/project1.jpg',
    technologies: ['Next.js', 'Stripe', 'TailwindCSS', 'MongoDB'],
    link: '#'
  },
  {
    title: 'Mobile Banking App',
    description: 'A secure and user-friendly mobile banking application with biometric authentication and real-time transaction tracking.',
    image: '/portfolio/project2.jpg',
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'AWS'],
    link: '#'
  },
  {
    title: 'AI Analytics Dashboard',
    description: 'An intelligent analytics dashboard that provides real-time insights and predictive analytics using machine learning algorithms.',
    image: '/portfolio/project3.jpg',
    technologies: ['Python', 'TensorFlow', 'React', 'D3.js'],
    link: '#'
  },
  {
    title: 'IoT Smart Home',
    description: 'A comprehensive IoT solution for smart home automation, featuring voice control and energy optimization.',
    image: '/portfolio/project4.jpg',
    technologies: ['IoT', 'React', 'Node.js', 'MongoDB'],
    link: '#'
  },
  {
    title: 'Cloud Migration Platform',
    description: 'An enterprise-level platform that streamlines the process of migrating legacy systems to modern cloud infrastructure.',
    image: '/portfolio/project5.jpg',
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    link: '#'
  },
  {
    title: 'Blockchain Exchange',
    description: 'A secure cryptocurrency exchange platform with real-time trading, wallet management, and advanced charting.',
    image: '/portfolio/project6.jpg',
    technologies: ['Blockchain', 'React', 'Node.js', 'PostgreSQL'],
    link: '#'
  }
];

export default function PortfolioPage() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.set('.portfolio-header', { opacity: 0, y: 50 });
      gsap.to('.portfolio-header', {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        stagger: {
          amount: 0.3
        }
      });

      // Background patterns animation
      gsap.from('.pattern-circle', {
        scale: 0,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        stagger: {
          amount: 1,
          from: 'random'
        },
        ease: 'power3.out'
      });

      // Project cards animation
      gsap.from('.project-card', {
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 80%',
          end: 'bottom 20%',
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: {
          amount: 1,
          from: 'start'
        },
        ease: 'power3.out'
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="relative min-h-screen bg-[#1E293B] font-poppins overflow-hidden">
      {/* Header Glow Effect */}
      <div className="header-glow absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full" />

      {/* Floating Background Patterns */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{
            backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Floating Elements */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="pattern-circle absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <div className={`
              w-${Math.random() > 0.5 ? '24' : '32'} 
              h-${Math.random() > 0.5 ? '24' : '32'}
              rounded-${Math.random() > 0.5 ? 'full' : '[30px]'}
              border-2 border-blue-400/30
              ${Math.random() > 0.5 ? 'bg-blue-400/5' : 'bg-transparent'}
            `} />
          </div>
        ))}
      </div>

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="portfolio-header text-center mb-16">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
            Our Portfolio
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Showcasing our innovative solutions and successful projects that have transformed businesses
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group relative aspect-[3/2.5] rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="object-cover w-full h-full transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1E293B]/50 to-[#1E293B]/90 opacity-0 group-hover:opacity-100 transition-all duration-700" />
              
              <div className="absolute inset-0 p-5 flex flex-col justify-end transform translate-y-[60%] group-hover:translate-y-0 transition-all duration-700">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-blue-200 mb-3 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-0.5 bg-blue-500/20 text-blue-200 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.link}
                  className="inline-flex items-center text-sm text-blue-300 hover:text-blue-200 transition-colors"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-1.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
}
