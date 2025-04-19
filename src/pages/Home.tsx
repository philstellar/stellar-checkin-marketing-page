
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import ProductsSection from '@/components/home/ProductsSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import CTASection from '@/components/home/CTASection';
import LogoCarousel from '@/components/LogoCarousel';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ProductsSection />
        <FeaturesSection />
        <LogoCarousel />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
