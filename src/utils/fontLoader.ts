
/**
 * Font loading utility functions
 */

/**
 * Check if fonts have been loaded
 */
export const areFontsLoaded = (): boolean => {
  if (typeof document === 'undefined' || !document.documentElement) return false;
  return document.documentElement.classList.contains('fonts-loaded');
};

/**
 * Register a callback for when fonts are loaded
 */
export const onFontsLoaded = (callback: () => void): void => {
  if (typeof document === 'undefined' || !document.documentElement) return;
  
  if (areFontsLoaded()) {
    // Execute callback on next tick to avoid potential sync issues
    setTimeout(callback, 0);
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
        
        try {
          const event = new Event('fontsloaded');
          document.dispatchEvent(event);
        } catch (e) {
          console.error('Error dispatching font loaded event:', e);
          // Execute callback anyway if event creation fails
          checkLoaded();
        }
      }
    }, 2000);
  }
};
