
import { Toaster } from '@/components/ui/toaster';
import { BrevoFormProvider } from './context/BrevoFormContext';
import BrevoFormPopupWrapper from './components/BrevoFormPopupWrapper';
import { LanguageDetectionDialog } from './components/LanguageDetectionDialog';
import { SchemaProvider } from './components/schema/SchemaProvider';
import RouteConfig from './routes/RouteConfig';

const App = () => {
  return (
    <BrevoFormProvider>
      <SchemaProvider>
        <RouteConfig />
        <BrevoFormPopupWrapper />
        <LanguageDetectionDialog />
        <Toaster />
      </SchemaProvider>
    </BrevoFormProvider>
  );
};

export default App;
