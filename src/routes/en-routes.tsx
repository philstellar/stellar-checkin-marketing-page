
import { lazy } from 'react';
import Index from '@/pages/Index';
import VersicherungPage from '@/components/admin/VersicherungPage';

// Lazy load pages
const ImpressumEN = lazy(() => import('@/pages/legal/ImpressumEN'));
const DatenschutzEN = lazy(() => import('@/pages/legal/DatenschutzEN'));
const AgbEN = lazy(() => import('@/pages/legal/AgbEN'));
const Brevo = lazy(() => import('@/pages/Brevo'));
const TrustBadgePage = lazy(() => import('@/components/admin/TrustBadgePage'));
const AboutUsEN = lazy(() => import('@/pages/ueber-uns/AboutUsEN'));
const SuccessStoriesEN = lazy(() => import('@/pages/erfolgsgeschichten/SuccessStoriesEN'));

export const englishRoutes = [
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
