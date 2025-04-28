
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useTranslation } from '@/hooks/use-translation';
import { ComparisonDesktopView } from './insurance/ComparisonDesktopView';
import { ComparisonMobileView } from './insurance/ComparisonMobileView';

const InsuranceComparisonTable = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  
  const features = [
    {
      name: t('insurance.comparison.rows.0'),
      stellar: true,
      airbnb: false,
      booking: false,
      classic: false,
    },
    {
      name: t('insurance.comparison.rows.1'),
      stellar: true,
      airbnb: false,
      booking: false,
      classic: false,
    },
    {
      name: t('insurance.comparison.rows.2'),
      stellar: true,
      airbnb: false,
      booking: false,
      classic: false,
    },
    {
      name: t('insurance.comparison.rows.3'),
      stellar: true,
      airbnb: true,
      booking: false,
      classic: false,
    },
    {
      name: t('insurance.comparison.rows.4'),
      stellar: true,
      airbnb: true,
      booking: false,
      classic: false,
    },
  ];

  const schutzBeiMietausfallIndex = 2;

  return (
    <div className="rounded-lg border bg-white">
      {isMobile ? (
        <ComparisonMobileView 
          features={features} 
          schutzBeiMietausfallIndex={schutzBeiMietausfallIndex} 
        />
      ) : (
        <ComparisonDesktopView 
          features={features} 
          schutzBeiMietausfallIndex={schutzBeiMietausfallIndex} 
        />
      )}
    </div>
  );
};

export default InsuranceComparisonTable;
