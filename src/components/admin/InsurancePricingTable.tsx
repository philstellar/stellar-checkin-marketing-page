
import React from "react";
import { useTranslation } from "@/hooks/use-translation";
import { Brush, Image, FileText, PawPrint } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

// Helper for value formatting
const formatValue = (value?: string) =>
  value ? <span className="whitespace-pre-line">{value}</span> : null;

// Helper: returns a centered icon cell
const IconCell = ({ icon }: { icon: React.ReactNode }) => (
  <div className="flex items-center justify-center">{icon}</div>
);

const InsurancePricingTable = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  const header = t("insurance.pricing.header") as any;
  const rows = t("insurance.pricing.rows") as any[];

  // fallback if translations are broken
  if (!header || !rows) return null;

  // Icons for detailed coverage
  const rowIcons = [
    null, // Price row - no icon
    null, // Coverage (text only)
    null, // Recourse - no icon
    <Brush className="h-6 w-6 text-black rounded-[5px]" />, // Additional cleaning
    <Image className="h-6 w-6 text-black rounded-[5px]" />, // Art & Valuables
    <FileText className="h-6 w-6 text-black rounded-[5px]" />, // Rental loss
    <PawPrint className="h-6 w-6 text-black rounded-[5px]" />, // Pet damage
  ];

  // Text for the new heading cell that covers additional coverage (up to)
  const ADDITIONAL_COVERAGE_LABEL =
    rows[3]?.label ||
    t("insurance.pricing.rows.3.label") ||
    "Additional coverage\n(up to)";

  // Mobile optimized view
  if (isMobile) {
    return (
      <div className="bg-white rounded-xl shadow p-4 mb-6">
        <h3 className="text-xl font-semibold mb-4">{header.coverage}</h3>
        
        {/* Price per night */}
        <div className="mb-6">
          <div className="font-medium border-b pb-2 mb-2">{rows[0]?.label}</div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="p-2 bg-gray-50 rounded">{rows[0]?.value1}</div>
            <div className="p-2 bg-gray-50 rounded">{rows[0]?.value2}</div>
            <div className="p-2 bg-gray-50 rounded">{rows[0]?.value3}</div>
          </div>
        </div>
        
        {/* Coverage & Recourse */}
        {[1, 2].map((i) => (
          <div key={i} className="mb-6">
            <div className="font-medium border-b pb-2 mb-2">{rows[i]?.label}</div>
            <div className="p-2 bg-gray-50 rounded text-center">
              {formatValue(rows[i]?.description)}
            </div>
          </div>
        ))}
        
        {/* Additional Coverage Section */}
        <div className="mb-6">
          <div className="font-medium border-b pb-2 mb-4">{ADDITIONAL_COVERAGE_LABEL}</div>
          
          {[3, 4, 5, 6].map((i) => (
            <div key={i} className="mb-4 last:mb-0">
              <div className="flex items-center mb-2">
                {rowIcons[i] && <div className="mr-2">{rowIcons[i]}</div>}
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2 bg-gray-50 rounded">{formatValue(rows[i]?.description)}</div>
                <div className="p-2 bg-gray-50 rounded">{formatValue(rows[i]?.description)}</div>
                <div className="p-2 bg-gray-50 rounded">{formatValue(rows[i]?.description)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Desktop view (original table)
  return (
    <div className="bg-white rounded-xl shadow p-4 md:p-8 mb-6 overflow-x-auto">
      <table className="w-full text-[15px]">
        <thead>
          <tr>
            <th className="text-left w-[260px] p-4 font-semibold text-lg align-bottom">{header.coverage}</th>
            <th className="text-center p-4 font-bold text-lg align-bottom"></th>
            <th className="text-center p-4 font-bold text-lg align-bottom">{header.amount1}</th>
            <th className="text-center p-4 font-bold text-lg align-bottom">{header.amount2}</th>
            <th className="text-center p-4 font-bold text-lg align-bottom">{header.amount3}</th>
          </tr>
        </thead>
        <tbody>
          {/* Price per night */}
          <tr className="border-t">
            <td className="p-4 text-left align-middle">{formatValue(rows[0]?.label)}</td>
            <td></td>
            <td className="p-4 align-middle text-center">{rows[0]?.value1}</td>
            <td className="p-4 align-middle text-center">{rows[0]?.value2}</td>
            <td className="p-4 align-middle text-center">{rows[0]?.value3}</td>
          </tr>
          {/* Coverage */}
          <tr className="border-t">
            <td className="p-4 text-left align-middle">{formatValue(rows[1]?.label)}</td>
            <td></td>
            <td className="p-4 align-middle text-center" colSpan={3}>{formatValue(rows[1]?.description)}</td>
          </tr>
          {/* Recourse */}
          <tr className="border-t">
            <td className="p-4 text-left align-middle">{formatValue(rows[2]?.label)}</td>
            <td></td>
            <td className="p-4 align-middle text-center" colSpan={3}>{formatValue(rows[2]?.description)}</td>
          </tr>
          {/* Additional Coverage: rows 3,4,5,6 (4 rows, index 3-6) */}
          {[3, 4, 5, 6].map((i, idx) => (
            <tr key={i} className="border-t">
              {idx === 0 && (
                <td
                  className="p-4 text-left align-middle font-semibold"
                  rowSpan={4}
                  style={{ verticalAlign: "top" }}
                >
                  {/* Keep line break formatting if present */}
                  {formatValue(ADDITIONAL_COVERAGE_LABEL)}
                </td>
              )}
              <td className="p-4 align-middle text-center">
                {rowIcons[i] ? <IconCell icon={rowIcons[i]} /> : null}
              </td>
              {/* Each of the next three columns: up to X € or description */}
              <td className="p-4 align-middle text-center">
                {formatValue(rows[i]?.description || "")}
              </td>
              <td className="p-4 align-middle text-center">
                {formatValue(rows[i]?.description || "")}
              </td>
              <td className="p-4 align-middle text-center">
                {formatValue(rows[i]?.description || "")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InsurancePricingTable;
