
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from '@/hooks/use-translation';

const images = [
  {
    id: 1,
    src: "/lovable-uploads/f101aff5-a8ea-4ece-8418-e056160aee9b.png",
    alt: "Trust Badge Level 1"
  },
  {
    id: 2,
    src: "/lovable-uploads/722eb832-278d-42bb-9d0f-3218fa6ec245.png",
    alt: "Trust Badge Level 2"
  },
  {
    id: 3,
    src: "/lovable-uploads/60c2be19-14df-4079-894e-f1eb9a053317.png",
    alt: "Trust Badge Level 3"
  },
  {
    id: 4,
    src: "/lovable-uploads/94566704-53c8-4acd-9bb2-009a3c46a73c.png",
    alt: "Trust Badge Level 4"
  }
];

export const TrustBadgeLevels = () => {
  const { t } = useTranslation();
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer);
  }, []);

  // Preload images
  useEffect(() => {
    const imagePromises = images.map(img => {
      return new Promise((resolve) => {
        const image = new Image();
        image.src = img.src;
        image.onload = resolve;
      });
    });

    Promise.all(imagePromises).then(() => {
      setIsLoaded(true);
    });
  }, []);

  return (
    <div className="container-custom py-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6 text-center mb-12">
          <h3 className="text-2xl font-semibold text-royal mb-8">
            {t('trustBadge.preview.title')}
          </h3>
          <div className="space-y-4 text-left mb-12">
            <p className="text-royal-700">
              {t('trustBadge.preview.level1')}
            </p>
            <p className="text-royal-700">
              {t('trustBadge.preview.level2')}
            </p>
            <p className="text-royal-700">
              {t('trustBadge.preview.level3')}
            </p>
          </div>
        </div>
        
        <div className="relative h-[600px] w-full rounded-lg overflow-hidden">
          {isLoaded ? (
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                src={images[currentImage].src}
                alt={images[currentImage].alt}
                className="absolute inset-0 w-full h-full object-contain rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                loading="eager"
                decoding="async"
              />
            </AnimatePresence>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
              <div className="w-12 h-12 border-4 border-apple border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
