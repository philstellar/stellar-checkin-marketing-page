
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

// Debug: Warn if overflow exists
function useOverflowDebug() {
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const check = () => {
      const docWidth = document.documentElement.offsetWidth;
      for (const el of Array.from(document.body.querySelectorAll("*"))) {
        if ((el as HTMLElement).scrollWidth > docWidth) {
          // Only warn for visible elements
          if (
            (el as HTMLElement).offsetWidth > 0 &&
            (el as HTMLElement).scrollWidth - (el as HTMLElement).offsetWidth > 4
          ) {
            console.warn("[Insurance Table] Horizontal overflow detected for element:", el);
            break;
          }
        }
      }
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
}

const InsurancePricingTable = () => {
  const { t } = useTranslation();
  useOverflowDebug();
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

  // Simpler mobile version: always fully stacked, no grids, NO horizontal scroll risk
  if (isMobile) {
    return (
      <section className="w-full px-2">
        <article className="bg-white rounded-xl shadow px-0 py-0 mb-6 w-full">
          <h3 className="text-xl font-semibold mb-4 px-4 pt-4 text-left">{header.coverage}</h3>

          {/* 1. Price per night, stacked */}
          <div className="mb-6 px-4">
            <div className="font-medium border-b pb-2 mb-2">{rows[0]?.label}</div>
            {/* Stack options row by row, not side by side */}
            {[
              { amount: header.amount1, val: rows[0]?.value1 },
              { amount: header.amount2, val: rows[0]?.value2 },
              { amount: header.amount3, val: rows[0]?.value3 },
            ].map((col, idx) => (
              <div
                className="flex flex-row items-center gap-2 mb-2 last:mb-0"
                key={idx}
              >
                <span className="flex-shrink-0 w-auto min-w-0 font-semibold bg-gray-100 px-2 py-1 rounded text-xs text-gray-700">
                  {col.amount}
                </span>
                <span className="flex-grow text-center p-2 bg-gray-50 rounded text-[15px]">
                  {col.val}
                </span>
              </div>
            ))}
          </div>

          {/* 2. Coverage & Recourse */}
          {[1, 2].map((i) => (
            <div key={i} className="mb-6 px-4">
              <div className="font-medium border-b pb-2 mb-2">{rows[i]?.label}</div>
              <div className="p-2 bg-gray-50 rounded text-left text-[15px]">
                {formatValue(rows[i]?.description)}
              </div>
            </div>
          ))}

          {/* 3. Additional Coverage, all as individual vertical cards */}
          <div className="mb-6 px-4">
            <div className="font-medium border-b pb-2 mb-4 whitespace-pre-line">
              {ADDITIONAL_COVERAGE_LABEL}
            </div>
            {[3, 4, 5, 6].map((i) => (
              <div key={i} className="mb-4 last:mb-0 rounded-md bg-gray-25">
                <div className="flex items-center gap-2 mb-2">
                  {rowIcons[i] && (
                    <span className="inline-flex items-center justify-center mr-1">
                      {React.cloneElement(rowIcons[i] as React.ReactElement, {
                        className: "h-6 w-6 text-black rounded-[5px] bg-gray-200"
                      })}
                    </span>
                  )}
                  <span className="text-base font-medium text-gray-700">{rows[i]?.label}</span>
                </div>
                <div className="p-2 bg-gray-50 rounded text-[15px]">
                  {formatValue(rows[i]?.description)}
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>
    );
  }

  // Desktop view (original table, now full width)
  return (
    <div className="w-full px-[15px]">
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
            {[3, 4, 5, 6].map((i, idx) => (
              <tr key={i} className="border-t">
                {idx === 0 && (
                  <td
                    className="p-4 text-left align-middle font-semibold"
                    rowSpan={4}
                    style={{ verticalAlign: "top" }}
                  >
                    {formatValue(ADDITIONAL_COVERAGE_LABEL)}
                  </td>
                )}
                <td className="p-4 align-middle text-center">
                  {rowIcons[i] ? (
                    <div className="inline-block rounded-[5px] bg-gray-200 p-[2px]">
                      {React.cloneElement(rowIcons[i] as React.ReactElement, {
                        className: "h-6 w-6 text-black rounded-[5px]",
                      })}
                    </div>
                  ) : null}
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
