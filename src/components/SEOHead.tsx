
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

interface SEOHeadProps {
  title?: string;
  description?: string;
  imageUrl?: string;
}

/**
 * SEOHead component to dynamically update document head meta tags
 * for better SEO in single page applications
 */
export function SEOHead({ 
  title = "Stellar Checkin - Digital Check-in Solution for Vacation Rentals",
  description = "Automate your vacation rental check-in process - Guest registration, tourist tax, additional services and more.",
  imageUrl = "/lovable-uploads/88f97631-50cd-493d-b68c-92e73cb443c7.png"
}: SEOHeadProps) {
  const location = useLocation();
  const { language } = useLanguage();
  const domain = 'https://stellar-checkin.com';
  const currentUrl = `${domain}${location.pathname}`;
  
  // Adjust title based on language
  const localizedTitles = {
    'de': "Stellar Checkin - Digitale Check-in Lösung für Ferienwohnungen",
    'en': "Stellar Checkin - Digital Check-in Solution for Vacation Rentals",
    'it': "Stellar Checkin - Soluzione Digitale per il Check-in degli Alloggi Vacanze",
    'es': "Stellar Checkin - Solución Digital para el Check-in de Alojamientos Vacacionales"
  };

  // Adjust description based on language
  const localizedDescriptions = {
    'de': "Automatisiere den gesamten Check-in-Prozess deiner Ferienimmobilie - Gästemeldung, Kurtaxe, Zusatzleistungen und mehr.",
    'en': "Automate your vacation rental check-in process - Guest registration, tourist tax, additional services and more.",
    'it': "Automatizza l'intero processo di check-in del tuo alloggio vacanze - Registrazione ospiti, tassa di soggiorno, servizi aggiuntivi e altro.",
    'es': "Automatice todo el proceso de check-in de su alojamiento vacacional - Registro de huéspedes, impuesto turístico, servicios adicionales y más."
  };

  const pageTitle = title || localizedTitles[language as keyof typeof localizedTitles] || localizedTitles.en;
  const pageDescription = description || localizedDescriptions[language as keyof typeof localizedDescriptions] || localizedDescriptions.en;

  useEffect(() => {
    // Update the document title
    document.title = pageTitle;
    
    // Update meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', pageDescription);
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    
    if (ogTitle) ogTitle.setAttribute('content', pageTitle);
    if (ogDescription) ogDescription.setAttribute('content', pageDescription);
    if (ogUrl) ogUrl.setAttribute('content', currentUrl);
    
    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    
    if (twitterTitle) twitterTitle.setAttribute('content', pageTitle);
    if (twitterDescription) twitterDescription.setAttribute('content', pageDescription);
    
    // Update canonical link
    const canonicalLink = document.getElementById('canonical-link');
    if (canonicalLink) {
      (canonicalLink as HTMLLinkElement).href = currentUrl;
    }
    
    // Update language alternates
    updateLanguageAlternates(location.pathname, language);
    
  }, [pageTitle, pageDescription, currentUrl, location.pathname, language]);
  
  return null; // This component doesn't render anything visible
}

/**
 * Update the language alternate links in the document head
 */
function updateLanguageAlternates(pathname: string, currentLanguage: string) {
  // Get the current page path without language prefix
  const pathParts = pathname.split('/').filter(Boolean);
  const currentLangPrefix = pathParts[0];
  const isLanguagePrefix = ['de', 'en', 'it', 'es'].includes(currentLangPrefix);
  const pagePath = isLanguagePrefix ? pathParts.slice(1).join('/') : pathParts.join('/');
  
  // Path mappings for special pages with different translations
  const specialPathMappings: Record<string, Record<string, string>> = {
    'ueber-uns': { de: 'ueber-uns', en: 'about-us', it: 'chi-siamo', es: 'sobre-nosotros' },
    'about-us': { de: 'ueber-uns', en: 'about-us', it: 'chi-siamo', es: 'sobre-nosotros' },
    'chi-siamo': { de: 'ueber-uns', en: 'about-us', it: 'chi-siamo', es: 'sobre-nosotros' },
    'sobre-nosotros': { de: 'ueber-uns', en: 'about-us', it: 'chi-siamo', es: 'sobre-nosotros' },
    
    'erfolgsbeispiele': { de: 'erfolgsbeispiele', en: 'success-stories', it: 'storie-di-successo', es: 'historias-de-exito' },
    'success-stories': { de: 'erfolgsbeispiele', en: 'success-stories', it: 'storie-di-successo', es: 'historias-de-exito' },
    'storie-di-successo': { de: 'erfolgsbeispiele', en: 'success-stories', it: 'storie-di-successo', es: 'historias-de-exito' },
    'historias-de-exito': { de: 'erfolgsbeispiele', en: 'success-stories', it: 'storie-di-successo', es: 'historias-de-exito' },
    
    'versicherung': { de: 'versicherung', en: 'insurance', it: 'assicurazione', es: 'seguro' },
    'insurance': { de: 'versicherung', en: 'insurance', it: 'assicurazione', es: 'seguro' },
    'assicurazione': { de: 'versicherung', en: 'insurance', it: 'assicurazione', es: 'seguro' },
    'seguro': { de: 'versicherung', en: 'insurance', it: 'assicurazione', es: 'seguro' }
  };
  
  // Remove existing alternates
  document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => {
    el.remove();
  });
  
  // Base domain
  const domain = 'https://stellar-checkin.com';
  
  // Add new alternates for each language
  const languages = ['de', 'en', 'it', 'es'];
  const head = document.head;
  
  // If we're at the root, just add language alternates for each language
  if (!pagePath) {
    languages.forEach(lang => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = lang;
      link.href = `${domain}/${lang}`;
      head.appendChild(link);
    });
    
    // Also add x-default link
    const xDefaultLink = document.createElement('link');
    xDefaultLink.rel = 'alternate';
    xDefaultLink.hreflang = 'x-default';
    xDefaultLink.href = domain;
    head.appendChild(xDefaultLink);
    
    return;
  }
  
  // For special paths with different translations in each language
  if (specialPathMappings[pagePath]) {
    languages.forEach(lang => {
      const translatedPath = specialPathMappings[pagePath][lang];
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = lang;
      link.href = `${domain}/${lang}/${translatedPath}`;
      head.appendChild(link);
    });
    return;
  }
  
  // For normal paths that are the same in all languages
  languages.forEach(lang => {
    const link = document.createElement('link');
    link.rel = 'alternate';
    link.hreflang = lang;
    link.href = `${domain}/${lang}/${pagePath}`;
    head.appendChild(link);
  });
}
