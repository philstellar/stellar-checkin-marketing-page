
import React, { memo, useCallback } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ExternalLink } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";
import { useLanguage } from "@/context/language";
import { Separator } from "@/components/ui/separator";
import OptimizedImage from "./OptimizedImage";
import { SECTION_IDS } from "@/constants/section-ids";

// Move this outside the component to avoid recreating it on every render
const aboutRoutes: Record<string, {
  aboutUs: string;
  successStories: string;
}> = {
  de: {
    aboutUs: "/de/ueber-uns",
    successStories: "/de/erfolgsbeispiele"
  },
  en: {
    aboutUs: "/en/about-us",
    successStories: "/en/success-stories"
  },
  it: {
    aboutUs: "/it/chi-siamo",
    successStories: "/it/storie-di-successo"
  },
  es: {
    aboutUs: "/es/sobre-nosotros",
    successStories: "/es/historias-de-exito"
  }
};

const Footer = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Memoize handlers to prevent recreating functions on re-renders
  const handleNavigation = useCallback((e: React.MouseEvent<HTMLAnchorElement>, hash?: string) => {
    e.preventDefault();

    // If we're not on the homepage and a hash is provided, navigate to the homepage with hash
    if (location.pathname !== `/${language}/` && hash) {
      navigate(`/${language}/`, { 
        state: { scrollTo: hash }
      });
    }
    // If we're already on the homepage and a hash is provided
    else if (hash) {
      // Navigate to the hash directly
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    } else {
      // For non-hash links, just navigate and scroll to top
      navigate(e.currentTarget.getAttribute('href') || '/');
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [navigate, location.pathname, language]);
  
  const handleLogoClick = useCallback(() => {
    // Navigate to the check-in page based on current language
    navigate(`/${language}/`);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [navigate, language]);
  
  // Memoize about routes lookup
  const about = aboutRoutes[language] || aboutRoutes.de;
  
  return <footer className="bg-white">
      <div className="container-custom bg-white">
        <Separator className="my-8 bg-[#8E9196]" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <button onClick={handleLogoClick} className="bg-transparent border-0 p-0 cursor-pointer">
              <OptimizedImage src="/lovable-uploads/ff2f3aee-64a7-4b39-8853-4cf47dab5b66.png" alt="Stellar Logo" className="h-6 mb-4 w-auto object-contain" width={150} height={24} loading="lazy" />
            </button>
            <p className="text-black mb-6 max-w-md">
              {t('footer.tagline')}
            </p>
          </div>
          
          {/* Solutions column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">{t('navigation.solutions')}</h3>
            <ul className="space-y-3">
              <li>
                <Link to={`/${language}/`} className="flex items-center text-black hover:text-apple transition-colors" onClick={e => handleNavigation(e, SECTION_IDS.features)}>
                  <ExternalLink className="h-5 w-5 text-apple mr-2" />
                  {t('navigation.features')}
                </Link>
              </li>
              <li>
                <Link to={`/${language === 'en' ? 'en/insurance' : language === 'it' ? 'it/assicurazione' : language === 'es' ? 'es/seguro' : 'de/versicherung'}`} className="flex items-center text-black hover:text-apple transition-colors" onClick={handleNavigation}>
                  <ExternalLink className="h-5 w-5 text-apple mr-2" />
                  {t('navigation.insurance')}
                </Link>
              </li>
              <li>
                <Link to={`/${language}/trust-badge`} className="flex items-center text-black hover:text-apple transition-colors" onClick={handleNavigation} data-testid="trust-badge-footer-link">
                  <ExternalLink className="h-5 w-5 text-apple mr-2" />
                  {t('navigation.trustBadge')}
                </Link>
              </li>
              <li>
                <Link to={`/${language}/`} className="flex items-center text-black hover:text-apple transition-colors" onClick={e => handleNavigation(e, SECTION_IDS.pricing)}>
                  <ExternalLink className="h-5 w-5 text-apple mr-2" />
                  {t('navigation.pricing')}
                </Link>
              </li>
            </ul>
          </div>

          {/* About column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black">{t('navigation.aboutStellar')}</h3>
            <ul className="space-y-3">
              <li>
                <Link to={about.aboutUs} className="flex items-center text-black hover:text-apple transition-colors" onClick={handleNavigation}>
                  <ExternalLink className="h-5 w-5 text-apple mr-2" />
                  {t('navigation.aboutUs')}
                </Link>
              </li>
              <li>
                <Link to={about.successStories} className="flex items-center text-black hover:text-apple transition-colors" onClick={handleNavigation}>
                  <ExternalLink className="h-5 w-5 text-apple mr-2" />
                  {t('navigation.successStories')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal column */}
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
              <li>
                <a href="/sitemap.html" className="flex items-center text-black hover:text-apple transition-colors" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-5 w-5 text-apple mr-2" />
                  {t('footer.sitemap')}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-royal-400/30 mt-10 pt-8 pb-8 text-center">
          <p className="text-black">&copy; {new Date().getFullYear()} Stellar Tourism Innovations GmbH. {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>;
};

// Memo the entire component to prevent unnecessary re-renders
export default memo(Footer);
