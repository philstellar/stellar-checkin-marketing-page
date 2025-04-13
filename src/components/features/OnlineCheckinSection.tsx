
import React from 'react';
import { 
  Monitor, Check, RefreshCw, Settings, 
  FileText, Shield, CalendarCheck, Mail
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon,
}) => {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg border border-gray-200">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-4">
          <div className={cn("rounded-lg p-2.5 bg-[#eef1f8] text-[#0f2661]")}>
            {icon}
          </div>
          <CardTitle className="text-lg font-semibold text-stellar-600">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export const OnlineCheckinSection: React.FC = () => {
  const features = [
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "Voranmeldung für Feriengäste",
      description: "Ermöglichen Sie Ihren Gästen eine einfache und schnelle Voranmeldung direkt von zu Hause aus.",
    },
    {
      icon: <Check className="h-6 w-6" />,
      title: "DSGVO-konforme Gästeverwaltung",
      description: "Speichern und verarbeiten Sie Gästeinformationen sicher und rechtskonform.",
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "Automatische Gastinformationen",
      description: "Informieren Sie Ihr Team automatisch über ankommende Gäste und deren Buchungsdetails.",
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Individualisiere deinen Online Checkin",
      description: "Passe den Online Checkin nach deinen Bedürfnissen an und integriere ihn nahtlos in deine Apps.",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Digitale Meldescheine",
      description: "Erfassen Sie Gästedaten digital und erfüllen Sie gesetzliche Meldepflichten ohne Papierformulare.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Sichere Datenverarbeitung",
      description: "Alle Daten werden SSL-verschlüsselt übertragen und auf deutschen Servern gespeichert.",
    },
    {
      icon: <CalendarCheck className="h-6 w-6" />,
      title: "Automatisierte Prozesse",
      description: "Reduzieren Sie manuelle Arbeitsschritte durch automatische Benachrichtigungen und Datenverarbeitung.",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "E-Mail Kommunikation",
      description: "Versenden Sie automatisierte E-Mails mit Check-in Informationen an Ihre Gäste.",
    }
  ];

  return (
    <section id="gaeste-voranmeldung" className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 relative inline-block text-stellar-600">
            Auf Sie und ihre Gäste zugeschnitten
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-stellar-300"></div>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnlineCheckinSection;
