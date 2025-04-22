import React from "react";
import { useTranslation } from "@/hooks/use-translation";
import { Brush, Image, FileText, PawPrint } from "lucide-react";

const formatValue = (value?: string) =>
  value ? (
    <span className="whitespace-pre-line">{value}</span>
  ) : null;

// Helper: returns a centered icon cell
const IconCell = ({ icon }: { icon: React.ReactNode }) => (
  <div className="flex items-center justify-center">{icon}</div>
);

const InsurancePricingTable = () => {
  const { t } = useTranslation();
  const header = t("insurance.pricing.header") as any;
  const rows = t("insurance.pricing.rows") as any[];

  // fallback if translations are broken
  if (!header || !rows) return null;

  // Icons for detailed coverage
  const rowIcons = [
    null, // Price row - no icon
    null, // Coverage (text only)
    null, // Recourse - no icon
    <Brush className="h-6 w-6 text-black" />, // Additional cleaning (replaced Broom with Brush)
    <Image className="h-6 w-6 text-black" />, // Art & Valuables
    <FileText className="h-6 w-6 text-black" />, // Rental loss
    <PawPrint className="h-6 w-6 text-black" />, // Pet damage
  ];

  return (
    <div className="bg-white rounded-xl shadow p-4 md:p-8 mb-6 overflow-x-auto">
      <table className="w-full text-[15px]">
        <thead>
          <tr>
            <th className="text-left w-[260px] p-4 font-semibold text-lg align-bottom">{header.coverage}</th>
            <th className="text-center p-4 font-bold text-lg align-bottom">{header.amount1}</th>
            <th className="text-center p-4 font-bold text-lg align-bottom">{header.amount2}</th>
            <th className="text-center p-4 font-bold text-lg align-bottom">{header.amount3}</th>
          </tr>
        </thead>
        <tbody>
          {/* Price per night */}
          <tr className="border-t">
            <td className="p-4 align-middle">{formatValue(rows[0]?.label)}</td>
            <td className="p-4 align-middle text-center">{rows[0]?.value1}</td>
            <td className="p-4 align-middle text-center">{rows[0]?.value2}</td>
            <td className="p-4 align-middle text-center">{rows[0]?.value3}</td>
          </tr>
          {/* Coverage */}
          <tr className="border-t">
            <td className="p-4 align-middle">{formatValue(rows[1]?.label)}</td>
            <td className="p-4 align-middle text-center" colSpan={3}>{formatValue(rows[1]?.description)}</td>
          </tr>
          {/* Recourse */}
          <tr className="border-t">
            <td className="p-4 align-middle">{formatValue(rows[2]?.label)}</td>
            <td className="p-4 align-middle text-center" colSpan={3}>{formatValue(rows[2]?.description)}</td>
          </tr>
          {/* Additional Coverage */}
          {/* We handle each additional row (icon + coverage per column) */}
          {[3,4,5,6].map((i) => (
            <tr key={i} className="border-t">
              <td className="p-4 align-middle">
                {rowIcons[i] ? <IconCell icon={rowIcons[i]} /> : null}
              </td>
              {/* Fill coverage description in correct column */}
              {[0,1,2].map((col) => (
                <td
                  key={col}
                  className="p-4 align-middle text-center"
                >
                  {formatValue(rows[i]?.description || "")}
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
