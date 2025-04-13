
import React from 'react';
import { Monitor, Check, RefreshCw, Settings, FileText, Shield, CalendarCheck, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export const OnlineCheckinSection: React.FC = () => {
  return (
    <section id="gaeste-voranmeldung" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Auf Sie und ihre Gäste zugeschnitten
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Optimieren Sie Ihren Gäste-Empfang mit einer smarten, digitalen Lösung. Reduzieren Sie Verwaltungsaufwand und verbessern Sie das Ankommen Ihrer Feriengäste.
            </p>
            
            <div className="space-y-6">
              {[
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
                }
              ].map((feature, index) => (
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
          
          <div>
            <div className="rounded-lg overflow-hidden stellar-shadow">
              <img 
                src="/lovable-uploads/111d56d3-9959-4be1-ad72-3df35f92a489.png"
                alt="Online Checkin Lösung für Ferienwohnungen" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineCheckinSection;
