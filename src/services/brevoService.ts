
/**
 * Brevo API service for handling email subscriptions
 */

// Brevo API key (this is a publishable key used for the frontend)
const BREVO_API_KEY = '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';

// Default list ID for Brevo - confirmed to be 11
const DEFAULT_LIST_ID = 11;

/**
 * Helper to get country by IP address.
 * Uses a free API, fallback to undefined if it fails.
 */
async function getCountryByIp(): Promise<string | undefined> {
  try {
    // 1. Get IP
    const ipRes = await fetch('https://api.ipify.org?format=json');
    const { ip } = await ipRes.json();

    // 2. Geo IP API (ipapi.co used, no API key needed for basic info)
    const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);
    const geo = await geoRes.json();

    console.log('Geo IP lookup:', geo);

    // Return country code or full name if code not available
    return geo.country_code || geo.country_name;
  } catch (error) {
    console.error('Error getting country by IP:', error);
    return undefined;
  }
}

/**
 * Add a contact to Brevo list via direct API call
 * @param email Contact email address
 * @param listIds Optional array of list IDs (uses default if not provided)
 * @param source Optional object that can include:
 *    url - current page
 *    cta - description of CTA
 *    message - (optional) message body for MESSAGE field
 * @returns Promise with the API response
 */
export const addContactToBrevo = async (
  email: string,
  listIds: number[] = [DEFAULT_LIST_ID],
  source = {
    url: window.location.href,
    cta: 'Registration Popup',
    message: undefined as string | undefined
  }
): Promise<Response> => {
  try {
    console.log('Adding contact to Brevo directly:', email, 'to lists:', listIds);
    console.log('Registration source:', source);

    // Get country by IP address
    let registrationCountry: string | undefined = undefined;
    try {
      registrationCountry = await getCountryByIp();
      if (registrationCountry) {
        console.log('Registration country:', registrationCountry);
      }
    } catch (error) {
      // fallback: no country, but don't block registration
      console.error('Could not determine registration country:', error);
    }

    // Create payload with UPDATEENABLED set to true to update existing contacts
    // Make sure attribute names are uppercase and follow Brevo's naming conventions
    const payload = {
      email,
      listIds,
      updateEnabled: true,
      attributes: {
        URL: source.url,
        CTA: source.cta,
        DATE: new Date().toISOString().split('T')[0], // Format as YYYY-MM-DD for better Brevo display
        ...(registrationCountry && { COUNTRY: registrationCountry }),
        ...(source.message && { MESSAGE: source.message })
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
