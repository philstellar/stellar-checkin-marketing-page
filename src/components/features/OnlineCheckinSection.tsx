
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

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
    <Card className="h-full transition-all duration-300 hover:shadow-lg border border-gray-200 bg-white">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold text-royal pb-2">
          {title}
          <div className="mt-1 h-1 w-[30%] bg-apple rounded-full"></div>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <p className="text-royal-700 text-left mb-4">{description}</p>
        <Button 
          variant="ghost" 
          onClick={handleClick}
          className="text-apple hover:text-apple-600 hover:bg-gray-100 p-0 flex items-center gap-2"
        >
          Mehr erfahren <ArrowDown className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export const OnlineCheckinSection: React.FC = () => {
  const features = [
    {
      title: "Integrationen",
      description: "Verbinden Sie unsere Lösung mit bestehenden Systemen wie PMS, Schlüsselsafes und mehr für optimierte Verwaltungsprozesse.",
      targetSection: "integrationen"
    },
    {
      title: "Gästeversicherung",
      description: "Bieten Sie eine moderne Alternative zur klassischen Kaution und generieren Sie zusätzliche Einnahmen durch Provisionen.",
      targetSection: "versicherung"
    },
    {
      title: "Berichte & Analysen",
      description: "Profitieren Sie von detaillierten Einblicken in Ihre Auslastung und Gästedaten für fundierte Geschäftsentscheidungen.",
      targetSection: "berichte"
    },
    {
      title: "Zusatzservices",
      description: "Steigern Sie Ihren Umsatz mit zusätzlichen Angeboten im Check-in-Prozess wie Early Check-in oder Premium-Upgrades.",
      targetSection: "zusatzservices"
    },
    {
      title: "Anpassungsmöglichkeiten",
      description: "Gestalten Sie das Check-in-Erlebnis individuell mit anpassbarem Branding und mehrsprachiger Oberfläche.",
      targetSection: "einstellungen"
    },
    {
      title: "Schadenabwicklung",
      description: "Professionelle Abwicklung von Gästeschäden in Zusammenarbeit mit führenden Versicherern für reibungslosen Betrieb.",
      targetSection: "schadenabwicklung"
    }
  ];

  return (
    <section id="gaeste-voranmeldung" className="py-16 bg-floral">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 text-royal mx-auto">
            Alles was ein Online Checkin benötigt
            <div className="mt-2 mx-auto h-1 w-24 bg-apple rounded-full"></div>
          </h2>
          <p className="text-lg text-royal-700 max-w-2xl mx-auto">
            Optimieren Sie Ihren Gäste-Empfang mit einer smarten, digitalen Lösung. 
            Erkunden Sie alle Features, die unsere Plattform zu bieten hat.
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
      </div>
    </section>
  );
};

export default OnlineCheckinSection;
