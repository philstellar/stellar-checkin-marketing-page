
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-royal text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <img 
              src="/lovable-uploads/69cbcbf8-03a5-4c39-a023-9df42c0b60e3.png" 
              alt="Stellar Checkin Logo" 
              className="h-10 mb-4"
            />
            <p className="text-white mb-4 max-w-md">
              Digitale Check-in Lösung für Ferienwohnungen - Optimieren Sie Ihre Gästeanmeldung mit unserem digitalen Check-in System.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">Kontakt</h3>
            <ul className="space-y-2 text-white">
              <li>Stellar Tourism Innovations GmbH</li>
              <li>Immanuelkirchstraße 37</li>
              <li>10405 Berlin</li>
              <li>info@stellar-trust.com</li>
              <li>+49 304 1738487</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3 text-white">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/impressum" className="text-white hover:opacity-75 transition-opacity">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="text-white hover:opacity-75 transition-opacity">
                  Datenschutzerklärung
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white">
          <p>&copy; {new Date().getFullYear()} Stellar Tourism Innovations GmbH. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
