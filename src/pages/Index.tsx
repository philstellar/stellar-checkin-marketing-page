
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
import { SECTION_IDS } from '@/components/Header';

// Custom loading component with content-visibility optimization
const SectionLoader = ({ height = "h-20", bg = "bg-white" }) => (
  <div 
    className={`${height} ${bg} animate-pulse rounded-md`}
    style={{ contentVisibility: 'auto', containIntrinsicSize: '0 500px' }}
  ></div>
);

// Lazy load non-critical sections with proper loading indicators and chunk names
const KurtaxeSection = lazy(() => import(/* webpackChunkName: "kurtaxe" */ "@/components/KurtaxeSection"));
const VersicherungSection = lazy(() => import(/* webpackChunkName: "versicherung" */ "@/components/VersicherungSection"));
const IdentitaetspruefungSection = lazy(() => import(/* webpackChunkName: "identity" */ "@/components/IdentitaetspruefungSection"));
const IntegrationenSection = lazy(() => import(/* webpackChunkName: "integrations" */ "@/components/features/IntegrationenSection"));
const EinstellungenSection = lazy(() => import(/* webpackChunkName: "settings" */ "@/components/features/EinstellungenSection"));
const PricingSection = lazy(() => import(/* webpackChunkName: "pricing" */ "@/components/PricingSection"));
const ContactSection = lazy(() => import(/* webpackChunkName: "contact" */ "@/components/contact/ContactSection"));

// Debug information about loaded components
console.log('Index page: Lazy components prepared for loading');

// Enhanced LazyLoadSection with immediate visibility option and debug logging
const LazyLoadSection = ({ children, height = "h-20", bg = "bg-white", immediatelyVisible = false, sectionId = "" }) => {
  const [isVisible, setIsVisible] = React.useState(immediatelyVisible);
  const sectionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // If marked as immediately visible, don't use IntersectionObserver
    if (immediatelyVisible) {
      setIsVisible(true);
      console.log(`LazyLoadSection: Section ${sectionId} set to immediately visible`);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the section is about to enter the viewport, show it
        if (entry.isIntersecting) {
          console.log(`LazyLoadSection: Section ${sectionId} now visible through intersection`);
          setIsVisible(true);
          // Disconnect after it's visible
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      {
        rootMargin: '400px', // Increased from 300px to load sooner
        threshold: 0
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
      console.log(`LazyLoadSection: Observing section ${sectionId}`);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [immediatelyVisible, sectionId]);

  return (
    <div ref={sectionRef} className="section-wrapper" data-section-id={sectionId}>
      {isVisible ? (
        <Suspense fallback={<SectionLoader height={height} bg={bg} />}>
          {children}
        </Suspense>
      ) : (
        <SectionLoader height={height} bg={bg} />
      )}
    </div>
  );
};

// Improved hook to preload sections from hash or navigation state
const usePreloadSectionFromHash = () => {
  const location = useLocation();
  const [sectionsToPreload, setSectionsToPreload] = React.useState<string[]>([]);

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    const state = location.state as { scrollTo?: string };
    const targetId = hash || (state?.scrollTo ?? '');

    if (targetId) {
      console.log(`Hash or scrollTo detected: ${targetId}, preloading section`);
      // Make sure we're using the correct ID
      setSectionsToPreload(prev => [...prev, targetId]);
      
      // Log all available section IDs for debugging
      console.log('Available section IDs for preloading:', SECTION_IDS);
    }
  }, [location]);

  return sectionsToPreload;
};

// Optimize the main Index component with React.memo
const Index = () => {
  const location = useLocation();
  const { t, currentLanguage } = useTranslation();
  const sectionsToPreload = usePreloadSectionFromHash();
  const isHome = location.pathname === '/' || location.pathname === `/${currentLanguage}/`;
  
  // Log which sections are being preloaded
  useEffect(() => {
    console.log('Sections marked for preloading:', sectionsToPreload);
  }, [sectionsToPreload]);
  
  // Memoize schema data to prevent re-computation
  const homePageSchema = React.useMemo(() => ({
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
  }), [t]);
  
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
        
        <LazyLoadSection 
          immediatelyVisible={sectionsToPreload.includes(SECTION_IDS.kurtaxe)} 
          sectionId={SECTION_IDS.kurtaxe}
        >
          <KurtaxeSection />
        </LazyLoadSection>
        
        <LazyLoadSection 
          immediatelyVisible={sectionsToPreload.includes(SECTION_IDS.versicherung)} 
          sectionId={SECTION_IDS.versicherung}
        >
          <VersicherungSection />
        </LazyLoadSection>
        
        <LazyLoadSection 
          bg="bg-floral-100" 
          immediatelyVisible={sectionsToPreload.includes(SECTION_IDS.identity)} 
          sectionId={SECTION_IDS.identity}
        >
          <IdentitaetspruefungSection />
        </LazyLoadSection>
        
        <LazyLoadSection 
          immediatelyVisible={sectionsToPreload.includes(SECTION_IDS.integration)} 
          sectionId={SECTION_IDS.integration}
        >
          <IntegrationenSection />
        </LazyLoadSection>
        
        <LazyLoadSection 
          bg="bg-floral-100" 
          immediatelyVisible={sectionsToPreload.includes(SECTION_IDS.settings)} 
          sectionId={SECTION_IDS.settings}
        >
          <EinstellungenSection />
        </LazyLoadSection>
        
        <LazyLoadSection 
          immediatelyVisible={sectionsToPreload.includes(SECTION_IDS.pricing)} 
          sectionId={SECTION_IDS.pricing}
        >
          <PricingSection />
        </LazyLoadSection>
        
        <LazyLoadSection 
          bg="bg-floral-100" 
          immediatelyVisible={sectionsToPreload.includes(SECTION_IDS.contact)} 
          sectionId={SECTION_IDS.contact}
        >
          <ContactSection />
        </LazyLoadSection>
      </main>
      <Footer />
    </div>
  );
};

export default React.memo(Index);
