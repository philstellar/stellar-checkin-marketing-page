
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CookieConsentProvider } from './context/CookieConsentContext'
import CookieBanner from './components/CookieBanner'

createRoot(document.getElementById("root")!).render(
  <CookieConsentProvider>
    <App />
    <CookieBanner />
  </CookieConsentProvider>
);
