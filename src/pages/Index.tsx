
import React, { useEffect } from 'react';
import Header from "@/components/Header";
import { IndexHeroSection } from "@/components/sections/IndexHeroSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { OnlineCheckinSection } from "@/components/features";
import Footer from "@/components/Footer";
import ZusatzservicesSection from "@/components/ZusatzservicesSection";
import { MetaHead } from "@/components/meta";
import { useLocation } from "react-router-dom";
import { useTranslation } from "@/hooks/use-translation";
import { SECTION_IDS } from '@/constants/section-ids';

// Import all sections directly instead of lazy loading
import KurtaxeSection from "@/components/KurtaxeSection";
import VersicherungSection from "@/components/VersicherungSection";
import IdentitaetspruefungSection from "@/components/IdentitaetspruefungSection";
import IntegrationenSection from "@/components/features/IntegrationenSection";
import EinstellungenSection from "@/components/features/EinstellungenSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/contact/ContactSection";

// Debug information about loaded components
console.log('Index page: All components directly imported');

// Improved hook to preload sections from hash or navigation state
const usePreloadSectionFromHash = () => {
  const location = useLocation();
  const [sectionsToPreload, setSectionsToPreload] = React.useState<string[]>([]);

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    const state = location.state as { scrollTo?: string };
    const targetId = hash || (state?.scrollTo ?? '');

    if (targetId) {
      console.log(`Hash or scrollTo detected: ${targetId}, marking section for scroll`);
      // Make sure we're using the correct ID
      setSectionsToPreload(prev => [...prev, targetId]);
      
      // Log all available section IDs for debugging
      console.log('Available section IDs:', SECTION_IDS);
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
    console.log('Sections marked for scrolling:', sectionsToPreload);
    
    // Log all sections available in the DOM after rendering for debugging
    console.log('Sections in DOM after render:', 
      Object.entries(SECTION_IDS)
        .map(([key, id]) => ({ key, id, exists: !!document.getElementById(id) }))
    );
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
        
        {/* All sections directly rendered with their IDs */}
        <div id={SECTION_IDS.kurtaxe} className="section-wrapper" data-section-id={SECTION_IDS.kurtaxe}>
          <KurtaxeSection />
        </div>
        
        <div id={SECTION_IDS.versicherung} className="section-wrapper" data-section-id={SECTION_IDS.versicherung}>
          <VersicherungSection />
        </div>
        
        <div id={SECTION_IDS.identity} className="section-wrapper bg-floral-100" data-section-id={SECTION_IDS.identity}>
          <IdentitaetspruefungSection />
        </div>
        
        <div id={SECTION_IDS.integration} className="section-wrapper" data-section-id={SECTION_IDS.integration}>
          <IntegrationenSection />
        </div>
        
        <div id={SECTION_IDS.settings} className="section-wrapper bg-floral-100" data-section-id={SECTION_IDS.settings}>
          <EinstellungenSection />
        </div>
        
        <div id={SECTION_IDS.pricing} className="section-wrapper" data-section-id={SECTION_IDS.pricing}>
          <PricingSection />
        </div>
        
        <div id={SECTION_IDS.contact} className="section-wrapper bg-floral-100" data-section-id={SECTION_IDS.contact}>
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default React.memo(Index);
