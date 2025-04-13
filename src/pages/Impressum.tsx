
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
              Stellar Checkin GmbH<br />
              Musterstraße 123<br />
              10115 Berlin<br />
              Deutschland
            </p>
            
            <h2>Vertreten durch</h2>
            <p>
              Max Mustermann, Geschäftsführer
            </p>
            
            <h2>Kontakt</h2>
            <p>
              Telefon: +49 (0) 123 456789<br />
              E-Mail: info@stellar-checkin.de
            </p>
            
            <h2>Registereintrag</h2>
            <p>
              Eintragung im Handelsregister.<br />
              Registergericht: Amtsgericht Berlin-Charlottenburg<br />
              Registernummer: HRB 123456
            </p>
            
            <h2>Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE123456789
            </p>
            
            <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>
              Max Mustermann<br />
              Musterstraße 123<br />
              10115 Berlin<br />
              Deutschland
            </p>
            
            <h2>Alternative Streitbeilegung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/.<br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
