
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Star, User, Home, Mail } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const teamMembers = [
  {
    name: "Philipp Reuter",
    bio: "Philipp Reuter, fondatore di Stellar Trust e co-fondatore di uno dei principali channel manager europei Smoobu.com, ha sviluppato l’idea di Stellar Trust partendo dalla sua esperienza a Smoobu.\n\nIl suo obiettivo: offrire agli host maggiore indipendenza dalle grandi piattaforme e al contempo la massima sicurezza. A Berlino gestisce con successo due case vacanze e utilizza personalmente Stellar Trust.",
    rating: 4.9,
    reviews: 167,
    properties: 2,
    joined: 2024,
    image: "/lovable-uploads/a4c197e8-9f89-4408-abc5-217c19594def.png"
  },
  {
    name: "Milan Plogsties",
    bio: "Milan Plogsties, co-fondatore di Stellar Trust, porta con sé una grande esperienza dalla consulenza aziendale e dal settore travel.\n\nAffitta il proprio appartamento a Berlino e si affida a Stellar Trust per pubblicare le sue offerte in totale sicurezza su tutte le piattaforme.",
    rating: 5.0,
    reviews: 25,
    properties: 1,
    joined: 2024,
    image: "/lovable-uploads/892b5bc5-bbb1-43f3-81f3-3913b8ca3db6.png"
  },
  {
    name: "Ralf Kramer",
    bio: "Ralf Kramer, esperto assicuratore (incluso fondatore di uno dei principali broker per eventi e spettacolo, Event Assec), è responsabile assicurativo per Stellar Trust e offre consulenza specializzata ai nostri clienti.\n\nHa inoltre avviato una propria attività nel settore case vacanze ed è il proprietario di \"Plau Lagoons\". Unisce così profonda conoscenza del settore a esperienza diretta da host: la combinazione ideale per la nostra mission.",
    rating: 4.7,
    reviews: 166,
    properties: 10,
    joined: 2024,
    image: "/lovable-uploads/ec49196e-b150-4532-9f94-780fc83bea5a.png"
  }
];

const AboutUsIT = () => (
  <>
    <Header />
    <section className="pt-24 pb-12 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-floral to-floral-400/20"></div>
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4 font-aeonik">
              Digitalizziamo la <span className="text-apple">locazione breve</span> in Germania
            </h1>
            <p className="text-lg text-black mb-8 max-w-lg font-aeonik">
              Dal 2023 aiutiamo gli host a digitalizzare i processi e ottimizzare la comunicazione con gli ospiti.
            </p>
          </div>
          <div className="order-1 md:order-last flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Piattaforma di check-in digitale" 
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
            Chi siamo
            <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-apple rounded-full"></div>
          </h1>
        </div>
        <div className="prose max-w-none mb-16">
          <h2 className="text-2xl font-bold mb-6">Su Stellar Trust</h2>
          <p className="text-lg text-royal-700 mb-6">
            Stellar ha sede a Berlino, nel cuore dell’ecosistema tecnologico tedesco. Il nostro team formato da esperti in affitti brevi, assicurazioni e tecnologia punta a offrire il massimo sia agli host che agli ospiti. Cerchiamo sempre nuovi professionisti con cui arricchire la squadra! Scrivici a careers@stellar-trust.com
          </p>
          <div className="mt-4 mb-12">
            <Button className="bg-apple hover:bg-apple/90">
              <Mail className="mr-2 h-4 w-4" />
              Candidati qui
            </Button>
          </div>
          <h2 className="text-2xl font-bold mb-6">La nostra ambizione</h2>
          <p className="text-lg text-royal-700 mb-4">Crediamo che:</p>
          <ul className="list-disc pl-6 mb-6 text-lg text-royal-700">
            <li>Gli host dovrebbero poter investire nell’esperienza degli ospiti, non in commissioni di piattaforma.</li>
            <li>Gli ospiti dovrebbero poter prenotare sempre in sicurezza, da qualsiasi canale.</li>
            <li>Gli host non dovrebbero preoccuparsi di rischi o danni, indipendentemente dalla piattaforma di prenotazione.</li>
          </ul>
          <p className="text-lg text-royal-700 mb-12">
            Per questo sviluppiamo Stellar: la prima piattaforma di fiducia a 360° per gli affitti brevi.
          </p>
          <h2 className="text-2xl font-bold mb-6">Fondata da host, per host</h2>
          <p className="text-lg text-royal-700 mb-12">
            Stellar è stata fondata da leader nel settore e nell’assicurazione: Philipp Reuter (fondatore di Smoobu.com), Milan Plogsties (ex CEO di una controllata HomeToGo), e Ralf Kramer (direttore di eventAssec).
            <br /><br />
            Da host noi stessi, abbiamo unito know-how e visione per risolvere una delle sfide più grandi del settore: creare fiducia tra ospiti e proprietari.
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
                    <span className="text-gray-600">({member.reviews} recensioni)</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-600">
                    <div className="flex items-center gap-1">
                      <Home className="h-4 w-4" />
                      <span>{member.properties} proprietà</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>membro dal {member.joined}</span>
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

export default AboutUsIT;
