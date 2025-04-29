
import React from 'react';
import { useTranslation } from '@/hooks/use-translation';
import OptimizedImage from './OptimizedImage';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFoundHero = () => {
  const { t, currentLanguage } = useTranslation();
  
  return (
    <div className="relative overflow-hidden bg-royal-800 text-white py-20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px' 
        }}></div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-8">
        {/* Text content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-6xl md:text-7xl font-bold mb-4">
            <span className="text-apple block mb-2">404</span>
            <span>{t('notFound.title')}</span>
          </h1>
          <p className="text-xl text-royal-200 mb-8 max-w-lg">
            {t('notFound.subtitle')}
          </p>
          <Button asChild className="bg-apple hover:bg-apple-600 text-white">
            <Link to={`/${currentLanguage}/`} className="inline-flex items-center">
              <Home className="mr-2 h-4 w-4" />
              {t('notFound.homeButton')}
            </Link>
          </Button>
        </div>
        
        {/* Image */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <OptimizedImage 
            src="/lovable-uploads/892b5bc5-bbb1-43f3-81f3-3913b8ca3db6.png"
            alt="404 illustration"
            width={500}
            height={400}
            className="w-full h-auto max-w-md mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFoundHero;
