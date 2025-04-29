import { navigation } from './modules/navigation';
import { hero } from './modules/hero';
import { siteTranslations } from './modules/site';
import { commonTranslations } from './modules/common';

// Import other translation modules
import { insuranceDE } from './modules/insurance/de';
import { insuranceEN } from './modules/insurance/en';
import { insuranceES } from './modules/insurance/es';
import { insuranceIT } from './modules/insurance/it';

export const translations = {
  de: {
    navigation: navigation.de,
    hero: hero.de,
    site: siteTranslations.de,
    common: commonTranslations.de,
    insurance: insuranceDE,
  },
  en: {
    navigation: navigation.en,
    hero: hero.en,
    site: siteTranslations.en,
    common: commonTranslations.en,
    insurance: insuranceEN,
  },
  it: {
    navigation: navigation.it,
    hero: hero.it,
    site: siteTranslations.it,
    common: commonTranslations.it,
    insurance: insuranceIT,
  },
  es: {
    navigation: navigation.es,
    hero: hero.es,
    site: siteTranslations.es,
    common: commonTranslations.es,
    insurance: insuranceES,
  }
};
