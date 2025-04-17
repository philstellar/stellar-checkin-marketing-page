
import React from 'react';
import { Check } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';
import { Card, CardContent } from "@/components/ui/card";

const InsuranceFeatures = () => {
  const { t } = useTranslation();
  
  const features = [
    'classicInsurance',
    'noLiability',
    'allChannels',
    'petDamage',
    'rentalLoss',
    'commercialDamage',
    'payPerNight'
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, index) => (
        <Card key={index} className="bg-white">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <Check className="h-5 w-5 text-apple mt-1" />
              <p className="text-royal-700">{t(`insurance.features.${feature}`)}</p>
            </div>
          </CardContent>
        </Card>
      ))}
      <Card className="bg-white md:col-span-2 lg:col-span-3">
        <CardContent className="p-6">
          <p className="text-royal-700">{t('insurance.features.flexibility')}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default InsuranceFeatures;
