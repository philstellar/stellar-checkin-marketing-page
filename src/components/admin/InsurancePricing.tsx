
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Brush, Banknote, Paintbrush, PawPrint } from 'lucide-react';

interface InsurancePricingProps {
  t: (key: string) => string;
}

const InsurancePricing = ({ t }: InsurancePricingProps) => {
  return (
    <div className="w-full">
      <div className="rounded-lg border bg-white w-full overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[300px] font-bold text-black text-left">{t('insurance.pricing.header.coverage')}</TableHead>
              <TableHead className="text-center font-bold text-black">{t('insurance.pricing.header.amount1')}</TableHead>
              <TableHead className="text-center font-bold text-black">{t('insurance.pricing.header.amount2')}</TableHead>
              <TableHead className="text-center font-bold text-black">{t('insurance.pricing.header.amount3')}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium text-left">
                {t('insurance.pricing.rows.0.label')}
              </TableCell>
              <TableCell className="text-center">{t('insurance.pricing.rows.0.value1')}</TableCell>
              <TableCell className="text-center">{t('insurance.pricing.rows.0.value2')}</TableCell>
              <TableCell className="text-center">{t('insurance.pricing.rows.0.value3')}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-left">{t('insurance.pricing.rows.1.label')}</TableCell>
              <TableCell colSpan={3} className="text-left">{t('insurance.pricing.rows.1.description')}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-left">{t('insurance.pricing.rows.2.label')}</TableCell>
              <TableCell colSpan={3} className="text-left">{t('insurance.pricing.rows.2.description')}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-left align-top" rowSpan={4}>
                {t('insurance.pricing.rows.3.label')}
              </TableCell>
              <TableCell className="text-left">
                <Paintbrush className="h-6 w-6 mb-2" />
              </TableCell>
              <TableCell colSpan={2} className="text-left">{t('insurance.pricing.rows.3.description')}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-left">
                <Brush className="h-6 w-6 mb-2" />
              </TableCell>
              <TableCell colSpan={2} className="text-left">{t('insurance.pricing.rows.4.description')}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-left">
                <Banknote className="h-6 w-6 mb-2" />
              </TableCell>
              <TableCell colSpan={2} className="text-left">{t('insurance.pricing.rows.5.description')}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-left">
                <PawPrint className="h-6 w-6 mb-2" />
              </TableCell>
              <TableCell colSpan={2} className="text-left">{t('insurance.pricing.rows.6.description')}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default InsurancePricing;
