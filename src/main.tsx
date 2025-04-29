
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { CookieConsentProvider } from './context/CookieConsentContext';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { MetaProvider } from './components/meta';
import PerformanceProvider from './components/optimization/PerformanceProvider';

// Create root and render the app with strict mode disabled to avoid double-rendering issues
const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = createRoot(container);

// Add critical CSS inline
const injectCriticalCSS = () => {
  const criticalStyles = `
    /* Critical CSS for initial render */
    body { 
      margin: 0;
      font-family: sans-serif;
      -webkit-font-smoothing: antialiased;
    }
    .container-custom {
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      padding-left: 1rem;
      padding-right: 1rem;
    }
    @media (min-width: 640px) {
      .container-custom {
        max-width: 640px;
      }
    }
    @media (min-width: 768px) {
      .container-custom {
        max-width: 768px;
      }
    }
    @media (min-width: 1024px) {
      .container-custom {
        max-width: 1024px;
      }
    }
    @media (min-width: 1280px) {
      .container-custom {
        max-width: 1280px;
      }
    }
  `;

  const style = document.createElement('style');
  style.innerHTML = criticalStyles;
  document.head.appendChild(style);
};

// Execute critical CSS injection
injectCriticalCSS();

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <MetaProvider>
          <PerformanceProvider>
            <CookieConsentProvider>
              <App />
            </CookieConsentProvider>
          </PerformanceProvider>
        </MetaProvider>
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);
