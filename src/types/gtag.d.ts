
/**
 * Type declaration for Google Analytics and Google Tag Manager
 */
declare function gtag_report_conversion(url?: string): boolean;

interface Window {
  gtag?: (...args: any[]) => void;
  dataLayer?: any[];
}
