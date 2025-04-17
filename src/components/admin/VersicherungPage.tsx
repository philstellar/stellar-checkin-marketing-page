
import React from 'react';
import { useTranslation } from '@/hooks/use-translation';
import { Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const VersicherungPage = () => {
  const { t } = useTranslation();
  
  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <div className="flex items-center gap-3 mb-8">
        <Shield className="h-8 w-8 text-apple" />
        <h1 className="text-3xl font-bold text-royal">{t('navigation.insurance')}</h1>
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
            <h3 className="text-xl font-semibold text-royal mb-4">{t('insurance.section3.title')}</h3>
            <p className="text-royal-700">{t('insurance.section3.content')}</p>
          </CardContent>
        </Card>
      </div>

      <div className="prose max-w-none">
        <p className="text-lg text-royal-700 mb-6">
          {t('insurance.introduction')}
        </p>
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-royal mb-4">{t('insurance.benefits.title')}</h2>
          <ul className="list-disc pl-6 space-y-2 text-royal-700">
            {Array.from({ length: 6 }).map((_, index) => (
              <li key={index}>{t(`insurance.benefits.list.${index}`)}</li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-royal mb-4">{t('insurance.features.title')}</h2>
          <ul className="list-disc pl-6 space-y-2 text-royal-700">
            {Array.from({ length: 4 }).map((_, index) => (
              <li key={index}>{t(`insurance.features.list.${index}`)}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VersicherungPage;
