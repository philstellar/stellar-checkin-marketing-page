import React from 'react';
import { useTranslation } from '@/hooks/use-translation';
import InsurancePricing from '../components/admin/InsurancePricing';
import InsuranceDetails from '../components/admin/InsuranceDetails';
import InsuranceFAQ from '../components/admin/InsuranceFAQ';
import InsuranceComparisonTable from '../components/admin/InsuranceComparisonTable';
import InsurancePricingTable from '../components/admin/InsurancePricingTable';
import LogoCarousel from '../components/LogoCarousel';
import HeroSection from '../components/admin/insurance/HeroSection';
import BenefitsSection from '../components/admin/insurance/BenefitsSection';
import OverviewCards from '../components/admin/insurance/OverviewCards';
import CTAButton from '../components/CTAButton';
import { Book, ShieldPlus, Clock, Wallet, UserCheck } from 'lucide-react';
const VersicherungPage: React.FC = () => {
  const {
    t
  } = useTranslation();
  const addInsuranceFeatures = [{
    icon: <Book className="h-6 w-6 text-apple" />,
    title: t('insuranceDetail.addFeatures.syncBookings.title'),
    description: t('insuranceDetail.addFeatures.syncBookings.description')
  }, {
    icon: <ShieldPlus className="h-6 w-6 text-apple" />,
    title: t('insuranceDetail.addFeatures.coverage.title'),
    description: t('insuranceDetail.addFeatures.coverage.description')
  }, {
    icon: <Clock className="h-6 w-6 text-apple" />,
    title: t('insuranceDetail.addFeatures.integration.title'),
    description: t('insuranceDetail.addFeatures.integration.description')
  }, {
    icon: <Wallet className="h-6 w-6 text-apple" />,
    title: t('insuranceDetail.addFeatures.deposit.title'),
    description: t('insuranceDetail.addFeatures.deposit.description')
  }];
  return <>
      <HeroSection />

      <div className="container mx-auto px-4 bg-white overflow-hidden py-[65px]">
        <OverviewCards />

        <div className="prose max-w-none">
          <div className="mb-12">
            <InsuranceComparisonTable />
          </div>

          <BenefitsSection />
        </div>

        <div className="overflow-hidden bg-white">
          <LogoCarousel />
        </div>
      </div>

      <section className="bg-white">
        <div className="max-w-none w-full px-[2px] md:px-[15px] mx-auto">
          <div className="max-w-none w-full mx-0">
            <div className="max-w-none w-full mx-0">
              <div className="max-w-none w-full mx-0">
                <div className="max-w-none w-full mx-0 bg-white">
                  <div className="max-w-3xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4 text-royal text-center">
                      {t('insuranceDetail.shortTerm.title')}
                    </h2>
                    <p className="text-lg text-royal-700 text-center mb-8">
                      {t('insuranceDetail.shortTerm.description')}
                    </p>
                  </div>
                  <InsurancePricingTable />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <InsuranceDetails />
        </div>
      </section>

      <section className="bg-white text-center py-0">
        <div className="container-custom">
          <CTAButton className="bg-apple hover:bg-apple-600 text-white px-8 py-3 text-lg">
            <UserCheck className="mr-2 h-5 w-5" /> {t('insuranceDetail.hero.cta')}
          </CTAButton>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <InsuranceFAQ />
        </div>
      </section>
    </>;
};
export default VersicherungPage;