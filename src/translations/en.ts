
import { navigationEN } from './modules/navigation';
import { heroEN } from './modules/hero';
import { featuresEN } from './modules/features';
import { partnersEN } from './modules/partners';
import { kurtaxeEN } from './modules/kurtaxe';
import { insuranceEN } from './modules/insurance';
import { trustBadgeEN } from './modules/trustBadge';
import { cookiesEN } from './modules/cookies/en';
import { zusatzservicesEN } from './modules/zusatzservices/en';
import { brevoPopupEN } from './modules/brevoPopup/en';
import { identityEN } from './modules/identity/en';
import { integrationEN } from './modules/integration/en';
import { settingsEN } from './modules/settings/en';
import { pricingEN } from './modules/pricing/en';
import { contactEN } from './modules/contact/en';
import { footerEN } from './modules/footer/en';

export const en = {
  navigation: navigationEN,
  hero: heroEN,
  features: featuresEN,
  partners: partnersEN,
  kurtaxe: kurtaxeEN,
  insurance: insuranceEN,
  trustBadge: trustBadgeEN,
  cookies: cookiesEN,
  zusatzservices: zusatzservicesEN,
  brevoPopup: brevoPopupEN,
  identity: identityEN,
  integration: integrationEN,
  settings: settingsEN,
  pricing: pricingEN,
  contact: contactEN,
  footer: footerEN,
  
  // Versicherung - will be migrated later
  versicherung: {
    title: "Built-in protection for your properties",
    subtitle: "Optimal protection for your accommodations - with insurance and deposit management.",
    process: {
      title: "Faster Check-in Process",
      description: "No more deposit management – less effort for you and more convenience for your guests."
    },
    income: {
      title: "Additional Revenue Stream",
      description: "Earn commission on every insurance – automatically and without additional effort."
    },
    protection: {
      title: "Comprehensive Protection",
      description: "Better protection than traditional deposits, thanks to higher coverage amounts, \"new for old\" coverage and protection against rental loss."
    },
    cta: "Register Now"
  }
};
