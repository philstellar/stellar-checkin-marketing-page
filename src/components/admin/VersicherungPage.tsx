
import React from 'react';
import { useTranslation } from '@/hooks/use-translation';
import { Book, ShieldPlus, Clock, Wallet } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';
import InsurancePricing from './InsurancePricing';
import InsuranceDetails from './InsuranceDetails';
import InsuranceFAQ from './InsuranceFAQ';
import InsuranceComparisonTable from './InsuranceComparisonTable';
import InsurancePricingTable from './InsurancePricingTable';
import LogoCarousel from '../LogoCarousel';
import HeroSection from './insurance/HeroSection';
import BenefitsSection from './insurance/BenefitsSection';
import OverviewCards from './insurance/OverviewCards';

const VersicherungPage = () => {
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

      <div className="container mx-auto px-4 py-[30px] overflow-hidden">
        <OverviewCards />

        <div className="prose max-w-none">
          <div className="mb-12">
            <InsuranceComparisonTable />
          </div>

          <BenefitsSection />
        </div>

        <div className="overflow-hidden">
          <LogoCarousel />
        </div>
      </div>

      <section className="">
        <div className="max-w-none w-full px-[2px] md:px-[15px] mx-auto">
          <div className="max-w-none w-full mx-0">
            <div className="max-w-none w-full mx-0">
              <div className="max-w-none w-full mx-0">
                <div className="max-w-none w-full mx-0">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-floral">
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
