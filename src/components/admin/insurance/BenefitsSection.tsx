
import React from 'react';
import { CalendarCheck, Percent, Plus, Link as LinkIcon, ShieldCheck, FileCheck } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from '@/hooks/use-translation';

const BenefitsSection = () => {
  const { t } = useTranslation();
  
  const benefits = [
    {
      icon: <CalendarCheck className="h-6 w-6 text-apple" />,
      title: t('insurance.benefits.list.0')
    },
    {
      icon: <Percent className="h-6 w-6 text-apple" />,
      title: t('insurance.benefits.list.1')
    },
    {
      icon: <Plus className="h-6 w-6 text-apple" />,
      title: t('insurance.benefits.list.2')
    },
    {
      icon: <LinkIcon className="h-6 w-6 text-apple" />,
      title: t('insurance.benefits.list.3')
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-apple" />,
      title: t('insurance.benefits.list.4')
    },
    {
      icon: <FileCheck className="h-6 w-6 text-apple" />,
      title: t('insurance.benefits.list.5')
    }
  ];
  
  return (
    <div className="bg-white rounded-xl p-8 mb-8 shadow-sm px-0">
      <h2 className="text-2xl font-bold text-royal mb-8 inline-block relative">
        {t('insurance.benefits.title')}
        <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-apple rounded-full"></div>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <Card key={index} className="border border-gray-100">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 bg-floral rounded-lg p-2">
                  {benefit.icon}
                </div>
                <p className="text-royal-700 font-medium">{benefit.title}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;
