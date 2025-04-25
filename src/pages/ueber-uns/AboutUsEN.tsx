import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Star, User, Home, Mail } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const teamMembers = [{
  name: "Philipp Reuter",
  bio: "Philipp Reuter, founder of Stellar Trust and co-founder of one of Europe’s leading channel managers Smoobu.com, created Stellar Trust based on his experience at Smoobu.\n\nHis goal: to give hosts more independence from large platforms while maximizing safety. In Berlin, he also successfully manages two vacation rentals and uses Stellar Trust himself.",
  rating: 4.9,
  reviews: 167,
  properties: 2,
  joined: 2024,
  image: "/lovable-uploads/a4c197e8-9f89-4408-abc5-217c19594def.png"
}, {
  name: "Milan Plogsties",
  bio: "Milan Plogsties, co-founder of Stellar Trust, brings extensive experience from consulting and the travel industry.\n\nHe rents out his own apartment in Berlin and relies on Stellar Trust for full security across all platforms.",
  rating: 5.0,
  reviews: 25,
  properties: 1,
  joined: 2024,
  image: "/lovable-uploads/892b5bc5-bbb1-43f3-81f3-3913b8ca3db6.png"
}, {
  name: "Ralf Kramer",
  bio: "Ralf Kramer, experienced insurance expert (including founder of the leading insurance broker for event and entertainment: Event Assec), is responsible for insurance at Stellar Trust and competently advises our clients.\n\nAdditionally, he has built his own vacation rental business and owns \"Plau Lagoons.\" This practical hosting experience, combined with deep industry expertise, makes him the perfect fit for our mission.",
  rating: 4.7,
  reviews: 166,
  properties: 10,
  joined: 2024,
  image: "/lovable-uploads/ec49196e-b150-4532-9f94-780fc83bea5a.png"
}];
const AboutUsEN = () => <>
    <Header />
    <section className="pt-24 pb-12 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-floral to-floral-400/20 bg-white"></div>
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center bg-white">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4 font-aeonik">
              We digitize <span className="text-apple">short-term rentals</span> in Germany
            </h1>
            <p className="text-lg text-black mb-8 max-w-lg font-aeonik">
              Since 2023, we have been helping hosts digitize their processes and optimize guest communication.
            </p>
          </div>
          <div className="order-1 md:order-last flex justify-center">
            <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" alt="Digital Check-in Platform" className="w-4/5 h-auto rounded-lg shadow-xl" loading="eager" />
          </div>
        </div>
      </div>
    </section>
    <section className="py-16">
      <div className="container-custom">
        <div className="flex items-center gap-3 mb-8">
          <Shield className="h-8 w-8 text-apple" />
          <h1 className="text-3xl font-bold text-royal inline-block relative">
            About Us
            <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-apple rounded-full"></div>
          </h1>
        </div>
        <div className="prose max-w-none mb-16">
          <h2 className="text-2xl font-bold mb-6">About Stellar Trust</h2>
          <p className="text-lg text-royal-700 mb-6">
            Stellar is based in Berlin, in the heart of Germany’s tech ecosystem. Our committed team of short-term rental, insurance, and technology experts is dedicated to delivering an outstanding experience for both hosts and guests. We are always on the lookout for talented experts to join us. Interested? Reach out at careers@stellar-trust.com
          </p>
          <div className="mt-4 mb-12">
            <Button className="bg-apple hover:bg-apple/90">
              <Mail className="mr-2 h-4 w-4" />
              Apply here
            </Button>
          </div>
          <h2 className="text-2xl font-bold mb-6">Our Ambition</h2>
          <p className="text-lg text-royal-700 mb-4">We believe that:</p>
          <ul className="list-disc pl-6 mb-6 text-lg text-royal-700">
            <li>Hosts should be able to invest in the guest experience, not platform fees.</li>
            <li>Guests should book with confidence, no matter which channel they use.</li>
            <li>Hosts should no longer worry about unreliable guests or potential property damage—regardless of where bookings come from.</li>
          </ul>
          <p className="text-lg text-royal-700 mb-12">
            That’s why we are building Stellar, the first 360-degree trust platform for the vacation rental industry.
          </p>
          <h2 className="text-2xl font-bold mb-6">Founded by hosts, for hosts</h2>
          <p className="text-lg text-royal-700 mb-12">
            Stellar was founded by industry and insurance leaders: Philipp Reuter (founder of Smoobu.com), Milan Plogsties (former CEO of a HomeToGo subsidiary), and Ralf Kramer (managing director of eventAssec).
            <br /><br />
            As short-term rental hosts ourselves, we teamed up to solve one of our industry’s most pressing challenges: building trust between guests and hosts.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <img src={member.image} alt={member.name} className="w-16 h-16 rounded-full object-cover" />
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
            </Card>)}
        </div>
      </div>
    </section>
    <Footer />
  </>;
export default AboutUsEN;