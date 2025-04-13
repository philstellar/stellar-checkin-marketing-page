
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Agb = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-32 pb-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Allgemeine Geschäftsbedingungen</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2>1. Geltungsbereich</h2>
            <p>
              Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") gelten für alle Verträge zwischen der Stellar Checkin GmbH, Musterstraße 123, 10115 Berlin (nachfolgend "Anbieter") und ihren Kunden (nachfolgend "Nutzer") über die Nutzung der Software "Stellar Checkin" (nachfolgend "Software").
            </p>
            
            <h2>2. Vertragsgegenstand</h2>
            <p>
              Gegenstand des Vertrages ist die Bereitstellung der Software zur Nutzung über das Internet (Software as a Service) sowie die Speicherung von Daten des Nutzers (Hosting).
            </p>
            
            <h2>3. Leistungen des Anbieters</h2>
            <p>
              Der Anbieter stellt dem Nutzer die Software in der jeweils aktuellen Version am Routerausgang des Rechenzentrums, in dem der Server mit der Software steht (Übergabepunkt), zur Nutzung bereit. Die Software, die für die Nutzung erforderliche Rechenleistung und der erforderliche Speicher- und Datenverarbeitungsplatz werden vom Anbieter bereitgestellt.
            </p>
            
            <h2>4. Nutzungsrechte</h2>
            <p>
              Der Anbieter räumt dem Nutzer das nicht ausschließliche und nicht übertragbare Recht ein, die Software während der Vertragslaufzeit bestimmungsgemäß zu nutzen.
            </p>
            
            <h2>5. Pflichten des Nutzers</h2>
            <p>
              Der Nutzer wird die Software nur für seine eigenen geschäftlichen Zwecke nutzen und die Nutzung durch Dritte unterlassen. Der Nutzer ist für die Eingabe und Pflege seiner zur Nutzung der Software erforderlichen Daten und Informationen verantwortlich.
            </p>
            
            <h2>6. Vergütung und Zahlungsbedingungen</h2>
            <p>
              Die Höhe der vom Nutzer zu zahlenden Vergütung richtet sich nach dem gewählten Tarif und ergibt sich aus der jeweils aktuellen Preisliste des Anbieters. Alle Preise verstehen sich zuzüglich der jeweils geltenden gesetzlichen Umsatzsteuer.
            </p>
            
            <h2>7. Datenschutz</h2>
            <p>
              Der Anbieter beachtet die gesetzlichen Vorschriften zum Datenschutz. Der Anbieter erhebt, verarbeitet und nutzt personenbezogene Daten des Nutzers nur, soweit dies für die Durchführung des Vertrags erforderlich ist.
            </p>
            
            <h2>8. Haftung</h2>
            <p>
              Der Anbieter haftet für Schäden, die durch die Verletzung einer mit Vertragsschluss übernommenen Garantie entstanden sind, für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit, die auf einer vorsätzlichen oder fahrlässigen Pflichtverletzung des Anbieters oder eines gesetzlichen Vertreters oder Erfüllungsgehilfen des Anbieters beruhen.
            </p>
            
            <h2>9. Vertragslaufzeit und Kündigung</h2>
            <p>
              Der Vertrag wird für die vereinbarte Mindestlaufzeit geschlossen. Er verlängert sich jeweils um die vereinbarte Verlängerungszeit, wenn er nicht mit einer Frist von 30 Tagen zum Ende der jeweiligen Laufzeit gekündigt wird.
            </p>
            
            <h2>10. Schlussbestimmungen</h2>
            <p>
              Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Erfüllungsort ist der Sitz des Anbieters. Gerichtsstand für alle Streitigkeiten aus und im Zusammenhang mit diesem Vertrag ist der Sitz des Anbieters, sofern der Nutzer Kaufmann, eine juristische Person des öffentlichen Rechts oder ein öffentlich-rechtliches Sondervermögen ist.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Agb;
