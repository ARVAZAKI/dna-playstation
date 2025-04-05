import React from 'react';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import TrustedBrands from './components/TrustedBrands';
import PricingSection from './components/PricingSection';

export default function Home() {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <HeroSection />
        <TrustedBrands />
        <ServicesSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}