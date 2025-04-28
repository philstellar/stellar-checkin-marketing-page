
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useTranslation } from '@/hooks/use-translation';
import { ComparisonDesktopView } from './insurance/ComparisonDesktopView';
import { ComparisonMobileView } from './insurance/ComparisonMobileView';

const InsuranceComparisonTable = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  
  // Use direct translation strings instead of keys
  const comparisonRows = [
    t('insuranceDetail.comparison.rows.0'), 
    t('insuranceDetail.comparison.rows.1'), 
    t('insuranceDetail.comparison.rows.2'),
    t('insuranceDetail.comparison.rows.3'),
    t('insuranceDetail.comparison.rows.4')
  ];
  
  const features = comparisonRows.map((rowText) => {
    return {
      name: rowText,
      stellar: true,
      airbnb: rowText === comparisonRows[3],  // Only "Protection against damage caused by pets" is true for Airbnb
      booking: false,
      classic: false,
    };
  });
  
  // Change "airbnb" value specifically for "Schutz bei Mietausfall" (row index 2)
  const schutzBeiMietausfallIndex = 2;
  if (features[schutzBeiMietausfallIndex]) {
    features[schutzBeiMietausfallIndex].airbnb = false;
  }

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
