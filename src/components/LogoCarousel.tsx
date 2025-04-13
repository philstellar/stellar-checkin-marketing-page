
import React, { useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { cn } from '@/lib/utils';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

type LogoType = {
  src: string;
  alt: string;
};

const logos: LogoType[] = [
  {
    src: "/lovable-uploads/bc398efb-0b31-4737-9ec9-7c55a90079ad.png",
    alt: "Ostsee Card"
  },
  {
    src: "/lovable-uploads/d854adfb-a35a-4aab-8dae-0127f61908b9.png", // Updated AVS logo
    alt: "AVS Tourismus Systeme"
  },
  {
    src: "/lovable-uploads/4d73a118-7cc1-4e3f-bf33-dec5ec07b93c.png",
    alt: "Beds24"
  },
  {
    src: "/lovable-uploads/349e2cab-5eb3-4451-8d9e-0cdf5927f51b.png",
    alt: "Guesty"
  },
  {
    src: "/lovable-uploads/876b6816-9063-4842-afc5-13e495761c7a.png",
    alt: "Smoobu"
  }
];

// Double the logos to create a seamless infinite effect
const extendedLogos = [...logos, ...logos];

const LogoCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    containScroll: "keepSnaps",
    slidesToScroll: 1
  });

  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = () => {
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 3000);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  };

  useEffect(() => {
    if (emblaApi) {
      startAutoplay();
      emblaApi.on('pointerDown', stopAutoplay);
      emblaApi.on('settle', startAutoplay);
    }
    
    return () => {
      stopAutoplay();
      emblaApi?.off('pointerDown', stopAutoplay);
      emblaApi?.off('settle', startAutoplay);
    };
  }, [emblaApi]);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <h3 className="text-xl md:text-2xl font-medium text-center text-gray-700 mb-8">
          Beispiele integrierter Partner
        </h3>
        
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {extendedLogos.map((logo, index) => (
              <div 
                key={index} 
                className={cn(
                  "flex-shrink-0 w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 px-2"
                )}
              >
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <div className="h-16 md:h-20 flex items-center justify-center p-2 bg-transparent transition-all duration-300 cursor-pointer">
                      <div className="w-full h-full flex items-center justify-center">
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                          style={{ aspectRatio: '1/1' }}
                        />
                      </div>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-auto p-2 text-center text-sm">
                    {logo.alt}
                  </HoverCardContent>
                </HoverCard>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
