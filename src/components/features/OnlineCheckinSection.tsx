
import React from 'react';
import { Monitor, Check, RefreshCw, Settings } from 'lucide-react';
import FeatureSection from './FeatureSection';

export const OnlineCheckinSection: React.FC = () => {
  const features = [
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Voranmeldung für Feriengäste",
      description: "Ermöglichen Sie Ihren Gästen eine einfache und schnelle Voranmeldung direkt von zu Hause aus."
    },
    {
      icon: <Check className="h-6 w-6" />,
      title: "DSGVO-konforme Gästeverwaltung",
      description: "Speichern und verarbeiten Sie Gästeinformationen sicher und rechtskonform."
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "Automatische Gastinformationen",
      description: "Informieren Sie Ihr Team automatisch über ankommende Gäste und deren Buchungsdetails."
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Individualisiere deinen Online Checkin",
      description: "Passe den Online Checkin nach deinen Bedürfnissen an und integriere ihn nahtlos in deine Apps."
    }
  ];

  return (
    <FeatureSection
      id="gaeste-voranmeldung"
      title="DIE auf Sie und ihre Gäste zugeschnittene Online Checkin Lösung"
      description="Optimieren Sie Ihren Gäste-Empfang mit einer smarten, digitalen Lösung. Reduzieren Sie Verwaltungsaufwand und verbessern Sie das Ankommen Ihrer Feriengäste."
      features={features}
      image=""
      imageAlt="Online Checkin Lösung für Ferienwohnungen"
      bgColor="bg-gray-50"
    />
  );
};

export default OnlineCheckinSection;
