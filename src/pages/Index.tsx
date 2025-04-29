
import React, { lazy, Suspense } from 'react';
import Header from "@/components/Header";
import { IndexHeroSection } from "@/components/sections/IndexHeroSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { OnlineCheckinSection } from "@/components/features";
import Footer from "@/components/Footer";
import ZusatzservicesSection from "@/components/ZusatzservicesSection";
import { MetaHead } from "@/components/meta";
import { useLocation } from "react-router-dom";
import { useTranslation } from "@/hooks/use-translation";

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
  const { t, currentLanguage } = useTranslation();
  const isHome = location.pathname === '/' || location.pathname === `/${currentLanguage}/`;
  
  // Schema data for the homepage
  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Stellar Checkin",
    "url": window.location.origin,
    "logo": `${window.location.origin}/lovable-uploads/ff2f3aee-64a7-4b39-8853-4cf47dab5b66.png`,
    "description": t('site.homepage.description'),
    "sameAs": [
      "https://twitter.com/stellar_checkin",
      "https://www.linkedin.com/company/stellar-checkin/"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+49-123-456789",
      "contactType": "customer service",
      "availableLanguage": ["German", "English", "Italian", "Spanish"]
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      {isHome && (
        <MetaHead 
          title={t('site.homepage.title')} 
          description={t('site.homepage.description')}
          image="/lovable-uploads/88f97631-50cd-493d-b68c-92e73cb443c7.png"
          structuredData={homePageSchema}
        />
      )}
      <Header />
      <main>
        <IndexHeroSection />
        <OnlineCheckinSection />
        <PartnersSection />
        <ZusatzservicesSection />
        
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

export default Index;
