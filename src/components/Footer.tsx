
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  
  // Helper function to get the correct URL prefix based on language
  const getUrlPrefix = () => {
    return `/${language}`;
  };
  
  // Helper function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="bg-gradient-to-br from-floral to-floral-400/20 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img 
              src="/lovable-uploads/a34ddbd3-e92e-4559-9779-95177352609e.png" 
              alt="Stellar Checkin Logo" 
              className="h-10 mb-4"
            />
            <p className="text-black mb-6 max-w-md">
              {t('footer.tagline')}
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row md:justify-end space-y-6 md:space-y-0 md:space-x-12">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-black">{t('footer.legal')}</h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    to={`${getUrlPrefix()}/impressum`} 
                    className="flex items-center text-black hover:text-apple transition-colors"
                    onClick={scrollToTop}
                  >
                    <ExternalLink className="h-5 w-5 text-apple mr-2" />
                    {t('footer.imprint')}
                  </Link>
                </li>
                <li>
                  <Link 
                    to={`${getUrlPrefix()}/datenschutz`} 
                    className="flex items-center text-black hover:text-apple transition-colors"
                    onClick={scrollToTop}
                  >
                    <ExternalLink className="h-5 w-5 text-apple mr-2" />
                    {t('footer.privacy')}
                  </Link>
                </li>
                <li>
                  <Link 
                    to={`${getUrlPrefix()}/agb`} 
                    className="flex items-center text-black hover:text-apple transition-colors"
                    onClick={scrollToTop}
                  >
                    <ExternalLink className="h-5 w-5 text-apple mr-2" />
                    {t('footer.terms')}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-royal-400/30 mt-10 pt-8 text-center">
          <p className="text-black">&copy; {new Date().getFullYear()} Stellar Tourism Innovations GmbH. {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
