
import React from 'react';
import { Monitor, Check, RefreshCw, Clock } from 'lucide-react';

interface FeatureSectionProps {
  id: string;
  title: string;
  description: string;
  features: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
  image: string;
  imageAlt: string;
  bgColor?: string;
}

export const FeatureSection: React.FC<FeatureSectionProps> = ({
  id,
  title,
  description,
  features,
  image,
  imageAlt,
  bgColor = 'bg-white',
}) => {
  return (
    <section id={id} className={`py-16 ${bgColor}`}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-lg text-gray-600 mb-8">{description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-stellar-100 flex items-center justify-center text-stellar-600">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-first lg:order-last">
            <img
              src={image}
              alt={imageAlt}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const OnlineCheckinSection = () => {
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
      image="/lovable-uploads/111d56d3-9959-4be1-ad72-3df35f92a489.png"
      imageAlt="Digitale Gästevoranmeldung für Ferienwohnungen"
      bgColor="bg-gray-50"
    />
  );
};

export const IntegrationenSection = () => {
  const features = [
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "PMS Integration",
      description: "Nahtlose Anbindung an Ihr Property Management System für effiziente Prozesse."
    },
    {
      icon: <Check className="h-6 w-6" />,
      title: "Schnittstellen zu Schlüsselsafes",
      description: "Automatisierte Verwaltung von Zugangscodes für kontaktlosen Check-in."
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "API für individuelle Lösungen",
      description: "Flexible Schnittstellen für Integration in Ihre bestehende Systemlandschaft."
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
      description="Verbinden Sie unsere Lösung mit Ihren bestehenden Systemen und optimieren Sie Ihre gesamte Verwaltung."
      features={features}
      image="/lovable-uploads/7498575b-a9f0-44f1-b657-e059da50ab34.png"
      imageAlt="Systemintegrationen für Ferienwohnungen"
      bgColor="bg-white"
    />
  );
};

export const EinstellungenSection = () => {
  const features = [
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Anpassbares Branding",
      description: "Gestalten Sie das Check-in-Erlebnis im Look & Feel Ihrer Marke."
    },
    {
      icon: <Check className="h-6 w-6" />,
      title: "Mehrsprachige Oberfläche",
      description: "Bieten Sie Ihren internationalen Gästen eine Benutzeroberfläche in ihrer Sprache."
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "Individuelle Datenfelder",
      description: "Erfassen Sie genau die Informationen, die für Ihre Ferienwohnung relevant sind."
    },
    {
      icon: <Clock className="h-6 w-6" />,
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
      image="/lovable-uploads/8dfdd5e8-54ec-43bb-bf4b-c15845c051b9.png"
      imageAlt="Anpassungsmöglichkeiten für Ferienwohnungen"
      bgColor="bg-gray-50"
    />
  );
};

export const MoeglichkeitenSection = () => {
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
      image="/lovable-uploads/cf3c540d-5b62-4f28-a0b0-372f417ff304.png"
      imageAlt="Erweiterte Möglichkeiten für Ferienwohnungen"
      bgColor="bg-white"
    />
  );
};
