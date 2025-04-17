
import React from 'react';
import { useTranslation } from '@/hooks/use-translation';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const InsurancePricing = () => {
  const { t } = useTranslation();
  
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>{t('insurance.pricing.coverage')}</TableHead>
            <TableHead>€ 5.000</TableHead>
            <TableHead>€ 10.000</TableHead>
            <TableHead>€ 50.000</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>{t('insurance.pricing.pricePerNight')}</TableCell>
            <TableCell>€ 2,82</TableCell>
            <TableCell>€ 3,62</TableCell>
            <TableCell>€ 4,91</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{t('insurance.pricing.coverageDetails')}</TableCell>
            <TableCell colSpan={3}>{t('insurance.pricing.inventoryDamage')}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{t('insurance.pricing.guestRecourse')}</TableCell>
            <TableCell colSpan={3}>{t('insurance.pricing.intentionalDamage')}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default InsurancePricing;
