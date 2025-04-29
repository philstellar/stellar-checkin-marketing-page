
import * as React from 'react';
import { HelmetProvider } from 'react-helmet-async';

interface MetaProviderProps {
  children: React.ReactNode;
}

const MetaProvider = ({ children }: MetaProviderProps) => {
  return <HelmetProvider>{children}</HelmetProvider>;
};

export default MetaProvider;
