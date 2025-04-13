
import { BarChart2, ChartPie, LineChart, ExternalLink, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const BerichteSection = () => {
  return (
    <section id="berichte" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f2661] mb-4">
              Berichte und Analysen
            </h2>
            <div className="h-1 w-24 bg-[#0f2661] mb-6 rounded-full"></div>
            <p className="text-lg text-gray-700 mb-8">
              Gewinnen Sie wertvolle Einblicke in Ihre Geschäftsdaten mit unseren umfassenden Analyse-Tools 
              und personalisierbaren Dashboards.
            </p>
            
            <div className="space-y-8">
              {[
                {
                  icon: <BarChart2 className="h-6 w-6" />,
                  title: "Detaillierte Auswertungen",
                  description: "Erhalten Sie tiefe Einblicke in Buchungszahlen, Gästeherkunft, Aufenthaltsdauer und mehr."
                },
                {
                  icon: <ChartPie className="h-6 w-6" />,
                  title: "Personalisierbare Dashboards",
                  description: "Erstellen Sie maßgeschneiderte Dashboards, die genau die Kennzahlen anzeigen, die für Sie wichtig sind."
                },
                {
                  icon: <LineChart className="h-6 w-6" />,
                  title: "Trend-Analysen",
                  description: "Erkennen Sie frühzeitig Trends und saisonale Muster, um Ihre Planung zu optimieren."
                },
                {
                  icon: <Layers className="h-6 w-6" />,
                  title: "Exportfunktionen",
                  description: "Exportieren Sie Berichte in verschiedenen Formaten oder teilen Sie sie direkt mit Ihrem Team."
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-5">
                  <div className="flex-shrink-0 h-14 w-14 rounded-xl bg-[#eef1f8] flex items-center justify-center text-[#0f2661]">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-base text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <a href="/kontakt" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[#0f2661] hover:bg-[#0a1d4d] text-white px-6 py-2.5">
                  Dashboard Demo <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
          
          <div>
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="/lovable-uploads/baf0ce8b-0f9c-491e-bcda-60655db2dd38.png"
                alt="Stellar Check-in Dashboard" 
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BerichteSection;
