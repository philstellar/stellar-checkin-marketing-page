
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Datenschutz = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-32 pb-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Datenschutzerklärung</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2>1. Datenschutz auf einen Blick</h2>
            <h3>Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
            
            <h3>Datenerfassung auf dieser Website</h3>
            <p>
              <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>
            
            <h2>2. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3>Datenschutz</h3>
            <p>
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            
            <h3>Hinweis zur verantwortlichen Stelle</h3>
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br />
              <br />
              Stellar Checkin GmbH<br />
              Max Mustermann<br />
              Musterstraße 123<br />
              10115 Berlin<br />
              <br />
              Telefon: +49 (0) 123 456789<br />
              E-Mail: info@stellar-checkin.de
            </p>
            
            <h2>3. Datenerfassung auf dieser Website</h2>
            <h3>Cookies</h3>
            <p>
              Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
            </p>
            
            <h3>Server-Log-Dateien</h3>
            <p>
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul>
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            
            <h3>Kontaktformular</h3>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            
            <h2>4. Analyse-Tools und Werbung</h2>
            <h3>Google Analytics</h3>
            <p>
              Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Ireland Limited ("Google"), Gordon House, Barrow Street, Dublin 4, Irland.
            </p>
            
            <h2>5. Plugins und Tools</h2>
            <h3>Google Web Fonts</h3>
            <p>
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Google bereitgestellt werden. Die Google Fonts sind lokal installiert. Eine Verbindung zu Servern von Google findet dabei nicht statt.
            </p>
            
            <h2>6. Ihre Rechte</h2>
            <p>
              Sie haben das Recht:
            </p>
            <ul>
              <li>Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen</li>
              <li>Die Berichtigung oder Vervollständigung unrichtiger oder unvollständiger Daten zu verlangen</li>
              <li>Die Löschung Ihrer bei uns gespeicherten Daten zu verlangen</li>
              <li>Die Einschränkung der Datenverarbeitung zu verlangen</li>
              <li>Der Datenverarbeitung zu widersprechen</li>
              <li>Die Übertragbarkeit Ihrer Daten zu verlangen</li>
              <li>Bei der zuständigen Aufsichtsbehörde Beschwerde einzulegen</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;
