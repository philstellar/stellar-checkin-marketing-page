
/**
 * Brevo API service for handling email subscriptions
 */

// Brevo API key (this is a publishable key used for the frontend)
const BREVO_API_KEY = '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';

// Default list ID for Brevo - confirmed to be 11
const DEFAULT_LIST_ID = 11;

/**
 * Add a contact to Brevo list
 * @param email Contact email address
 * @param listIds Optional array of list IDs (uses default if not provided)
 * @returns Promise with the API response
 */
export const addContactToBrevo = async (
  email: string, 
  listIds: number[] = [DEFAULT_LIST_ID]
): Promise<Response> => {
  try {
    console.log('Adding contact to Brevo:', email, 'to lists:', listIds);
    
    // Create payload with UPDATEENABLED set to true to update existing contacts
    const payload = {
      email,
      listIds,
      updateEnabled: true, // Updates existing contact if email already exists
    };
    
    console.log('Sending payload to Brevo API:', JSON.stringify(payload));
    
    // Make the API request with proper headers
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload),
    });
    
    console.log('Brevo API response status:', response.status);
    
    // Log more details about the response
    const responseData = await response.clone().json().catch(() => null);
    console.log('Brevo API response data:', responseData);

    // Special handling for common response codes
    if (response.status === 201) {
      console.log('Contact successfully added to Brevo');
    } else if (response.status === 204) {
      console.log('Contact updated in Brevo successfully');
    } else if (response.status === 400) {
      const errorData = responseData || {};
      if (errorData.message?.includes('Contact already exist')) {
        console.log('Contact already exists in Brevo, which is fine');
      } else {
        console.warn('Bad request to Brevo API:', errorData);
      }
    }
    
    return response;
  } catch (error) {
    console.error('Error adding contact to Brevo:', error);
    throw error;
  }
};
