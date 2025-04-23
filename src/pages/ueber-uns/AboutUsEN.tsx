
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
          Stellar is based in Berlin and our team of short-term rental, insurance, and tech experts is on a mission: providing an outstanding experience for hosts and guests. Always looking for new team members! Get in touch: careers@stellar-trust.com
        </p>
        {/* Consider translating and customizing content here */}
      </div>
    </section>
    <Footer />
  </>
);

export default AboutUsEN;
