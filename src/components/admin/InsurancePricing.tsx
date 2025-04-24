
import React from 'react';
import { useTranslation } from '@/hooks/use-translation';
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from 'lucide-react';
import CTAButton from '../CTAButton';

const InsurancePricing = () => {
  const { t } = useTranslation();
  
  return (
    <div className="grid md:grid-cols-2 gap-8 text-left">
      <Card className="border-2 border-royal relative overflow-hidden">
        <div className="absolute top-0 left-0 bg-royal text-white px-4 py-1 rounded-br-lg text-sm font-medium">
          Basic
        </div>
        <CardContent className="pt-12 pb-6">
          <h3 className="text-2xl font-bold text-royal mb-2">2,80 € <span className="text-sm font-normal text-royal-600">/ night</span></h3>
          <p className="text-royal-600 mb-6">Damage Protection up to 1.000 €</p>
          
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-royal mr-2 mt-0.5" />
              <span className="text-royal-700">Property Damage Coverage</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-royal mr-2 mt-0.5" />
              <span className="text-royal-700">Personal Liability</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-royal mr-2 mt-0.5" />
              <span className="text-royal-700">Pet Damage Coverage</span>
            </li>
          </ul>
          
          <CTAButton className="w-full">Get Started</CTAButton>
        </CardContent>
      </Card>
      
      <Card className="border-2 border-royal relative overflow-hidden">
        <div className="absolute top-0 left-0 bg-royal text-white px-4 py-1 rounded-br-lg text-sm font-medium">
          Premium
        </div>
        <CardContent className="pt-12 pb-6">
          <h3 className="text-2xl font-bold text-royal mb-2">3,90 € <span className="text-sm font-normal text-royal-600">/ night</span></h3>
          <p className="text-royal-600 mb-6">Damage Protection up to 3.000 €</p>
          
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-royal mr-2 mt-0.5" />
              <span className="text-royal-700">All Basic Features</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-royal mr-2 mt-0.5" />
              <span className="text-royal-700">Increased Coverage Limit</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-royal mr-2 mt-0.5" />
              <span className="text-royal-700">Rental Income Loss Protection</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="h-5 w-5 text-royal mr-2 mt-0.5" />
              <span className="text-royal-700">Key Replacement Coverage</span>
            </li>
          </ul>
          
          <CTAButton className="w-full bg-royal hover:bg-royal-600">Get Started</CTAButton>
        </CardContent>
      </Card>
    </div>
  );
};

export default InsurancePricing;
