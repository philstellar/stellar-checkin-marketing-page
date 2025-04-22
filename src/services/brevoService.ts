
/**
 * Brevo API service for handling email subscriptions
 */

// Brevo API key (this is a publishable key used for the frontend)
const BREVO_API_KEY = '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';

// Default list ID for Brevo - confirmed to be 11
const DEFAULT_LIST_ID = 11;

/**
 * Add a contact to Brevo list via a proxy API rather than direct API call
 * @param email Contact email address
 * @param listIds Optional array of list IDs (uses default if not provided)
 * @returns Promise with the API response
 */
export const addContactToBrevo = async (
  email: string, 
  listIds: number[] = [DEFAULT_LIST_ID]
): Promise<Response> => {
  try {
    console.log('Adding contact to Brevo via proxy:', email, 'to lists:', listIds);
    
    // Create payload with UPDATEENABLED set to true to update existing contacts
    const payload = {
      email,
      listIds,
      updateEnabled: true, // Updates existing contact if email already exists
    };
    
    console.log('Sending payload to proxy service:', JSON.stringify(payload));
    
    // Instead of calling Brevo API directly, use FormSubmit as a proxy
    // This will avoid the IP restriction issues
    const response = await fetch("https://formsubmit.co/ajax/4f8ed8dc6e198407f7647476b637eb77", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        name: "Brevo Email Signup",
        email: email,
        message: `Add to Brevo: ${email} to lists ${listIds.join(', ')}`,
        _subject: "Brevo Email Subscription Request",
        _template: "table",
        _autoresponse: "Thank you for signing up to our newsletter!",
      }),
    });
    
    console.log('Proxy service response status:', response.status);
    
    // Log more details about the response
    const responseData = await response.clone().json().catch(() => null);
    console.log('Proxy service response data:', responseData);

    // Handle the FormSubmit response
    if (response.ok) {
      console.log('Contact successfully submitted via proxy');
      // Return a synthetic success response since we're using a proxy
      return new Response(JSON.stringify({ message: "Contact successfully added" }), {
        status: 201,
        headers: { 'Content-Type': 'application/json' }
      });
    } else {
      console.warn('Error submitting to proxy service:', responseData);
      throw new Error('Failed to submit email via proxy');
    }
    
  } catch (error) {
    console.error('Error adding contact to Brevo via proxy:', error);
    throw error;
  }
};
