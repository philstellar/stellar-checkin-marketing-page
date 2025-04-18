
import React, { lazy, Suspense, memo } from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { OnlineCheckinSection } from "@/components/features";
import LogoCarousel from "@/components/LogoCarousel";
import Footer from "@/components/Footer";

// Custom loading component for better user experience
const SectionLoader = ({ height = "h-20", bg = "bg-white" }) => (
  <div className={`${height} ${bg} animate-pulse rounded-md`}></div>
);

// Lazy load non-critical sections with properly named chunks
const KurtaxeSection = lazy(() => import(/* webpackChunkName: "kurtaxe-section" */ "@/components/KurtaxeSection"));
const ZusatzservicesSection = lazy(() => import(/* webpackChunkName: "zusatzservices-section" */ "@/components/ZusatzservicesSection"));
const VersicherungSection = lazy(() => import(/* webpackChunkName: "versicherung-section" */ "@/components/VersicherungSection"));
const IdentitaetspruefungSection = lazy(() => import(/* webpackChunkName: "identitaetspruefung-section" */ "@/components/IdentitaetspruefungSection"));
const IntegrationenSection = lazy(() => import(/* webpackChunkName: "integrationen-section" */ "@/components/features/IntegrationenSection"));
const EinstellungenSection = lazy(() => import(/* webpackChunkName: "einstellungen-section" */ "@/components/features/EinstellungenSection"));
const PricingSection = lazy(() => import(/* webpackChunkName: "pricing-section" */ "@/components/PricingSection"));
const ContactSection = lazy(() => import(/* webpackChunkName: "contact-section" */ "@/components/ContactSection"));

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
        <Suspense fallback={<SectionLoader bg="bg-floral-100" />}>
          <ZusatzservicesSection />
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
