
import { lazy } from 'react';
import Index from '@/pages/Index';
import VersicherungPage from '@/components/admin/VersicherungPage';

// Lazy load pages
const ImpressumIT = lazy(() => import('@/pages/legal/ImpressumIT'));
const DatenschutzIT = lazy(() => import('@/pages/legal/DatenschutzIT'));
const AgbIT = lazy(() => import('@/pages/legal/AgbIT'));
const Brevo = lazy(() => import('@/pages/Brevo'));
const TrustBadgePage = lazy(() => import('@/components/admin/TrustBadgePage'));
const AboutUsIT = lazy(() => import('@/pages/ueber-uns/AboutUsIT'));
const SuccessStoriesIT = lazy(() => import('@/pages/erfolgsgeschichten/SuccessStoriesIT'));

export const italianRoutes = [
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
