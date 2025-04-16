
import React from 'react';
import { Database, Plug, Link, ServerCog } from 'lucide-react';
import CTAButton from "@/components/CTAButton";

export const IntegrationenSection: React.FC = () => {
  const features = [
    {
      icon: <Database className="w-8 h-8 text-apple" />,
      title: "PMS Integration",
      description: "Nahtlose Anbindung an dein Property Management System für effiziente Datensynchronisation."
    },
    {
      icon: <Plug className="w-8 h-8 text-apple" />,
      title: "API Schnittstellen",
      description: "Offene API für maßgeschneiderte Integrationen und individuelle Anpassungen."
    },
    {
      icon: <Link className="w-8 h-8 text-apple" />,
      title: "Zahlungssysteme",
      description: "Direktanbindung an führende Zahlungsanbieter wie Stripe und PayPal."
    },
    {
      icon: <ServerCog className="w-8 h-8 text-apple" />,
      title: "Webhooks",
      description: "Ereignisbasierte Benachrichtigungen für Echtzeit-Updates in deinen Systemen."
    }
  ];

  return (
    <section id="integrationen" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Integration mit Ihrem PMS
            <div className="mt-2 mx-auto h-1 w-24 bg-apple rounded-full"></div>
          </h2>
          <p className="text-lg text-black max-w-3xl mx-auto">
            Ob Integration mit Smoobu, Guesty, Hostaway, Lodgify, Beds24 oder anderen führenden Systemen - wir verbinden Ihr PMS für einen optimierten Workflow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-black mb-2 pb-2">
                {feature.title}
                <div className="mt-1 h-1 w-[30%] bg-apple rounded-full"></div>
              </h3>
              <p className="text-base text-black">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <CTAButton className="bg-apple hover:bg-apple-600 text-white px-6 py-2.5">
            Integrationen entdecken
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default IntegrationenSection;
