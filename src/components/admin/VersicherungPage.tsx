
import React from 'react';
import { useTranslation } from '@/hooks/use-translation';
import { Shield } from 'lucide-react';

const VersicherungPage = () => {
  const { t } = useTranslation();
  
  return (
    <div className="container mx-auto px-4 py-16 min-h-screen">
      <div className="flex items-center gap-3 mb-8">
        <Shield className="h-8 w-8 text-apple" />
        <h1 className="text-3xl font-bold text-royal">{t('navigation.insurance')}</h1>
      </div>
      <div className="prose max-w-none">
        <p className="text-lg text-royal-700">
          {t('insurance.content')}
        </p>
      </div>
    </div>
  );
};

export default VersicherungPage;
