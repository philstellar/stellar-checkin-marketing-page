import React, { lazy, Suspense, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import Header from "@/components/Header";
import { IndexHeroSection } from "@/components/sections/IndexHeroSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { OnlineCheckinSection } from "@/components/features";
import Footer from "@/components/Footer";
import ZusatzservicesSection from "@/components/ZusatzservicesSection";

// Custom loading component
const SectionLoader = ({ height = "h-20", bg = "bg-white" }) => (
  <div className={`${height} ${bg} animate-pulse rounded-md`}></div>
);

// Lazy load non-critical sections
const KurtaxeSection = lazy(() => import("@/components/KurtaxeSection"));
const VersicherungSection = lazy(() => import("@/components/VersicherungSection"));
const IdentitaetspruefungSection = lazy(() => import("@/components/IdentitaetspruefungSection"));
const IntegrationenSection = lazy(() => import("@/components/features/IntegrationenSection"));
const EinstellungenSection = lazy(() => import("@/components/features/EinstellungenSection"));
const PricingSection = lazy(() => import("@/components/PricingSection"));
const ContactSection = lazy(() => import("@/components/contact/ContactSection"));

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
      <Header />
      <main>
        <IndexHeroSection />
        <OnlineCheckinSection />
        <PartnersSection />
        
        <Suspense fallback={<SectionLoader />}>
          <KurtaxeSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <VersicherungSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader bg="bg-floral-100" />}>
          <IdentitaetspruefungSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <IntegrationenSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader bg="bg-floral-100" />}>
          <EinstellungenSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <div id="preise">
            <PricingSection />
          </div>
        </Suspense>
        
        <Suspense fallback={<SectionLoader bg="bg-floral-100" />}>
          <div id="kontakt">
            <ContactSection />
          </div>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
