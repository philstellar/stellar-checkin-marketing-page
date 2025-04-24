
import React from 'react';
import { UserCheck, Shield } from 'lucide-react';
import CTAButton from '../../CTAButton';
import { useTranslation } from '@/hooks/use-translation';

const HeroSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="pt-24 pb-12 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-floral to-floral-400/20"></div>
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6 font-aeonik"
              style={{ contentVisibility: 'auto' }}
            >
              {t('insurance.title')}
            </h1>
            <p className="text-lg text-black mb-8 max-w-lg font-aeonik">
              {t('insurance.introduction')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton size="lg" className="bg-royal hover:bg-royal-600 font-aeonik">
                <UserCheck className="mr-2 h-4 w-4" /> {t('hero.cta')}
              </CTAButton>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-royal-300"></div>
                <div className="w-8 h-8 rounded-full bg-royal-400"></div>
                <div className="w-8 h-8 rounded-full bg-royal-500"></div>
              </div>
              <p className="ml-4 text-sm text-black font-aeonik">
                <span className="font-medium">{t('hero.tagline')}</span>
              </p>
            </div>
          </div>
          <div className="order-1 md:order-last flex justify-center">
            <Shield className="w-3/5 h-auto text-royal opacity-90" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
