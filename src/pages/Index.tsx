
import React, { lazy, Suspense } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Custom loading component
const SectionLoader = ({ height = "h-20", bg = "bg-white" }) => (
  <div className={`${height} ${bg} animate-pulse rounded-md`}></div>
);

// Lazy load non-critical sections
const PricingSection = lazy(() => import("@/components/PricingSection"));
const ContactSection = lazy(() => import("@/components/contact/ContactSection"));

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        {/* Structure maintained but content sections removed */}
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
