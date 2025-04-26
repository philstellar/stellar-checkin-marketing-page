
import { UserCheck } from "lucide-react";
import CTAButton from "@/components/CTAButton";
import { useTranslation } from "@/hooks/use-translation";
import { useIsMobile } from "@/hooks/use-mobile";

export function HeroSection() {
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  
  return (
    <section className="pt-24 pb-12 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-floral to-floral-400/20 bg-white"></div>
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4 font-aeonik">
              Seamless Check-in.<br />
              Built-in Protection.<br />
              360 degrees Trust.
            </h1>
            <p className="text-lg text-black mb-8 max-w-lg font-aeonik">
              {t('hero.subheadline')}<br /><br />
              {t('hero.subheadline2')}
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
              <p className="ml-4 text-sm text-black font-aeonik">
                <span className="font-medium">{t('hero.tagline')}</span>
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-last flex justify-center">
            <img 
              src="/lovable-uploads/ff8a3a50-21d0-4e53-98f4-3265e363fe55.png" 
              alt="Stellar Online Check-in Interface" 
              className="w-3/5 h-auto object-contain bg-transparent" 
              loading="eager" 
              fetchPriority="high" 
              width="500" 
              height="400"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
