
import { Suspense } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { PageLoader } from './PageLoader';

interface RouteConfig {
  path: string;
  element?: React.ReactNode;
  redirectTo?: string;
}

interface RouterWrapperProps {
  routes: RouteConfig[];
}

export const RouterWrapper: React.FC<RouterWrapperProps> = ({ routes }) => {
  return routes.map((route) => {
    // Handle redirect routes
    if (route.redirectTo) {
      return (
        <Route 
          key={route.path}
          path={route.path} 
          element={<Navigate to={route.redirectTo} replace />} 
        />
      );
    }
    
    // Handle regular routes with lazy loaded components
    return (
      <Route 
        key={route.path}
        path={route.path} 
        element={route.element ? (
          <Suspense fallback={<PageLoader />}>
            {route.element}
          </Suspense>
        ) : null} 
      />
    );
  });
};
