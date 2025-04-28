
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
      <Check className="h-5 w-5 text-apple" />
    ) : (
      <X className="h-5 w-5 text-red-300" />
    )}
  </div>
);

export const ComparisonMobileView = ({ features, schutzBeiMietausfallIndex }: Props) => {
  const { t } = useTranslation();
  
  return (
    <div className="overflow-x-auto -mx-4 px-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[140px] font-bold text-black text-sm">
              {t('insuranceDetail.comparison.header.feature')}
            </TableHead>
            <TableHead className="text-center w-[80px]">
              <img 
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://stellar-trust.com/wp-content/uploads/2024/11/stellar_tourism_innovations_gmbh_logo.jpeg" 
                alt="Stellar" 
                className="h-8 w-auto mx-auto object-contain overflow-hidden rounded-lg shadow-sm" 
              />
            </TableHead>
            <TableHead className="text-center w-[80px]">
              <img 
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://stellar-trust.com/wp-content/uploads/2025/03/Airbnb-1.png" 
                alt="Airbnb" 
                className="h-8 w-auto mx-auto object-contain overflow-hidden rounded-lg shadow-sm" 
              />
            </TableHead>
            <TableHead className="text-center w-[80px]">
              <img 
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://stellar-trust.com/wp-content/uploads/2025/03/Booking.com_-1.png" 
                alt="Booking.com" 
                className="h-8 w-auto mx-auto object-contain overflow-hidden rounded-lg shadow-sm" 
              />
            </TableHead>
            <TableHead className="text-center w-[80px] text-sm font-bold text-black">
              {t('insuranceDetail.comparison.header.classic')}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {features.map((feature, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium text-sm">
                {feature.name}
              </TableCell>
              <TableCell className="p-2">
                <StatusIcon status={feature.stellar} />
              </TableCell>
              <TableCell className="p-2">
                {index === schutzBeiMietausfallIndex ? (
                  <StatusIcon status={false} />
                ) : (
                  <StatusIcon status={feature.airbnb} />
                )}
              </TableCell>
              <TableCell className="p-2">
                <StatusIcon status={feature.booking} />
              </TableCell>
              <TableCell className="p-2">
                <StatusIcon status={feature.classic} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
