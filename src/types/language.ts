
export type Language = 'de' | 'en' | 'it' | 'es';

export type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
};

export type PathMappings = Record<string, Record<Language, string>>;
