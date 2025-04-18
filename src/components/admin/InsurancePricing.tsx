
import React from 'react';
import { useTranslation } from '@/hooks/use-translation';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const InsurancePricing = () => {
  const { t } = useTranslation();
  
  return (
    <div className="w-full">
      <div className="rounded-lg border bg-white w-full">
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[300px] font-bold text-black text-left">
                {t('insurance.pricing.coverage')}
              </TableHead>
              <TableHead className="text-left font-bold text-black">€ 5.000</TableHead>
              <TableHead className="text-left font-bold text-black">€ 10.000</TableHead>
              <TableHead className="text-left font-bold text-black">€ 50.000</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium text-left">{t('insurance.pricing.pricePerNight')}</TableCell>
              <TableCell className="text-left">€ 2,82</TableCell>
              <TableCell className="text-left">€ 3,62</TableCell>
              <TableCell className="text-left">€ 4,91</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-left">{t('insurance.pricing.coverageDetails')}</TableCell>
              <TableCell colSpan={3} className="text-left">
                {t('insurance.pricing.inventoryDamageFirstLine')}<br />
                {t('insurance.pricing.inventoryDamageSecondLine')}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-left">{t('insurance.pricing.guestRecourse')}</TableCell>
              <TableCell colSpan={3} className="text-left">
                {t('insurance.pricing.intentionalDamage')}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center text-center text-lg text-royal-700 mt-6">
        <p>Mit unserem Pay-per-Night-Modell zahlst du nur, wenn du Gäste hast. Und du kannst jederzeit kündigen.</p>
      </div>
    </div>
  );
};

export default InsurancePricing;
