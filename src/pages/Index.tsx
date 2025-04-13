
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { 
  OnlineCheckinSection,
  IntegrationenSection,
  EinstellungenSection
} from "@/components/features";
import VersicherungSection from "@/components/VersicherungSection";
import ZusatzservicesSection from "@/components/ZusatzservicesSection";
import BerichteSection from "@/components/BerichteSection";
import SchadenabwicklungSection from "@/components/SchadenabwicklungSection";
import LogoCarousel from "@/components/LogoCarousel";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <OnlineCheckinSection />
        <IntegrationenSection />
        <LogoCarousel />
        <VersicherungSection />
        <BerichteSection />
        <ZusatzservicesSection />
        <SchadenabwicklungSection />
        <EinstellungenSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
