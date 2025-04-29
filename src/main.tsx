
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import MetaProvider from './components/meta/MetaProvider'

// Create root and render the app with strict mode disabled to avoid double-rendering issues
const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <LanguageProvider>
      <MetaProvider>
        <App />
      </MetaProvider>
    </LanguageProvider>
  </BrowserRouter>
);
