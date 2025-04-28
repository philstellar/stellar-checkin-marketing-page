
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CookieConsentProvider } from './context/CookieConsentContext'
import { LanguageProvider } from './context/LanguageContext'

createRoot(document.getElementById("root")!).render(
  <LanguageProvider>
    <CookieConsentProvider>
      <App />
    </CookieConsentProvider>
  </LanguageProvider>
);
