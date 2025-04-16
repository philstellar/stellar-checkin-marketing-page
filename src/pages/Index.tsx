
import React, { lazy, Suspense } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { OnlineCheckinSection } from "@/components/features";
import LogoCarousel from "@/components/LogoCarousel";
import Footer from "@/components/Footer";

// Lazy load non-critical sections
const KurtaxeSection = lazy(() => import("@/components/KurtaxeSection"));
const ZusatzservicesSection = lazy(() => import("@/components/ZusatzservicesSection"));
const VersicherungSection = lazy(() => import("@/components/VersicherungSection"));
const IdentitaetspruefungSection = lazy(() => import("@/components/IdentitaetspruefungSection"));
const IntegrationenSection = lazy(() => import("@/components/features/IntegrationenSection"));
const EinstellungenSection = lazy(() => import("@/components/features/EinstellungenSection"));
const PricingSection = lazy(() => import("@/components/PricingSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <OnlineCheckinSection />
        <LogoCarousel />
        
        <Suspense fallback={<div className="h-40 flex items-center justify-center">Loading...</div>}>
          <KurtaxeSection />
          <ZusatzservicesSection />
          <VersicherungSection />
          <IdentitaetspruefungSection />
          <IntegrationenSection />
          <EinstellungenSection />
          <PricingSection />
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
