
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import ProductsSection from '@/components/home/ProductsSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import CTASection from '@/components/home/CTASection';
import LogoCarousel from '@/components/LogoCarousel';
import LanguageSuggestionDialog from '@/components/LanguageSuggestionDialog';

// Initialize animation on scroll effect for data-aos attributes
const initializeAOS = () => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const animation = element.getAttribute('data-aos');
        const delay = element.getAttribute('data-aos-delay') || '0';
        
        setTimeout(() => {
          if (animation === 'fade-up') {
            element.classList.add('animate-fade-in');
          } else if (animation === 'fade-left') {
            element.classList.add('animate-slide-in');
          }
          // Fix: Properly cast element to HTMLElement before accessing style property
          if (element instanceof HTMLElement) {
            element.style.opacity = '1';
          }
        }, parseInt(delay));
        
        observer.unobserve(element);
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersect, observerOptions);
  const elements = document.querySelectorAll('[data-aos]');
  
  elements.forEach(element => {
    // Fix: Properly cast element to HTMLElement before accessing style property
    if (element instanceof HTMLElement) {
      element.style.opacity = '0';
    }
    observer.observe(element);
  });
};

const Home = () => {
  useEffect(() => {
    // Initialize AOS-like functionality
    initializeAOS();
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ProductsSection />
        <FeaturesSection />
        <LogoCarousel />
        <CTASection />
      </main>
      <Footer />
      <LanguageSuggestionDialog />
    </div>
  );
};

export default Home;
