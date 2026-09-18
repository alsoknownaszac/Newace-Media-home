/**
 * Contact / inquiry form copy + select options, verbatim from the Figma frames.
 * The same form is reused on the portfolio + wedding stories pages (with the
 * "Begin a Conversation" heading) and on /contact ("Inquiry Details").
 */
export const contactIntro = {
  eyebrow: "Start A Conversation",
  heading: "Let us craft your visual story",
  summary:
    "Please take a few moments to complete this form. Once submitted, you'll be able to choose a date and time that works best for your consultation call.",
  note: "Secure your date today.",
} as const;

export const contactFormCopy = {
  heading: "Begin a Conversation",
  note: "We respond within 24 hours, or less.",
  labels: {
    fullName: "Full Name",
    email: "email address",
    phone: "phone number",
    eventType: "event type",
    eventDateOne: "Event date 1",
    eventDateTwo: "Event date 2",
    location: "location",
    howDidYouHear: "how did you hear about us?",
    message: "your message",
  },
  placeholders: {
    fullName: "Your full name",
    email: "your@email.com",
    phone: "0000 000 000",
    select: "Select options",
    date: "Pick date",
    location: "Enter location",
    message: "Tell us more about vision or project",
  },
  requiredMark: "*",
  submit: "Schedule a consultation",
  submitting: "Scheduling...",
  success: {
    heading: "Thank You",
    body: "Your inquiry has been received. We will be in touch within 24 hours to schedule your consultation.",
    action: "SEND ANOTHER INQUIRY",
  },
  error:
    "Something went wrong sending your inquiry. Please try again, or email us directly at photos@newacemedia.com.",
} as const;

export const eventTypes: readonly string[] = ["Wedding", "Engagement", "Portrait", "Other"];

export const referralSources: readonly string[] = [
  "Instagram",
  "Facebook",
  "Word of Mouth",
  "Google Search",
  "Other",
];
