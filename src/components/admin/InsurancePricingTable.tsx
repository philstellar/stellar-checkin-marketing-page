
import React from "react";
import { useTranslation } from "@/hooks/use-translation";
import { Brush, Image, FileText, PawPrint, HelpCircle } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Helper for value formatting
const formatValue = (value?: string) => value ? <span className="whitespace-pre-line font-bold text-left text-base">{value}</span> : null;

// Helper: returns a centered icon cell
const IconCell = ({
  icon
}: {
  icon: React.ReactNode;
}) => <div className="flex items-center justify-center">{icon}</div>;

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
    <PawPrint className="h-6 w-6 text-black rounded-[5px]" /> // Pet damage
  ];

  // Text for the new heading cell that covers additional coverage (up to)
  const ADDITIONAL_COVERAGE_LABEL = rows[3]?.label || t("insurance.pricing.rows.3.label") || "Additional coverage\n(up to)";

  // Helper function to render a label with optional tooltip
  const renderLabelWithTooltip = (label: string, tooltipContent?: string) => {
    if (!tooltipContent) return label;
    
    return (
      <div className="flex items-center gap-1">
        <span>{label}</span>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="inline-flex focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <HelpCircle className="w-4 h-4 text-royal-700" />
              </button>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs text-sm p-2 bg-white">
              {tooltipContent}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    );
  };

  if (isMobile) {
    return (
      <div className="container-custom mx-auto">
        <div className="bg-white p-0 mb-6 w-full rounded-none">
          <h3 className="font-medium border-b pb-2 mb-2 text-base px-[16px]">{header.coverage}</h3>

          {/* Maximum coverage amounts */}
          <div className="mb-2 px-4">
            <div className="grid grid-cols-3 gap-2 text-center w-full">
              <div className="p-2 rounded text-lg font-bold bg-gray-50/0">{header.amount1}</div>
              <div className="p-2 rounded text-lg font-bold bg-gray-50/0">{header.amount2}</div>
              <div className="p-2 rounded text-lg font-bold bg-gray-50/0">{header.amount3}</div>
            </div>
          </div>

          {/* Price per night */}
          <div className="mb-6 px-4">
            <div className="font-medium border-b pb-2 mb-2 text-base">
              {renderLabelWithTooltip(rows[0]?.label || "", rows[0]?.tooltip)}
            </div>
            <div className="grid grid-cols-3 gap-2 text-center w-full">
              <div className="text-base font-bold text-gray-700">{rows[0]?.value1}</div>
              <div className="text-base font-bold text-gray-700">{rows[0]?.value2}</div>
              <div className="text-base font-bold text-gray-700">{rows[0]?.value3}</div>
            </div>
          </div>

          {/* Coverage & Recourse */}
          {[1, 2].map(i => (
            <div key={i} className="mb-6 px-4">
              <div className="font-medium border-b pb-2 mb-2 text-base">
                {renderLabelWithTooltip(rows[i]?.label || "", rows[i]?.tooltip)}
              </div>
              <div className="p-2 text-center text-sm bg-white/0 py-[14px] px-0 rounded-none">
                {formatValue(rows[i]?.description)}
              </div>
            </div>
          ))}

          {/* Additional Coverage Section */}
          <div className="mb-6 px-4 bg-white/0 py-0">
            <div className="font-medium border-b pb-2 mb-4 text-base">
              {renderLabelWithTooltip(ADDITIONAL_COVERAGE_LABEL, rows[3]?.tooltip)}
            </div>
            {/* Only one cell per row, icon left, merge all amounts */}
            {[3, 4, 5, 6].map(i => (
              <div key={i} className="mb-4 last:mb-0 flex items-start">
                {rowIcons[i] && (
                  <span className="mr-3 flex-shrink-0">
                    {React.cloneElement(rowIcons[i] as React.ReactElement, {
                      className: "h-6 w-6 text-black rounded-[5px] bg-gray-200 p-1"
                    })}
                  </span>
                )}
                <span className="text-center">
                  {formatValue(rows[i]?.description)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Desktop view
  return (
    <div className="container-custom mx-auto">
      <div className="bg-white p-4 md:p-8 mb-6 w-full overflow-x-auto">
        <table className="w-full text-[15px] min-w-[600px]">
          <thead>
            <tr>
              <th className="text-left w-[260px] p-4 font-semibold text-lg align-bottom">
                {renderLabelWithTooltip(header.coverage, header.tooltip)}
              </th>
              <th className="text-center p-4 font-bold text-lg align-bottom"></th>
              <th className="text-center p-4 font-bold text-lg align-bottom">{header.amount1}</th>
              <th className="text-center p-4 font-bold text-lg align-bottom">{header.amount2}</th>
              <th className="text-center p-4 font-bold text-lg align-bottom">{header.amount3}</th>
            </tr>
          </thead>
          <tbody>
            {/* Price per night */}
            <tr className="border-t">
              <td className="p-4 text-left align-middle">
                {renderLabelWithTooltip(rows[0]?.label || "", rows[0]?.tooltip)}
              </td>
              <td></td>
              <td className="p-4 align-middle text-center">{rows[0]?.value1}</td>
              <td className="p-4 align-middle text-center">{rows[0]?.value2}</td>
              <td className="p-4 align-middle text-center">{rows[0]?.value3}</td>
            </tr>
            {/* Coverage */}
            <tr className="border-t">
              <td className="p-4 text-left align-middle">
                {renderLabelWithTooltip(rows[1]?.label || "", rows[1]?.tooltip)}
              </td>
              <td></td>
              <td className="p-4 align-middle text-center" colSpan={3}>{formatValue(rows[1]?.description)}</td>
            </tr>
            {/* Recourse */}
            <tr className="border-t">
              <td className="p-4 text-left align-middle">
                {renderLabelWithTooltip(rows[2]?.label || "", rows[2]?.tooltip)}
              </td>
              <td></td>
              <td className="p-4 align-middle text-center" colSpan={3}>{formatValue(rows[2]?.description)}</td>
            </tr>
            {/* Additional Coverage: rows 3–6 */}
            {[3, 4, 5, 6].map((i, idx) => (
              <tr key={i} className="border-t">
                {idx === 0 && (
                  <td className="p-4 text-left align-middle font-semibold" rowSpan={4} style={{ verticalAlign: "top" }}>
                    {renderLabelWithTooltip(ADDITIONAL_COVERAGE_LABEL, rows[3]?.tooltip)}
                  </td>
                )}
                <td className="p-4 align-middle text-center">
                  {rowIcons[i] && (
                    <div className="inline-block rounded-[5px] bg-gray-200 p-[2px]">
                      {React.cloneElement(rowIcons[i] as React.ReactElement, {
                        className: "h-6 w-6 text-black rounded-[5px]"
                      })}
                    </div>
                  )}
                </td>
                {/* Merged cell: cover all 3 amount columns */}
                <td className="p-4 align-middle text-center" colSpan={3}>
                  {formatValue(rows[i]?.description || "")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InsurancePricingTable;
