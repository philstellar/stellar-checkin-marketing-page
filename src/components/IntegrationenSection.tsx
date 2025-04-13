
import React from 'react';
import { Monitor, Check, RefreshCw, Clock } from 'lucide-react';
import { FeatureSection } from './features/FeatureSection';

export const IntegrationenSection: React.FC = () => {
  const features = [
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "PMS Integration",
      description: "Nahtlose Anbindung an dein Property Management System für effiziente Prozesse."
    },
    {
      icon: <Check className="h-6 w-6" />,
      title: "Kurtaxen",
      description: "Automatische Kalkulation und Übertragung der Daten in relevante Systeme."
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "API für individuelle Lösungen",
      description: "Flexible Schnittstellen für Integration in deine bestehende Systemlandschaft."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Anbindung an Zahlungssysteme",
      description: "Integrierte Zahlungsabwicklung für Zusatzleistungen und Kautionen."
    }
  ];

  return (
    <FeatureSection
      id="integrationen"
      title="Nahtlose Integrationen"
      description="Ob Integration in das PMS, Kurtaxensysten (z.B. AVS), wir vernetzen die Systeme"
      features={features}
      image=""
      imageAlt="Systemintegrationen für Ferienwohnungen"
      bgColor="bg-gray-50"
      centerTitle={true}
    />
  );
};

export default IntegrationenSection;
