
/**
 * Font loading utility functions with enhanced error handling
 */

/**
 * Check if fonts have been loaded
 */
export const areFontsLoaded = (): boolean => {
  try {
    if (typeof document === 'undefined' || !document.documentElement) return false;
    return document.documentElement.classList.contains('fonts-loaded');
  } catch (e) {
    console.error('Error checking if fonts loaded:', e);
    return true; // Assume fonts loaded on error to prevent blocking
  }
};

/**
 * Register a callback for when fonts are loaded
 */
export const onFontsLoaded = (callback: () => void): void => {
  try {
    if (typeof document === 'undefined' || !document.documentElement) {
      // Execute callback on next tick when in SSR or when document isn't available
      setTimeout(callback, 0);
      return;
    }
    
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
      
      // Fallback if 'fontsloaded' event never fires - reduced timeout to prevent long waits
      setTimeout(() => {
        try {
          if (!areFontsLoaded()) {
            document.documentElement.classList.add('fonts-loaded');
            
            try {
              const event = new Event('fontsloaded');
              document.dispatchEvent(event);
            } catch (e) {
              console.error('Error dispatching font loaded event:', e);
              // Execute callback anyway if event creation fails
              callback();
            }
          }
        } catch (e) {
          console.error('Error in font loading fallback:', e);
          callback(); // Ensure callback runs even if there's an error
        }
      }, 1000); // Reduced from 2000ms to 1000ms for faster fallback
    }
  } catch (e) {
    console.error('Error in onFontsLoaded:', e);
    setTimeout(callback, 0); // Always ensure callback runs
  }
};
