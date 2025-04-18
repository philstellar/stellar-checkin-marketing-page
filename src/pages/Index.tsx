
import React, { lazy, Suspense, memo } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { OnlineCheckinSection } from "@/components/features";
import LogoCarousel from "@/components/LogoCarousel";
import Footer from "@/components/Footer";
// Import ZusatzservicesSection directly instead of lazy-loading it
import ZusatzservicesSection from "@/components/ZusatzservicesSection";

// Custom loading component for better user experience
const SectionLoader = ({ height = "h-20", bg = "bg-white" }) => (
  <div className={`${height} ${bg} animate-pulse rounded-md`}></div>
);

// Lazy load non-critical sections with properly named chunks
const KurtaxeSection = lazy(() => import("@/components/KurtaxeSection"));
// Remove the problematic import and use direct import above
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
        <Suspense fallback={<SectionLoader bg="bg-floral" />}>
          <LogoCarousel />
        </Suspense>
        
        {/* Non-critical sections lazy loaded with separate suspense boundaries */}
        <Suspense fallback={<SectionLoader />}>
          <KurtaxeSection />
        </Suspense>
        
        {/* Load ZusatzservicesSection directly instead of using Suspense */}
        <ZusatzservicesSection />
        
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
          <PricingSection />
        </Suspense>
        <Suspense fallback={<SectionLoader bg="bg-floral-100" />}>
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

// Use memo to prevent unnecessary re-renders
export default memo(Index);
