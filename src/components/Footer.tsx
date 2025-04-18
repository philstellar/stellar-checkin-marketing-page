import { memo } from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";
import { useLanguage } from "@/context/LanguageContext";

const Footer = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  
  const getUrlPrefix = () => {
    return `/${language}`;
  };
  
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="bg-gradient-to-br from-floral to-floral-400/20 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img 
              src="/lovable-uploads/stellar-checkin-logo.png" 
              alt="Stellar Logo" 
              className="h-10 mb-4 w-auto object-contain"
              width="120"
              height="40"
              loading="lazy"
            />
            <p className="text-black mb-6 max-w-md">
              {t('footer.tagline')}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">{t('navigation.aboutStellar')}</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to={`${getUrlPrefix()}/ueber-uns`} 
                  className="flex items-center text-black hover:text-apple transition-colors"
                  onClick={handleNavigation}
                  onMouseEnter={() => {
                    const link = document.createElement('link');
                    link.rel = 'prefetch';
                    link.href = `${getUrlPrefix()}/ueber-uns`;
                    link.as = 'document';
                    document.head.appendChild(link);
                  }}
                >
                  <ExternalLink className="h-5 w-5 text-apple mr-2" />
                  {t('navigation.aboutUs')}
                </Link>
              </li>
              <li>
                <Link 
                  to={`${getUrlPrefix()}/erfolgsgeschichten`} 
                  className="flex items-center text-black hover:text-apple transition-colors"
                  onClick={handleNavigation}
                >
                  <ExternalLink className="h-5 w-5 text-apple mr-2" />
                  {t('navigation.successStories')}
                </Link>
              </li>
              <li>
                <Link 
                  to={`${getUrlPrefix()}/faq`} 
                  className="flex items-center text-black hover:text-apple transition-colors"
                  onClick={handleNavigation}
                >
                  <ExternalLink className="h-5 w-5 text-apple mr-2" />
                  {t('navigation.faq')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">{t('footer.legal')}</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to={`${getUrlPrefix()}/impressum`} 
                  className="flex items-center text-black hover:text-apple transition-colors"
                  onClick={handleNavigation}
                >
                  <ExternalLink className="h-5 w-5 text-apple mr-2" />
                  {t('footer.imprint')}
                </Link>
              </li>
              <li>
                <Link 
                  to={`${getUrlPrefix()}/datenschutz`} 
                  className="flex items-center text-black hover:text-apple transition-colors"
                  onClick={handleNavigation}
                >
                  <ExternalLink className="h-5 w-5 text-apple mr-2" />
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link 
                  to={`${getUrlPrefix()}/agb`} 
                  className="flex items-center text-black hover:text-apple transition-colors"
                  onClick={handleNavigation}
                >
                  <ExternalLink className="h-5 w-5 text-apple mr-2" />
                  {t('footer.terms')}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-royal-400/30 mt-10 pt-8 text-center">
          <p className="text-black">&copy; {new Date().getFullYear()} Stellar Tourism Innovations GmbH. {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
