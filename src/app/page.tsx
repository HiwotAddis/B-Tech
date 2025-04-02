import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Counter from '../components/Counter';
import WhyChooseUs from '../components/WhyChooseUs';
import Partners from '../components/Partners';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Counter />
      <WhyChooseUs />
      <Partners />
      <Testimonials />
    </>
  );
}
