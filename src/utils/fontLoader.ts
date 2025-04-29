
/**
 * Font loading utility functions
 */

/**
 * Check if fonts have been loaded
 */
export const areFontsLoaded = (): boolean => {
  if (typeof document === 'undefined') return false;
  return document.documentElement.classList.contains('fonts-loaded');
};

/**
 * Register a callback for when fonts are loaded
 */
export const onFontsLoaded = (callback: () => void): void => {
  if (typeof document === 'undefined') return;
  
  if (areFontsLoaded()) {
    callback();
  } else {
    const checkLoaded = () => {
      if (areFontsLoaded()) {
        callback();
        document.removeEventListener('fontsloaded', checkLoaded);
      }
    };
    
    document.addEventListener('fontsloaded', checkLoaded);
    
    // Fallback if 'fontsloaded' event never fires
    setTimeout(() => {
      if (!areFontsLoaded()) {
        document.documentElement.classList.add('fonts-loaded');
        const event = new Event('fontsloaded');
        document.dispatchEvent(event);
      }
    }, 2000);
  }
};
