
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
        {/* Critical rendering path - these components load immediately */}
        <Hero />
        <OnlineCheckinSection />
        
        {/* Logo carousel loads after critical elements */}
        <Suspense fallback={<div className="h-20 bg-floral"></div>}>
          <LogoCarousel />
        </Suspense>
        
        {/* Non-critical sections lazy loaded with separate suspense boundaries */}
        <Suspense fallback={<div className="h-20 bg-white"></div>}>
          <KurtaxeSection />
        </Suspense>
        <Suspense fallback={<div className="h-20 bg-floral-100"></div>}>
          <ZusatzservicesSection />
        </Suspense>
        <Suspense fallback={<div className="h-20 bg-white"></div>}>
          <VersicherungSection />
        </Suspense>
        <Suspense fallback={<div className="h-20 bg-floral-100"></div>}>
          <IdentitaetspruefungSection />
        </Suspense>
        <Suspense fallback={<div className="h-20 bg-white"></div>}>
          <IntegrationenSection />
        </Suspense>
        <Suspense fallback={<div className="h-20 bg-floral-100"></div>}>
          <EinstellungenSection />
        </Suspense>
        <Suspense fallback={<div className="h-20 bg-white"></div>}>
          <PricingSection />
        </Suspense>
        <Suspense fallback={<div className="h-20 bg-floral-100"></div>}>
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
