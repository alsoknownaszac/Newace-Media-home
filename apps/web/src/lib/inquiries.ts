/**
 * Inquiry schema + delivery.
 *
 * The Zod schema is imported by BOTH the client form and the /api/inquiries
 * route handler, so the same rules run in the browser and on the server. Dates
 * use `z.coerce.date()`: react-hook-form hands over Date objects, the network
 * hands over ISO strings, and one schema validates both.
 */
import { z } from "zod";

export const inquirySchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(5, "Phone number is required"),
  location: z.string().min(2, "Location is required"),
  eventType: z.string().min(1, "Event type is required"),
  eventDateOne: z.coerce.date({ error: "First event date is required" }),
  eventDateTwo: z.coerce.date().optional(),
  howDidYouHear: z.string().min(1, "Please tell us how you heard about us"),
  message: z.string().max(2000).optional(),
  /**
   * Honeypot: hidden from humans, irresistible to bots. A filled-in value makes
   * the route handler drop the submission silently.
   */
  company: z.string().optional(),
});

export type InquiryInput = z.infer<typeof inquirySchema>;
export type InquiryFormValues = z.input<typeof inquirySchema>;

/** JSON-safe shape sent over the wire by the client form. */
export interface InquiryPayload {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  eventType: string;
  eventDateOne: string;
  eventDateTwo?: string;
  howDidYouHear: string;
  message?: string;
  company?: string;
}

export type DeliveryResult =
  | { readonly delivered: true; readonly provider: "resend" | "log" }
  | { readonly delivered: false; readonly reason: string };

const RESEND_ENDPOINT = "https://api.resend.com/emails";

function formatDate(value: Date): string {
  return value.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function renderPlainText(inquiry: InquiryInput): string {
  return [
    "New inquiry from newacemedia.com",
    "",
    `Name:        ${inquiry.fullName}`,
    `Email:       ${inquiry.email}`,
    `Phone:       ${inquiry.phone}`,
    `Event type:  ${inquiry.eventType}`,
    `Event date 1: ${formatDate(inquiry.eventDateOne)}`,
    inquiry.eventDateTwo
      ? `Event date 2: ${formatDate(inquiry.eventDateTwo)}`
      : null,
    `Location:    ${inquiry.location}`,
    `Heard via:   ${inquiry.howDidYouHear}`,
    "",
    "Message:",
    inquiry.message?.trim() ? inquiry.message.trim() : "(none provided)",
  ]
    .filter((line): line is string => line !== null)
    .join("\n");
}

/**
 * Sends the inquiry through Resend when RESEND_API_KEY is configured.
 * Without credentials it logs the submission and reports `provider: "log"`, so
 * the end-to-end flow stays testable in development instead of silently
 * pretending to have emailed the studio.
 */
export async function deliverInquiry(
  inquiry: InquiryInput,
): Promise<DeliveryResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO_EMAIL ?? "photos@newacemedia.com";
  const from =
    process.env.INQUIRY_FROM_EMAIL ??
    "Newace Website <website@newacemedia.com>";

  if (!apiKey) {
    console.warn(
      "[inquiries] RESEND_API_KEY is not set - logging the inquiry instead of emailing it.\n" +
        renderPlainText(inquiry),
    );
    return { delivered: true, provider: "log" };
  }

  const response = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: inquiry.email,
      subject: `New ${inquiry.eventType.toLowerCase()} inquiry - ${inquiry.fullName}`,
      text: renderPlainText(inquiry),
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    return {
      delivered: false,
      reason: `Resend responded ${response.status}: ${detail}`,
    };
  }

  return { delivered: true, provider: "resend" };
}
