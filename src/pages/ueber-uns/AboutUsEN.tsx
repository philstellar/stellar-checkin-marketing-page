
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutUsEN = () => (
  <>
    <Header />
    <section className="pt-24 pb-12 md:pt-40 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-floral to-floral-400/20"></div>
      <div className="container-custom relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">About Us</h1>
        <p className="text-lg text-royal-900 mb-8 max-w-xl">
          {/* 
            TODO: Please provide a FULL, professional English translation of this "About Us" page, including all sections and proper adaptation for English-speaking audiences. This content is currently a placeholder/short description. 
            Stellar is based in Berlin and our team of short-term rental, insurance, and tech experts is on a mission: providing an outstanding experience for hosts and guests. Always looking for new team members! Get in touch: careers@stellar-trust.com
          */}
          <span className="bg-yellow-200 text-black px-2 py-1 rounded font-semibold">
            Translator needed: Please submit a full English translation for this page!
          </span>
        </p>
      </div>
    </section>
    <Footer />
  </>
);

export default AboutUsEN;
