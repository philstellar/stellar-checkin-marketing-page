
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { 
  OnlineCheckinSection,
  IntegrationenSection,
  EinstellungenSection,
  MoeglichkeitenSection
} from "@/components/features";
import VersicherungSection from "@/components/VersicherungSection";
import ZusatzservicesSection from "@/components/ZusatzservicesSection";
import SchadenabwicklungSection from "@/components/SchadenabwicklungSection";
import BerichteSection from "@/components/BerichteSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <OnlineCheckinSection />
        <ZusatzservicesSection />
        <IntegrationenSection />
        <VersicherungSection />
        <SchadenabwicklungSection />
        <BerichteSection />
        <EinstellungenSection />
        <MoeglichkeitenSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
