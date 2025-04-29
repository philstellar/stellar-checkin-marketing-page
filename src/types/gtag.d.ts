
/**
 * Type declaration for Google Analytics, Google Tag Manager, and Conversion Tracking
 */
declare function gtag_report_conversion(url?: string): boolean;

interface Window {
  gtag?: (...args: any[]) => void;
  dataLayer?: any[];
}

interface GTagConfigOptions {
  allow_ad_personalization_signals?: boolean;
  anonymize_ip?: boolean;
  allow_google_signals?: boolean;
  page_path?: string;
  page_title?: string;
}
