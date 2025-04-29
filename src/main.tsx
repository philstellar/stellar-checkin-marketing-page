
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CookieConsentProvider } from './context/CookieConsentContext'
import { BrowserRouter } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import MetaProvider from './components/meta/MetaProvider'

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <LanguageProvider>
      <MetaProvider>
        <CookieConsentProvider>
          <App />
        </CookieConsentProvider>
      </MetaProvider>
    </LanguageProvider>
  </BrowserRouter>
);
