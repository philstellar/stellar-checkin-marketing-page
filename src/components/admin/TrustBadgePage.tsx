
import React from 'react';
import { useTranslation } from '@/hooks/use-translation';
import { BadgeCheck } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';

const TrustBadgePage = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-16 min-h-screen">
        <div className="flex items-center gap-3 mb-8">
          <BadgeCheck className="h-8 w-8 text-apple" />
          <h1 className="text-3xl font-bold text-royal">{t('navigation.trustBadge')}</h1>
        </div>
        <div className="prose max-w-none">
          <p className="text-lg text-royal-700">
            {t('trustBadge.content')}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TrustBadgePage;
