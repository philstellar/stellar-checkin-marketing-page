
import React from 'react';
import { Check, X } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface ComparisonFeature {
  name: string;
  stellar: boolean;
  airbnb: boolean;
  booking: boolean;
  classic: boolean;
}

interface Props {
  features: ComparisonFeature[];
  schutzBeiMietausfallIndex: number;
}

const StatusIcon = ({ status }: { status: boolean }) => (
  <div className="flex justify-center items-center h-full">
    {status ? (
      <Check className="h-6 w-6 text-apple" />
    ) : (
      <X className="h-6 w-6 text-red-300" />
    )}
  </div>
);

export const ComparisonMobileView = ({ features, schutzBeiMietausfallIndex }: Props) => {
  return (
    <div className="space-y-4">
      {features.map((feature, index) => (
        <Card key={index} className="overflow-hidden">
          <CardContent className="p-4">
            <div className="font-medium mb-4">{feature.name}</div>
            <div className="grid grid-cols-4 gap-2">
              <div className="flex flex-col items-center">
                <img 
                  src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://stellar-trust.com/wp-content/uploads/2024/11/stellar_tourism_innovations_gmbh_logo.jpeg" 
                  alt="Stellar" 
                  className="h-8 w-auto object-contain mb-2" 
                />
                <StatusIcon status={feature.stellar} />
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://stellar-trust.com/wp-content/uploads/2025/03/Airbnb-1.png" 
                  alt="Airbnb" 
                  className="h-8 w-auto object-contain mb-2" 
                />
                {index === schutzBeiMietausfallIndex ? (
                  <div className="flex justify-center items-center h-full">
                    <X className="h-6 w-6 text-red-300" />
                  </div>
                ) : (
                  <StatusIcon status={feature.airbnb} />
                )}
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://stellar-trust.com/wp-content/uploads/2025/03/Booking.com_-1.png" 
                  alt="Booking.com" 
                  className="h-8 w-auto object-contain mb-2" 
                />
                <StatusIcon status={feature.booking} />
              </div>
              <div className="flex flex-col items-center">
                <div className="h-8 flex items-center justify-center mb-2 text-xs font-medium text-center">
                  Hausrat
                  Versicherung
                </div>
                <StatusIcon status={feature.classic} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
