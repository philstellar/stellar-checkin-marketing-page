
import { Shield, Coins, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const VersicherungSection = () => {
  return (
    <section id="versicherung" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-stellar-700">
              Gästeversicherung statt Kaution
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Bieten Sie Ihren Gästen eine moderne Alternative zur klassischen Kaution. Mit unserer integrierten Versicherungslösung profitieren beide Seiten:
            </p>
            
            <div className="space-y-6 mt-8">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl mb-2">Schnellerer Check-in Prozess</h3>
                  <p className="text-gray-600">Keine Kautionsabwicklung mehr notwendig, Gäste können sofort ihre Unterkunft beziehen.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl mb-2">Zusätzliche Einnahmequelle</h3>
                  <p className="text-gray-600">Erhalten Sie Provisionen für jede abgeschlossene Versicherung - ein attraktiver Nebenverdienst.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl mb-2">Umfassender Schutz</h3>
                  <p className="text-gray-600">Bessere Absicherung als klassische Kautionen, da die Versicherung auch größere Schäden abdeckt.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-xl mb-2">Einfache Schadenabwicklung</h3>
                  <p className="text-gray-600">Im Schadensfall schnelle und unkomplizierte Bearbeitung durch den Versicherungspartner.</p>
                </div>
              </div>
            </div>
            
            <Button className="mt-10 bg-stellar-600 hover:bg-stellar-700 flex items-center gap-2 text-white">
              Mehr erfahren <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="lg:w-1/2 bg-white rounded-xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-14 w-14 rounded-full bg-stellar-100 flex items-center justify-center">
                <Shield className="h-8 w-8 text-stellar-600" />
              </div>
              <h3 className="text-2xl font-bold text-stellar-700">Vorteile für Ihre Gäste</h3>
            </div>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 bg-stellar-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-stellar-700 font-semibold">1</span>
                </div>
                <p>Keine hohe Kaution hinterlegen - mehr Budget für den Urlaub</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 bg-stellar-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-stellar-700 font-semibold">2</span>
                </div>
                <p>Geringe Versicherungsprämie statt hoher Kautionssumme</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 bg-stellar-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-stellar-700 font-semibold">3</span>
                </div>
                <p>Besserer Schutz bei unbeabsichtigten Schäden</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 bg-stellar-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-stellar-700 font-semibold">4</span>
                </div>
                <p>Kein Risiko, dass die Kaution zu Unrecht einbehalten wird</p>
              </li>
            </ul>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="h-14 w-14 rounded-full bg-stellar-100 flex items-center justify-center">
                <Coins className="h-8 w-8 text-stellar-600" />
              </div>
              <h3 className="text-2xl font-bold text-stellar-700">Vorteile für Sie</h3>
            </div>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 bg-stellar-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-stellar-700 font-semibold">1</span>
                </div>
                <p>Provision für jeden Versicherungsabschluss</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 bg-stellar-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-stellar-700 font-semibold">2</span>
                </div>
                <p>Keine aufwändige Kautionsverwaltung mehr nötig</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 bg-stellar-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-stellar-700 font-semibold">3</span>
                </div>
                <p>Höhere Absicherung als bei üblichen Kautionsbeträgen</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 bg-stellar-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-stellar-700 font-semibold">4</span>
                </div>
                <p>Professionelle Schadenabwicklung durch Versicherungspartner</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VersicherungSection;
