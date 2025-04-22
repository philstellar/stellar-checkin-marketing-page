
/**
 * Brevo API service for handling email subscriptions
 */

// Brevo API key (this is a publishable key used for the frontend)
const BREVO_API_KEY = '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';

// Default list ID for Brevo - updated to the correct list ID
const DEFAULT_LIST_ID = 11; // Updated to the provided list ID

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
    
    const payload = {
      email,
      listIds,
      updateEnabled: true, // Updates existing contact if email already exists
    };
    
    console.log('Sending payload to Brevo API:', JSON.stringify(payload));
    
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
    
    return response;
  } catch (error) {
    console.error('Error adding contact to Brevo:', error);
    throw error;
  }
};
