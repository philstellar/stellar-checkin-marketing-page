
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { FileText, PenLine, ShieldCheck } from "lucide-react";
import { useTranslation } from '@/hooks/use-translation';
import { HeadingWithLine } from "@/components/ui/heading-with-line";
import { Link } from "react-router-dom";
import { useLanguage } from '@/context/LanguageContext';

export const OnlineCheckinSection = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  
  // Debug to identify the translation issue
  console.debug("[OnlineCheckinSection] Current language:", language);
  console.debug("[OnlineCheckinSection] Features title:", t('features.title'));
  console.debug("[OnlineCheckinSection] Features security title:", t('features.security.title'));
  console.debug("[OnlineCheckinSection] Features security description:", t('features.security.description'));

  const features = [
    {
      icon: <FileText className="h-8 w-8 text-apple" />,
      title: t('features.digitalization.title'),
      description: t('features.digitalization.description')
    },
    {
      icon: <PenLine className="h-8 w-8 text-apple" />,
      title: t('features.timeSaving.title'),
      description: t('features.timeSaving.description')
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-apple" />,
      title: t('features.security.title'),
      description: t('features.security.description')
    }
  ];

  return (
    <section id="online-checkin" className="bg-white py-16 md:py-20">
      <div className="container-custom">
        <HeadingWithLine 
          title={t('features.title')} 
          subtitle={t('features.subtitle')}
          align="center" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-sm hover:shadow-md transition-shadow duration-300 bg-white border border-gray-200">
              <CardContent className="pt-6 flex flex-col items-center text-center h-full">
                <div className="rounded-full bg-apple/10 p-4 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-royal mb-3">
                  {feature.title}
                  <div className="mt-1 h-1 w-16 bg-apple rounded-full mx-auto"></div>
                </h3>
                <p className="text-royal-700">{feature.description}</p>
                
                <div className="mt-auto pt-4">
                  <Link 
                    to={`/${language}/online-checkin`} 
                    className="text-apple hover:text-apple-600 font-medium inline-flex items-center"
                  >
                    {t('features.moreBtn')}
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnlineCheckinSection;
