
import React from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const logos = [
  {
    src: "/lovable-uploads/bc398efb-0b31-4737-9ec9-7c55a90079ad.png",
    alt: "Ostsee Card"
  },
  {
    src: "/lovable-uploads/d854adfb-a35a-4aab-8dae-0127f61908b9.png", 
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
  },
  {
    src: "/lovable-uploads/dc32a014-5de5-41d8-b177-4489d94576f7.png",
    alt: "Hostfully"
  }
];

const LogoCarousel = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <h3 className="text-xl md:text-2xl font-medium text-center text-gray-700 mb-8">
          Einige unserer Partner
        </h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {logos.map((logo, index) => (
            <HoverCard key={index}>
              <HoverCardTrigger asChild>
                <div className="h-24 md:h-32 flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-w-full max-h-full object-contain transition-all duration-300"
                      style={{ aspectRatio: '1/1' }}
                    />
                  </div>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-auto p-2 text-center text-sm">
                {logo.alt}
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
