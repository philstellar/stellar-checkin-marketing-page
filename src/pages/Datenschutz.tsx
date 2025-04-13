
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FileText, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Datenschutz = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-32 pb-16">
        <div className="container-custom">
          <div className="mb-8">
            <Link to="/impressum" className="inline-flex items-center text-stellar-600 hover:text-stellar-700 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zurück zum Impressum
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold">Datenschutzerklärung</h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h2>1. Datenschutz auf einen Blick</h2>
            
            <h3>Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, 
              wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert 
              werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text 
              aufgeführten Datenschutzerklärung.
            </p>
            
            <h3>Datenerfassung auf unserer Website</h3>
            <p>
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
              können Sie dem Impressum dieser Website entnehmen.
            </p>
            
            <p>
              <strong>Wie erfassen wir Ihre Daten?</strong><br />
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, 
              die Sie in ein Kontaktformular eingeben.
            </p>
            
            <p>
              Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische 
              Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, 
              sobald Sie unsere Website betreten.
            </p>
            
            <p>
              <strong>Wofür nutzen wir Ihre Daten?</strong><br />
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können 
              zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>
            
            <p>
              <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br />
              Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten 
              personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten 
              zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum 
              angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>
            
            <h2>2. Allgemeine Hinweise und Pflichtinformationen</h2>
            
            <h3>Datenschutz</h3>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen 
              Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            
            <p>
              Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, 
              mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir 
              erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
            </p>
            
            <p>
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken 
              aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
            </p>
            
            <h3>Hinweis zur verantwortlichen Stelle</h3>
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            
            <p>
              Stellar Tourism Innovations GmbH<br />
              Immanuelkirchstraße 37<br />
              10405 Berlin<br />
              Deutschland
            </p>
            
            <p>
              Telefon: +49 304 1738487<br />
              E-Mail: info@stellar-trust.com
            </p>
            
            <p>
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die 
              Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
            </p>
            
            <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
            <p>
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits 
              erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit 
              der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
            </p>
            
            <h2>3. Datenerfassung auf unserer Website</h2>
            
            <h3>Cookies</h3>
            <p>
              Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und 
              enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. 
              Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.
            </p>
            
            <p>
              Die meisten der von uns verwendeten Cookies sind so genannte "Session-Cookies". Sie werden nach Ende Ihres Besuchs 
              automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert bis Sie diese löschen. Diese Cookies 
              ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.
            </p>
            
            <p>
              Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im 
              Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische 
              Löschen der Cookies beim Schließen des Browser aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität 
              dieser Website eingeschränkt sein.
            </p>
            
            <h3>Anfrage per E-Mail, Telefon oder Fax</h3>
            <p>
              Wenn Sie uns per E-Mail, Telefon oder Fax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden 
              personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. 
              Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            
            <p>
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der 
              Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen 
              übrigen Fällen beruht die Verarbeitung auf unseren berechtigten Interessen an der effektiven Bearbeitung der an uns 
              gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern 
              diese abgefragt wurde.
            </p>
            
            <p>
              Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, 
              Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener 
              Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
            </p>
            
            <div className="mt-12 flex items-center justify-start gap-4">
              <Link to="/impressum">
                <Button variant="outline" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Zum Impressum
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

export default Datenschutz;
