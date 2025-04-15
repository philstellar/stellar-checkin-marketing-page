
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { 
  OnlineCheckinSection,
  EinstellungenSection
} from "@/components/features";
import KurtaxeSection from "@/components/KurtaxeSection";
import ZusatzservicesSection from "@/components/ZusatzservicesSection";
import VersicherungSection from "@/components/VersicherungSection";
import BerichteSection from "@/components/BerichteSection";
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
        <LogoCarousel />
        <KurtaxeSection />
        <ZusatzservicesSection />
        <VersicherungSection />
        <BerichteSection />
        <EinstellungenSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
