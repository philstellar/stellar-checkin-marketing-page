
import { Shield, Check, ExternalLink, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const VersicherungSection = () => {
  return (
    <section id="versicherung" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Versicherung für Ferienwohnungen</h2>
            <p className="text-lg text-gray-700 mb-8">
              Wir arbeiten mit <span className="font-semibold">Hiscox</span> zusammen, einem der weltweit führenden Spezialversicherer,
              um umfassenden Schutz für Ihre Ferienwohnung zu gewährleisten.
            </p>
            
            <div className="space-y-6">
              {[
                {
                  icon: <Shield className="h-6 w-6 text-stellar-600" />,
                  title: "Umfassender Schutz",
                  description: "Absicherung gegen Schäden durch Gäste, Einbruch, Vandalismus und mehr."
                },
                {
                  icon: <Check className="h-6 w-6 text-stellar-600" />,
                  title: "Einfache Abwicklung",
                  description: "Schnelle und unkomplizierte Schadensabwicklung direkt über unsere Plattform."
                },
                {
                  icon: <AlertTriangle className="h-6 w-6 text-stellar-600" />,
                  title: "Günstige Konditionen",
                  description: "Exklusive Versicherungskonditionen für Nutzer unserer Plattform."
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
            
            <div className="mt-8 flex items-center gap-6">
              <a href="/kontakt" target="_blank" rel="noopener noreferrer">
                <Button className="bg-stellar-600 hover:bg-stellar-700">
                  Mehr erfahren <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <div className="flex items-center">
                <span className="text-gray-700 mr-3">Partner:</span>
                <img 
                  src="/lovable-uploads/544730f1-d669-4595-af3c-737bdc61d29a.png" 
                  alt="Hiscox Logo" 
                  className="h-10"
                />
              </div>
            </div>
          </div>
          
          <div className="order-first md:order-last">
            <div className="rounded-lg overflow-hidden stellar-shadow">
              <img 
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1170"
                alt="Versicherung für Ferienwohnungen" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VersicherungSection;
