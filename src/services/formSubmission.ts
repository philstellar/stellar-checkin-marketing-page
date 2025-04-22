
import { addContactToBrevo } from "./brevoService";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
  privacy: boolean;
}

// Helper to extract language from path
const extractLanguageFromPath = (): string => {
  const path = window.location.pathname;
  const match = path.match(/^\/(de|en|es|it)(\/|$)/);
  return match ? match[1] : 'de';
};

export const submitContactForm = async (formData: FormData) => {
  console.log('Contact form submission, adding to Brevo:', formData.email);

  // Always send url, cta, message, and language to Brevo
  const language = extractLanguageFromPath();

  try {
    const response = await addContactToBrevo(
      formData.email,
      undefined,
      {
        url: window.location.href,
        cta: 'Contact Form',
        message: formData.message,
        language,
      }
    );
    console.log('Brevo API response:', response);

    // Handle non-success responses
    if (!response.ok && response.status !== 201) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Brevo API error:", errorData);
      // We'll continue with form submission even if Brevo fails
    }
  } catch (error) {
    console.error("Failed to add contact to Brevo:", error);
    // We'll continue with form submission even if Brevo fails
  }

  const emailContent = `
    Name: ${formData.name}
    Email: ${formData.email}
    Unternehmen: ${formData.company}
    Nachricht: ${formData.message}
  `;

  console.log('Sending form details via FormSubmit');
  // Using FormSubmit with activation string, forwarding to philipp@stellar-trust.com
  const formSubmitResponse = await fetch("https://formsubmit.co/philipp@stellar-trust.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: formData.name,
      email: formData.email,
      message: emailContent,
      _subject: "Neue Kontaktanfrage von Stellar Checkin",
      _template: "table",
    }),
  });

  console.log('FormSubmit response:', formSubmitResponse);
  return formSubmitResponse;
};
