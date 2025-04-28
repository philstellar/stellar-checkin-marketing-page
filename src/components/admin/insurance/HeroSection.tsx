
import React from 'react';
import { UserCheck } from 'lucide-react';
import CTAButton from '../../../components/CTAButton';
import { useTranslation } from '@/hooks/use-translation';

const HeroSection = () => {
  const { t } = useTranslation();
  
  // Get the title and replace the keywords with styled spans
  const formattedTitle = t('insurance.title')
    .replace('Versicherung', '<span class="text-apple">Versicherung</span>')
    .replace('Kaution', '<span class="text-apple">Kaution</span>')
    .replace(/Schutz für Ihre Unterkünfte/gi, '<span style="color:#a4c309">Schutz für Ihre Unterkünfte</span>');
  
  return <section className="pt-24 pb-12 md:pt-40 md:pb-24 relative overflow-hidden bg-white">
      <div className="bg-white"></div>
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6 font-aeonik" 
              style={{ contentVisibility: 'auto' }}
              dangerouslySetInnerHTML={{ __html: formattedTitle }}
            />
            <p className="text-lg text-black mb-8 max-w-lg font-aeonik">
              {t('insurance.introduction')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton size="lg" className="bg-apple hover:bg-apple-600 font-aeonik">
                <UserCheck className="mr-2 h-4 w-4" /> {t('hero.cta')}
              </CTAButton>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-apple-300"></div>
                <div className="w-8 h-8 rounded-full bg-apple-400"></div>
                <div className="w-8 h-8 rounded-full bg-apple-500"></div>
              </div>
              <p className="ml-4 text-sm text-black font-aeonik">
                <span className="font-medium">{t('hero.tagline')}</span>
              </p>
            </div>
          </div>
          <div className="order-1 md:order-last flex justify-center">
            <img 
              src="/lovable-uploads/cb98c7ff-3021-46ac-8a75-c5df74510127.png" 
              alt="Insurance Settings Interface" 
              loading="eager" 
              fetchPriority="high" 
              className="object-scale-down" 
            />
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
