
import React from 'react';
import { Monitor, Check, RefreshCw, Clock } from 'lucide-react';
import FeatureSection from './FeatureSection';

export const IntegrationenSection: React.FC = () => {
  const features = [
    {
      icon: <Monitor className="h-6 w-6 text-stellar-600" />,
      title: "PMS Integration",
      description: "Nahtlose Anbindung an Ihr Property Management System für effiziente Prozesse."
    },
    {
      icon: <Check className="h-6 w-6 text-stellar-600" />,
      title: "Schnittstellen zu Schlüsselsafes",
      description: "Automatisierte Verwaltung von Zugangscodes für kontaktlosen Check-in."
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-stellar-600" />,
      title: "API für individuelle Lösungen",
      description: "Flexible Schnittstellen für Integration in Ihre bestehende Systemlandschaft."
    },
    {
      icon: <Clock className="h-6 w-6 text-stellar-600" />,
      title: "Anbindung an Zahlungssysteme",
      description: "Integrierte Zahlungsabwicklung für Zusatzleistungen und Kautionen."
    }
  ];

  return (
    <FeatureSection
      id="integrationen"
      title="Nahtlose Integrationen"
      description="Verbinden Sie unsere Lösung mit Ihren bestehenden Systemen und optimieren Sie Ihre gesamte Verwaltung."
      features={features}
      image="/lovable-uploads/69cbcbf8-03a5-4c39-a023-9df42c0b60e3.png"
      imageAlt="Systemintegrationen für Ferienwohnungen"
      bgColor="bg-gray-50"
      reverse={false}
    />
  );
};

export default IntegrationenSection;
