
import React from 'react';
import { useTranslation } from '@/hooks/use-translation';
import { Shield, Home, Sparkles, Clock, PawPrint, Brush, Frame } from 'lucide-react';

const InsuranceDetails = () => {
  const { t } = useTranslation();
  
  const details = [
    { icon: <Home />, key: 'furniture' },
    { icon: <Sparkles />, key: 'newForOld' },
    { icon: <Clock />, key: 'rentalLoss' },
    { icon: <PawPrint />, key: 'petDamage' },
    { icon: <Brush />, key: 'cleaning' },
    { icon: <Frame />, key: 'art' }
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {details.map((detail, index) => (
        <div key={index} className="flex items-start gap-4">
          <div className="shrink-0 text-apple">
            {detail.icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-royal mb-2">
              {t(`insuranceDetail.details.${detail.key}.title`)}
            </h3>
            <p className="text-royal-700">
              {t(`insuranceDetail.details.${detail.key}.description`)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InsuranceDetails;
