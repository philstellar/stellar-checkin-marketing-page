
import { lazy } from 'react';
import Index from '@/pages/Index';

// Define the interface for route configuration
interface RouteConfig {
  path: string;
  element?: React.ReactNode;
  redirectTo?: string;
}

// Lazy load pages
const NotFound = lazy(() => import('@/pages/NotFound'));

export const commonRoutes: RouteConfig[] = [
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
