
import React from 'react';
import { CalendarCheck, Shield, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "@/hooks/use-translation";

const FeaturesSection = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      title: t('features.digitalization.title'),
      description: t('features.digitalization.description'),
      icon: <CalendarCheck className="h-6 w-6" />,
      color: 'bg-apple'
    },
    {
      title: t('features.timeSaving.title'),
      description: t('features.timeSaving.description'),
      icon: <Shield className="h-6 w-6" />,
      color: 'bg-royal'
    },
    {
      title: t('features.security.title'),
      description: t('features.security.description'),
      icon: <Award className="h-6 w-6" />,
      color: 'bg-floral'
    }
  ];

  return (
    <section className="py-16 bg-floral/10 relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-royal text-center font-aeonik">
            {t('features.title')}
          </h2>
          <p className="text-lg text-royal-700 text-center mb-8 max-w-2xl mx-auto font-aeonik">
            {t('features.subtitle')}
          </p>
          <div className="mt-2 mx-auto h-1 w-24 bg-apple rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="h-full border border-gray-200 bg-white">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-semibold text-royal pb-2 text-left font-aeonik">
                  {feature.title}
                  <div className="mt-1 h-1 w-[30%] bg-apple rounded-full"></div>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-royal-700 text-left font-aeonik">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
