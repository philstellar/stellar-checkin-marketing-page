import React from 'react';
import { useTranslation } from '@/hooks/use-translation';
import { Shield, UserCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Header from '../Header';
import Footer from '../Footer';
import CTAButton from '../CTAButton';

const VersicherungPage = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <Header />
      <section className="pt-24 pb-12 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-floral to-floral-400/20"></div>
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4 font-aeonik">
                {t('insurance.headline1')}
                <span style={{ color: 'rgb(164 195 9)' }}>{t('insurance.headline2')}</span>
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
          <h1 className="text-3xl font-bold text-royal">{t('navigation.insurance')}</h1>
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
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-royal mb-4">{t('insurance.benefits.title')}</h2>
            <ul className="list-disc pl-6 space-y-2 text-royal-700">
              {Array.from({ length: 6 }).map((_, index) => (
                <li key={index}>{t(`insurance.benefits.list.${index}`)}</li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-royal mb-4">{t('insurance.features.title')}</h2>
            <ul className="list-disc pl-6 space-y-2 text-royal-700">
              {Array.from({ length: 4 }).map((_, index) => (
                <li key={index}>{t(`insurance.features.list.${index}`)}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VersicherungPage;
