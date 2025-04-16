
import React from 'react';
import { Monitor, Check, RefreshCw, Clock } from 'lucide-react';
import { FeatureSection } from './features/FeatureSection';
import { useTranslation } from "@/hooks/use-translation";

export const IntegrationenSection: React.FC = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: <Monitor className="h-6 w-6" />,
      title: t('integration.pms.title'),
      description: t('integration.pms.description')
    },
    {
      icon: <Check className="h-6 w-6" />,
      title: t('integration.api.title'),
      description: t('integration.api.description')
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: t('integration.payment.title'),
      description: t('integration.payment.description')
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: t('integration.webhooks.title'),
      description: t('integration.webhooks.description')
    }
  ];

  return (
    <FeatureSection
      id="integrationen"
      title={t('integration.title')}
      description={t('integration.subtitle')}
      features={features}
      image=""
      imageAlt="Systemintegrationen für Ferienwohnungen"
      bgColor="bg-gray-50"
      centerTitle={true}
    />
  );
};

export default IntegrationenSection;
