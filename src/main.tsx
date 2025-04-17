
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CookieConsentProvider } from './context/CookieConsentContext'
import { BrowserRouter } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <LanguageProvider>
      <CookieConsentProvider>
        <App />
      </CookieConsentProvider>
    </LanguageProvider>
  </BrowserRouter>
);
