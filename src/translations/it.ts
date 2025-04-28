
import { navigationIT } from './modules/navigation';
import { heroIT } from './modules/hero';
import { homeHeroIT } from './modules/homeHero';
import { featuresIT } from './modules/features/it';
import { partnersIT } from './modules/partners';
import { kurtaxeIT } from './modules/kurtaxe';
import { insuranceIT } from './modules/insurance/it';
import { trustBadgeIT } from './modules/trustBadge';
import { cookiesIT } from './modules/cookies/it';
import { zusatzservicesIT } from './modules/zusatzservices/it';
import { brevoPopupIT } from './modules/brevoPopup/it';
import { identityIT } from './modules/identity/it';
import { integrationIT } from './modules/integration/it';
import { settingsIT } from './modules/settings/it';
import { pricingIT } from './modules/pricing/it';
import { contactIT } from './modules/contact/it';
import { stellarIT } from './modules/stellar';
import { productsIT } from './modules/products';

export const it = {
  navigation: navigationIT,
  hero: heroIT,
  homeHero: homeHeroIT,
  features: featuresIT,
  products: productsIT,
  stellar: stellarIT,
  partners: partnersIT,
  kurtaxe: kurtaxeIT,
  insurance: insuranceIT,
  trustBadge: trustBadgeIT,
  cookies: cookiesIT,
  zusatzservices: zusatzservicesIT,
  brevoPopup: brevoPopupIT,
  identity: identityIT,
  integration: integrationIT,
  settings: settingsIT,
  pricing: pricingIT,
  contact: contactIT,
  footer: {
    legal: "Legale",
    imprint: "Note Legali",
    privacy: "Informativa sulla Privacy",
    terms: "Termini e Condizioni",
    copyright: "Tutti i diritti riservati.",
    tagline: "Ottimizza la gestione dei tuoi ospiti con le soluzioni innovative di Stellar."
  }
};
