import { Button } from "@/components/ui/button";
import { CheckCircle, Circle, ExternalLink, Info, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
const PricingSection = () => {
  return <section id="preise" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-royal mb-4">
            Unsere Preise
          </h2>
          <div className="h-1 w-24 bg-apple mb-6 mx-auto rounded-full"></div>
          <p className="text-lg text-royal-700 max-w-2xl mx-auto">
            Finden Sie das passende Paket für Ihre Anforderungen und steigern Sie die Effizienz Ihrer Gästeverwaltung.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow bg-white">
            <h3 className="text-2xl font-bold text-center text-royal mb-6">Starter</h3>
            
            <div className="text-center mb-6">
              <div className="flex items-end justify-center">
                <span className="text-4xl font-bold text-royal mr-2">0</span>
                <div className="flex flex-col items-start">
                  <span className="text-xl text-royal">€/Monat</span>
                  <span className="text-sm text-royal-700">pro Objekt</span>
                </div>
              </div>
              
            </div>
            
            <div className="flex justify-center mb-8">
              <Link to="/kontakt">
                <Button variant="outline" className="border-2 border-royal text-royal hover:bg-royal-50">Jetzt registrieren</Button>
              </Link>
            </div>
            
            <div className="space-y-4">
              {["Online check-in", "Dokumentenscanner", "Polizeiliche Registrierung", "PMS-Integrationen", "Kautionen *", "Zahlungen *", "Personalisierte Erfahrungen", "Mietvereinbarungen", "Benutzerdefinierte E-Mails"].map((feature, index) => <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-royal mr-3 flex-shrink-0" />
                  <span className="text-royal-700">
                    {feature}
                    {feature.includes("*") && <HelpCircle className="w-4 h-4 text-royal-700 inline-block ml-1" />}
                  </span>
                </div>)}
            </div>
          </div>

          {/* Popular Plan */}
          <div className="border-2 border-royal rounded-xl p-8 shadow-md relative bg-white">
            <div className="absolute -top-4 left-0 right-0 flex justify-center">
              <div className="bg-royal text-white px-4 py-1 rounded-full text-sm font-medium">
                Am beliebtesten
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-center text-royal mb-6">Benutzerdefiniert</h3>
            
            <div className="text-center mb-6">
              <div className="flex items-end justify-center">
                <span className="text-4xl font-bold text-royal mr-2">8</span>
                <div className="flex flex-col items-start">
                  <span className="text-xl text-royal">€/Monat</span>
                  <span className="text-sm text-royal-700">pro Objekt</span>
                </div>
              </div>
              
            </div>
            
            <div className="flex justify-center mb-8">
              <Link to="/kontakt">
                <Button className="bg-royal hover:bg-royal-600 text-white">
                  Kontakt Vertrieb
                </Button>
              </Link>
            </div>
            
            <div className="mb-6">
              <p className="font-medium text-royal mb-2">Alles in Basic plus ausgewählte Add-ons:</p>
            </div>
            
            <div className="space-y-4">
              {["Identitätsverifizierungn", "Fernzugang", "Touristensteuer", "Branded Guest App"].map((feature, index) => <div key={index} className="flex items-center">
                  <Circle className="w-5 h-5 text-royal mr-3 flex-shrink-0" />
                  <span className="text-royal-700">{feature}</span>
                </div>)}
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow bg-white">
            <h3 className="text-2xl font-bold text-center text-royal mb-6">Unternehmen</h3>
            
            <div className="text-center mb-6 flex flex-col justify-center items-center h-20">
              <p className="text-xl font-medium text-royal">Bitte fragen Sie unser</p>
              <p className="text-xl font-medium text-royal">Vertriebsteam</p>
            </div>
            
            <div className="flex justify-center mb-8">
              <Link to="/kontakt">
                <Button variant="outline" className="border-2 border-royal text-royal hover:bg-royal-50">
                  Kontakt Vertrieb
                </Button>
              </Link>
            </div>
            
            <div className="space-y-4">
              {["API-Anbindung", "Mehr als 100 Objekte"].map((feature, index) => <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-royal mr-3 flex-shrink-0" />
                  <span className="text-royal-700">{feature}</span>
                </div>)}
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-sm text-royal-700 flex items-center justify-center">
            <Info className="w-4 h-4 mr-2" />
            Alle Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer
          </p>
        </div>
      </div>
    </section>;
};
export default PricingSection;