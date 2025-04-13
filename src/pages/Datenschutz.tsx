
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FileText, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Datenschutz = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-32 pb-16 bg-gray-50">
        <div className="container-custom">
          <div className="mb-8">
            <Link to="/impressum" className="inline-flex items-center text-stellar-600 hover:text-stellar-700 mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zurück zum Impressum
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-stellar-700 mb-10">Datenschutzerklärung</h1>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-6 text-stellar-600">1. Datenschutz auf einen Blick</h2>
              
              <h3 className="text-xl font-bold mb-3 text-stellar-600">Allgemeine Hinweise</h3>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit deinen personenbezogenen Daten passiert, 
                wenn du unsere Website besuchst. Personenbezogene Daten sind alle Daten, mit denen du persönlich identifiziert 
                werden kannst. Ausführliche Informationen zum Thema Datenschutz entnehmen du unserer unter diesem Text 
                aufgeführten Datenschutzerklärung.
              </p>
              
              <h3 className="text-xl font-bold mb-3 text-stellar-600">Datenerfassung auf unserer Website</h3>
              <p className="mb-3 text-gray-700 leading-relaxed">
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                können du dem Impressum dieser Website entnehmen.
              </p>
              
              <p className="mb-3 text-gray-700 leading-relaxed">
                <strong>Wie erfassen wir deine Daten?</strong><br />
                Deine Daten werden zum einen dadurch erhoben, dass du uns diese mitteilst. Hierbei kann es sich z.B. um Daten handeln, 
                die du in ein Kontaktformular eingibst.
              </p>
              
              <p className="mb-3 text-gray-700 leading-relaxed">
                Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische 
                Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, 
                sobald du unsere Website betrittst.
              </p>
              
              <p className="mb-3 text-gray-700 leading-relaxed">
                <strong>Wofür nutzen wir deine Daten?</strong><br />
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können 
                zur Analyse deines Nutzerverhaltens verwendet werden.
              </p>
              
              <p className="mb-6 text-gray-700 leading-relaxed">
                <strong>Welche Rechte hast du bezüglich deiner Daten?</strong><br />
                Du hast jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck deiner gespeicherten 
                personenbezogenen Daten zu erhalten. Du hast außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten 
                zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz kannst du dich jederzeit unter der im Impressum 
                angegebenen Adresse an uns wenden. Des Weiteren steht dir ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-6 text-stellar-600">2. Allgemeine Hinweise und Pflichtinformationen</h2>
              
              <h3 className="text-xl font-bold mb-3 text-stellar-600">Datenschutz</h3>
              <p className="mb-3 text-gray-700 leading-relaxed">
                Die Betreiber dieser Seiten nehmen den Schutz deiner persönlichen Daten sehr ernst. Wir behandeln deine personenbezogenen 
                Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
              
              <p className="mb-3 text-gray-700 leading-relaxed">
                Wenn du diese Website benutzt, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, 
                mit denen du persönlich identifiziert werden kannst. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir 
                erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
              </p>
              
              <p className="mb-6 text-gray-700 leading-relaxed">
                Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken 
                aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
              </p>
              
              <h3 className="text-xl font-bold mb-3 text-stellar-600">Hinweis zur verantwortlichen Stelle</h3>
              <p className="mb-3 text-gray-700 leading-relaxed">
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              
              <p className="mb-6 text-gray-700 leading-relaxed">
                Stellar Tourism Innovations GmbH<br />
                Immanuelkirchstraße 37<br />
                10405 Berlin<br />
                Deutschland<br /><br />
                Telefon: +49 304 1738487<br />
                E-Mail: <a href="mailto:info@stellar-trust.com" className="text-primary hover:underline">info@stellar-trust.com</a>
              </p>
              
              <p className="mb-6 text-gray-700 leading-relaxed">
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die 
                Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
              </p>
              
              <h3 className="text-xl font-bold mb-3 text-stellar-600">Widerruf deiner Einwilligung zur Datenverarbeitung</h3>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Viele Datenverarbeitungsvorgänge sind nur mit deiner ausdrücklichen Einwilligung möglich. Du kannst eine bereits 
                erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit 
                der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-6 text-stellar-600">3. Datenerfassung auf unserer Website</h2>
              
              <h3 className="text-xl font-bold mb-3 text-stellar-600">Cookies</h3>
              <p className="mb-3 text-gray-700 leading-relaxed">
                Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf deinem Rechner keinen Schaden an und 
                enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. 
                Cookies sind kleine Textdateien, die auf deinem Rechner abgelegt werden und die dein Browser speichert.
              </p>
              
              <p className="mb-3 text-gray-700 leading-relaxed">
                Die meisten der von uns verwendeten Cookies sind so genannte "Session-Cookies". Sie werden nach Ende deines Besuchs 
                automatisch gelöscht. Andere Cookies bleiben auf deinem Endgerät gespeichert bis du diese löschst. Diese Cookies 
                ermöglichen es uns, deinen Browser beim nächsten Besuch wiederzuerkennen.
              </p>
              
              <p className="mb-6 text-gray-700 leading-relaxed">
                Du kannst deinen Browser so einstellen, dass du über das Setzen von Cookies informiert wirst und Cookies nur im 
                Einzelfall erlaubst, die Annahme von Cookies für bestimmte Fälle oder generell ausschließt sowie das automatische 
                Löschen der Cookies beim Schließen des Browser aktivierst. Bei der Deaktivierung von Cookies kann die Funktionalität 
                dieser Website eingeschränkt sein.
              </p>
              
              <h3 className="text-xl font-bold mb-3 text-stellar-600">Anfrage per E-Mail, Telefon oder Fax</h3>
              <p className="mb-3 text-gray-700 leading-relaxed">
                Wenn du uns per E-Mail, Telefon oder Fax kontaktierst, wird deine Anfrage inklusive aller daraus hervorgehenden 
                personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung deines Anliegens bei uns gespeichert und verarbeitet. 
                Diese Daten geben wir nicht ohne deine Einwilligung weiter.
              </p>
              
              <p className="mb-3 text-gray-700 leading-relaxed">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern deine Anfrage mit der 
                Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen 
                übrigen Fällen beruht die Verarbeitung auf unseren berechtigten Interessen an der effektiven Bearbeitung der an uns 
                gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf deiner Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern 
                diese abgefragt wurde.
              </p>
              
              <p className="mb-6 text-gray-700 leading-relaxed">
                Die von dir an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis du uns zur Löschung aufforderst, 
                deine Einwilligung zur Speicherung widerrufst oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener 
                Bearbeitung deines Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
              </p>
            </section>
            
            <div className="mt-12">
              <Link to="/impressum">
                <Button variant="outline" className="flex items-center gap-2 border-primary text-primary hover:bg-primary/5">
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
