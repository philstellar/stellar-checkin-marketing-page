
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Impressum = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-32 pb-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Impressum</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2>Angaben gemäß § 5 TMG</h2>
            <p>
              Stellar Tourism Innovations GmbH<br />
              Immanuelkirchstraße 37<br />
              10405 Berlin
            </p>
            
            <h2>Handelsregister</h2>
            <p>
              Handelsregister: HRB 183707 B<br />
              Registergericht: Amtsgericht Charlottenburg
            </p>
            
            <h2>Vertreten durch</h2>
            <p>
              Philipp Reuter
            </p>
            
            <h2>Kontakt</h2>
            <p>
              E-Mail: philipp@stellar-trust.com
            </p>
            
            <h2>Umsatzsteuer-Identifikationsnummer</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE366220256
            </p>
            
            <h2>Verantwortliche Person für die Redaktion</h2>
            <p>
              Philipp Reuter
            </p>
            
            <h2>Versicherungsvermittlung</h2>
            <p>
              Eintragung im Vermittlerregister bei der IHK zu Berlin unter der Nummer D-6JBK-A27XW-21<br />
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
              Sehr geehrte Interessenten, vom Gesetzgeber sind wir gehalten, Ihnen eine Reihe Informationen über uns als Versicherungsvermittler zu geben. Damit diese Informationen für Sie von Nutzen sind, haben wir sie für Sie zusammengestellt und erläutert.
            </p>
            
            <p>
              Erste Informationen als pdfs zum Download – Bitte beachten Sie den verlinkten Ordner
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
              Eingetragen ist die Stellar Tourism Innovations GmbH im Versicherungsvermittlerregister unter der Nummer D-6JBK-A27XW-21. Das können Sie gerne überprüfen, und zwar im Internet unter der Adresse:
            </p>
            
            <p>
              <a href="https://www.vermittlerregister.info" target="_blank" rel="noopener noreferrer" className="text-stellar-600 hover:underline">www.vermittlerregister.info</a>
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
            
            <h2>Beschwerden</h2>
            <p>
              Bei Beschwerden über unsere Tätigkeit wenden Sie sich gerne an unsere Beschwerdestelle:<br />
              E-Mail: complaint@stellar-trust.com
            </p>
            
            <p>
              Philipp Reuter, Ralf Kramer, Anschrift wie oben
            </p>
            
            <h2>Haftungshinweis</h2>
            <p>
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich. Dass solche Links auf weitere Seiten auch zu kommerziellen Anbietern führen können, liegt in der Natur des WWW. Wir übernehmen daher keine Haftung für die Inhalte solcher Links.
            </p>
            
            <h2>EU-Streitbeilegung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform für die Online-Streitbeilegung (OS) zur Verfügung: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-stellar-600 hover:underline">https://ec.europa.eu/consumers/odr/</a>.<br />
              Unsere E-Mail-Adresse findest du oben im Impressum der Website.
            </p>
            
            <h2>Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle</h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
            
            <h2>Zentrale Kontaktstelle nach dem Gesetz über digitale Dienste – DSA (Verordnung (EU) 2022/265)</h2>
            <p>
              Du kannst unsere zentrale Kontaktstelle für Nutzer und Behörden gemäß Art. 11, 12 DSA wie folgt:<br />
              E-Mail: philipp@stellar-trust.com
            </p>
            
            <p>
              LAUDO ist als eine der Top-Designagenturen für die Entwicklung einzigartiger Markenidentitäten bekannt. Außerdem übernimmt LAUDO als WordPress-Agentur die komplexen Aufgaben der Webseitengestaltung.
            </p>
            
            <p>
              LAUDO Designagentur GmbH<br />
              <a href="https://www.lau.do" target="_blank" rel="noopener noreferrer" className="text-stellar-600 hover:underline">www.lau.do</a>
            </p>
            
            <div className="mt-12 flex items-center justify-start gap-4">
              <Link to="/datenschutz">
                <Button variant="outline" className="flex items-center gap-2">
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
