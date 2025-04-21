import React from 'react';
import { Shield, Star, User, Home, Mail } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const UeberUns = () => {
  const teamMembers = [
    {
      name: "Philipp Reuter",
      bio: "Philipp Reuter, Gründer von Stellar Trust und Co-Gründer eines der führenden europäischen Channel Managers Smoobu.com, entwickelte die Idee zu Stellar Trust aus seiner Erfahrung bei Smoobu.\n\nSein Ziel: Vermietern mehr Unabhängigkeit von großen Plattformen und gleichzeitig maximale Sicherheit zu bieten. In Berlin betreibt er zudem erfolgreich zwei Ferienwohnungen und nutzt Stellar Trust selbst.",
      rating: 4.9,
      reviews: 167,
      properties: 2,
      joined: 2024,
      image: "/lovable-uploads/a4c197e8-9f89-4408-abc5-217c19594def.png"
    },
    {
      name: "Milan Plogsties",
      bio: "Milan Plogsties, Mitgründer von Stellar Trust, bringt umfassende Erfahrung aus der Unternehmensberatung und der Reisebranche mit.\n\nEr vermietet seine eigene Wohnung in Berlin und setzt auf Stellar Trust, um mit vollständiger Sicherheit auf allen Plattformen zu listen.",
      rating: 5.0,
      reviews: 25,
      properties: 1,
      joined: 2024,
      image: "/lovable-uploads/892b5bc5-bbb1-43f3-81f3-3913b8ca3db6.png"
    },
    {
      name: "Ralf Kramer",
      bio: "Ralf Kramer, experienced insurance expert (including founder of the leading insurance broker for Event and Entertainment: Event Assec), is responsible for insurance at Stellar Trust and competently advises our clients.\n\nAdditionally, he has built his own vacation home business and is the owner of \"Plau Lagoons\". He thus combines deep industry knowledge with practical host experience – the perfect combination for our mission.",
      rating: 4.7,
      reviews: 166,
      properties: 10,
      joined: 2024,
      image: "/lovable-uploads/298b0c47-79e5-4167-957b-91aa9a4b4dfd.png"
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
                Wir digitalisieren die <span className="text-apple">Kurzzeitvermietung</span> in Deutschland
              </h1>
              <p className="text-lg text-black mb-8 max-w-lg font-aeonik">
                Seit 2023 unterstützen wir Vermieter dabei, ihre Prozesse zu digitalisieren und die Gästekommunikation zu optimieren.
              </p>
            </div>
            <div className="order-1 md:order-last flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Digital Check-in Platform" 
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
              Über uns
              <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-apple rounded-full"></div>
            </h1>
          </div>

          <div className="prose max-w-none mb-16">
            <h2 className="text-2xl font-bold mb-6">Über Stellar Trust</h2>
            <p className="text-lg text-royal-700 mb-6">
              Stellar hat seinen Sitz in Berlin, im Herzen des deutschen Tech-Ökosystems. Wir sind ein engagiertes Team aus Experten für Kurzzeitvermietung, Versicherungen und Technologie, das es sich zur Aufgabe gemacht hat, ein herausragendes Erlebnis für Gastgeber und Gäste zu bieten. Wir sind immer auf der Suche nach Experten, die unser Team verstärken möchten. Melde dich gerne unter careers@stellar-trust.com
            </p>

            <div className="mt-4 mb-12">
              <Button className="bg-apple hover:bg-apple/90">
                <Mail className="mr-2 h-4 w-4" />
                Hier bewerben
              </Button>
            </div>

            <h2 className="text-2xl font-bold mb-6">Unsere Ambition</h2>
            <p className="text-lg text-royal-700 mb-4">Wir glauben, dass</p>
            <ul className="list-disc pl-6 mb-6 text-lg text-royal-700">
              <li>Gastgeber in das Gästeerlebnis investieren können sollten, statt in Plattformgebühren.</li>
              <li>Gäste unabhängig vom Kanal, den sie nutzen, mit Vertrauen buchen können sollten</li>
              <li>Gastgeber sich keine Sorgen über unzuverlässige Gäste oder mögliche Schäden an ihrem Eigentum machen sollten, egal, woher die Buchungen kommen.</li>
            </ul>
            <p className="text-lg text-royal-700 mb-12">
              Zu diesem Zweck entwickeln wir Stellar zur ersten 360-Grad-Vertrauensplattform für die Ferienvermietungsbranche.
            </p>

            <h2 className="text-2xl font-bold mb-6">Entwickelt von Gastgebern wie dir</h2>
            <p className="text-lg text-royal-700 mb-12">
              Stellar wurde von Branchen- und Versicherungsexperten gegründet: Philipp Reuter (Gründer von Smoobu.com), Milan Plogsties (ehemaliger Geschäftsführer eines Tochterunternehmens von HomeToGo) und Ralf Kramer (Geschäftsführer von eventAssec).
              <br /><br />
              Als Kurzzeitvermieter haben wir uns zusammengeschlossen, um eines der drängendsten Probleme unserer Branche zu lösen: das Vertrauen zwischen Gästen und Vermietern zu stärken.
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
                      <span className="text-gray-600">({member.reviews} ratings)</span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-600">
                      <div className="flex items-center gap-1">
                        <Home className="h-4 w-4" />
                        <span>{member.properties} properties</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>joined {member.joined}</span>
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
};

export default UeberUns;
