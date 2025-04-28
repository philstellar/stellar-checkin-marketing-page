
import { navigationDE } from './modules/navigation';
import { heroDE } from './modules/hero';
import { featuresDE } from './modules/features';
import { partnersDE } from './modules/partners';
import { kurtaxeDE } from './modules/kurtaxe';
import { insuranceDE } from './modules/insurance';
import { trustBadgeDE } from './modules/trustBadge';
import { cookiesDE } from './modules/cookies/de';
import { zusatzservicesDE } from './modules/zusatzservices/de';
import { brevoPopupDE } from './modules/brevoPopup/de';
import { identityDE } from './modules/identity/de';
import { integrationDE } from './modules/integration/de';
import { settingsDE } from './modules/settings/de';
import { pricingDE } from './modules/pricing/de';
import { contactDE } from './modules/contact/de';
import { footerDE } from './modules/footer/de';

export const de = {
  navigation: navigationDE,
  hero: heroDE,
  features: featuresDE,
  partners: partnersDE,
  kurtaxe: kurtaxeDE,
  insurance: insuranceDE,
  trustBadge: trustBadgeDE,
  cookies: cookiesDE,
  zusatzservices: zusatzservicesDE,
  brevoPopup: brevoPopupDE,
  identity: identityDE,
  integration: integrationDE,
  settings: settingsDE,
  pricing: pricingDE,
  contact: contactDE,
  footer: footerDE,

  // Versicherung Section - will be migrated to its own module later
  versicherung: {
    title: "Versicherung und Kaution clever automatisieren",
    subtitle: "Automatisieren Sie Kaution und Rückerstattung – oder bieten Sie Ihren Gästen eine bequeme Alternative für zusätzliche Provisionseinnahmen.",
    process: {
      title: "Schnellerer Check-in-Prozess",
      description: "Keine Kautionsabwicklung mehr – weniger Aufwand für Sie und mehr Komfort für Ihre Gäste."
    },
    income: {
      title: "Zusätzliche Einnahmequelle",
      description: "Verdienen Sie Provision bei jeder Versicherung – automatisch und ohne zusätzlichen Aufwand."
    },
    protection: {
      title: "Umfassender Schutz",
      description: "Besserer Schutz als herkömmliche Kautionen, dank höherer Deckungssummen, \"Neu für Alt\"-Deckung und Schutz vor Mietausfall."
    },
    cta: "Jetzt Registrieren"
  }
};
