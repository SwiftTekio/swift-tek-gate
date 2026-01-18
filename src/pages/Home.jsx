import React from 'react';
import { LanguageProvider } from '../components/LanguageContext';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Services from '../components/home/Services';
import Features from '../components/home/Features';
import Portfolio from '../components/home/Portfolio';
import Testimonials from '../components/home/Testimonials';
import Values from '../components/home/Values';
import CTA from '../components/home/CTA';
import Footer from '../components/home/Footer';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Services />
      <Features />
      <Portfolio />
      <Testimonials />
      <Values />
      <CTA />
      <Footer />
    </div>
  );
}