
import React, { lazy, Suspense, useEffect } from 'react';
import Header from "@/components/Header";
import { IndexHeroSection } from "@/components/sections/IndexHeroSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { OnlineCheckinSection } from "@/components/features";
import Footer from "@/components/Footer";
import ZusatzservicesSection from "@/components/ZusatzservicesSection";
import { MetaHead } from "@/components/meta";
import { useLocation } from "react-router-dom";
import { useTranslation } from "@/hooks/use-translation";
import { toast } from '@/hooks/use-toast';

// Custom loading component
const SectionLoader = ({ height = "h-20", bg = "bg-white" }) => (
  <div className={`${height} ${bg} animate-pulse rounded-md`}></div>
);

// Define fallback component for error states
const ErrorFallback = ({ error, componentName }: { error: Error, componentName: string }) => {
  useEffect(() => {
    console.error(`Error loading ${componentName}:`, error);
  }, [error, componentName]);
  
  return (
    <div className="py-4 px-6 bg-red-50 border border-red-200 rounded-md">
      <p className="text-red-600">Failed to load {componentName}. Please refresh the page.</p>
    </div>
  );
};

// Lazy load non-critical sections with error boundaries
const KurtaxeSection = lazy(() => import("@/components/KurtaxeSection"));
const VersicherungSection = lazy(() => import("@/components/VersicherungSection"));
const IdentitaetspruefungSection = lazy(() => import("@/components/IdentitaetspruefungSection"));
const IntegrationenSection = lazy(() => import("@/components/features/IntegrationenSection"));
const EinstellungenSection = lazy(() => import("@/components/features/EinstellungenSection"));
const PricingSection = lazy(() => import("@/components/PricingSection"));
const ContactSection = lazy(() => import("@/components/contact/ContactSection"));

// Error boundary for lazy-loaded components
const SafeSuspense = ({ 
  children, 
  fallback, 
  componentName 
}: { 
  children: React.ReactNode, 
  fallback: React.ReactNode, 
  componentName: string 
}) => {
  return (
    <Suspense fallback={fallback}>
      <React.ErrorBoundary fallback={<ErrorFallback error={new Error()} componentName={componentName} />}>
        {children}
      </React.ErrorBoundary>
    </Suspense>
  );
};

const Index = () => {
  const location = useLocation();
  const { t, currentLanguage } = useTranslation();
  const isHome = location.pathname === '/' || location.pathname === `/${currentLanguage}/`;
  
  useEffect(() => {
    // Log when page has successfully mounted
    console.log('Index page mounted successfully');
  }, []);
  
  // Schema data for the homepage with safer implementation
  let homePageSchema = {};
  try {
    homePageSchema = {
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
  } catch (error) {
    console.error('Error generating schema data:', error);
    // Provide a minimal fallback schema
    homePageSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Stellar Checkin"
    };
  }
  
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
        
        <SafeSuspense fallback={<SectionLoader />} componentName="Kurtaxe Section">
          <KurtaxeSection />
        </SafeSuspense>
        
        <SafeSuspense fallback={<SectionLoader />} componentName="Versicherung Section">
          <VersicherungSection />
        </SafeSuspense>
        
        <SafeSuspense fallback={<SectionLoader bg="bg-floral-100" />} componentName="Identitaetspruefung Section">
          <IdentitaetspruefungSection />
        </SafeSuspense>
        
        <SafeSuspense fallback={<SectionLoader />} componentName="Integrationen Section">
          <IntegrationenSection />
        </SafeSuspense>
        
        <SafeSuspense fallback={<SectionLoader bg="bg-floral-100" />} componentName="Einstellungen Section">
          <EinstellungenSection />
        </SafeSuspense>
        
        <SafeSuspense fallback={<SectionLoader />} componentName="Pricing Section">
          <PricingSection />
        </SafeSuspense>
        
        <SafeSuspense fallback={<SectionLoader bg="bg-floral-100" />} componentName="Contact Section">
          <ContactSection />
        </SafeSuspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
