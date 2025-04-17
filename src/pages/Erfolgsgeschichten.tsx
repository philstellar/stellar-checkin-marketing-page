import React from 'react';
import { Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';

const Erfolgsgeschichten = () => {
  const testimonialLogos = [
    {
      src: "/lovable-uploads/676aad56-42f8-4099-a3bb-1239e0d91468.png",
      alt: "Hof Liebeneck Osterspai",
      width: 180
    },
    {
      src: "/lovable-uploads/5ed06b20-0365-4348-b2b0-31574211bc35.png",
      alt: "Homeby",
      width: 160
    },
    {
      src: "/lovable-uploads/800ababe-141e-40a9-aa0f-2e8d2519b7ef.png",
      alt: "Favorent",
      width: 150
    },
    {
      src: "/lovable-uploads/fd96b10c-36ff-4492-a020-f47f221d8d39.png",
      alt: "Luxury Hideaway",
      width: 170
    }
  ];

  return (
    <>
      <Header />
      <section className="pt-24 pb-12 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-floral to-floral-400/20"></div>
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4 font-aeonik">
                Unsere <span className="text-apple">Erfolgsgeschichten</span>
              </h1>
              <p className="text-lg text-black mb-8 max-w-lg font-aeonik">
                Erfahren Sie, wie Vermieter und Gastgeber mit Stellar Checkin ihre Prozesse optimieren und ihren Erfolg steigern.
              </p>
            </div>
            <div className="order-1 md:order-last flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
                alt="Success Stories" 
                className="w-4/5 h-auto rounded-lg shadow-xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 text-royal">
            Unsere zufriedenen Kunden
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center">
            {testimonialLogos.map((logo, index) => (
              <Card key={index} className="flex items-center justify-center p-6 hover:shadow-lg transition-shadow duration-300 w-full bg-white border-none">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{ width: logo.width ? `${logo.width}px` : 'auto', height: 'auto' }}
                  className="object-contain"
                />
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-8">
            <Award className="h-8 w-8 text-apple" />
            <h1 className="text-3xl font-bold text-royal inline-block relative">
              Erfolgsgeschichten
              <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-apple rounded-full"></div>
            </h1>
          </div>
          <div className="prose max-w-none">
            <p className="text-lg text-royal-700 mb-6">
              Entdecken Sie die Erfolgsgeschichten unserer zufriedenen Kunden...
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Erfolgsgeschichten;
