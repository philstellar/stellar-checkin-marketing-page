
import React from 'react';
import { useTranslation } from '@/hooks/use-translation';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const InsurancePricing = () => {
  const { t } = useTranslation();
  
  return (
    <div className="rounded-lg border bg-white">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px] font-bold text-black">
              {t('insurance.pricing.coverage')}
            </TableHead>
            <TableHead className="text-center font-bold text-black">€ 5.000</TableHead>
            <TableHead className="text-center font-bold text-black">€ 10.000</TableHead>
            <TableHead className="text-center font-bold text-black">€ 50.000</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">{t('insurance.pricing.pricePerNight')}</TableCell>
            <TableCell className="text-center">€ 2,82</TableCell>
            <TableCell className="text-center">€ 3,62</TableCell>
            <TableCell className="text-center">€ 4,91</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">{t('insurance.pricing.coverageDetails')}</TableCell>
            <TableCell colSpan={3} className="text-center">
              {t('insurance.pricing.inventoryDamage')}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">{t('insurance.pricing.guestRecourse')}</TableCell>
            <TableCell colSpan={3} className="text-center">
              {t('insurance.pricing.intentionalDamage')}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default InsurancePricing;
