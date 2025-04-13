
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

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
        <div className={`${centerTitle ? 'text-center mx-auto max-w-3xl' : ''} mb-10`}>
          <h2 className={`text-3xl font-bold mb-4 text-stellar-600 ${centerTitle ? 'mx-auto' : ''}`}>
            {title}
            {centerTitle && (
              <div className="mt-2 mx-auto h-1 w-24 bg-apple rounded-full"></div>
            )}
          </h2>
          <p className={`text-lg text-gray-600 ${centerTitle ? 'mx-auto max-w-2xl' : ''}`}>{description}</p>
        </div>
        
        <div className={`grid grid-cols-1 ${fullWidth ? 'md:grid-cols-4' : image ? 'lg:grid-cols-2' : ''} gap-8`}>
          <div className={fullWidth ? 'max-w-full w-full col-span-full' : ''}>
            <div className={`grid grid-cols-1 ${fullWidth ? 'md:grid-cols-4' : 'md:grid-cols-2'} gap-6`}>
              {features.map((feature, index) => (
                <Card key={index} className="h-full transition-all duration-300 hover:shadow-lg border border-gray-200">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-4">
                      <div className={cn("rounded-lg p-2.5 bg-[#eef1f8] text-royal")}>
                        {feature.icon}
                      </div>
                      <CardTitle className="text-lg font-semibold text-royal">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
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
