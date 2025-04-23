
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

const InsuranceComparisonTable = () => {
  const { t } = useTranslation();
  
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
      airbnb: false,
      booking: false,
      classic: false,
    },
    {
      name: t('insurance.comparison.rows.2'),
      stellar: true,
      airbnb: true,
      booking: false,
      classic: false,
    },
    {
      name: t('insurance.comparison.rows.3'),
      stellar: true,
      airbnb: false,
      booking: false,
      classic: false,
    },
    {
      name: t('insurance.comparison.rows.4'),
      stellar: true,
      airbnb: true,
      booking: false,
      classic: false,
    },
  ];

  const StatusIcon = ({ status }: { status: boolean }) => {
    return status ? (
      <div className="flex justify-center">
        <Check className="h-6 w-6 text-apple" />
      </div>
    ) : (
      <div className="flex justify-center">
        <X className="h-6 w-6 text-red-300" />
      </div>
    );
  };

  return (
    <div className="rounded-lg border bg-white">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px] font-bold text-black whitespace-normal break-words">
              {t('insurance.comparison.header.feature')}
            </TableHead>
            <TableHead className="w-[180px] text-center whitespace-normal break-words">
              <img 
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://stellar-trust.com/wp-content/uploads/2024/11/stellar_tourism_innovations_gmbh_logo.jpeg" 
                alt="Stellar" 
                className="h-12 w-auto mx-auto object-contain my-4 rounded-lg" 
              />
            </TableHead>
            <TableHead className="w-[180px] text-center whitespace-normal break-words">
              <img 
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://stellar-trust.com/wp-content/uploads/2025/03/Airbnb-1.png" 
                alt="Airbnb" 
                className="h-12 w-auto mx-auto object-contain my-4 rounded-lg" 
              />
            </TableHead>
            <TableHead className="w-[180px] text-center whitespace-normal break-words">
              <img 
                src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://stellar-trust.com/wp-content/uploads/2025/03/Booking.com_-1.png" 
                alt="Booking.com" 
                className="h-12 w-auto mx-auto object-contain my-4 rounded-lg" 
              />
            </TableHead>
            <TableHead className="w-[180px] text-center font-bold text-black whitespace-normal break-words">
              {/* Force wrapping on Klassische Hausratsversicherung */}
              {String(t('insurance.comparison.header.classic'))
                .replace(/\\n|\n/g, '<br />')
                .split('<br />')
                .map((part, i, arr) =>
                  i < arr.length - 1 ? (
                    <React.Fragment key={i}>{part}<br /></React.Fragment>
                  ) : (
                    <React.Fragment key={i}>{part}</React.Fragment>
                  )
                )
              }
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {features.map((feature, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium whitespace-normal break-words">{feature.name}</TableCell>
              <TableCell className="w-[180px] whitespace-normal break-words"><StatusIcon status={feature.stellar} /></TableCell>
              <TableCell className="w-[180px] whitespace-normal break-words"><StatusIcon status={feature.airbnb} /></TableCell>
              <TableCell className="w-[180px] whitespace-normal break-words"><StatusIcon status={feature.booking} /></TableCell>
              <TableCell className="w-[180px] whitespace-normal break-words"><StatusIcon status={feature.classic} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default InsuranceComparisonTable;

