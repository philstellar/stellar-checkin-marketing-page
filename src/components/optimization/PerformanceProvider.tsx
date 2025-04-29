
import React, { ReactNode } from 'react';
import FontOptimizer from './FontOptimizer';
import ResourceHints from './ResourceHints';

interface PerformanceProviderProps {
  children: ReactNode;
}

const PerformanceProvider = ({ children }: PerformanceProviderProps) => {
  // Register service worker
  React.useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
          .then(registration => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
          })
          .catch(error => {
            console.log('ServiceWorker registration failed: ', error);
          });
      });
    }
  }, []);

  return (
    <>
      <FontOptimizer />
      <ResourceHints />
      {children}
    </>
  );
};

export default PerformanceProvider;
