
import React from 'react';
import { useTranslation } from '@/hooks/use-translation';
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from 'lucide-react';
import CTAButton from '../CTAButton';

const InsurancePricing = () => {
  const { t } = useTranslation();
  
  return (
    <div className="grid md:grid-cols-2 gap-8 text-left">
      <Card className="border-2 border-apple relative overflow-hidden">
        <div className="absolute top-0 left-0 bg-apple text-white px-4 py-1 rounded-br-lg text-sm font-medium">
          Basic
        </div>
        <CardContent className="pt-12 pb-6">
          <h3 className="text-2xl font-bold text-royal mb-2">2,80 € <span className="text-sm font-normal text-royal-600">/ night</span></h3>
          <p className="text-royal-600 mb-6">{t('insuranceDetail.pricing.rows.0.description') || 'Damage Protection up to 1.000 €'}</p>
          
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-apple mr-2 mt-0.5" />
              <span className="text-royal-700">{t('insuranceDetail.pricing.rows.1.description')}</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-apple mr-2 mt-0.5" />
              <span className="text-royal-700">{t('insuranceDetail.pricing.rows.2.description')}</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-apple mr-2 mt-0.5" />
              <span className="text-royal-700">{t('insuranceDetail.pricing.rows.6.description')}</span>
            </li>
          </ul>
          
          <CTAButton className="w-full">{t('insuranceDetail.hero.cta')}</CTAButton>
        </CardContent>
      </Card>
      
      <Card className="border-2 border-royal relative overflow-hidden">
        <div className="absolute top-0 left-0 bg-royal text-white px-4 py-1 rounded-br-lg text-sm font-medium">
          Premium
        </div>
        <CardContent className="pt-12 pb-6">
          <h3 className="text-2xl font-bold text-royal mb-2">3,90 € <span className="text-sm font-normal text-royal-600">/ night</span></h3>
          <p className="text-royal-600 mb-6">{t('insuranceDetail.pricing.rows.0.description') || 'Damage Protection up to 3.000 €'}</p>
          
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-royal mr-2 mt-0.5" />
              <span className="text-royal-700">{t('insuranceDetail.pricing.allBasicFeatures', 'All Basic Features')}</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-royal mr-2 mt-0.5" />
              <span className="text-royal-700">{t('insuranceDetail.pricing.increasedCoverage', 'Increased Coverage Limit')}</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-royal mr-2 mt-0.5" />
              <span className="text-royal-700">{t('insuranceDetail.pricing.rows.5.description')}</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-royal mr-2 mt-0.5" />
              <span className="text-royal-700">{t('insuranceDetail.pricing.keyReplacement', 'Key Replacement Coverage')}</span>
            </li>
          </ul>
          
          <CTAButton className="w-full bg-royal hover:bg-royal-600">{t('insuranceDetail.hero.cta')}</CTAButton>
        </CardContent>
      </Card>
    </div>
  );
};

export default InsurancePricing;
