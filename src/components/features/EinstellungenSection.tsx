
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Globe, Settings } from 'lucide-react';
import { useTranslation } from "@/hooks/use-translation";

export const EinstellungenSection: React.FC = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: <Palette className="h-8 w-8 text-apple" />,
      title: t('settings.design.title'),
      description: t('settings.design.description')
    },
    {
      icon: <Globe className="h-8 w-8 text-apple" />,
      title: t('settings.language.title'),
      description: t('settings.language.description')
    },
    {
      icon: <Settings className="h-8 w-8 text-apple" />,
      title: t('settings.custom.title'),
      description: t('settings.custom.description')
    }
  ];

  return (
    <section id="einstellungen" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-royal">
            {t('settings.title')}
            <div className="mt-2 mx-auto h-1 w-24 bg-apple rounded-full"></div>
          </h2>
          <p className="text-lg text-royal-700 max-w-2xl mx-auto">
            {t('settings.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="h-full transition-all duration-300 hover:shadow-lg border border-gray-200 bg-white flex flex-col">
              <CardHeader className="pb-4 flex flex-col items-center text-center">
                <div className="bg-apple/10 p-4 rounded-full text-apple w-16 h-16 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg font-semibold text-royal">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-2 text-center flex-grow">
                <p className="text-royal-700">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EinstellungenSection;
