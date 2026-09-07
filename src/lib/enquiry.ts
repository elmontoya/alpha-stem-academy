import { z } from "zod";

import { contact } from "@/components/site/nav-items";

export const enquirerRoles = [
  "Parent/Guardian",
  "Student",
  "School",
  "Organisation",
  "Educator",
  "Other",
] as const;

export const enquiryInterests = [
  "K–12 Virtual School",
  "Coding",
  "Mathematics",
  "English Language",
  "Sciences",
  "Financial Literacy",
  "Languages",
  "Coding Clubs",
  "School Partnership",
  "CSR/Community Programme",
  "Other",
] as const;

export const enquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Please enter your full name." })
    .max(100, { message: "Name must be less than 100 characters." }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address." })
    .max(255, { message: "Email must be less than 255 characters." }),
  phone: z
    .string()
    .trim()
    .min(7, { message: "Please enter a phone number we can reach you on." })
    .max(30, { message: "Phone number must be less than 30 characters." }),
  role: z.enum(enquirerRoles, { message: "Please tell us who you are." }),
  interest: z.enum(enquiryInterests, {
    message: "Please choose what you're interested in.",
  }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Please add a little more detail (at least 10 characters)." })
    .max(1500, { message: "Message must be less than 1500 characters." }),
});

export type EnquiryInput = z.infer<typeof enquirySchema>;

/**
 * Single delivery point for enquiries.
 *
 * Today this hands the validated enquiry to the visitor's own email app, which
 * is the only channel available without a backend. To route enquiries to a
 * database or transactional email provider later (Lovable Cloud, Resend,
 * Formspree, ...), replace the body of this function with that call — the form
 * itself needs no changes.
 */
export async function submitEnquiry(input: EnquiryInput): Promise<void> {
  const body = [
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Phone: ${input.phone}`,
    `I am a: ${input.role}`,
    `Interested in: ${input.interest}`,
    "",
    input.message,
  ].join("\n");

  const href = `mailto:${contact.email}?subject=${encodeURIComponent(
    `Enquiry (${input.role}) — Alpha STEM Academy`,
  )}&body=${encodeURIComponent(body)}`;

  if (typeof window !== "undefined") {
    window.location.href = href;
  }
}
