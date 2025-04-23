import { memo } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { ExternalLink } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";
import { useLanguage } from "@/context/LanguageContext";

const aboutRoutes: Record<string, {aboutUs: string, successStories: string, faq: string}> = {
  de: {
    aboutUs: "/de/ueber-uns",
    successStories: "/de/erfolgsgeschichten",
    faq: "/de/faq"
  },
  en: {
    aboutUs: "/en/about-us",
    successStories: "/en/success-stories",
    faq: "/en/faq"
  },
  it: {
    aboutUs: "/it/chi-siamo",
    successStories: "/it/storie-di-successo",
    faq: "/it/faq"
  },
  es: {
    aboutUs: "/es/sobre-nosotros",
    successStories: "/es/historias-de-exito",
    faq: "/es/faq"
  }
};

const Footer = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const navigate = useNavigate();

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const about = aboutRoutes[language] || aboutRoutes.de;

  return <footer className="bg-gradient-to-br from-floral to-floral-400/20 py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Logo and Tagline */}
          <div>
            <img src="/lovable-uploads/51f6ef34-a9e3-44a7-b9d9-8765e43e287c.png" alt="Stellar Logo" className="h-6 mb-4 w-auto object-contain" width="72" height="24" loading="lazy" />
            <p className="text-black mb-6 max-w-md">
              {t('footer.tagline')}
            </p>
          </div>
          
          {/* Column 2: About Stellar and Legal */}
          <div>
            <div className="flex gap-8 mb-6">
              <div className="py-0 px-0 mx-[2px]">
                <h3 className="text-lg font-semibold mb-4 text-black">{t('navigation.aboutStellar')}</h3>
                <ul className="space-y-3">
                  <li>
                    <Link 
                      to={about.aboutUs}
                      className="flex items-center text-black hover:text-apple transition-colors" 
                      onClick={handleNavigation}
                    >
                      <ExternalLink className="h-5 w-5 text-apple mr-2" />
                      {t('navigation.aboutUs')}
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to={about.successStories}
                      className="flex items-center text-black hover:text-apple transition-colors" 
                      onClick={handleNavigation}
                    >
                      <ExternalLink className="h-5 w-5 text-apple mr-2" />
                      {t('navigation.successStories')}
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4 text-black">{t('footer.legal')}</h3>
                <ul className="space-y-3">
                  <li>
                    <Link to={`/${language}/impressum`} className="flex items-center text-black hover:text-apple transition-colors" onClick={handleNavigation}>
                      <ExternalLink className="h-5 w-5 text-apple mr-2" />
                      {t('footer.imprint')}
                    </Link>
                  </li>
                  <li>
                    <Link to={`/${language}/datenschutz`} className="flex items-center text-black hover:text-apple transition-colors" onClick={handleNavigation}>
                      <ExternalLink className="h-5 w-5 text-apple mr-2" />
                      {t('footer.privacy')}
                    </Link>
                  </li>
                  <li>
                    <Link to={`/${language}/agb`} className="flex items-center text-black hover:text-apple transition-colors" onClick={handleNavigation}>
                      <ExternalLink className="h-5 w-5 text-apple mr-2" />
                      {t('footer.terms')}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Column 3: Placeholder or empty for layout */}
          <div>
            {/* Optional additional content */}
          </div>
        </div>
        
        <div className="border-t border-royal-400/30 mt-10 pt-8 text-center">
          <p className="text-black">&copy; {new Date().getFullYear()} Stellar Tourism Innovations GmbH. {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>;
};

export default memo(Footer);
