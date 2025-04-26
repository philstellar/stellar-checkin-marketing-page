
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomeHeroSection from '@/components/home/HomeHeroSection';
import ProductsSection from '@/components/home/ProductsSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import CTASection from '@/components/home/CTASection';
import LogoCarousel from '@/components/LogoCarousel';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HomeHeroSection />
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
