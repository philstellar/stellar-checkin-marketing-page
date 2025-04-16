
import React from 'react';
import { UserCheck } from "lucide-react";
import { ScanFace, ShieldCheck, Fingerprint } from "lucide-react";
import CTAButton from "./CTAButton";
import { useTranslation } from "@/hooks/use-translation";

const IdentitaetspruefungSection = () => {
  const { t } = useTranslation();
  
  return (
    <section id="identitaetspruefung" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-first">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              {t('identity.title')}
            </h2>
            <div className="h-1 w-24 bg-apple mb-6 rounded-full"></div>
            <p className="text-lg text-black mb-8">
             {t('identity.subtitle')}
            </p>
            
            <div className="space-y-8">
              {[
                {
                  icon: <ScanFace className="w-8 h-8 text-apple" />,
                  title: t('identity.biometric.title'),
                  description: t('identity.biometric.description')
                },
                {
                  icon: <Fingerprint className="w-8 h-8 text-apple" />,
                  title: t('identity.document.title'),
                  description: t('identity.document.description')
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-apple" />,
                  title: t('identity.privacy.title'),
                  description: t('identity.privacy.description')
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-5">
                  <div className="shrink-0">
                    {feature.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-semibold text-black mb-2 pb-2">
                      {feature.title}
                      <div className="mt-1 h-1 w-[30%] bg-apple rounded-full"></div>
                    </h3>
                    <p className="text-base text-black">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <CTAButton className="bg-apple hover:bg-apple-600 text-white px-6 py-2.5">
                <UserCheck className="mr-2 h-4 w-4" /> {t('identity.cta')}
              </CTAButton>
            </div>
          </div>
          
          <div className="order-1 md:order-last flex justify-center">
            <img 
              src="/lovable-uploads/f65f2787-eee3-47c4-a728-74654f2e8651.png"
              alt="Identitätsprüfung mit Stellar" 
              className="w-3/5 h-auto object-contain bg-transparent"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdentitaetspruefungSection;
