
import React from 'react';
import { UserCheck } from 'lucide-react';
import { useIsMobile } from "@/hooks/use-mobile";
import CTAButton from "./CTAButton";
import { useTranslation } from "@/hooks/use-translation";

const Hero = () => {
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  
  return (
    <section className="pt-24 pb-12 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-floral to-floral-400/20"></div>
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4">
              {t('hero.headline1')}
              <span style={{ color: 'rgb(164 195 9)' }}>{t('hero.headline2')}</span>
              {t('hero.headline3')}
            </h1>
            <p className="text-lg text-black mb-8 max-w-lg">
              {t('hero.subheadline')}<br /><br /> 
              {t('hero.subheadline2')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton size="lg" className="bg-apple hover:bg-apple-600">
                <UserCheck className="mr-2 h-4 w-4" /> {t('hero.cta')}
              </CTAButton>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-apple-300"></div>
                <div className="w-8 h-8 rounded-full bg-apple-400"></div>
                <div className="w-8 h-8 rounded-full bg-apple-500"></div>
              </div>
              <p className="ml-4 text-sm text-black">
                <span className="font-medium">{t('hero.tagline')}</span>
              </p>
            </div>
          </div>
          
          <div className="md:pl-0 w-full h-full flex items-center justify-center">
            <div className="w-full h-full">
              <img 
                src="/lovable-uploads/ff8a3a50-21d0-4e53-98f4-3265e363fe55.png" 
                alt="Stellar Online Check-in Interface" 
                className="w-full h-auto object-contain rounded-lg"
                width="1080"
                height="2160"
                loading="eager"
                fetchPriority="high"
                style={{ 
                  aspectRatio: "1080/2160",
                  maxWidth: "100%",
                  objectFit: "contain"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
