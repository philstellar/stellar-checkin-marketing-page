
import { UserCheck } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import { useTranslation } from "@/hooks/use-translation";
import { useIsMobile } from "@/hooks/use-mobile";
import OptimizedImage from "@/components/OptimizedImage";
import { useNavigate } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function IndexHeroSection() {
  const isMobile = useIsMobile();
  const { t, currentLanguage } = useTranslation();
  const navigate = useNavigate();
  
  // Pre-compute headline parts for better performance
  const headlineParts = (() => {
    const headline = t('hero.headline');
    const checkInRegex = /(Check-in|Check-ins|Checkin)/gi;
    
    // Find matches and split text into parts
    const matches = [...headline.matchAll(checkInRegex)];
    if (!matches.length) return [{ text: headline, isHighlighted: false }];
    
    const parts = [];
    let lastIndex = 0;
    
    matches.forEach(match => {
      if (match.index > lastIndex) {
        parts.push({
          text: headline.substring(lastIndex, match.index),
          isHighlighted: false
        });
      }
      
      parts.push({
        text: match[0],
        isHighlighted: true
      });
      
      lastIndex = match.index + match[0].length;
    });
    
    if (lastIndex < headline.length) {
      parts.push({
        text: headline.substring(lastIndex),
        isHighlighted: false
      });
    }
    
    return parts;
  })();
  
  const handleTrustBadgeClick = () => {
    navigate(`/${currentLanguage}/trust-badge`);
  };
  
  return (
    <section className="pt-24 pb-12 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-#0f266145 to-#0f266145-400/20 bg-white"></div>
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4 font-aeonik"
              style={{ 
                contentVisibility: 'auto',
                textRendering: 'optimizeSpeed'
              }}
            >
              {headlineParts.map((part, index) => (
                part.isHighlighted ? (
                  <span key={index} className="text-[#a4c309]">{part.text}</span>
                ) : part.text
              ))}
            </h1>
            <p className="text-lg text-black mb-8 max-w-lg font-aeonik">
              {t('hero.subheadline')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton size="lg" className="bg-apple hover:bg-apple-600 font-aeonik text-white">
                <UserCheck className="mr-2 h-4 w-4" /> {t('hero.cta')}
              </CTAButton>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-apple-300"></div>
                <div className="w-8 h-8 rounded-full bg-apple-400"></div>
                <div className="w-8 h-8 rounded-full bg-apple-500"></div>
              </div>
              <p className="ml-4 text-sm text-black font-aeonik group cursor-pointer" onClick={handleTrustBadgeClick}>
                <span className="font-medium hover:text-apple transition-colors">{t('navigation.trustBadge')}</span>
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-last flex justify-center md:justify-end">
            <div className="w-full md:w-4/5 relative" style={{ maxWidth: '700px' }}>
              <div className="relative">
                <AspectRatio ratio={isMobile ? 4/5 : 4/3} className="bg-transparent">
                  <OptimizedImage 
                    src="/lovable-uploads/c8760687-17ea-4cbe-b66e-6a87286d97db.png" 
                    alt="Stellar Online Check-in Interface" 
                    className="w-full h-full object-contain bg-transparent md:mr-4 hero-image-shadow" 
                    loading="eager" 
                    priority={true}
                    width={700} 
                    height={525} 
                    sizes="(max-width: 768px) 100vw, 700px"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
