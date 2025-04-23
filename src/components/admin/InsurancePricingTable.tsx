import React from "react";
import { useTranslation } from "@/hooks/use-translation";
import { Brush, Image, FileText, PawPrint } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

// Helper for value formatting
const formatValue = (value?: string) => value ? <span className="whitespace-pre-line">{value}</span> : null;

// Helper: returns a centered icon cell
const IconCell = ({
  icon
}: {
  icon: React.ReactNode;
}) => <div className="flex items-center justify-center">{icon}</div>;
const InsurancePricingTable = () => {
  const {
    t
  } = useTranslation();
  const isMobile = useIsMobile();
  const header = t("insurance.pricing.header") as any;
  const rows = t("insurance.pricing.rows") as any[];

  // fallback if translations are broken
  if (!header || !rows) return null;

  // Icons for detailed coverage
  const rowIcons = [null,
  // Price row - no icon
  null,
  // Coverage (text only)
  null,
  // Recourse - no icon
  <Brush className="h-6 w-6 text-black rounded-[5px]" />,
  // Additional cleaning
  <Image className="h-6 w-6 text-black rounded-[5px]" />,
  // Art & Valuables
  <FileText className="h-6 w-6 text-black rounded-[5px]" />,
  // Rental loss
  <PawPrint className="h-6 w-6 text-black rounded-[5px]" /> // Pet damage
  ];

  // Text for the new heading cell that covers additional coverage (up to)
  const ADDITIONAL_COVERAGE_LABEL = rows[3]?.label || t("insurance.pricing.rows.3.label") || "Additional coverage\n(up to)";

  // Remove containers, make full width, and ensure 2px mobile, 15px desktop margin for the table itself!
  if (isMobile) {
    return <div className="w-full px-[2px]">
        <div className="bg-white shadow p-0 mb-6 w-full rounded-none">
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
            <div className="font-medium border-b pb-2 mb-2 text-base">{rows[0]?.label}</div>
            <div className="grid grid-cols-3 gap-2 text-center w-full">
              <div className="text-base font-bold text-gray-700">{rows[0]?.value1}</div>
              <div className="text-base font-bold text-gray-700">{rows[0]?.value2}</div>
              <div className="text-base font-bold text-gray-700">{rows[0]?.value3}</div>
            </div>
          </div>

          {/* Coverage & Recourse */}
          {[1, 2].map(i => <div key={i} className="mb-6 px-4">
              <div className="font-medium border-b pb-2 mb-2 text-base">{rows[i]?.label}</div>
              <div className="p-2 rounded text-center text-sm bg-white/0">
                {formatValue(rows[i]?.description)}
              </div>
            </div>)}

          {/* Additional Coverage Section */}
          <div className="mb-6 px-4 bg-white/0 py-0">
            <div className="font-medium border-b pb-2 mb-4 text-base">{ADDITIONAL_COVERAGE_LABEL}</div>
            {/* Only one cell per row, icon left, merge all amounts */}
            {[3, 4, 5, 6].map(i => <div key={i} className="mb-4 last:mb-0 flex items-start">
                {rowIcons[i] && <span className="mr-3 flex-shrink-0">
                    {React.cloneElement(rowIcons[i] as React.ReactElement, {
                className: "h-6 w-6 text-black rounded-[5px] bg-gray-200 p-1"
              })}
                  </span>}
                <span className="text-center">
                  {formatValue(rows[i]?.description)}
                </span>
              </div>)}
          </div>
        </div>
      </div>;
  }

  // Desktop view (original table, now full width)
  return <div className="w-full px-[15px]">
      <div className="bg-white rounded-xl shadow p-4 md:p-8 mb-6 w-full overflow-x-auto">
        <table className="w-full text-[15px] min-w-[600px]">
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
            {/* Additional Coverage: rows 3–6 */}
            {[3, 4, 5, 6].map((i, idx) => <tr key={i} className="border-t">
                {idx === 0 && <td className="p-4 text-left align-middle font-semibold" rowSpan={4} style={{
              verticalAlign: "top"
            }}>
                    {formatValue(ADDITIONAL_COVERAGE_LABEL)}
                  </td>}
                <td className="p-4 align-middle text-center">
                  {rowIcons[i] ? <div className="inline-block rounded-[5px] bg-gray-200 p-[2px]">
                      {React.cloneElement(rowIcons[i] as React.ReactElement, {
                  className: "h-6 w-6 text-black rounded-[5px]"
                })}
                    </div> : null}
                </td>
                {/* Merged cell: cover all 3 amount columns */}
                <td className="p-4 align-middle text-center" colSpan={3}>
                  {formatValue(rows[i]?.description || "")}
                </td>
              </tr>)}
          </tbody>
        </table>
      </div>
    </div>;
};
export default InsurancePricingTable;