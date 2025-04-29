
import React, { useEffect } from 'react';
import { useTranslation } from '@/hooks/use-translation';
import { Link } from 'react-router-dom';
import LanguageSelector from './LanguageSelector';
import OptimizedImage from './OptimizedImage';

const Footer = () => {
  const { t, currentLanguage } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  // Process email addresses safely after component mounts
  useEffect(() => {
    try {
      const emailElements = document.querySelectorAll('[data-email]');
      emailElements.forEach(function(element) {
        const encodedEmail = element.getAttribute('data-email');
        if (encodedEmail) {
          const decodedEmail = encodedEmail.replace(/AT/, '@').replace(/DOT/g, '.');
          
          if (element.tagName.toLowerCase() === 'a') {
            element.setAttribute('href', 'mailto:' + decodedEmail);
            if (!element.textContent || element.textContent === '') {
              element.textContent = decodedEmail;
            }
          } else {
            element.textContent = decodedEmail;
          }
        }
      });
    } catch (e) {
      console.error('Error processing email addresses:', e);
    }
  }, []);
  
  return (
    <footer className="bg-white text-royal-800 py-12">
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div className="mb-6">
          <Link to={`/${currentLanguage}/`} className="block mb-4">
            <OptimizedImage 
              src="/lovable-uploads/ff2f3aee-64a7-4b39-8853-4cf47dab5b66.png" 
              alt="Stellar Logo" 
              width={150} 
              height={36} 
              className="h-9 w-auto object-contain"
            />
          </Link>
          <p className="text-sm text-royal-600">
            {t('footer.tagline')}
          </p>
        </div>

        {/* Sitemap */}
        <div>
          <h4 className="font-semibold text-lg mb-4">{t('footer.sitemap')}</h4>
          <ul className="text-sm">
            <li>
              <Link to={`/${currentLanguage}/ueber-uns`} className="hover:text-apple transition-colors">
                {t('footer.aboutUs')}
              </Link>
            </li>
            <li>
              <Link to={`/${currentLanguage}/erfolgsbeispiele`} className="hover:text-apple transition-colors">
                {t('footer.successStories')}
              </Link>
            </li>
            <li>
              <Link to={`/${currentLanguage}/faq`} className="hover:text-apple transition-colors">
                {t('footer.faq')}
              </Link>
            </li>
            <li>
              <Link to={`/${currentLanguage}/trust-badge`} className="hover:text-apple transition-colors">
                {t('footer.trustBadge')}
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold text-lg mb-4">{t('footer.legal')}</h4>
          <ul className="text-sm">
            <li>
              <Link to={`/${currentLanguage}/impressum`} className="hover:text-apple transition-colors">
                {t('footer.imprint')}
              </Link>
            </li>
            <li>
              <Link to={`/${currentLanguage}/datenschutz`} className="hover:text-apple transition-colors">
                {t('footer.privacy')}
              </Link>
            </li>
            <li>
              <Link to={`/${currentLanguage}/agb`} className="hover:text-apple transition-colors">
                {t('footer.terms')}
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Language */}
        <div>
          <h4 className="font-semibold text-lg mb-4">{t('footer.contact')}</h4>
          <ul className="text-sm">
            <li className="mb-2">
              <a data-email="infoATstellar-checkinDOTcom" className="hover:text-apple transition-colors"></a>
            </li>
            <li>
              <a href="tel:+4917647740917" className="hover:text-apple transition-colors">
                +49 176 47740917
              </a>
            </li>
          </ul>
          <div className="mt-4">
            <LanguageSelector />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container-custom mt-8 border-t border-royal-100 pt-4 text-center text-sm text-royal-600">
        &copy; {currentYear} Stellar Checkin. {t('footer.allRightsReserved')}
      </div>
    </footer>
  );
};

export default Footer;
