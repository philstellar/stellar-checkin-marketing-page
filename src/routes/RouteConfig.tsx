
import { Route, Routes, Navigate } from 'react-router-dom';
import { Suspense } from 'react';
import { PageLoader } from './PageLoader';
import { commonRoutes } from './common-routes';
import { germanRoutes } from './de-routes';
import { englishRoutes } from './en-routes';
import { italianRoutes } from './it-routes';
import { spanishRoutes } from './es-routes';

const RouteConfig = () => {
  // Combine all routes
  const allRoutes = [
    ...commonRoutes,
    ...germanRoutes,
    ...englishRoutes,
    ...italianRoutes,
    ...spanishRoutes
  ];

  return (
    <Routes>
      {allRoutes.map((route) => {
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
      })}
    </Routes>
  );
};

export default RouteConfig;
