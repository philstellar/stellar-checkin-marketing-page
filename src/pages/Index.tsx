
import React, { lazy, Suspense, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import Header from "@/components/Header";
import { IndexHeroSection } from "@/components/sections/IndexHeroSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { OnlineCheckinSection } from "@/components/features";
import Footer from "@/components/Footer";
import ZusatzservicesSection from "@/components/ZusatzservicesSection";
import ContactSection from "@/components/contact/ContactSection"; // Direct import instead of lazy loading
import KurtaxeSection from "@/components/KurtaxeSection"; // Direct import instead of lazy loading
import { StructuredData } from "@/components/StructuredData";
import IntegrationenSection from "@/components/IntegrationenSection"; // Updated import path

// Custom loading component
const SectionLoader = ({ height = "h-20", bg = "bg-white" }) => (
  <div className={`${height} ${bg} animate-pulse rounded-md`}></div>
);

// Lazy load non-critical sections
const VersicherungSection = lazy(() => import("@/components/VersicherungSection"));
const IdentitaetspruefungSection = lazy(() => import("@/components/IdentitaetspruefungSection"));
const EinstellungenSection = lazy(() => import("@/components/features/EinstellungenSection"));
const PricingSection = lazy(() => import("@/components/PricingSection"));

const Index = () => {
  const location = useLocation();

  // Handle scroll after component mount and when sections are loaded
  useEffect(() => {
    const state = location.state as { scrollTo?: string };
    if (state?.scrollTo) {
      // Add a delay to ensure lazy-loaded sections are mounted
      setTimeout(() => {
        const element = document.getElementById(state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500); // Longer delay for initial page load
    }
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <StructuredData type="product" />
      <StructuredData type="organization" />
      <Header />
      <main>
        <IndexHeroSection />
        <OnlineCheckinSection />
        <PartnersSection />
        
        <KurtaxeSection />
        
        <Suspense fallback={<SectionLoader />}>
          <VersicherungSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader bg="bg-white" />}>
          <IdentitaetspruefungSection />
        </Suspense>
        
        <IntegrationenSection />
        
        <Suspense fallback={<SectionLoader bg="bg-white" />}>
          <EinstellungenSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <div id="preise">
            <PricingSection />
          </div>
        </Suspense>
        
        <div id="kontakt">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
