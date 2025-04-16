
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { 
  OnlineCheckinSection,
  EinstellungenSection,
  IntegrationenSection
} from "@/components/features";
import KurtaxeSection from "@/components/KurtaxeSection";
import ZusatzservicesSection from "@/components/ZusatzservicesSection";
import VersicherungSection from "@/components/VersicherungSection";
import IdentitaetspruefungSection from "@/components/IdentitaetspruefungSection";
import LogoCarousel from "@/components/LogoCarousel";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { TooltipProvider } from "@/components/ui/tooltip";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <TooltipProvider>
          <Hero />
          <OnlineCheckinSection />
          <LogoCarousel />
          <KurtaxeSection />
          <ZusatzservicesSection />
          <VersicherungSection />
          <IdentitaetspruefungSection />
          <IntegrationenSection />
          <EinstellungenSection />
          <PricingSection />
          <ContactSection />
        </TooltipProvider>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
