
import { lazy } from 'react';
import Index from '@/pages/Index';

// Lazy load pages
const NotFound = lazy(() => import('@/pages/NotFound'));

export const commonRoutes = [
  {
    path: '/',
    element: <Index />
  },
  {
    path: '/:lang/home',
    redirectTo: '/:lang'
  },
  {
    path: '/:lang/legal/imprint',
    redirectTo: '/:lang/impressum'
  },
  {
    path: '/:lang/legal/privacy',
    redirectTo: '/:lang/datenschutz'
  },
  {
    path: '/:lang/legal/terms',
    redirectTo: '/:lang/agb'
  },
  {
    path: '*',
    element: <NotFound />
  }
];
