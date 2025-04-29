
import React from 'react';
import { Award, User, Home } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from "@/components/ui/card";
import LogoCarouselAutoplay from '@/components/LogoCarouselAutoplay';
import CTAButton from '@/components/CTAButton';
import OptimizedImage from '@/components/OptimizedImage';

const testimonialLogos = [{
  src: "/lovable-uploads/676aad56-42f8-4099-a3bb-1239e0d91468.png",
  alt: "Hof Liebeneck Osterspai",
  width: 180
}, {
  src: "/lovable-uploads/5ed06b20-0365-4348-b2b0-31574211bc35.png",
  alt: "Homeby",
  width: 160
}, {
  src: "/lovable-uploads/35553133-b084-41da-985f-8546970c819f.png",
  alt: "Favorent",
  width: 150
}, {
  src: "/lovable-uploads/fd96b10c-36ff-4492-a020-f47f221d8d39.png",
  alt: "Luxury Hideaway",
  width: 170
}, {
  src: "/lovable-uploads/404c2219-9b9a-4ebd-b8ec-aea63d21d6d7.png",
  alt: "Plau Lagoons",
  width: 160
}, {
  src: "/lovable-uploads/3f0f71e5-0006-4019-9e50-f5c4354ed3fe.png",
  alt: "Berlin Mitte Experience",
  width: 180
}, {
  src: "/lovable-uploads/9451653b-0793-4645-8889-3222d4c98e84.png",
  alt: "Fairienglück",
  width: 160
}];

const testimonials = [
  {
    company: "Hof Liebeneck",
    name: "Mario Schilling",
    image: "/lovable-uploads/7ac2f1b9-71b4-4955-b98d-10b23cd137a4.png",
    properties: 4,
    joinedYear: 2024,
    quote: "Convincere gli ospiti a prenotare direttamente sul nostro sito è sempre stata una sfida. Da quando abbiamo aggiunto il Trust Badge Stellar, che aggrega le nostre recensioni Airbnb e Booking.com, abbiamo già visto un aumento delle prenotazioni.\n\nInoltre, ho molta più sicurezza quando prenotano ospiti che non conosco ancora, perché ora posso offrire loro la scelta tra cauzione e assicurazione danni ospiti di Stellar.",
    website: "https://www.liebeneck.com/"
  },
  {
    company: "Plau Lagoons",
    name: "Ralf Kramer",
    image: "/lovable-uploads/cda4c627-8961-489c-b264-d970daf26bed.png",
    properties: 10,
    joinedYear: 2024,
    quote: "Aumentare le prenotazioni dirette è diventato molto importante di recente—not solo per crescere il fatturato, ma anche per connettersi in modo più personale con gli ospiti, ad esempio con biglietti di benvenuto o offerte speciali.\n\nMa ci siamo resi conto velocemente: un sito bello da solo non basta. Ci serviva qualcosa che desse ulteriore sicurezza ai nostri clienti. Ecco, il Trust Badge Stellar fa esattamente questo.",
    website: "https://www.plau-lagoons.de"
  },
  {
    company: "Favorent",
    name: "Volker Rantz",
    image: "/lovable-uploads/d7825600-e22b-4fa5-a960-fb33e4dd0d9d.png",
    properties: 700,
    joinedYear: 2024,
    quote: "L'assicurazione danni ospite giornaliera è stata una vera svolta per noi – sia come punto di forza unico per acquisire nuovi clienti agenziali, sia per semplificare la gestione delle cauzioni.\n\nSiamo riusciti a ridurre notevolmente le frizioni tra la nostra agenzia, i proprietari e gli ospiti.",
    website: "https://favorent.de/"
  },
  {
    company: "Fairienglück",
    name: "Christopher Redenz",
    image: "/lovable-uploads/d642b640-6f64-4b66-a4d4-263a5d6f288c.png",
    properties: 100,
    joinedYear: 2024,
    quote: "Da piccola proprietaria di casa vacanze, per me era sempre difficile convincere gli ospiti a prenotare direttamente dal mio sito. Stellar Checkin ha completamente cambiato le cose. Il Trust Badge dà subito la fiducia necessaria.\n\nLa verifica dell'identità e la possibilità di proporre l'assicurazione danni ospite hanno aumentato enormemente la sicurezza delle mie prenotazioni.",
    website: "https://www.fairienglueck.de/"
  },
  {
    company: "Berlin Mitte Experience",
    name: "Philipp Reuter",
    image: "/lovable-uploads/321ff530-1491-4b9c-b977-7111d0710385.png",
    properties: 2,
    joinedYear: 2024,
    quote: "Come host di diverse strutture a Berlino Mitte, la gestione delle cauzioni e delle registrazioni ospiti mi portava via molto tempo. Con Stellar Checkin, ho digitalizzato e automatizzato processi che prima facevo a mano.\n\nSoprattutto sono colpito dall'integrazione perfetta con il nostro PMS e dalla possibilità di vendere servizi aggiuntivi direttamente durante il check-in.",
    website: "https://berlin-mitte.homes/de"
  },
  {
    company: "Homeby",
    name: "Ale Fiorotto",
    image: "/lovable-uploads/1c1f42aa-b940-4bc9-bae9-f556d48149cf.png",
    properties: 100,
    joinedYear: 2024,
    quote: "Come azienda di property management, prima dovevamo sempre gestire sistemi diversi. Stellar Checkin ha davvero semplificato e digitalizzato tutti i nostri processi di check-in.\n\nOra raccogliamo automaticamente i dati degli ospiti, possiamo offrire assicurazione e proporre servizi extra — l'efficienza e i ricavi sono visibilmente cresciuti.",
    website: "https://homeby.it"
  }
];

const SuccessStoriesIT = () => {
  return <>
      <Header />
      <section className="pt-24 pb-12 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-white"></div>
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4 font-aeonik">
                Le nostre <span className="text-apple">Storie di Successo</span>
              </h1>
              <p className="text-lg text-black mb-8 max-w-lg font-aeonik">
                Scopri come proprietari e host utilizzano Stellar Checkin per ottimizzare i processi e aumentare il proprio successo.
              </p>
              <div className="mb-8">
                <CTAButton size="lg" className="bg-apple hover:bg-apple-600 font-aeonik">
                  Registrati ora
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 text-royal">
            Clienti selezionati
          </h2>
          <LogoCarouselAutoplay logos={testimonialLogos} />
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-12">
            <Award className="h-8 w-8 text-apple" />
            <h2 className="text-3xl font-bold text-royal inline-block relative">
              Storie di Successo
              <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-apple rounded-full"></div>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 bg-white hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col h-full">
                  <div className="mb-6 my-0 py-0">
                    <div className="flex items-center gap-4 mb-4">
                      <OptimizedImage 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-16 h-16 rounded-full object-cover" 
                        width={64}
                        height={64}
                      />
                      <div>
                        <h3 className="text-xl font-semibold mb-1 text-royal">
                          <a href={testimonial.website} target="_blank" rel="noopener noreferrer" className="hover:text-apple transition-colors">
                            {testimonial.company}
                          </a>
                        </h3>
                        <p className="text-gray-600">{testimonial.name}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6 whitespace-pre-line">{testimonial.quote}</p>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="">
                      {testimonial.properties && <div className="flex items-center gap-1">
                          <Home className="h-4 w-4" />
                          <span className="text-left">{testimonial.properties} Proprietà</span>
                        </div>}
                    </div>
                    
                    {testimonial.joinedYear && <div className="text-sm text-gray-500 mt-2">
                        Cliente dal {testimonial.joinedYear}
                      </div>}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>;
};

export default SuccessStoriesIT;
