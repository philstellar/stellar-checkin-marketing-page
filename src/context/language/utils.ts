import { Language } from './types';
import { pathMappings } from './pathMappings';

// Helper function to extract language from path
export const getLanguageFromPath = (path: string): Language | null => {
  const parts = path.split('/').filter(Boolean);
  const firstPart = parts[0];
  
  if (firstPart === 'de' || firstPart === 'en' || firstPart === 'es' || firstPart === 'it') {
    return firstPart;
  }
  
  return null;
};

// Maps current path to localized path
export const getLocalizedPath = (currentPath: string, newLanguage: Language): string => {
  // Extract current language and path components
  const pathParts = currentPath.split('/').filter(Boolean);
  const currentLanguage = getLanguageFromPath(currentPath);
  
  if (!currentLanguage || pathParts.length <= 1) {
    // If no language in path or just language with no page, return simple language path
    return `/${newLanguage}`;
  }
  
  // Get the page path (after language)
  const pagePath = pathParts[1];
  const restOfPath = pathParts.slice(2).join('/');
  
  // Check if this page has language-specific mappings
  if (pathMappings[pagePath] && pathMappings[pagePath][newLanguage]) {
    const localizedPage = pathMappings[pagePath][newLanguage];
    return restOfPath ? `/${newLanguage}/${localizedPage}/${restOfPath}` : `/${newLanguage}/${localizedPage}`;
  }
  
  // If no mapping exists, keep the same page name
  return restOfPath ? `/${newLanguage}/${pagePath}/${restOfPath}` : `/${newLanguage}/${pagePath}`;
};
