
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
  centerTitle?: boolean;
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
  centerTitle = false,
}) => {
  return (
    <section id={id} className={`py-20 ${bgColor}`}>
      <div className="container-custom">
        <div className={`grid grid-cols-1 ${!fullWidth && image ? 'lg:grid-cols-2' : ''} gap-12 items-center`}>
          <div className={fullWidth ? 'max-w-full w-full' : ''}>
            <div className={`${centerTitle ? 'text-center mx-auto max-w-3xl' : ''} mb-10`}>
              <h2 className={`text-3xl font-bold mb-4 text-[#0f2661] ${centerTitle ? 'mx-auto' : ''}`}>
                {title}
                {centerTitle && (
                  <div className="mt-2 mx-auto h-1 w-24 bg-[#0f2661] rounded-full"></div>
                )}
              </h2>
              <p className={`text-lg text-gray-600 ${centerTitle ? 'mx-auto max-w-2xl' : ''}`}>{description}</p>
            </div>
            
            <div className={`grid grid-cols-1 ${fullWidth ? 'md:grid-cols-4' : 'md:grid-cols-2'} gap-8`}>
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-start">
                  <div className="flex-shrink-0 h-14 w-14 rounded-xl bg-[#eef1f8] flex items-center justify-center text-[#0f2661] mb-4">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-[#0f2661]">{feature.title}</h3>
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
                className="rounded-lg shadow-lg w-full h-auto transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
