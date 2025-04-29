
import * as React from 'react';

interface BrevoFormContextType {
  isFormOpen: boolean;
  openForm: () => void;
  closeForm: () => void;
}

const BrevoFormContext = React.createContext<BrevoFormContextType | undefined>(undefined);

export function BrevoFormProvider({ children }: { children: React.ReactNode }) {
  const [isFormOpen, setIsFormOpen] = React.useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <BrevoFormContext.Provider value={{ isFormOpen, openForm, closeForm }}>
      {children}
    </BrevoFormContext.Provider>
  );
}

export function useBrevoForm() {
  const context = React.useContext(BrevoFormContext);
  if (context === undefined) {
    throw new Error("useBrevoForm must be used within a BrevoFormProvider");
  }
  return context;
}
