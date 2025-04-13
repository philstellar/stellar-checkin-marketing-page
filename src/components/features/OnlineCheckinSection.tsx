
import React from 'react';
import { Monitor, Check, RefreshCw, Clock } from 'lucide-react';
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
      icon: <Clock className="h-6 w-6" />,
      title: "Flexibler Check-in",
      description: "Bieten Sie Early Check-in oder späteren Check-in als zusätzlichen Service an und generieren Sie Mehrwert."
    }
  ];

  return (
    <FeatureSection
      id="gaeste-voranmeldung"
      title="Digitale Gästevoranmeldung für Ferienwohnungen"
      description="Optimieren Sie Ihren Gäste-Empfang mit einer smarten, digitalen Lösung. Reduzieren Sie Verwaltungsaufwand und verbessern Sie das Ankommen Ihrer Feriengäste."
      features={features}
      image=""
      imageAlt="Digitale Gästevoranmeldung für Ferienwohnungen"
      bgColor="bg-gray-50"
    />
  );
};

export default OnlineCheckinSection;
