
import React from 'react';
import Index from '@/pages/Index';
import ImpressumIT from '@/pages/legal/ImpressumIT';
import DatenschutzIT from '@/pages/legal/DatenschutzIT';
import AgbIT from '@/pages/legal/AgbIT';
import Brevo from '@/pages/Brevo';
import VersicherungPage from '@/pages/VersicherungPage';
import TrustBadgePage from '@/components/admin/TrustBadgePage';
import AboutUsIT from '@/pages/ueber-uns/AboutUsIT';
import SuccessStoriesIT from '@/pages/erfolgsgeschichten/SuccessStoriesIT';

// Define the interface for route configuration
interface RouteConfig {
  path: string;
  element?: React.ReactNode;
  redirectTo?: string;
}

export const italianRoutes: RouteConfig[] = [
  {
    path: '/it',
    element: <Index />
  },
  {
    path: '/it/impressum',
    element: <ImpressumIT />
  },
  {
    path: '/it/datenschutz',
    element: <DatenschutzIT />
  },
  {
    path: '/it/agb',
    element: <AgbIT />
  },
  {
    path: '/it/brevo',
    element: <Brevo />
  },
  {
    path: '/it/chi-siamo',
    element: <AboutUsIT />
  },
  {
    path: '/it/storie-di-successo',
    element: <SuccessStoriesIT />
  },
  {
    path: '/it/assicurazione',
    element: <VersicherungPage />
  },
  {
    path: '/it/trust-badge',
    element: <TrustBadgePage />
  },
  // Redirect route
  {
    path: '/it/versicherung',
    redirectTo: '/it/assicurazione'
  }
];
