
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
          {/* Column 1: Logo and Tagline */}
          <div>
            <img 
              src="/lovable-uploads/51f6ef34-a9e3-44a7-b9d9-8765e43e287c.png" 
              alt="Stellar Logo" 
              className="h-6 mb-4 w-auto object-contain"
              width="72"
              height="24"
              loading="lazy"
            />
            <p className="text-black mb-6 max-w-md">
              {t('footer.tagline')}
            </p>
          </div>
          
          {/* Column 2: About Stellar */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">{t('navigation.aboutStellar')}</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to={`${getUrlPrefix()}/ueber-uns`} 
                  className="flex items-center text-black hover:text-apple transition-colors"
                  onClick={handleNavigation}
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
              {/* Removed Insurance Link from Footer */}
            </ul>
          </div>
          
          {/* Column 3: Legal - Spans 2 columns in production mode */}
          <div className="md:col-span-2">
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

