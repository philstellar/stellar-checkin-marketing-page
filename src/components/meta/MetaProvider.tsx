
import * as React from 'react';
import { HelmetProvider } from 'react-helmet-async';

interface MetaProviderProps {
  children: React.ReactNode;
}

const MetaProvider: React.FC<MetaProviderProps> = ({ children }) => {
  return <HelmetProvider>{children}</HelmetProvider>;
};

export default MetaProvider;
