
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

// Use intersection observer to lazy-load components only when they're about to enter the viewport
const LazyLoadSection = ({ children, height = "h-20", bg = "bg-white" }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the section is about to enter the viewport, show it
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Disconnect after it's visible
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      {
        rootMargin: '200px', // Start loading 200px before it enters viewport
        threshold: 0
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div ref={sectionRef}>
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

// Optimize the main Index component with React.memo
const Index = () => {
  const location = useLocation();
  const { t, currentLanguage } = useTranslation();
  const isHome = location.pathname === '/' || location.pathname === `/${currentLanguage}/`;
  
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
        
        <LazyLoadSection>
          <KurtaxeSection />
        </LazyLoadSection>
        
        <LazyLoadSection>
          <VersicherungSection />
        </LazyLoadSection>
        
        <LazyLoadSection bg="bg-floral-100">
          <IdentitaetspruefungSection />
        </LazyLoadSection>
        
        <LazyLoadSection>
          <IntegrationenSection />
        </LazyLoadSection>
        
        <LazyLoadSection bg="bg-floral-100">
          <EinstellungenSection />
        </LazyLoadSection>
        
        <LazyLoadSection>
          <PricingSection />
        </LazyLoadSection>
        
        <LazyLoadSection bg="bg-floral-100">
          <ContactSection />
        </LazyLoadSection>
      </main>
      <Footer />
    </div>
  );
};

export default React.memo(Index);
