
import React from 'react';
import { Toaster } from '@/components/ui/toaster';
import { BrevoFormProvider } from './context/BrevoFormContext';
import BrevoFormPopupWrapper from './components/BrevoFormPopupWrapper';
import { LanguageDetectionDialog } from './components/LanguageDetectionDialog';
import { SchemaProvider } from './components/schema/SchemaProvider';
import RouteConfig from './routes/RouteConfig';
import { LanguageProvider } from './context/language';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <BrevoFormProvider>
          <SchemaProvider>
            <RouteConfig />
            <BrevoFormPopupWrapper />
            <LanguageDetectionDialog />
            <Toaster />
          </SchemaProvider>
        </BrevoFormProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
};

export default App;
