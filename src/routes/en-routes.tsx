
import React from 'react';
import Index from '@/pages/Index';
import ImpressumEN from '@/pages/legal/ImpressumEN';
import DatenschutzEN from '@/pages/legal/DatenschutzEN';
import AgbEN from '@/pages/legal/AgbEN';
import Brevo from '@/pages/Brevo';
import VersicherungPage from '@/pages/VersicherungPage';
import TrustBadgePage from '@/components/admin/TrustBadgePage';
import AboutUsEN from '@/pages/ueber-uns/AboutUsEN';
import SuccessStoriesEN from '@/pages/erfolgsgeschichten/SuccessStoriesEN';

// Define the interface for route configuration
interface RouteConfig {
  path: string;
  element?: React.ReactNode;
  redirectTo?: string;
}

export const englishRoutes: RouteConfig[] = [
  {
    path: '/en',
    element: <Index />
  },
  {
    path: '/en/impressum',
    element: <ImpressumEN />
  },
  {
    path: '/en/datenschutz',
    element: <DatenschutzEN />
  },
  {
    path: '/en/agb',
    element: <AgbEN />
  },
  {
    path: '/en/brevo',
    element: <Brevo />
  },
  {
    path: '/en/about-us',
    element: <AboutUsEN />
  },
  {
    path: '/en/success-stories',
    element: <SuccessStoriesEN />
  },
  {
    path: '/en/insurance',
    element: <VersicherungPage />
  },
  {
    path: '/en/trust-badge',
    element: <TrustBadgePage />
  },
  // Redirect route
  {
    path: '/en/versicherung',
    redirectTo: '/en/insurance'
  }
];
