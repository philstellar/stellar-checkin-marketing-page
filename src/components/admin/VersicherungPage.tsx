import React from 'react';
import { useTranslation } from '@/hooks/use-translation';
import { Shield, UserCheck, CalendarCheck, Percent, Plus, Link, ShieldCheck, FileCheck, Book, ShieldPlus, Clock, CheckCircle, XCircle, Wallet } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import Header from '../Header';
import Footer from '../Footer';
import CTAButton from '../CTAButton';
import InsurancePricing from './InsurancePricing';
import InsuranceDetails from './InsuranceDetails';
import InsuranceFAQ from './InsuranceFAQ';
import InsuranceComparisonTable from './InsuranceComparisonTable';
import LogoCarousel from '../LogoCarousel';

const VersicherungPage = () => {
  const { t } = useTranslation();
  
  const benefits = [
    {
      icon: <CalendarCheck className="h-6 w-6 text-apple" />,
      title: t('insurance.benefits.list.0'),
    },
    {
      icon: <Percent className="h-6 w-6 text-apple" />,
      title: t('insurance.benefits.list.1'),
    },
    {
      icon: <Plus className="h-6 w-6 text-apple" />,
      title: t('insurance.benefits.list.2'),
    },
    {
      icon: <Link className="h-6 w-6 text-apple" />,
      title: t('insurance.benefits.list.3'),
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-apple" />,
      title: t('insurance.benefits.list.4'),
    },
    {
      icon: <FileCheck className="h-6 w-6 text-apple" />,
      title: t('insurance.benefits.list.5'),
    },
  ];

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
      icon: <CheckCircle className="h-6 w-6 text-apple" />,
      title: "Peace of Mind",
      description: "Für Agenturen, Eigentümer und ihre Gäste."
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
      
      <section className="pt-24 pb-12 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-floral to-floral-400/20"></div>
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4 font-aeonik">
                Versicherungen und{' '}
                <span style={{ color: 'rgb(164 195 9)' }}>Kautionen managen</span>
              </h1>
              <p className="text-lg text-black mb-8 max-w-lg font-aeonik">
                {t('insurance.introduction')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton size="lg" className="bg-apple hover:bg-apple-600 font-aeonik">
                  <UserCheck className="mr-2 h-4 w-4" /> {t('hero.cta')}
                </CTAButton>
              </div>
              <div className="mt-8 flex items-center">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-apple-300"></div>
                  <div className="w-8 h-8 rounded-full bg-apple-400"></div>
                  <div className="w-8 h-8 rounded-full bg-apple-500"></div>
                </div>
                <p className="ml-4 text-sm text-black font-aeonik">
                  <span className="font-medium">{t('hero.tagline')}</span>
                </p>
              </div>
            </div>
            <div className="order-1 md:order-last flex justify-center">
              <Shield className="w-3/5 h-auto text-apple opacity-90" />
            </div>
          </div>
        </div>
      </section>
      
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center gap-3 mb-8">
          <Shield className="h-8 w-8 text-apple" />
          <h1 className="text-3xl font-bold text-royal inline-block relative">
            {t('navigation.insurance')}
            <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-apple rounded-full"></div>
          </h1>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold text-royal mb-4">{t('insurance.section1.title')}</h3>
              <p className="text-royal-700">{t('insurance.section1.content')}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold text-royal mb-4">{t('insurance.section2.title')}</h3>
              <p className="text-royal-700">{t('insurance.section2.content')}</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold text-royal mb-4">{t('insurance.section3.title')}</h3>
              <p className="text-royal-700">{t('insurance.section3.content')}</p>
            </CardContent>
          </Card>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg text-royal-700 mb-6">
            {t('insurance.introduction')}
          </p>
          
          <div className="mb-12">
            <InsuranceComparisonTable />
          </div>

          <div className="bg-white rounded-xl p-8 mb-8 shadow-sm">
            <h2 className="text-2xl font-bold text-royal mb-8 inline-block relative">
              {t('insurance.benefits.title')}
              <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-apple rounded-full"></div>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="group hover:shadow-md transition-all duration-300 border border-gray-100">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 group-hover:transform group-hover:translate-x-2 transition-transform duration-300">
                      <div className="mt-1 bg-floral rounded-lg p-2 group-hover:bg-apple/10 transition-colors duration-300">
                        {benefit.icon}
                      </div>
                      <p className="text-royal-700 font-medium">{benefit.title}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <LogoCarousel />
      </div>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-royal text-center">
              {t('insurance.shortTerm.title')}
            </h2>
            <p className="text-lg text-royal-700 text-center mb-8">
              {t('insurance.shortTerm.description')}
            </p>
            <InsurancePricing />
            
            <div className="mt-8 text-center">
              <p className="text-lg text-royal-700">
                {t('insurance.flexibility')}
              </p>
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
