
import { addContactToBrevo } from "./brevoService";

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
  privacy: boolean;
}

export const submitContactForm = async (formData: FormData) => {
  console.log('Contact form submission, adding to Brevo:', formData.email);
  // First, try to add the contact to Brevo
  const response = await addContactToBrevo(formData.email);
  console.log('Brevo API response:', response);
  
  if (!response.ok && response.status !== 201 && response.status !== 400) {
    const errorData = await response.json().catch(() => ({}));
    console.error("Brevo API error:", errorData);
    throw new Error("Error adding contact to Brevo");
  }
  
  const emailContent = `
    Name: ${formData.name}
    Email: ${formData.email}
    Unternehmen: ${formData.company}
    Nachricht: ${formData.message}
  `;

  console.log('Sending form details via FormSubmit');
  // Using FormSubmit with activation string
  const formSubmitResponse = await fetch("https://formsubmit.co/4f8ed8dc6e198407f7647476b637eb77", {
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
    }),
  });

  console.log('FormSubmit response:', formSubmitResponse);
  return formSubmitResponse;
};
