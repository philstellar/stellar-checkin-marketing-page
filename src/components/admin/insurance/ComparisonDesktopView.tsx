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
      <Check className="h-6 w-6 text-apple" />
    ) : (
      <X className="h-6 w-6 text-red-300" />
    )}
  </div>
);

export const ComparisonDesktopView = ({ features, schutzBeiMietausfallIndex }: Props) => {
  const { t } = useTranslation();
  
  return (
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
              />
            </div>
          </TableHead>
          <TableHead className="w-[180px] text-center whitespace-normal break-words">
            <div className="flex justify-center">
              <img 
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://stellar-trust.com/wp-content/uploads/2025/03/Airbnb-1.png" 
                alt="Airbnb" 
                className="h-12 w-auto mx-auto object-contain my-4 overflow-hidden rounded-lg shadow-sm" 
              />
            </div>
          </TableHead>
          <TableHead className="w-[180px] text-center whitespace-normal break-words">
            <div className="flex justify-center">
              <img 
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://stellar-trust.com/wp-content/uploads/2025/03/Booking.com_-1.png" 
                alt="Booking.com" 
                className="h-12 w-auto mx-auto object-contain my-4 overflow-hidden rounded-lg shadow-sm" 
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
                <div className="flex justify-center items-center h-full">
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
  );
};
