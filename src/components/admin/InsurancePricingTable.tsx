import React from 'react';
import { Check } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';
import { useIsMobile } from '@/hooks/use-mobile';

const InsurancePricingTable = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  // Define the pricing data structure using translations
  const pricingData = {
    header: {
      coverage: t('insuranceDetail.pricing.header.coverage'),
      tooltip: t('insuranceDetail.pricing.header.tooltip'),
      amounts: [
        t('insuranceDetail.pricing.header.amount1'),
        t('insuranceDetail.pricing.header.amount2'),
        t('insuranceDetail.pricing.header.amount3')
      ]
    },
    rows: [
      {
        label: t('insuranceDetail.pricing.rows.0.label'),
        tooltip: t('insuranceDetail.pricing.rows.0.tooltip'),
        values: [
          t('insuranceDetail.pricing.rows.0.value1'),
          t('insuranceDetail.pricing.rows.0.value2'),
          t('insuranceDetail.pricing.rows.0.value3')
        ],
        description: t('insuranceDetail.pricing.rows.0.description')
      },
      {
        label: t('insuranceDetail.pricing.rows.1.label'),
        tooltip: t('insuranceDetail.pricing.rows.1.tooltip'),
        description: t('insuranceDetail.pricing.rows.1.description')
      },
      {
        label: t('insuranceDetail.pricing.rows.2.label'),
        tooltip: t('insuranceDetail.pricing.rows.2.tooltip'),
        description: t('insuranceDetail.pricing.rows.2.description')
      },
      {
        label: t('insuranceDetail.pricing.rows.3.label'),
        tooltip: t('insuranceDetail.pricing.rows.3.tooltip'),
        description: t('insuranceDetail.pricing.rows.3.description')
      },
      {
        description: t('insuranceDetail.pricing.rows.4.description')
      },
      {
        description: t('insuranceDetail.pricing.rows.5.description')
      },
      {
        description: t('insuranceDetail.pricing.rows.6.description')
      }
    ]
  };

  // Mobile view - each plan as a separate card
  if (isMobile) {
    return (
      <div className="space-y-8 px-4">
        {pricingData.header.amounts.map((amount, planIndex) => (
          <div key={planIndex} className="bg-white rounded-lg border p-6">
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold text-royal">{amount}</h3>
              <p className="text-sm text-royal-600">{pricingData.header.coverage}</p>
            </div>
            
            <div className="space-y-4">
              {/* First row with price */}
              <div className="border-b pb-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{pricingData.rows[0].label}</span>
                  <span className="font-bold text-apple">{pricingData.rows[0].values[planIndex]}</span>
                </div>
                <p className="text-xs text-royal-600 mt-1">{pricingData.rows[0].description}</p>
              </div>

              {/* Rest of the rows */}
              {pricingData.rows.slice(1).map((row, rowIndex) => (
                <div key={rowIndex + 1} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-apple flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{row.description}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Desktop view - traditional pricing table
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="w-1/3 p-4 border-b text-left text-royal font-bold">
              {pricingData.header.coverage}
              <div className="text-xs text-royal-600">{pricingData.header.tooltip}</div>
            </th>
            {pricingData.header.amounts.map((amount, index) => (
              <th key={index} className="w-1/6 p-4 border-b text-center">
                <div className="text-xl font-bold text-royal">{amount}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* First row with prices */}
          <tr>
            <td className="p-4 border-b">
              <div className="font-medium">{pricingData.rows[0].label}</div>
              <div className="text-xs text-royal-600">{pricingData.rows[0].tooltip}</div>
            </td>
            {pricingData.rows[0].values.map((value, index) => (
              <td key={index} className="p-4 border-b text-center">
                <div className="font-bold text-apple">{value}</div>
              </td>
            ))}
          </tr>
          
          {/* Feature rows */}
          {pricingData.rows.slice(1).map((row, rowIndex) => (
            <tr key={rowIndex + 1}>
              <td className="p-4 border-b">
                {row.label && (
                  <>
                    <div className="font-medium">{row.label}</div>
                    {row.tooltip && <div className="text-xs text-royal-600">{row.tooltip}</div>}
                  </>
                )}
              </td>
              
              {pricingData.header.amounts.map((_, planIndex) => (
                <td key={planIndex} className="p-4 border-b text-center">
                  <div className="flex items-center justify-center gap-2">
                    <Check className="h-5 w-5 text-apple" />
                    <span className="text-sm">{row.description}</span>
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InsurancePricingTable;
