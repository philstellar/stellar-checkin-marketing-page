
import { Check, Monitor, ArrowRight, RefreshCw, Settings, Users, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  reverse?: boolean;
  bgColor?: string;
}

const FeatureSection = ({
  id,
  title,
  description,
  features,
  image,
  imageAlt,
  reverse = false,
  bgColor = "bg-white"
}: FeatureSectionProps) => {
  return (
    <section id={id} className={`${bgColor} section-padding`}>
      <div className="container-custom">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
          <div className={`${reverse ? 'md:order-2' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
            <p className="text-lg text-gray-700 mb-8">{description}</p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 h-12 w-12 rounded-md bg-stellar-100 flex items-center justify-center text-stellar-600">
                    {feature.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                    <p className="mt-1 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8">
              <a href="/kontakt" target="_blank" rel="noopener noreferrer">
                <Button className="bg-stellar-600 hover:bg-stellar-700">
                  Mehr erfahren <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
          
          <div className={`${reverse ? 'md:order-1' : ''}`}>
            <div className="rounded-lg overflow-hidden stellar-shadow">
              <img 
                src={image} 
                alt={imageAlt} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Pre-configured feature sections

export const OnlineCheckinSection = () => {
  const features = [
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Online Voranmeldung",
      description: "Ihre Besucher können sich bequem von zu Hause aus anmelden und sparen Zeit vor Ort."
    },
    {
      icon: <Check className="h-6 w-6" />,
      title: "Datenschutzkonform",
      description: "Alle persönlichen Daten werden DSGVO-konform gespeichert und verarbeitet."
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "Automatische Benachrichtigungen",
      description: "Ihre Mitarbeiter werden automatisch über ankommende Besucher informiert."
    }
  ];

  return (
    <FeatureSection
      id="online-checkin"
      title="Online Check-in"
      description="Machen Sie Schluss mit Papierkram und langen Warteschlangen. Unser digitales Check-in-System ermöglicht Ihren Besuchern eine schnelle und einfache Anmeldung."
      features={features}
      image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
      imageAlt="Online Check-in auf einem Laptop"
      bgColor="bg-gray-50"
    />
  );
};

export const IntegrationenSection = () => {
  const features = [
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "Nahtlose Verbindung",
      description: "Integrieren Sie Stellar Checkin mit Ihren bestehenden Systemen ohne Komplikationen."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Mitarbeiterverzeichnis",
      description: "Synchronisieren Sie Ihr Mitarbeiterverzeichnis für eine reibungslose Besucherbenachrichtigung."
    },
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "API-Schnittstellen",
      description: "Nutzen Sie unsere umfangreichen API-Schnittstellen für individuelle Anpassungen."
    }
  ];

  return (
    <FeatureSection
      id="integrationen"
      title="Integrationen"
      description="Stellar Checkin verbindet sich nahtlos mit Ihren bestehenden Systemen. Von Outlook bis zur Zugangskontrolle - wir haben die Lösung."
      features={features}
      image="https://images.unsplash.com/photo-1481487196290-c152efe083f5"
      imageAlt="Integration verschiedener Systeme"
      reverse={true}
    />
  );
};

export const EinstellungenSection = () => {
  const features = [
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Vollständig anpassbar",
      description: "Passen Sie das Erscheinungsbild und die Funktionen an Ihre Unternehmensanforderungen an."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Benutzerrollen",
      description: "Definieren Sie verschiedene Zugriffsebenen für verschiedene Mitarbeiter."
    },
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Mehrsprachigkeit",
      description: "Bieten Sie Ihren internationalen Besuchern eine mehrsprachige Benutzeroberfläche."
    }
  ];

  return (
    <FeatureSection
      id="einstellungen"
      title="Einstellungen"
      description="Konfigurieren Sie Stellar Checkin genau nach Ihren Bedürfnissen. Von der Benutzeroberfläche bis hin zu Benachrichtigungen - alles ist anpassbar."
      features={features}
      image="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
      imageAlt="Einstellungen und Konfiguration"
      bgColor="bg-gray-50"
    />
  );
};

export const MoeglichkeitenSection = () => {
  return (
    <section id="moeglichkeiten" className="section-padding stellar-gradient text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Was alles möglich ist</h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Entdecken Sie die Vielfalt der Möglichkeiten mit Stellar Checkin und revolutionieren Sie Ihre Besucherverwaltung.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Besuchervoranmeldung",
              description: "Ermöglichen Sie Ihren Mitarbeitern, Besucher im Voraus anzumelden und einen reibungslosen Empfang zu gewährleisten."
            },
            {
              title: "Digitale Unterschriften",
              description: "Lassen Sie Vertraulichkeitsvereinbarungen digital unterschreiben und speichern Sie diese sicher in der Cloud."
            },
            {
              title: "ID-Scanning",
              description: "Scannen Sie Ausweise für eine schnellere Registrierung und höhere Sicherheit."
            },
            {
              title: "Druckbare Ausweise",
              description: "Erstellen Sie automatisch personalisierte Besucherausweise mit Barcodes oder QR-Codes."
            },
            {
              title: "Berichte & Analysen",
              description: "Erhalten Sie Einblicke in Besucherstatistiken und optimieren Sie Ihre Ressourcen."
            },
            {
              title: "Notfallmanagement",
              description: "Generieren Sie im Notfall sofort eine Liste aller anwesenden Personen im Gebäude."
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all stellar-shadow"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="opacity-90">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="/kontakt" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              Alle Funktionen entdecken <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
