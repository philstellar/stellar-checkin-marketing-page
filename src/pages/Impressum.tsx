import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Impressum = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-32 pb-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-10 text-stellar-700">Impressum</h1>
            
            <div className="space-y-8">
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-stellar-600">Angaben gemäß § 5 TMG</h2>
                <p className="text-gray-700 leading-relaxed">
                  Stellar Tourism Innovations GmbH<br />
                  Immanuelkirchstraße 37<br />
                  10405 Berlin
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-stellar-600">Handelsregister</h2>
                <p className="text-gray-700 leading-relaxed">
                  Handelsregister: HRB 183707 B<br />
                  Registergericht: Amtsgericht Charlottenburg
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-stellar-600">Vertreten durch</h2>
                <p className="text-gray-700 leading-relaxed">Philipp Reuter</p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-stellar-600">Kontakt</h2>
                <p className="text-gray-700 leading-relaxed">
                  E-Mail: <a href="mailto:hello@stellar-trust.com" className="text-primary hover:underline">hello@stellar-trust.com</a>
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-stellar-600">Umsatzsteuer-Identifikationsnummer</h2>
                <p className="text-gray-700 leading-relaxed">
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                  DE366220256
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-stellar-600">Verantwortliche Person für die Redaktion</h2>
                <p className="text-gray-700 leading-relaxed">Philipp Reuter</p>
              </section>
              
              <Accordion type="single" collapsible className="w-full mb-8">
                <AccordionItem value="versicherungsvermittlung" className="border-none">
                  <AccordionTrigger className="text-2xl font-bold text-stellar-600 py-2 hover:no-underline hover:text-primary px-0">
                    Versicherungsvermittlung
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                      <p>
                        Eintragung im Vermittlerregister bei der IHK zu Berlin unter der Nummer D-6JBK-A27XW-21
                        als Versicherungsvertreter gemäß § 34 D Abs. 1 in Verbindung mit § 59 Abs. 1,2 VVG
                      </p>
                      
                      <p>
                        Gesetzlich vorgeschriebene Vermögensschadenhaftpflicht bei ERGO Versicherung AG SV 75594456-341
                      </p>
                      
                      <p>
                        – § 34d Gewerbeordnung<br />
                        – §§ 59-67 VVG<br />
                        – VersVermV<br />
                        – VAG
                      </p>
                      
                      <p>
                        Die berufsrechtlichen Regelungen können über die vom Bundesministerium der Justiz und von der juris GmbH betriebenen Homepage Gesetze im Internet eingesehen und abgerufen werden.
                      </p>
                      
                      <p>
                        Sehr geehrte Interessenten, vom Gesetzgeber sind wir gehalten, dir eine Reihe Informationen über uns als Versicherungsvermittler zu geben. Damit diese Informationen für dich von Nutzen sind, haben wir sie für dich zusammengestellt und erläutert.
                      </p>
                      
                      <p>
                        Erste Informationen als pdfs zum Download – Bitte beachte den verlinkten Ordner
                      </p>
                      
                      <p>
                        Wir sind als Versicherungsvertreter mit einer Erlaubnis durch die Industrie- und Handelskammer Berlin nach § 34d Absatz 1 der Gewerbeordnung tätig. Diese Erlaubnis wurde in Deutschland ausgestellt.
                      </p>
                      
                      <p>
                        Als Versicherungsvertreter bieten wir Produkte in Vollmacht von Versicherungsunternehmen an. Die Vergütung in Form einer Provision zahlt das Versicherungsunternehmen. Diese Provision ist Bestandteil der Versicherungsprämie. Hiervon abweichendes muss ausdrücklich zwischen uns und dem Auftraggeber vereinbart werden. Eine Vergütung in Form anderer Zuwendungen erhält unser Unternehmen nicht.
                      </p>
                      
                      <p>
                        Unsere Versicherungsprodukte werden über Versicherungsmakler und Versicherungs-Mehrfachvermittler angeboten. Die Beratung und Bedarfserfassung zu unseren Produkten erfolgt von unseren Vertriebspartnern.
                      </p>
                      
                      <p>
                        Eingetragen ist die Stellar Tourism Innovations GmbH im Versicherungsvermittlerregister unter der Nummer D-6JBK-A27XW-21. Das kannst du gerne überprüfen, und zwar im Internet unter der Adresse:
                      </p>
                      
                      <p>
                        <a href="https://www.vermittlerregister.info" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.vermittlerregister.info</a>
                      </p>
                      
                      <p>
                        oder beim Versicherungsvermittlerregister beim
                      </p>
                      
                      <p>
                        Deutscher Industrie- und Handelskammertag (DIHK) e.V.<br />
                        Breite Str. 29, 10178 Berlin<br />
                        Tel. 030 203080, Fax 030 203081000
                      </p>
                      
                      <p>
                        Nein. Weder sind wir an einem Versicherungsunternehmen beteiligt noch ist ein Versicherungsunternehmen an unserer Gesellschaft beteiligt.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-stellar-600">Beschwerden</h2>
                <p className="text-gray-700 leading-relaxed">
                  Bei Beschwerden über unsere Tätigkeit wende dich gerne an unsere Beschwerdestelle:<br />
                  E-Mail: <a href="mailto:complaint@stellar-trust.com" className="text-primary hover:underline">complaint@stellar-trust.com</a>
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Philipp Reuter, Ralf Kramer, Anschrift wie oben
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-stellar-600">Haftungshinweis</h2>
                <p className="text-gray-700 leading-relaxed">
                  Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich. Dass solche Links auf weitere Seiten auch zu kommerziellen Anbietern führen können, liegt in der Natur des WWW. Wir übernehmen daher keine Haftung für die Inhalte solcher Links.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-stellar-600">EU-Streitbeilegung</h2>
                <p className="text-gray-700 leading-relaxed">
                  Die Europäische Kommission stellt eine Plattform für die Online-Streitbeilegung (OS) zur Verfügung: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://ec.europa.eu/consumers/odr/</a>.<br />
                  Unsere E-Mail-Adresse findest du oben im Impressum der Website.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-stellar-600">Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle</h2>
                <p className="text-gray-700 leading-relaxed">
                  Wir sind nicht bereit oder verpflichtet, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </section>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-stellar-600">Zentrale Kontaktstelle nach dem Gesetz über digitale Dienste – DSA (Verordnung (EU) 2022/265)</h2>
                <p className="text-gray-700 leading-relaxed">
                  Du kannst unsere zentrale Kontaktstelle für Nutzer und Behörden gemäß Art. 11, 12 DSA wie folgt:<br />
                  E-Mail: <a href="mailto:hello@stellar-trust.com" className="text-primary hover:underline">hello@stellar-trust.com</a>
                </p>
              </section>
            </div>
            
            <div className="mt-12">
              <Link to="/datenschutz">
                <Button variant="outline" className="flex items-center gap-2 border-primary text-primary hover:bg-primary/5">
                  <FileText className="h-4 w-4" />
                  Datenschutzerklärung
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
