import React from 'react';
import { useTranslation } from '@/hooks/use-translation';
import { UserCheck, BadgeCheck, Star, Shield, Globe2 } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import Header from '../Header';
import Footer from '../Footer';
import CTAButton from '../CTAButton';
import TrustBadgeFAQ from './TrustBadgeFAQ';
import TrustBadgeCertificates from './TrustBadgeCertificates';
import LogoCarouselAutoplay from '../LogoCarouselAutoplay';

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
  },
  {
    src: "/lovable-uploads/404c2219-9b9a-4ebd-b8ec-aea63d21d6d7.png",
    alt: "Plau Lagoons",
    width: 160
  },
  {
    src: "/lovable-uploads/3f0f71e5-0006-4019-9e50-f5c4354ed3fe.png",
    alt: "Berlin Mitte Experience",
    width: 180
  },
  {
    src: "/lovable-uploads/9451653b-0793-4645-8889-3222d4c98e84.png",
    alt: "Fairienglück",
    width: 160
  }
];

const TrustBadgePage = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-floral to-floral-400/20"></div>
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4 font-aeonik">
                {t('trustBadge.headline1')}
                <span style={{ color: 'rgb(164 195 9)' }}>{t('trustBadge.headline2')}</span>
                {t('trustBadge.headline3')}
              </h1>
              <p className="text-lg text-black mb-8 max-w-lg font-aeonik">
                {t('trustBadge.content')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton size="lg" className="bg-apple hover:bg-apple-600 font-aeonik">
                  <UserCheck className="mr-2 h-4 w-4" /> {t('hero.cta')}
                </CTAButton>
              </div>
            </div>
            <div className="order-1 md:order-last flex justify-center">
              <img 
                src="/lovable-uploads/3098a042-bbb0-4607-b03f-beb60fdc911d.png"
                alt="Trust Badge Preview"
                className="w-full h-auto object-contain max-w-[800px]"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Logo Carousel Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 text-royal">
            {t('partners.title')}
          </h2>
          <LogoCarouselAutoplay logos={testimonialLogos} />
        </div>
      </section>

      {/* Verification Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-royal">
              {t('trustBadge.verification.title')}
              <div className="mt-2 mx-auto h-1 w-24 bg-apple rounded-full"></div>
            </h2>
            <p className="text-lg text-royal-700 mb-4">{t('trustBadge.verification.subtitle')}</p>
            <p className="text-royal-700">{t('trustBadge.verification.customization')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white">
              <CardContent className="p-6">
                <Shield className="h-8 w-8 text-apple mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-royal">{t('trustBadge.trust.title')}</h3>
                <p className="text-royal-700">{t('trustBadge.trust.description')}</p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <Star className="h-8 w-8 text-apple mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-royal">{t('trustBadge.reviews.title')}</h3>
                <p className="text-royal-700">{t('trustBadge.reviews.description')}</p>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-6">
                <Globe2 className="h-8 w-8 text-apple mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-royal">{t('trustBadge.reviews.stats')}</h3>
                <p className="text-royal-700">{t('trustBadge.reviews.importance')}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="py-16 bg-floral">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6 text-royal text-center">
              {t('trustBadge.preview.title')}
              <div className="mt-2 mx-auto h-1 w-24 bg-apple rounded-full"></div>
            </h2>
            <p className="text-lg text-royal-700 mb-6">{t('trustBadge.preview.intro')}</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-1"><BadgeCheck className="h-5 w-5 text-apple" /></span>
                <p className="text-royal-700">{t('trustBadge.preview.level1')}</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1"><BadgeCheck className="h-5 w-5 text-apple" /></span>
                <p className="text-royal-700">{t('trustBadge.preview.level2')}</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1"><BadgeCheck className="h-5 w-5 text-apple" /></span>
                <p className="text-royal-700">{t('trustBadge.preview.level3')}</p>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <CTAButton size="lg" className="bg-apple hover:bg-apple-600 font-aeonik">
              <UserCheck className="mr-2 h-4 w-4" /> {t('trustBadge.cta')}
            </CTAButton>
          </div>
        </div>
      </section>
      
      <TrustBadgeCertificates />
      
      <div className="text-center py-16 bg-white">
        <CTAButton size="lg" className="bg-apple hover:bg-apple-600 font-aeonik">
          <UserCheck className="mr-2 h-4 w-4" /> {t('trustBadge.cta')}
        </CTAButton>
      </div>
      
      <TrustBadgeFAQ />
      
      <Footer />
    </>
  );
};

export default TrustBadgePage;
