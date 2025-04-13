
import React from 'react';
import { 
  Monitor, Check, RefreshCw, Settings, 
  FileText, Shield, CalendarCheck, Mail,
  Users, Lock, MessageSquare, Smile
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  borderColor: string;
  iconColor: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon, 
  color, 
  borderColor,
  iconColor
}) => {
  return (
    <Card className={cn(
      "h-full transition-all duration-300 hover:shadow-lg",
      "border-2 overflow-hidden",
      borderColor
    )}>
      <CardHeader className={cn("pb-2", color)}>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold">{title}</CardTitle>
          <div className={cn("rounded-full p-2", iconColor)}>
            {icon}
          </div>
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
      color: "bg-purple-50",
      borderColor: "border-purple-300",
      iconColor: "bg-purple-100 text-purple-600"
    },
    {
      icon: <Check className="h-6 w-6" />,
      title: "DSGVO-konforme Gästeverwaltung",
      description: "Speichern und verarbeiten Sie Gästeinformationen sicher und rechtskonform.",
      color: "bg-red-50",
      borderColor: "border-red-300",
      iconColor: "bg-red-100 text-red-600"
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "Automatische Gastinformationen",
      description: "Informieren Sie Ihr Team automatisch über ankommende Gäste und deren Buchungsdetails.",
      color: "bg-pink-50",
      borderColor: "border-pink-300",
      iconColor: "bg-pink-100 text-pink-600"
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Individualisiere deinen Online Checkin",
      description: "Passe den Online Checkin nach deinen Bedürfnissen an und integriere ihn nahtlos in deine Apps.",
      color: "bg-blue-50",
      borderColor: "border-blue-300",
      iconColor: "bg-blue-100 text-blue-600"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Digitale Meldescheine",
      description: "Erfassen Sie Gästedaten digital und erfüllen Sie gesetzliche Meldepflichten ohne Papierformulare.",
      color: "bg-teal-50",
      borderColor: "border-teal-300",
      iconColor: "bg-teal-100 text-teal-600"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Sichere Datenverarbeitung",
      description: "Alle Daten werden SSL-verschlüsselt übertragen und auf deutschen Servern gespeichert.",
      color: "bg-green-50",
      borderColor: "border-green-300",
      iconColor: "bg-green-100 text-green-600"
    },
    {
      icon: <CalendarCheck className="h-6 w-6" />,
      title: "Automatisierte Prozesse",
      description: "Reduzieren Sie manuelle Arbeitsschritte durch automatische Benachrichtigungen und Datenverarbeitung.",
      color: "bg-orange-50",
      borderColor: "border-orange-300",
      iconColor: "bg-orange-100 text-orange-600"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "E-Mail Kommunikation",
      description: "Versenden Sie automatisierte E-Mails mit Check-in Informationen an Ihre Gäste.",
      color: "bg-cyan-50",
      borderColor: "border-cyan-300",
      iconColor: "bg-cyan-100 text-cyan-600"
    }
  ];

  return (
    <section id="gaeste-voranmeldung" className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 relative inline-block">
            Auf Sie und ihre Gäste zugeschnitten
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-500"></div>
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
              color={feature.color}
              borderColor={feature.borderColor}
              iconColor={feature.iconColor}
            />
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <img 
            src="/lovable-uploads/89644a05-ee91-4ab5-a078-3ebc0c1d81de.png" 
            alt="Feature Overview" 
            className="max-w-full h-auto rounded-lg shadow-xl"
            style={{ maxHeight: "400px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default OnlineCheckinSection;
