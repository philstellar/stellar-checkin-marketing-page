
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

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
    
    // Handle regular routes with direct components
    return (
      <Route 
        key={route.path}
        path={route.path} 
        element={route.element} 
      />
    );
  });
};
