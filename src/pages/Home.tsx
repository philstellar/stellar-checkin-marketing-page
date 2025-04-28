import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomeHeroSection from '@/components/home/HomeHeroSection';
import ProductsSection from '@/components/home/ProductsSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import CTASection from '@/components/home/CTASection';
import LogoCarouselAutoplay from '@/components/LogoCarouselAutoplay';
import { useTranslation } from "@/hooks/use-translation";
import { StructuredData } from "@/components/StructuredData";

const testimonialLogos = [
  {
    src: "/lovable-uploads/676aad56-42f8-4099-a3bb-1239e0d91468.png",
    alt: "Hof Liebeneck Osterspai",
    width: 180
  }, 
  {
    src: "/lovable-uploads/5ed06b20-0365-4348-b2b0-31574211bc35.png",
    alt: "Homeby",
    width: 160
  }, 
  {
    src: "/lovable-uploads/800ababe-141e-40a9-aa0f-2e8d2519b7ef.png",
    alt: "Favorent",
    width: 150
  }, 
  {
    src: "/lovable-uploads/fd96b10c-36ff-4492-a020-f47f221d8d39.png",
    alt: "Luxury Hideaway",
    width: 170
  }, 
  {
    src: "/lovable-uploads/404c2219-9b9a-4ebd-b8ec-aea63d21d6d7.png",
    alt: "Plau Lagoons",
    width: 160
  }, 
  {
    src: "/lovable-uploads/3f0f71e5-0006-4019-9e50-f5c4354ed3fe.png",
    alt: "Berlin Mitte Experience",
    width: 180
  }, 
  {
    src: "/lovable-uploads/9451653b-0793-4645-8889-3222d4c98e84.png",
    alt: "Fairienglück",
    width: 160
  }, 
  {
    src: "/lovable-uploads/759bb20b-e23e-480a-ba2e-ebf411ee1d64.png",
    alt: "Fincaurlaub",
    width: 180
  }, 
  {
    src: "/lovable-uploads/c1427597-2572-4610-9b08-9d34bbbd25d1.png",
    alt: "Alpen Chalets Resorts",
    width: 160
  }
];

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col min-h-screen">
      <StructuredData type="product" />
      <StructuredData type="organization" />
      <Header />
      <main className="flex-grow">
        <HomeHeroSection />
        <section className="py-16 bg-white">
          <div className="container-custom">
            <LogoCarouselAutoplay logos={testimonialLogos} />
          </div>
        </section>
        <ProductsSection />
        <FeaturesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
