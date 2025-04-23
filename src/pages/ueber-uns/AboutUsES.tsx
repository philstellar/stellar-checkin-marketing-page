
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Star, User, Home, Mail } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "Philipp Reuter",
    bio: "Philipp Reuter, fundador de Stellar Trust y cofundador de uno de los principales channel managers europeos Smoobu.com, dio vida a la idea de Stellar Trust a partir de su experiencia en Smoobu.\n\nSu objetivo: ofrecer a los anfitriones más independencia de las grandes plataformas y la máxima seguridad. En Berlín también gestiona con éxito dos pisos turísticos y utiliza Stellar Trust personalmente.",
    rating: 4.9,
    reviews: 167,
    properties: 2,
    joined: 2024,
    image: "/lovable-uploads/a4c197e8-9f89-4408-abc5-217c19594def.png"
  },
  {
    name: "Milan Plogsties",
    bio: "Milan Plogsties, cofundador de Stellar Trust, aporta una gran experiencia en consultoría y en el sector de los viajes.\n\nAlquila su propio apartamento en Berlín y apuesta por Stellar Trust para publicar de forma segura en todas las plataformas.",
    rating: 5.0,
    reviews: 25,
    properties: 1,
    joined: 2024,
    image: "/lovable-uploads/892b5bc5-bbb1-43f3-81f3-3913b8ca3db6.png"
  },
  {
    name: "Ralf Kramer",
    bio: "Ralf Kramer, experto en seguros (incluido fundador del principal corredor de seguros de eventos y espectáculos, Event Assec), es responsable de seguros en Stellar Trust y asesora con competencia a nuestros clientes.\n\nAdemás, ha creado su propio negocio de viviendas vacacionales y es propietario de \"Plau Lagoons\". Combina así su profundo conocimiento del sector con la práctica de anfitrión: la combinación perfecta para nuestra misión.",
    rating: 4.7,
    reviews: 166,
    properties: 10,
    joined: 2024,
    image: "/lovable-uploads/ec49196e-b150-4532-9f94-780fc83bea5a.png"
  }
];

const AboutUsES = () => (
  <>
    <Header />
    <section className="pt-24 pb-12 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-floral to-floral-400/20"></div>
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4 font-aeonik">
              Digitalizamos el <span className="text-apple">alquiler vacacional</span> en Alemania
            </h1>
            <p className="text-lg text-black mb-8 max-w-lg font-aeonik">
              Desde 2023 ayudamos a anfitriones a digitalizar procesos y optimizar la comunicación con los huéspedes.
            </p>
          </div>
          <div className="order-1 md:order-last flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Plataforma de check-in digital" 
              className="w-4/5 h-auto rounded-lg shadow-xl"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
    <section className="py-16">
      <div className="container-custom">
        <div className="flex items-center gap-3 mb-8">
          <Shield className="h-8 w-8 text-apple" />
          <h1 className="text-3xl font-bold text-royal inline-block relative">
            Sobre nosotros
            <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-apple rounded-full"></div>
          </h1>
        </div>
        <div className="prose max-w-none mb-16">
          <h2 className="text-2xl font-bold mb-6">Sobre Stellar Trust</h2>
          <p className="text-lg text-royal-700 mb-6">
            Stellar tiene su sede en Berlín, en el corazón del ecosistema tecnológico alemán. Nuestro equipo de expertos en alquiler vacacional, seguros y tecnología tiene la misión de ofrecer la mejor experiencia a anfitriones y huéspedes. ¿Quieres formar parte del equipo? ¡Escríbenos! careers@stellar-trust.com
          </p>
          <div className="mt-4 mb-12">
            <Button className="bg-apple hover:bg-apple/90">
              <Mail className="mr-2 h-4 w-4" />
              Solicita aquí
            </Button>
          </div>
          <h2 className="text-2xl font-bold mb-6">Nuestra misión</h2>
          <p className="text-lg text-royal-700 mb-4">Creemos que:</p>
          <ul className="list-disc pl-6 mb-6 text-lg text-royal-700">
            <li>Los anfitriones deben poder invertir en la experiencia del huésped, no en comisiones de plataforma.</li>
            <li>Los huéspedes deben reservar siempre con confianza, en cualquier canal.</li>
            <li>Los anfitriones no deberían preocuparse por daños o riesgos, da igual de dónde venga la reserva.</li>
          </ul>
          <p className="text-lg text-royal-700 mb-12">
            Por eso desarrollamos Stellar: la primera plataforma de confianza total para el alquiler vacacional.
          </p>
          <h2 className="text-2xl font-bold mb-6">Fundada por anfitriones, para anfitriones</h2>
          <p className="text-lg text-royal-700 mb-12">
            Stellar fue fundada por líderes del sector y seguros: Philipp Reuter (fundador de Smoobu.com), Milan Plogsties (ex CEO de una filial de HomeToGo) y Ralf Kramer (director de eventAssec).
            <br /><br />
            Como anfitriones de corto plazo, nos unimos para solucionar uno de los mayores retos de nuestro sector: la confianza entre huésped y anfitrión.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <h3 className="text-xl font-bold">{member.name}</h3>
                  </div>
                  <p className="text-gray-600 whitespace-pre-line">{member.bio}</p>
                  <div className="flex items-center gap-2 text-apple">
                    <Star className="h-5 w-5 fill-current" />
                    <span className="font-bold">{member.rating}</span>
                    <span className="text-gray-600">({member.reviews} valoraciones)</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-600">
                    <div className="flex items-center gap-1">
                      <Home className="h-4 w-4" />
                      <span>{member.properties} propiedades</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>miembro desde {member.joined}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </>
);

export default AboutUsES;
