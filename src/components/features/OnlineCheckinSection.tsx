
import React from 'react';
import { Monitor, Check, RefreshCw, Settings, FileText, Shield, CalendarCheck, Mail } from 'lucide-react';
import FeatureSection from './FeatureSection';

export const OnlineCheckinSection: React.FC = () => {
  const features = [
    {
      icon: <Monitor className="h-6 w-6 text-stellar-600" />,
      title: "Voranmeldung für Feriengäste",
      description: "Ermöglichen Sie Ihren Gästen eine einfache und schnelle Voranmeldung direkt von zu Hause aus."
    },
    {
      icon: <Check className="h-6 w-6 text-stellar-600" />,
      title: "DSGVO-konforme Gästeverwaltung",
      description: "Speichern und verarbeiten Sie Gästeinformationen sicher und rechtskonform."
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-stellar-600" />,
      title: "Automatische Gastinformationen",
      description: "Informieren Sie Ihr Team automatisch über ankommende Gäste und deren Buchungsdetails."
    },
    {
      icon: <Settings className="h-6 w-6 text-stellar-600" />,
      title: "Individualisiere deinen Online Checkin",
      description: "Passe den Online Checkin nach deinen Bedürfnissen an und integriere ihn nahtlos in deine Apps."
    },
    {
      icon: <FileText className="h-6 w-6 text-stellar-600" />,
      title: "Digitale Meldescheine",
      description: "Erfassen Sie Gästedaten digital und erfüllen Sie gesetzliche Meldepflichten ohne Papierformulare."
    },
    {
      icon: <Shield className="h-6 w-6 text-stellar-600" />,
      title: "Sichere Datenverarbeitung",
      description: "Alle Daten werden SSL-verschlüsselt übertragen und auf deutschen Servern gespeichert."
    },
    {
      icon: <CalendarCheck className="h-6 w-6 text-stellar-600" />,
      title: "Automatisierte Prozesse",
      description: "Reduzieren Sie manuelle Arbeitsschritte durch automatische Benachrichtigungen und Datenverarbeitung."
    },
    {
      icon: <Mail className="h-6 w-6 text-stellar-600" />,
      title: "E-Mail Kommunikation",
      description: "Versenden Sie automatisierte E-Mails mit Check-in Informationen an Ihre Gäste."
    }
  ];

  return (
    <FeatureSection
      id="gaeste-voranmeldung"
      title="Auf Sie und ihre Gäste zugeschnitten"
      description="Optimieren Sie Ihren Gäste-Empfang mit einer smarten, digitalen Lösung. Reduzieren Sie Verwaltungsaufwand und verbessern Sie das Ankommen Ihrer Feriengäste."
      features={features}
      image=""
      imageAlt="Online Checkin Lösung für Ferienwohnungen"
      bgColor="bg-gray-50"
      fullWidth={true}
    />
  );
};

export default OnlineCheckinSection;
