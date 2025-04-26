
import React from 'react';
import { UserCheck, ShieldCheck, BadgeCheck } from 'lucide-react';
import CTAButton from "@/components/CTAButton";
import { useTranslation } from "@/hooks/use-translation";

const HomeHeroSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="pt-24 pb-12 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-white"></div>
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-9">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4 font-aeonik whitespace-pre-line">
              Nahtloser Online Checkin
              Eingebauter Versicherungs-Schutz
              Ultimativer Trust Badge
            </h1>
            <p className="text-lg text-black mb-8 max-w-lg font-aeonik">
              360-Grad-Vertrauen für Ihre Ferienunterkunft
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
          <div className="order-1 md:order-last md:col-span-3 flex flex-col gap-8 justify-center items-center">
            <div className="w-20 h-20 rounded-full bg-apple/10 flex items-center justify-center">
              <UserCheck className="w-10 h-10 text-apple" />
            </div>
            <div className="w-20 h-20 rounded-full bg-apple/10 flex items-center justify-center">
              <ShieldCheck className="w-10 h-10 text-apple" />
            </div>
            <div className="w-20 h-20 rounded-full bg-apple/10 flex items-center justify-center">
              <BadgeCheck className="w-10 h-10 text-apple" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
