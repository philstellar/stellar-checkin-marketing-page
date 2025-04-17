
import React from 'react';
import { useTranslation } from '@/hooks/use-translation';
import { UserCheck, BadgeCheck } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';
import CTAButton from '../CTAButton';

const TrustBadgePage = () => {
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
                {t('trustBadge.headline1')}
                <span style={{ color: 'rgb(164 195 9)' }}>{t('trustBadge.headline2')}</span>
                {t('trustBadge.headline3')}
              </h1>
              <p className="text-lg text-black mb-8 max-w-lg font-aeonik">
                {t('trustBadge.content')}
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
              <img 
                src="/lovable-uploads/3098a042-bbb0-4607-b03f-beb60fdc911d.png"
                alt="Stellar Trust Badge Preview"
                className="w-full h-auto object-contain max-w-[800px]"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>
      
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center gap-3 mb-8">
          <BadgeCheck className="h-8 w-8 text-apple" />
          <h1 className="text-3xl font-bold text-royal">{t('navigation.trustBadge')}</h1>
        </div>
        <div className="prose max-w-none">
          <p className="text-lg text-royal-700">
            {t('trustBadge.content')}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TrustBadgePage;
