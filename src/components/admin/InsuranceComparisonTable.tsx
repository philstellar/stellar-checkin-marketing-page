
import React from 'react';
import { Check, X } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useTranslation } from '@/hooks/use-translation';
import { useIsMobile } from '@/hooks/use-mobile';

const InsuranceComparisonTable = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  
  const features = [
    {
      name: t('insurance.comparison.rows.0'),
      stellar: true,
      airbnb: false,
      booking: false,
      classic: false,
    },
    {
      name: t('insurance.comparison.rows.1'),
      stellar: true,
      airbnb: true,
      booking: false,
      classic: false,
    },
    {
      name: t('insurance.comparison.rows.2'),
      stellar: true,
      airbnb: false,
      booking: false,
      classic: false,
    },
    {
      name: t('insurance.comparison.rows.3'),
      stellar: true,
      airbnb: true,
      booking: false,
      classic: false,
    },
    {
      name: t('insurance.comparison.rows.4'),
      stellar: true,
      airbnb: false,
      booking: false,
      classic: false,
    },
  ];

  const StatusIcon = ({ status }: { status: boolean }) => {
    return status ? (
      <div className="flex justify-center">
        <Check className="h-5 w-5 md:h-6 md:w-6 text-apple" />
      </div>
    ) : (
      <div className="flex justify-center">
        <X className="h-5 w-5 md:h-6 md:w-6 text-red-300" />
      </div>
    );
  };

  const schutzBeiMietausfallIndex = 2;

  // Mobile view - card-based layout
  if (isMobile) {
    return (
      <div className="space-y-4 px-2">
        <div className="bg-white p-4 rounded-lg border shadow-sm">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://stellar-trust.com/wp-content/uploads/2024/11/stellar_tourism_innovations_gmbh_logo.jpeg" 
              alt="Stellar" 
              className="h-10 w-auto object-contain rounded-lg shadow-sm" 
            />
          </div>
          
          <div className="space-y-3">
            {features.map((feature, i) => (
              <div key={i} className="flex justify-between items-center border-b pb-2 last:border-0">
                <span className="text-sm font-medium pr-2">{feature.name}</span>
                <StatusIcon status={feature.stellar} />
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white p-4 rounded-lg border shadow-sm">
            <div className="flex items-center justify-center mb-4">
              <img 
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://stellar-trust.com/wp-content/uploads/2025/03/Airbnb-1.png" 
                alt="Airbnb" 
                className="h-10 w-auto object-contain rounded-lg shadow-sm" 
              />
            </div>
            
            <div className="space-y-3">
              {features.map((feature, i) => (
                <div key={i} className="flex justify-between items-center border-b pb-2 last:border-0">
                  <span className="text-sm font-medium pr-2">{feature.name}</span>
                  {i === schutzBeiMietausfallIndex ? (
                    <div className="flex justify-center">
                      <X className="h-5 w-5 text-red-300" />
                    </div>
                  ) : (
                    <StatusIcon status={feature.airbnb} />
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border shadow-sm">
            <div className="flex items-center justify-center mb-4">
              <img 
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://stellar-trust.com/wp-content/uploads/2025/03/Booking.com_-1.png" 
                alt="Booking.com" 
                className="h-10 w-auto object-contain rounded-lg shadow-sm" 
              />
            </div>
            
            <div className="space-y-3">
              {features.map((feature, i) => (
                <div key={i} className="flex justify-between items-center border-b pb-2 last:border-0">
                  <span className="text-sm font-medium pr-2">{feature.name}</span>
                  <StatusIcon status={feature.booking} />
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border shadow-sm">
            <div className="flex items-center justify-center mb-4">
              <span className="font-bold text-lg">{t('insurance.comparison.header.classic')}</span>
            </div>
            
            <div className="space-y-3">
              {features.map((feature, i) => (
                <div key={i} className="flex justify-between items-center border-b pb-2 last:border-0">
                  <span className="text-sm font-medium pr-2">{feature.name}</span>
                  <StatusIcon status={feature.classic} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Desktop view - table layout
  return (
    <div className="rounded-lg border bg-white">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[300px] font-bold text-black whitespace-normal break-words">
                {t('insurance.comparison.header.feature')}
              </TableHead>
              <TableHead className="w-[180px] text-center whitespace-normal break-words">
                <div className="flex justify-center">
                  <img 
                    src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://stellar-trust.com/wp-content/uploads/2024/11/stellar_tourism_innovations_gmbh_logo.jpeg" 
                    alt="Stellar" 
                    className="h-12 w-auto mx-auto object-contain my-4 overflow-hidden rounded-lg shadow-sm" 
                    style={{ borderRadius: '0.5rem' }}
                  />
                </div>
              </TableHead>
              <TableHead className="w-[180px] text-center whitespace-normal break-words">
                <div className="flex justify-center">
                  <img 
                    src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://stellar-trust.com/wp-content/uploads/2025/03/Airbnb-1.png" 
                    alt="Airbnb" 
                    className="h-12 w-auto mx-auto object-contain my-4 overflow-hidden rounded-lg shadow-sm" 
                    style={{ borderRadius: '0.5rem' }}
                  />
                </div>
              </TableHead>
              <TableHead className="w-[180px] text-center whitespace-normal break-words">
                <div className="flex justify-center">
                  <img 
                    src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://stellar-trust.com/wp-content/uploads/2025/03/Booking.com_-1.png" 
                    alt="Booking.com" 
                    className="h-12 w-auto mx-auto object-contain my-4 overflow-hidden rounded-lg shadow-sm" 
                    style={{ borderRadius: '0.5rem' }}
                  />
                </div>
              </TableHead>
              <TableHead className="w-[180px] text-center font-bold text-black whitespace-normal break-words">
                {t('insurance.comparison.header.classic')}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {features.map((feature, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium whitespace-normal break-words">{feature.name}</TableCell>
                <TableCell className="w-[180px] whitespace-normal break-words">
                  <StatusIcon status={feature.stellar} />
                </TableCell>
                <TableCell className="w-[180px] whitespace-normal break-words">
                  {index === schutzBeiMietausfallIndex ? (
                    <div className="flex justify-center">
                      <X className="h-6 w-6 text-red-300" />
                    </div>
                  ) : (
                    <StatusIcon status={feature.airbnb} />
                  )}
                </TableCell>
                <TableCell className="w-[180px] whitespace-normal break-words">
                  <StatusIcon status={feature.booking} />
                </TableCell>
                <TableCell className="w-[180px] whitespace-normal break-words">
                  <StatusIcon status={feature.classic} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default InsuranceComparisonTable;
