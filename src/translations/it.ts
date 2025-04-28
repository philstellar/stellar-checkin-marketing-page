
import { navigationIT } from './modules/navigation';
import { heroIT } from './modules/hero';
import { featuresIT } from './modules/features';
import { partnersIT } from './modules/partners';
import { kurtaxeIT } from './modules/kurtaxe';
import { insuranceIT } from './modules/insurance';
import { trustBadgeIT } from './modules/trustBadge';
import { cookiesIT } from './modules/cookies/it';
import { zusatzservicesIT } from './modules/zusatzservices/it';
import { brevoPopupIT } from './modules/brevoPopup/it';
import { identityIT } from './modules/identity/it';
import { integrationIT } from './modules/integration/it';
import { settingsIT } from './modules/settings/it';
import { pricingIT } from './modules/pricing/it';
import { contactIT } from './modules/contact/it';
import { footerIT } from './modules/footer/it';

export const it = {
  navigation: navigationIT,
  hero: heroIT,
  features: featuresIT,
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
  footer: footerIT,
  
  // Versicherung section - will be migrated to its own module later
  versicherung: {
    title: "Automatizzare in modo intelligente assicurazione e depositi",
    subtitle: "Automatizza la gestione e il rimborso dei depositi, o offri ai tuoi ospiti un'alternativa conveniente – e assicurati entrate aggiuntive dalle commissioni.",
    process: {
      title: "Processo di Check-in Più Veloce",
      description: "Nessuna gestione dei depositi – meno lavoro per te e più comfort per i tuoi ospiti."
    },
    income: {
      title: "Fonte di Reddito Aggiuntiva",
      description: "Guadagna commissioni su ogni assicurazione – automaticamente e senza ulteriori sforzi."
    },
    protection: {
      title: "Protezione Completa",
      description: "Migliore protezione rispetto ai depositi tradizionali, grazie a importi di copertura più elevati, copertura \"nuovo per vecchio\" e protezione contro la perdita di affitto."
    },
    cta: "Registrati Ora"
  }
};
