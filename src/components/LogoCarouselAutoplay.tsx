
import { useEffect, useRef } from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import useEmblaCarousel from 'embla-carousel-react';
import OptimizedImage from './OptimizedImage';

interface Logo {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface LogoCarouselAutoplayProps {
  logos: Logo[];
}

const LogoCarouselAutoplay = ({ logos }: LogoCarouselAutoplayProps) => {
  // Triple the logos array for smooth infinite scrolling
  const extendedLogos = [...logos, ...logos, ...logos];
  
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    containScroll: "keepSnaps",
    slidesToScroll: 1,
    align: 'start'
  });

  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = () => {
    stopAutoplay();
    if (emblaApi) {
      const scroll = () => {
        if (!emblaApi.canScrollNext()) {
          emblaApi.scrollTo(0);
        } else {
          emblaApi.scrollNext();
        }
      };

      autoplayRef.current = setInterval(scroll, 3000); // Slower, smoother scrolling
    }
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
    // Adding w-full and max-w-full to contain the carousel within its parent
    <div className="overflow-hidden w-full max-w-full" ref={emblaRef}>
      <div className="flex">
        {extendedLogos.map((logo, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 px-4"
          >
            <HoverCard>
              <HoverCardTrigger asChild>
                <div className="h-20 flex items-center justify-center p-4 bg-transparent transition-all duration-300 cursor-pointer hover:scale-110">
                  <div className="w-full h-full flex items-center justify-center">
                    <OptimizedImage
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width || 150}
                      height={logo.width ? Math.round(logo.width * 0.6) : 90}
                      className="max-w-full max-h-full object-contain"
                      loading="lazy"
                      sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, (max-width: 1024px) 20vw, 160px"
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
  );
};

export default LogoCarouselAutoplay;
