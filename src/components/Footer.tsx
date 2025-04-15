
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-floral to-floral-400/20 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img 
              src="/lovable-uploads/f750405f-7b3f-4c7a-93d6-1181e247ee5f.png" 
              alt="Stellar Checkin Logo" 
              className="h-10 mb-4"
            />
            <p className="text-black mb-6 max-w-md">
              Digitale Gästeanmeldung für Ferienwohnungen – <br />
              schnell, sicher, papierlos.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row md:justify-end space-y-6 md:space-y-0 md:space-x-12">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-black">Rechtliches</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/impressum" className="flex items-center text-black hover:text-apple transition-colors">
                    <ExternalLink className="h-5 w-5 text-apple mr-2" />
                    Impressum
                  </Link>
                </li>
                <li>
                  <Link to="/datenschutz" className="flex items-center text-black hover:text-apple transition-colors">
                    <ExternalLink className="h-5 w-5 text-apple mr-2" />
                    Datenschutzerklärung
                  </Link>
                </li>
                <li>
                  <Link to="/agb" className="flex items-center text-black hover:text-apple transition-colors">
                    <ExternalLink className="h-5 w-5 text-apple mr-2" />
                    AGB
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-royal-400/30 mt-10 pt-8 text-center">
          <p className="text-black">&copy; {new Date().getFullYear()} Stellar Tourism Innovations GmbH. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
