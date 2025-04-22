
/**
 * Brevo API service for handling email subscriptions
 */

// Brevo API key (this is a publishable key used for the frontend)
const BREVO_API_KEY = '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';

// Default list ID for Brevo - confirmed to be 11
const DEFAULT_LIST_ID = 11;

/**
 * Add a contact to Brevo list via direct API call
 * @param email Contact email address
 * @param listIds Optional array of list IDs (uses default if not provided)
 * @returns Promise with the API response
 */
export const addContactToBrevo = async (
  email: string, 
  listIds: number[] = [DEFAULT_LIST_ID],
  source = {
    url: window.location.href,
    cta: 'Registration Popup'
  }
): Promise<Response> => {
  try {
    console.log('Adding contact to Brevo directly:', email, 'to lists:', listIds);
    console.log('Registration source:', source);
    
    // Log the request origin to help identify IP
    try {
      const ipCheckResponse = await fetch('https://api.ipify.org?format=json');
      const ipData = await ipCheckResponse.json();
      console.log('Request originating from IP:', ipData.ip);
    } catch (error) {
      console.error('Error determining IP address:', error);
    }
    
    // Create payload with UPDATEENABLED set to true to update existing contacts
    const payload = {
      email,
      listIds,
      updateEnabled: true,
      attributes: {
        REGISTRATION_PAGE: source.url,
        REGISTRATION_CTA: source.cta,
        REGISTRATION_DATE: new Date().toISOString()
      }
    };
    
    console.log('Sending payload to Brevo API:', JSON.stringify(payload));
    
    // Make direct API call to Brevo
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY,
      },
      body: JSON.stringify(payload),
    });
    
    console.log('Brevo API response status:', response.status);
    
    // Log more details about the response
    const responseData = await response.clone().json().catch(() => null);
    console.log('Brevo API response data:', responseData);

    return response;
    
  } catch (error) {
    console.error('Error adding contact to Brevo:', error);
    throw error;
  }
};

