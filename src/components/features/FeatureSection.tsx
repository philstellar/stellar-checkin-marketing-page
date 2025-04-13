
import React from 'react';

export interface FeatureSectionProps {
  id: string;
  title: string;
  description: string;
  features: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
  image?: string;
  imageAlt: string;
  bgColor?: string;
  fullWidth?: boolean;
  centerTitle?: boolean; // New optional prop
}

export const FeatureSection: React.FC<FeatureSectionProps> = ({
  id,
  title,
  description,
  features,
  image,
  imageAlt,
  bgColor = 'bg-white',
  fullWidth = false,
  centerTitle = false, // Default to false
}) => {
  return (
    <section id={id} className={`py-16 ${bgColor}`}>
      <div className="container-custom">
        <div className={`grid grid-cols-1 ${!fullWidth && image ? 'lg:grid-cols-2' : ''} gap-12 items-center`}>
          <div className={fullWidth ? 'max-w-full w-full' : ''}>
            <h2 className={`text-3xl font-bold mb-4 text-stellar-600 ${centerTitle ? 'text-center' : ''} relative inline-block`}>
              {title}
              {centerTitle && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-stellar-300"></div>
              )}
            </h2>
            <p className={`text-lg text-gray-600 mb-8 ${centerTitle ? 'text-center' : ''}`}>{description}</p>
            
            <div className={`grid grid-cols-1 ${fullWidth ? 'md:grid-cols-4' : 'md:grid-cols-2'} gap-6`}>
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-lg bg-stellar-100 flex items-center justify-center text-stellar-600">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-stellar-600">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {image && !fullWidth && (
            <div className="order-first lg:order-last">
              <img
                src={image}
                alt={imageAlt}
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
