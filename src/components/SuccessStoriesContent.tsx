
import React from 'react';
import { Award, Home } from 'lucide-react';
import { Card } from "@/components/ui/card";
import LogoCarouselAutoplay from '@/components/LogoCarouselAutoplay';
import CTAButton from '@/components/CTAButton';
import OptimizedImage from '@/components/OptimizedImage';
import { useTranslation } from '@/hooks/use-translation';
import parse from 'html-react-parser';

const SuccessStoriesContent: React.FC = () => {
  const { t } = useTranslation();
  
  const title = t('successStories.title');
  const subtitle = t('successStories.subtitle');
  const clientsTitle = t('successStories.clientsTitle');
  const sectionTitle = t('successStories.sectionTitle');
  const propertiesText = t('successStories.properties');
  const clientSince = t('successStories.clientSince');
  const ctaText = t('successStories.cta');
  
  const testimonials = t('successStories.testimonials');
  const testimonialLogos = t('successStories.testimonialLogos');
  
  return (
    <>
      <section className="pt-24 pb-12 md:pt-40 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-white"></div>
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4 font-aeonik">
                {parse(title)}
              </h1>
              <p className="text-lg text-black mb-8 max-w-lg font-aeonik">
                {subtitle}
              </p>
              <div className="mb-8">
                <CTAButton size="lg" className="bg-apple hover:bg-apple-600 font-aeonik">
                  {ctaText}
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 text-royal">
            {clientsTitle}
          </h2>
          <LogoCarouselAutoplay logos={testimonialLogos} />
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-12">
            <Award className="h-8 w-8 text-apple" />
            <h2 className="text-3xl font-bold text-royal inline-block relative">
              {sectionTitle}
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
                      {testimonial.properties && (
                        <div className="flex items-center gap-1">
                          <Home className="h-4 w-4" />
                          <span className="text-left">
                            {testimonial.properties} {propertiesText}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    {testimonial.joinedYear && (
                      <div className="text-sm text-gray-500 mt-2">
                        {clientSince} {testimonial.joinedYear}
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SuccessStoriesContent;
