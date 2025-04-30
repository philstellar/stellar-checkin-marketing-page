
import { useState, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SECTION_IDS } from '@/constants/section-ids';

export const useScrollToSection = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Enhanced scroll handling with improved retry mechanism
  const scrollToSection = useCallback((sectionId: string) => {
    console.log(`Attempting to scroll to section: ${sectionId}`);
    console.log(`Available sections in DOM:`, 
      Object.entries(SECTION_IDS)
        .map(([key, id]) => ({ key, id, exists: !!document.getElementById(id) }))
    );
    
    // Function to attempt scrolling with increased retries
    const attemptScroll = (attempts = 0, maxAttempts = 10) => {
      const element = document.getElementById(sectionId);
      
      if (element) {
        console.log(`Found element with ID: ${sectionId}, scrolling to it`);
        
        // Add a small delay to ensure the menu closes before scrolling
        setTimeout(() => {
          try {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
            console.log(`Successfully scrolled to ${sectionId}`);
          } catch (err) {
            console.error(`Error scrolling to ${sectionId}:`, err);
          }
        }, 150);
        
        return true;
      } else {
        console.log(`Element with ID: ${sectionId} not found (attempt ${attempts + 1}/${maxAttempts})`);
        
        if (attempts < maxAttempts) {
          // Retry with increasing delays (exponential backoff with longer timeouts)
          const delay = 400 * Math.pow(1.5, attempts);
          console.log(`Will retry in ${delay}ms`);
          setTimeout(() => {
            attemptScroll(attempts + 1, maxAttempts);
          }, delay);
          return false;
        } else {
          console.warn(`Failed to find element with id '${sectionId}' after ${maxAttempts} attempts. Available IDs:`, 
            Array.from(document.querySelectorAll('[id]')).map(el => el.id)
          );
          return false;
        }
      }
    };
    
    attemptScroll();
  }, []);

  // Handle initial scroll from navigation state
  useEffect(() => {
    const state = location.state as {
      scrollTo?: string;
    };
    
    if (state?.scrollTo) {
      console.log(`Navigation state includes scrollTo: ${state.scrollTo}`);
      console.log(`Current URL path: ${location.pathname}`);
      
      // Use a more robust approach with retries for navigation state scrolling
      const attemptStateScroll = (attempts = 0, maxAttempts = 12) => {
        const element = document.getElementById(state.scrollTo as string);
        
        if (element) {
          console.log(`Found state-targeted element: ${state.scrollTo}, scrolling to it`);
          try {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
            console.log(`Successfully scrolled to ${state.scrollTo} from navigation state`);
            
            // Clear the state to prevent re-scrolling on future navigation
            navigate(location.pathname, {
              replace: true,
              state: {}
            });
          } catch (err) {
            console.error(`Error scrolling to ${state.scrollTo}:`, err);
          }
        } else if (attempts < maxAttempts) {
          const delay = 500 * Math.pow(1.5, attempts);
          console.log(`State-targeted element: ${state.scrollTo} not found yet, retrying in ${delay}ms... (${attempts + 1}/${maxAttempts})`);
          // Use a longer timeout for sections that might be lazy-loaded
          setTimeout(() => {
            attemptStateScroll(attempts + 1, maxAttempts);
          }, delay);
        } else {
          console.warn(`Failed to find element with id '${state.scrollTo}' after ${maxAttempts} attempts. Available IDs in DOM:`, 
            Array.from(document.querySelectorAll('[id]')).map(el => el.id)
          );
        }
      };
      
      // Initial delay to account for initial render and lazy loading
      setTimeout(() => {
        attemptStateScroll();
      }, 500);
    }
  }, [location, navigate]);

  return { scrollToSection };
};
