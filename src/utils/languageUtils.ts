
import { Language } from '@/types/language';
import { pathMappings } from '@/config/pathMappings';

const SUPPORTED_LANGUAGES: Language[] = ['de', 'en', 'it', 'es'];

export const getLanguageFromPath = (path: string): Language | null => {
  const parts = path.split('/').filter(Boolean);
  const firstPart = parts[0];
  
  return SUPPORTED_LANGUAGES.includes(firstPart as Language) ? firstPart as Language : null;
};

export const getLocalizedPath = (currentPath: string, newLanguage: Language): string => {
  const pathParts = currentPath.split('/').filter(Boolean);
  const currentLanguage = getLanguageFromPath(currentPath);
  
  if (!currentLanguage || pathParts.length <= 1) {
    return `/${newLanguage}`;
  }
  
  const pagePath = pathParts[1];
  const restOfPath = pathParts.slice(2).join('/');
  
  if (pathMappings[pagePath] && pathMappings[pagePath][newLanguage]) {
    const localizedPage = pathMappings[pagePath][newLanguage];
    return restOfPath ? `/${newLanguage}/${localizedPage}/${restOfPath}` : `/${newLanguage}/${localizedPage}`;
  }
  
  return restOfPath ? `/${newLanguage}/${pagePath}/${restOfPath}` : `/${newLanguage}/${pagePath}`;
};
