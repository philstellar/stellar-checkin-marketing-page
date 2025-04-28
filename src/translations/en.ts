
import { navigationEN } from './modules/navigation';
import { heroEN } from './modules/hero';
import { homeHeroEN } from './modules/homeHero';
import { featuresEN } from './modules/features';
import { partnersEN } from './modules/partners';
import { kurtaxeEN } from './modules/kurtaxe';
import { insuranceEN } from './modules/insurance'; // Simple version for main page
import { insuranceDetailEN } from './modules/insurance/index'; // Detailed version for insurance page
import { trustBadgeEN } from './modules/trustBadge';
import { cookiesEN } from './modules/cookies/en';
import { identityEN } from './modules/identity/en';
import { integrationEN } from './modules/integration/en';
import { pricingEN } from './modules/pricing/en';
import { zusatzservicesEN } from './modules/zusatzservices/en';
import { brevoPopupEN } from './modules/brevoPopup/en';
import { settingsEN } from './modules/settings/en';
import { stellarEN } from './modules/stellar';
import { productsEN } from './modules/products';
import { contactEN } from './modules/contact/en';

export const en = {
  navigation: navigationEN,
  hero: heroEN,
  homeHero: homeHeroEN,
  features: featuresEN,
  products: productsEN,
  stellar: stellarEN,
  partners: partnersEN,
  kurtaxe: kurtaxeEN,
  insurance: insuranceEN, // Simple version for main page
  insuranceDetail: insuranceDetailEN, // Detailed version for insurance page
  trustBadge: trustBadgeEN,
  cookies: cookiesEN,
  zusatzservices: zusatzservicesEN,
  brevoPopup: brevoPopupEN,
  identity: identityEN,
  integration: integrationEN,
  settings: settingsEN,
  pricing: pricingEN,
  contact: contactEN,
  footer: {
    legal: "Legal",
    imprint: "Imprint",
    privacy: "Privacy Policy",
    terms: "Terms and Conditions",
    copyright: "All rights reserved.",
    tagline: "Streamline your guest management with Stellar's innovative solutions."
  }
};
