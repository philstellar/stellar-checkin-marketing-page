
import { navigationDE, navigationEN, navigationES, navigationIT } from './modules/navigation';
import { heroDE, heroEN, heroES, heroIT } from './modules/features';
import { siteTranslations } from './modules/site';
import { commonTranslations } from './modules/common';

// Import other translation modules
import { insuranceDE } from './modules/insurance/de';
import { insuranceEN } from './modules/insurance/en';
import { insuranceES } from './modules/insurance/es';
import { insuranceIT } from './modules/insurance/it';

export const translations = {
  de: {
    navigation: navigationDE,
    hero: heroDE,
    site: siteTranslations.de,
    common: commonTranslations.de,
    insurance: insuranceDE,
  },
  en: {
    navigation: navigationEN,
    hero: heroEN,
    site: siteTranslations.en,
    common: commonTranslations.en,
    insurance: insuranceEN,
  },
  it: {
    navigation: navigationIT,
    hero: heroIT,
    site: siteTranslations.it,
    common: commonTranslations.it,
    insurance: insuranceIT,
  },
  es: {
    navigation: navigationES,
    hero: heroES,
    site: siteTranslations.es,
    common: commonTranslations.es,
    insurance: insuranceES,
  }
};
