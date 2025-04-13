
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

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
            <p className="text-floral mb-6 max-w-md">
              Digitale Check-in Lösung für Ferienwohnungen - Optimieren Sie Ihre Gästeanmeldung mit unserem digitalen Check-in System.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-royal-400 flex items-center justify-center hover:bg-apple transition-colors">
                <svg className="w-5 h-5 text-floral" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-royal-400 flex items-center justify-center hover:bg-apple transition-colors">
                <svg className="w-5 h-5 text-floral" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-royal-400 flex items-center justify-center hover:bg-apple transition-colors">
                <svg className="w-5 h-5 text-floral" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10s-10 4.477-10 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54v-2.891h2.54v-2.203c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.891h-2.33v6.988c4.781-.75 8.437-4.887 8.437-9.878z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-floral">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-apple mr-2 mt-0.5" />
                <div className="text-floral-400">
                  <p>Stellar Tourism Innovations GmbH</p>
                  <p>Immanuelkirchstraße 37</p>
                  <p>10405 Berlin</p>
                </div>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-apple mr-2" />
                <a href="mailto:info@stellar-trust.com" className="text-floral-400 hover:text-apple transition-colors">
                  info@stellar-trust.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-apple mr-2" />
                <a href="tel:+4930417384870" className="text-floral-400 hover:text-apple transition-colors">
                  +49 304 1738487
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-floral">Rechtliches</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/impressum" className="flex items-center text-floral-400 hover:text-apple transition-colors">
                  <ExternalLink className="h-5 w-5 text-apple mr-2" />
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="flex items-center text-floral-400 hover:text-apple transition-colors">
                  <ExternalLink className="h-5 w-5 text-apple mr-2" />
                  Datenschutzerklärung
                </Link>
              </li>
              <li>
                <Link to="/agb" className="flex items-center text-floral-400 hover:text-apple transition-colors">
                  <ExternalLink className="h-5 w-5 text-apple mr-2" />
                  AGB
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-royal-400/30 mt-10 pt-8 text-center">
          <p className="text-floral-400">&copy; {new Date().getFullYear()} Stellar Tourism Innovations GmbH. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
