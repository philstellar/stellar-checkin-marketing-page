
import React from 'react';
import { Monitor, Check, RefreshCw, Clock } from 'lucide-react';
import FeatureSection from './FeatureSection';

export const EinstellungenSection: React.FC = () => {
  const features = [
    {
      icon: <Monitor className="h-6 w-6 text-stellar-600" />,
      title: "Anpassbares Branding",
      description: "Gestalten Sie das Check-in-Erlebnis im Look & Feel Ihrer Marke."
    },
    {
      icon: <Check className="h-6 w-6 text-stellar-600" />,
      title: "Mehrsprachige Oberfläche",
      description: "Bieten Sie Ihren internationalen Gästen eine Benutzeroberfläche in ihrer Sprache."
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-stellar-600" />,
      title: "Individuelle Datenfelder",
      description: "Erfassen Sie genau die Informationen, die für Ihre Ferienwohnung relevant sind."
    },
    {
      icon: <Clock className="h-6 w-6 text-stellar-600" />,
      title: "Zeitgesteuerte Automatisierungen",
      description: "Legen Sie fest, wann Nachrichten und Erinnerungen an Ihre Gäste gesendet werden."
    }
  ];

  return (
    <FeatureSection
      id="einstellungen"
      title="Umfangreiche Anpassungsmöglichkeiten"
      description="Passen Sie die Checkin-Lösung individuell an Ihre Bedürfnisse und die Ihrer Feriengäste an."
      features={features}
      image=""
      imageAlt="Anpassungsmöglichkeiten für Ferienwohnungen"
      bgColor="bg-gray-50"
      centerTitle={true}
    />
  );
};

export default EinstellungenSection;
