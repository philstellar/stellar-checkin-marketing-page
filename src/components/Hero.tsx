
import React, { memo } from 'react';
import { UserCheck } from 'lucide-react';
import { useIsMobile } from "@/hooks/use-mobile";
import CTAButton from "./CTAButton";
import { useTranslation } from "@/hooks/use-translation";
import OptimizedImage from './OptimizedImage';
import { useNavigate } from 'react-router-dom';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Hero = () => {
  const isMobile = useIsMobile();
  const { t, currentLanguage } = useTranslation();
  const navigate = useNavigate();
  
  // Format the headlines to apply the color to Check-in
  const formatHeadline = (text: string) => {
    return text.replace(/Check-in/gi, '<span style="color:#a4c309">Check-in</span>')
               .replace(/Check-ins/gi, '<span style="color:#a4c309">Check-ins</span>')
               .replace(/Checkin/gi, '<span style="color:#a4c309">Checkin</span>');
  };
  
  const handleTrustBadgeClick = () => {
    navigate(`/${currentLanguage}/trust-badge`);
  };
  
  return (
    <section className="pt-24 pb-12 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-floral to-floral-400/20"></div>
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4 font-aeonik" 
              style={{ contentVisibility: 'auto' }}
              dangerouslySetInnerHTML={{ 
                __html: formatHeadline(
                  (t('hero.headline1') || '') + 
                  `<span style={{ color: '#0f2661' }}>${t('hero.headline2') || ''}</span>` + 
                  (t('hero.headline3') || '')
                )
              }}
            />
            <p className="text-lg text-black mb-8 max-w-lg font-aeonik">
              {t('hero.subheadline')}<br /><br /> 
              {t('hero.subheadline2')}
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
              <p className="ml-4 text-sm text-black font-aeonik cursor-pointer" onClick={handleTrustBadgeClick}>
                <span className="font-medium hover:text-apple transition-colors">{t('navigation.trustBadge')}</span>
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-last flex justify-center">
            <div className="w-3/5 relative" style={{ aspectRatio: '1/1', maxWidth: '500px' }}>
              <AspectRatio ratio={1/1} className="bg-transparent">
                <OptimizedImage 
                  src="/lovable-uploads/c8760687-17ea-4cbe-b66e-6a87286d97db.png" 
                  alt="Stellar Online Check-in Interface" 
                  className="w-full h-full object-contain bg-transparent" 
                  loading="eager"
                  priority={true}
                  width={500}
                  height={500}
                  sizes="(max-width: 768px) 60vw, 500px"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Use memo to prevent unnecessary re-renders
export default memo(Hero);
