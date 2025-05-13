
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { commonRoutes } from './common-routes';
import { germanRoutes } from './de-routes';
import { englishRoutes } from './en-routes';
import { italianRoutes } from './it-routes';
import { spanishRoutes } from './es-routes';

// Define the interface for route configuration
interface RouteConfig {
  path: string;
  element?: React.ReactNode;
  redirectTo?: string;
}

const RouteConfig = () => {
  // Combine all routes
  const allRoutes: RouteConfig[] = [
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
        
        // Handle regular routes with direct components (no lazy loading)
        return (
          <Route 
            key={route.path}
            path={route.path} 
            element={route.element} 
          />
        );
      })}
    </Routes>
  );
};

export default RouteConfig;
