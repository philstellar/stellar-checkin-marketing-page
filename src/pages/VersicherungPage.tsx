
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTranslation } from '@/hooks/use-translation';
import { Book, ShieldPlus, Clock, Wallet } from 'lucide-react';
import InsurancePricing from '@/components/admin/InsurancePricing';
import InsuranceDetails from '@/components/admin/InsuranceDetails';
import InsuranceFAQ from '@/components/admin/InsuranceFAQ';
import InsuranceComparisonTable from '@/components/admin/InsuranceComparisonTable';
import InsurancePricingTable from '@/components/admin/InsurancePricingTable';
import LogoCarouselAutoplay from '@/components/LogoCarouselAutoplay';
import HeroSection from '@/components/admin/insurance/HeroSection';
import BenefitsSection from '@/components/admin/insurance/BenefitsSection';
import OverviewCards from '@/components/admin/insurance/OverviewCards';

const VersicherungPage: React.FC = () => {
  const { t } = useTranslation();
  
  const addInsuranceFeatures = [
    {
      icon: <Book className="h-6 w-6 text-apple" />,
      title: "Synchronisiere deine Buchungen",
      description: "Richte die Logik ein, die am besten zu deinem Unternehmen passt."
    },
    {
      icon: <ShieldPlus className="h-6 w-6 text-apple" />,
      title: "Wähle die richtige Deckungssumme",
      description: "Sichere dich bei jeder erfolgreichen Buchung ab."
    },
    {
      icon: <Clock className="h-6 w-6 text-apple" />,
      title: "Online Check-in Integration",
      description: "Lass deine Gäste zwischen Versicherung und Kaution wählen."
    },
    {
      icon: <Wallet className="h-6 w-6 text-apple" />,
      title: "Kautionen als Option",
      description: "Biete deinen Gästen die Wahl zwischen Versicherung und traditioneller Kaution."
    }
  ];

  return (
    <>
      <Header />
      <HeroSection />

      <div className="container mx-auto px-4 py-[30px] bg-white overflow-hidden">
        <OverviewCards />

        <div className="prose max-w-none">
          <div className="mb-12">
            <InsuranceComparisonTable />
          </div>

          <BenefitsSection />
        </div>

        <div className="overflow-hidden bg-white">
          <LogoCarouselAutoplay logos={[
            {
              src: "/lovable-uploads/676aad56-42f8-4099-a3bb-1239e0d91468.png",
              alt: "Hof Liebeneck Osterspai",
              width: 180
            }, 
            {
              src: "/lovable-uploads/5ed06b20-0365-4348-b2b0-31574211bc35.png",
              alt: "Homeby",
              width: 160
            }, 
            {
              src: "/lovable-uploads/ad8e2b41-5b7e-4094-bf01-18582faeba83.png",
              alt: "Favorent",
              width: 150
            }, 
            {
              src: "/lovable-uploads/fd96b10c-36ff-4492-a020-f47f221d8d39.png",
              alt: "Luxury Hideaway",
              width: 170
            }, 
            {
              src: "/lovable-uploads/404c2219-9b9a-4ebd-b8ec-aea63d21d6d7.png",
              alt: "Plau Lagoons",
              width: 160
            }, 
            {
              src: "/lovable-uploads/3f0f71e5-0006-4019-9e50-f5c4354ed3fe.png",
              alt: "Berlin Mitte Experience",
              width: 180
            }, 
            {
              src: "/lovable-uploads/9451653b-0793-4645-8889-3222d4c98e84.png",
              alt: "Fairienglück",
              width: 160
            }
          ]} />
        </div>
      </div>

      <section className="bg-white">
        <div className="container-custom max-w-[90rem] mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-royal text-center">
              {t('insurance.shortTerm.title')}
            </h2>
            <p className="text-lg text-royal-700 text-center mb-8">
              {t('insurance.shortTerm.description')}
            </p>
          </div>
          <InsurancePricingTable />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <InsuranceDetails />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <InsuranceFAQ />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default VersicherungPage;
