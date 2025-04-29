
import { de } from './de';
import { en } from './en';
import { it } from './it';
import { es } from './es';

import { siteTranslations } from './modules/site';

// Re-export the translations
export * from './modules/site';

export type TranslationKey = string;

// Extend each language object with the site translations
const deWithSite = { ...de, site: siteTranslations.de };
const enWithSite = { ...en, site: siteTranslations.en };
const itWithSite = { ...it, site: siteTranslations.it };
const esWithSite = { ...es, site: siteTranslations.es };

export const translations = {
  de: deWithSite,
  en: enWithSite,
  it: itWithSite,
  es: esWithSite,
};
