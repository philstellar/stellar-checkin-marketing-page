
import { Toaster } from '@/components/ui/toaster';
import { BrevoFormProvider } from './context/BrevoFormContext';
import BrevoFormPopupWrapper from './components/BrevoFormPopupWrapper';
import CookieBanner from './components/CookieBanner';
import { LanguageDetectionDialog } from './components/LanguageDetectionDialog';
import { SchemaProvider } from './components/schema/SchemaProvider';
import RouteConfig from './routes/RouteConfig';
import React, { ErrorInfo, useState, useEffect } from 'react';
import { toast } from '@/hooks/use-toast';

// Error boundary component to catch render errors
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; errorInfo: string }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, errorInfo: '' };
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Application error:", error, errorInfo);
    this.setState({
      errorInfo: error.toString()
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-white p-4">
          <div className="text-center max-w-md">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h2>
            <p className="mb-4 text-gray-600">The application encountered an unexpected error.</p>
            <pre className="bg-gray-100 p-4 rounded text-sm text-left overflow-auto max-h-40 mb-4">
              {this.state.errorInfo}
            </pre>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const App = () => {
  const [initialized, setInitialized] = useState(false);

  // Global error handling for non-React errors
  useEffect(() => {
    const originalOnError = window.onerror;
    
    window.onerror = (msg, url, lineNo, columnNo, error) => {
      console.error('Global error caught:', { msg, url, lineNo, columnNo, error });
      
      toast({
        title: "An error occurred",
        description: String(msg),
        variant: "destructive",
      });
      
      // Call original handler if it exists
      if (originalOnError) {
        return originalOnError(msg, url, lineNo, columnNo, error);
      }
      
      return false;
    };
    
    // Mark as initialized to prevent multiple initializations
    setInitialized(true);
    
    return () => {
      window.onerror = originalOnError;
    };
  }, []);

  return (
    <ErrorBoundary>
      <BrevoFormProvider>
        <SchemaProvider>
          <RouteConfig />
          <BrevoFormPopupWrapper />
          <CookieBanner />
          <LanguageDetectionDialog />
          <Toaster />
        </SchemaProvider>
      </BrevoFormProvider>
    </ErrorBoundary>
  );
};

export default App;
