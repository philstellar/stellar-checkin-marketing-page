
import React from 'react';
import { Toaster } from '@/components/ui/toaster';
import { BrevoFormProvider } from './context/BrevoFormContext';
import BrevoFormPopupWrapper from './components/BrevoFormPopupWrapper';
import CookieBanner from './components/CookieBanner';
import { LanguageDetectionDialog } from './components/LanguageDetectionDialog';
import { SchemaProvider } from './components/schema/SchemaProvider';
import RouteConfig from './routes/RouteConfig';

const App: React.FC = () => {
  return (
    <BrevoFormProvider>
      <SchemaProvider>
        <RouteConfig />
        <BrevoFormPopupWrapper />
        <CookieBanner />
        <LanguageDetectionDialog />
        <Toaster />
      </SchemaProvider>
    </BrevoFormProvider>
  );
};

export default App;
