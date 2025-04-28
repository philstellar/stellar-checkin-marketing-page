
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Shield } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';

const OverviewCards = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <div className="flex items-center gap-3 mb-8">
        <Shield className="h-8 w-8 text-apple" />
        <h1 className="text-3xl font-bold text-royal inline-block relative">
          {t('insurance.comparison.headline')}
          <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-apple rounded-full"></div>
        </h1>
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
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-royal">{t('insurance.section3.title')}</h3>
              <img 
                src="/lovable-uploads/0da418dc-2d10-4140-85c9-4c96a4bbe2a9.png" 
                alt="Hiscox Insurance" 
                className="h-12" 
              />
            </div>
            <p className="text-royal-700">{t('insurance.section3.content')}</p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default OverviewCards;
