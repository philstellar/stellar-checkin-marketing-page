import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type FeatureCardProps = {
  title: string;
  description: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description
}) => {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg border border-gray-200 bg-white">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-semibold text-royal pb-2 border-b border-apple">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <p className="text-royal-700 text-left">{description}</p>
      </CardContent>
    </Card>
  );
};

export const OnlineCheckinSection: React.FC = () => {
  const features = [
    {
      title: "Gästedaten aufnehmen",
      description: "Definiere welche Daten genau aufgenommen werden sollen",
    },
    {
      title: "DSGVO-konforme Gästeverwaltung",
      description: "Speichern und verarbeiten Sie Gästeinformationen sicher und rechtskonform.",
    },
    {
      title: "Automatische Gastinformationen",
      description: "Informieren Sie Ihr Team automatisch über ankommende Gäste und deren Buchungsdetails.",
    },
    {
      title: "Individualisiere deinen Online Checkin",
      description: "Passe den Online Checkin nach deinen Bedürfnissen an und integriere ihn nahtlos in deine Apps.",
    },
    {
      title: "Digitale Meldescheine",
      description: "Erfassen Sie Gästedaten digital und erfüllen Sie gesetzliche Meldepflichten ohne Papierformulare.",
    },
    {
      title: "Sichere Datenverarbeitung",
      description: "Alle Daten werden SSL-verschlüsselt übertragen und auf deutschen Servern gespeichert.",
    },
    {
      title: "Automatisierte Prozesse",
      description: "Reduzieren Sie manuelle Arbeitsschritte durch automatische Benachrichtigungen und Datenverarbeitung.",
    },
    {
      title: "E-Mail Kommunikation",
      description: "Versenden Sie automatisierte E-Mails mit Check-in Informationen an Ihre Gäste.",
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
            Reduzieren Sie Verwaltungsaufwand und verbessern Sie das Ankommen Ihrer Feriengäste.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnlineCheckinSection;
