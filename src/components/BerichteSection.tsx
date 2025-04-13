
import { BarChart2, ChartPie, LineChart, ExternalLink, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const BerichteSection = () => {
  return (
    <section id="berichte" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Berichte und Analysen</h2>
            <p className="text-lg text-gray-700 mb-8">
              Gewinnen Sie wertvolle Einblicke in Ihre Geschäftsdaten mit unseren umfassenden Analyse-Tools 
              und personalisierbaren Dashboards.
            </p>
            
            <div className="space-y-6">
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
                  Dashboard Demo <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
          
          <div>
            <div className="rounded-lg overflow-hidden stellar-shadow">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170"
                alt="Berichte und Analysen Dashboard" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BerichteSection;
