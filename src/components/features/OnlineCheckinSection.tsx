import React from 'react';
import { UserPlus, ArrowDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CTAButton from "@/components/CTAButton";
import { LogIn } from 'lucide-react';

type FeatureCardProps = {
  title: string;
  description: string;
  targetSection: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description,
  targetSection
}) => {
  const handleClick = () => {
    const section = document.getElementById(targetSection);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg border border-gray-200 bg-white">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold text-royal pb-2">
          {title}
          <div className="mt-1 h-1 w-[30%] bg-apple rounded-full"></div>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4 flex-grow flex flex-col justify-between">
        <p className="text-royal-700 text-left mb-6">{description}</p>
        <div className="mt-auto">
          <Button 
            variant="ghost" 
            onClick={handleClick}
            className="text-apple hover:text-apple-600 hover:bg-gray-100 p-0 flex items-center gap-2"
          >
            Mehr erfahren <ArrowDown className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export const OnlineCheckinSection: React.FC = () => {
  const features = [
    {
      title: "Kurtaxe & digitale Gästemeldung",
      description: "Erfasse Meldescheine, berechne die Kurtaxe und wickele Zahlungen automatisiert ab – schnell, sicher und bequem für deine Gäste.",
      targetSection: "kurtaxe"
    },
    {
      title: "Zusatzleistungen",
      description: "Biete deinen Gästen mehr – und steigere deinen Umsatz mit Zusatzleistungen wie Early Check-in, Wäschepaketen oder besonderen Erlebnissen.",
      targetSection: "zusatzservices"
    },
    {
      title: "Kaution & Gästeversicherung",
      description: "Automatisiere Kautionseinzug und -rückzahlung, oder biete deinen Gäste eine komfortable Alternative – und profitiere von zusätzlichen Provisionseinnahmen.",
      targetSection: "versicherung"
    },
    {
      title: "Identitätsprüfung",
      description: "Erhöhe die Sicherheit mit unserer einfachen und zuverlässigen biometrischen Identitätsprüfung.",
      targetSection: "identitaetspruefung"
    },
    {
      title: "Anpassungsmöglichkeiten",
      description: "Gestalte das Check-in-Erlebnis individuell – mit deinem Branding und einer mehrsprachigen Benutzeroberfläche.",
      targetSection: "einstellungen"
    },
    {
      title: "Integration mit den führenden PMS",
      description: "Nahtlose Anbindung an dein PMS oder Channel Manager – automatische Check-in-Einladungen, und alle erhobenen Daten zentral verfügbar.",
      targetSection: "integrationen"
    }
  ];

  return (
    <section id="gaeste-voranmeldung" className="py-16 bg-floral">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 text-royal mx-auto">
            Stellar Check-in
            <div className="mt-2 mx-auto h-1 w-24 bg-apple rounded-full"></div>
          </h2>
          <p className="text-lg text-royal-700 max-w-2xl mx-auto">
            Verbessere das Gästeerlebnis vor der Anreise und steigere deinen Umsatz
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              targetSection={feature.targetSection}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <CTAButton className="bg-apple hover:bg-apple-600">
            <LogIn className="mr-2 h-4 w-4" /> LogIn
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default OnlineCheckinSection;
