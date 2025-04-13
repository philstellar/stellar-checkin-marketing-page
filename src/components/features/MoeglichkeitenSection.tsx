
import React from 'react';
import { Monitor, Check, RefreshCw, Clock } from 'lucide-react';
import FeatureSection from './FeatureSection';

export const MoeglichkeitenSection: React.FC = () => {
  const features = [
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Digitale Hausmappe",
      description: "Stellen Sie Ihren Gästen alle wichtigen Informationen zur Ferienwohnung digital zur Verfügung."
    },
    {
      icon: <Check className="h-6 w-6" />,
      title: "Zusatzservices buchen",
      description: "Bieten Sie Ihren Gästen die Möglichkeit, zusätzliche Leistungen direkt zu buchen."
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "Gästefeedback einholen",
      description: "Sammeln Sie wertvolles Feedback zur kontinuierlichen Verbesserung Ihres Angebots."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Automatisierte Kommunikation",
      description: "Halten Sie den Kontakt zu Ihren Gästen ohne zusätzlichen Aufwand."
    }
  ];

  return (
    <FeatureSection
      id="moeglichkeiten"
      title="Erweiterte Möglichkeiten"
      description="Nutzen Sie die vielfältigen Funktionen, um das Erlebnis Ihrer Feriengäste zu verbessern und Ihre Verwaltung zu vereinfachen."
      features={features}
      image=""
      imageAlt="Erweiterte Möglichkeiten für Ferienwohnungen"
      bgColor="bg-white"
    />
  );
};

export default MoeglichkeitenSection;
