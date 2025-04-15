
import React from 'react';
import { BarChart3, PieChart, TrendingUp, Users } from 'lucide-react';

const BerichteSection: React.FC = () => {
  return (
    <section id="berichte" className="py-20 bg-gradient-to-b from-floral to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-royal-100 text-royal rounded-full mb-4">
              Datengetriebene Entscheidungen
            </div>
            
            <h2 className="text-3xl font-bold mb-6 text-royal">
              Berichte & Analysen
              <div className="mt-2 h-1 w-24 bg-apple rounded-full"></div>
            </h2>
            
            <p className="text-lg text-royal-700 mb-8">
              Nutze detaillierte Einblicke in deine Gästedaten und Auslastung, um fundierte 
              Geschäftsentscheidungen zu treffen. Unsere Analysewerkzeuge liefern dir alle 
              wichtigen Kennzahlen auf einen Blick.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                {
                  icon: <BarChart3 className="h-6 w-6 text-apple" />,
                  title: "Auslastungsstatistiken",
                  description: "Verfolge Belegungsraten, Saisonalität und Trends"
                },
                {
                  icon: <Users className="h-6 w-6 text-apple" />,
                  title: "Gästedemografie",
                  description: "Erhalte Einblicke in deine Zielgruppe für gezieltes Marketing"
                },
                {
                  icon: <TrendingUp className="h-6 w-6 text-apple" />,
                  title: "Umsatzanalyse",
                  description: "Verfolge Umsätze, durchschnittliche Buchungswerte und Zusatzverkäufe"
                },
                {
                  icon: <PieChart className="h-6 w-6 text-apple" />,
                  title: "Anpassbare Dashboards",
                  description: "Erstelle individuelle Berichte nach deinen Geschäftsbedürfnissen"
                }
              ].map((feature, index) => (
                <div key={index} className="flex gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all">
                  <div className="bg-apple-50 p-2 rounded-full flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-royal mb-1">{feature.title}</h3>
                    <p className="text-sm text-royal-700">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-royal">Dashboard</h3>
                <div className="flex gap-2">
                  <span className="inline-block w-3 h-3 rounded-full bg-apple"></span>
                  <span className="inline-block w-3 h-3 rounded-full bg-gray-300"></span>
                  <span className="inline-block w-3 h-3 rounded-full bg-gray-300"></span>
                </div>
              </div>
              
              <img
                src="/lovable-uploads/1e87bebd-cc85-4900-af99-c188ac6df182.png"
                alt="Analytics Dashboard"
                className="w-full h-auto rounded-lg mb-4"
              />
              
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="bg-floral p-3 rounded text-center">
                  <p className="text-xs text-royal-700">Auslastung</p>
                  <p className="text-xl font-bold text-apple">87%</p>
                </div>
                <div className="bg-floral p-3 rounded text-center">
                  <p className="text-xs text-royal-700">Ø Aufenthalt</p>
                  <p className="text-xl font-bold text-apple">4.2</p>
                </div>
                <div className="bg-floral p-3 rounded text-center">
                  <p className="text-xs text-royal-700">Upselling</p>
                  <p className="text-xl font-bold text-apple">+23%</p>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-floral-100 rounded-lg">
                <p className="text-sm text-royal-700">
                  <span className="font-bold text-apple">Tipp:</span> Exportiere Berichte als PDF oder CSV für deine Buchhaltung oder Teambesprechungen
                </p>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-apple-50 rounded-full -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-royal-50 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BerichteSection;
