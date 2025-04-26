
import { navigationIT } from './modules/navigation';
import { heroIT } from './modules/hero';
import { featuresIT } from './modules/features/it';
import { partnersIT } from './modules/partners';
import { kurtaxeIT } from './modules/kurtaxe';
import { insuranceIT } from './modules/insurance';
import { trustBadgeIT } from './modules/trustBadge';
import { cookiesIT } from './modules/cookies'; // Fixed path
import { zusatzservicesIT } from './modules/zusatzservices'; // Fixed path
import { brevoPopupIT } from './modules/brevoPopup'; // Fixed path
import { identityIT } from './modules/identity'; // Fixed path
import { integrationIT } from './modules/integration'; // Fixed path
import { settingsIT } from './modules/settings'; // Fixed path
import { pricingIT } from './modules/pricing'; // Fixed path
import { contactIT } from './modules/contact'; // Fixed path
import { stellarIT } from './modules/stellar';
import { productsIT } from './modules/products';

export const it = {
  navigation: navigationIT,
  hero: heroIT,
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
  contact: contactIT
};
