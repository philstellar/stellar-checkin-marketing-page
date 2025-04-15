
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { 
  OnlineCheckinSection,
  KurtaxeSection,
  ZusatzleistungenSection,
  KautionSection,
  BerichteSection,
  AnpassungenSection,
  IntegrationenSection
} from "@/components/features";
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
        <KurtaxeSection />
        <ZusatzleistungenSection />
        <KautionSection />
        <BerichteSection />
        <AnpassungenSection />
        <IntegrationenSection />
        <LogoCarousel />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
