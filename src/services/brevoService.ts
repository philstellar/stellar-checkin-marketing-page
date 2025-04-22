
/**
 * Brevo API service for handling email subscriptions
 */

// Brevo API key (this is a publishable key used for the frontend)
const BREVO_API_KEY = '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';

// Default list ID for Brevo - update this with your actual list ID
const DEFAULT_LIST_ID = 2; // Replace with your actual list ID

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
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': BREVO_API_KEY,
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        email,
        listIds,
        updateEnabled: true, // Updates existing contact if email already exists
      }),
    });
    
    console.log('Brevo API response status:', response.status);
    return response;
  } catch (error) {
    console.error('Error adding contact to Brevo:', error);
    throw error;
  }
};
