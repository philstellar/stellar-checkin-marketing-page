
import React from 'react';
import { useTranslation } from '@/hooks/use-translation';
import { Book, ShieldPlus, Clock, Wallet, Link as LinkIcon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import Header from '../Header';
import Footer from '../Footer';
import InsurancePricing from './InsurancePricing';
import InsuranceDetails from './InsuranceDetails';
import InsuranceFAQ from './InsuranceFAQ';
import InsuranceComparisonTable from './InsuranceComparisonTable';
import InsurancePricingTable from './InsurancePricingTable';
import LogoCarouselAutoplay from '../LogoCarouselAutoplay';
import HeroSection from './insurance/HeroSection';
import BenefitsSection from './insurance/BenefitsSection';
import OverviewCards from './insurance/OverviewCards';
import FAQSchema from '../schema/FAQSchema';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const VersicherungPage: React.FC = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  
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

  // List of FAQs for schema markup
  const insuranceFAQs = [
    'airbnb',
    'deposit',
    'coverage',
    'cost',
    'process',
    'implementation'
  ];

  return (
    <>
      <Header />
      
      {/* Add FAQ Schema for better SEO */}
      <FAQSchema faqKeys={insuranceFAQs} namespace="insurance.faq" />
      
      <HeroSection />

      <div className="container mx-auto px-4 py-[30px] bg-white overflow-hidden">
        <OverviewCards />

        <div className="prose max-w-none">
          <div className="mb-12">
            <InsuranceComparisonTable />
            
            <div className="mt-8 text-royal-700">
              <p className="mb-4">
                Um die Vertrauenswürdigkeit Ihrer Immobilie zu steigern, kombinieren Sie die Versicherung mit unserem{' '}
                <Link to={`/${language}/trust-badge`} className="text-apple hover:underline font-medium">
                  Trust Badge
                </Link>{' '}
                für maximale Gästesicherheit.
              </p>
              
              <p>
                Integriert nahtlos mit unserem{' '}
                <Link to={`/${language}/#gaeste-voranmeldung`} className="text-apple hover:underline font-medium">
                  digitalen Check-in System
                </Link>{' '}
                für ein optimales Gästeerlebnis.
              </p>
            </div>
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
              src: "/lovable-uploads/new-favorent-logo.webp",
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
      
      {/* Related Content Section for better internal linking */}
      <section className="py-12 bg-floral-100">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-royal text-center">
            {t('common.relatedContent')}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-royal">{t('navigation.trustBadge')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-royal-700">
                  {t('trustBadge.content')}
                </p>
              </CardContent>
              <CardFooter>
                <Link to={`/${language}/trust-badge`} className="inline-flex items-center text-apple hover:underline">
                  {t('navigation.learnMore')} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
            
            <Card className="bg-white hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-royal">{t('identity.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-royal-700">
                  {t('identity.description')}
                </p>
              </CardContent>
              <CardFooter>
                <Link to={`/${language}/#identitaetspruefung`} className="inline-flex items-center text-apple hover:underline">
                  {t('navigation.learnMore')} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
            
            <Card className="bg-white hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-royal">{t('navigation.successStories')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-royal-700">
                  {t('common.successStoriesDescription', {fallback: 'Entdecken Sie, wie andere Gastgeber unsere Lösungen nutzen.'}) }
                </p>
              </CardContent>
              <CardFooter>
                <Link to={`/${language === 'de' ? 'de/erfolgsbeispiele' : language === 'en' ? 'en/success-stories' : language === 'it' ? 'it/storie-di-successo' : 'es/historias-de-exito'}`} className="inline-flex items-center text-apple hover:underline">
                  {t('navigation.learnMore')} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default VersicherungPage;
