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

  // Nicer, denser UX for mobile
  if (isMobile) {
    return (
      <section className="w-full px-2">
        <article className="bg-white rounded-xl shadow px-0 py-0 mb-6 w-full">
          <h3 className="text-[1.1rem] sm:text-xl font-semibold mb-3 px-4 pt-4 text-left leading-tight">
            {header.coverage}
          </h3>

          {/* 1. Price per night, stacked */}
          <div className="mb-5 px-3 sm:px-4">
            <div className="font-medium border-b border-gray-200 pb-1 mb-2 text-gray-700 text-[0.98rem] sm:text-base">
              {rows[0]?.label}
            </div>
            {[
              { amount: header.amount1, val: rows[0]?.value1 },
              { amount: header.amount2, val: rows[0]?.value2 },
              { amount: header.amount3, val: rows[0]?.value3 },
            ].map((col, idx) => (
              <div
                className="flex flex-row items-center gap-2 mb-2 last:mb-0"
                key={idx}
              >
                <span className="flex-shrink-0 w-auto min-w-0 font-semibold bg-gray-100 px-2 py-[3px] rounded text-xs text-gray-700">
                  {col.amount}
                </span>
                <span className="flex-grow text-left p-2 bg-gray-50 rounded text-[0.98rem] sm:text-base">
                  {col.val}
                </span>
              </div>
            ))}
          </div>

          {/* 2. Coverage & Recourse */}
          {[1, 2].map((i) => (
            <div key={i} className="mb-5 px-3 sm:px-4">
              <div className="font-medium border-b border-gray-200 pb-1 mb-2 text-gray-700 text-[0.98rem] sm:text-base">
                {rows[i]?.label}
              </div>
              <div className="p-2 bg-gray-50 rounded text-left text-[0.96rem] sm:text-[1rem] text-gray-700 leading-snug">
                {formatValue(rows[i]?.description)}
              </div>
            </div>
          ))}

          {/* 3. Additional Coverage, as vertical "cards" with icon left */}
          <div className="mb-5 px-3 sm:px-4">
            <div className="font-medium border-b border-gray-200 pb-1 mb-4 whitespace-pre-line text-gray-700 text-[0.98rem] sm:text-base">
              {ADDITIONAL_COVERAGE_LABEL}
            </div>
            <div className="flex flex-col gap-3">
              {[3, 4, 5, 6].map((i) => (
                <div key={i}
                  className="flex flex-row items-start gap-3 bg-gray-50 rounded-md py-3 px-2 shadow-sm"
                >
                  {rowIcons[i] && (
                    <span className="inline-flex items-center justify-center pt-[2px]">
                      {React.cloneElement(rowIcons[i] as React.ReactElement, {
                        className:"h-5 w-5 min-w-[1.35rem] text-black rounded-[5px] bg-gray-200"
                      })}
                    </span>
                  )}
                  <div className="flex flex-col">
                    <span className="text-[0.98rem] sm:text-base font-medium text-gray-700 mb-1">
                      {rows[i]?.label}
                    </span>
                    <span className="text-[0.96rem] sm:text-[1rem] text-gray-700 leading-snug">
                      {formatValue(rows[i]?.description)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>
      </section>
    );
  }

  // Desktop/tablet (unchanged)
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
