import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Building2,
  CheckCircle2,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  School,
  Users,
} from "lucide-react";

import { contact, telHref } from "@/components/site/nav-items";
import { Eyebrow, PageHero, Section } from "@/components/site/primitives";
import {
  enquirerRoles,
  enquiryInterests,
  enquirySchema,
  submitEnquiry,
  type EnquiryInput,
} from "@/lib/enquiry";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Alpha STEM Academy" },
      {
        name: "description",
        content:
          "Contact Alpha STEM Academy about admissions, programmes, coding clubs and partnerships. Email info.alphastemacademy@gmail.com or call +234 915 770 8755.",
      },
      { property: "og:title", content: "Contact Alpha STEM Academy" },
      {
        property: "og:description",
        content:
          "Parents, schools, organisations and students — send an enquiry and our team will be in touch.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "Alpha STEM Academy",
          slogan: "Where Learning Becomes Capability.",
          email: contact.email,
          telephone: contact.phones,
          contactPoint: contact.phones.map((telephone) => ({
            "@type": "ContactPoint",
            contactType: "customer support",
            telephone,
            email: contact.email,
          })),
        }),
      },
    ],
  }),
  component: Contact,
});

const helpCards = [
  {
    Icon: Users,
    title: "For Parents",
    body: "Ask about admissions, programmes, class schedules, personalised learning and available courses.",
  },
  {
    Icon: School,
    title: "For Schools",
    body: "Explore coding clubs, STEM enrichment, language programmes, financial literacy and other school partnerships.",
  },
  {
    Icon: Building2,
    title: "For Organisations",
    body: "Talk to us about educational partnerships, CSR initiatives, digital-skills programmes and community impact projects.",
  },
  {
    Icon: GraduationCap,
    title: "For Students",
    body: "Find out about our programmes, technology opportunities and enrichment experiences.",
  },
];

const fieldClass =
  "mt-2 w-full rounded-2xl border-2 border-input bg-surface px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary";
const errorFieldClass = "border-destructive focus:border-destructive";

type Errors = Partial<Record<keyof EnquiryInput, string>>;

function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const parsed = enquirySchema.safeParse(data);

    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof EnquiryInput;
        if (key && !next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    setErrors({});
    setStatus("sending");
    await submitEnquiry(parsed.data);
    setStatus("sent");
  }

  return (
    <div className="mx-auto max-w-7xl px-6">
      <PageHero
        eyebrow="// Contact"
        title="Let's Build the Next Generation."
        intro="Whether you're a parent looking for a better learning pathway, a school interested in a partnership, or an organisation interested in our programmes, we'd love to hear from you."
      />

      <p className="max-w-[62ch] text-lg text-pretty text-muted-foreground">
        Alpha STEM Academy is building a community of learners, educators, schools and
        innovators.
      </p>

      {/* Contact information */}
      <Section>
        <Eyebrow>(a) Contact information</Eyebrow>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <a
            href={`mailto:${contact.email}`}
            className="glass-panel group rounded-3xl p-6 transition-transform hover:-translate-y-1"
          >
            <span className="grid size-12 place-items-center rounded-2xl bg-signal text-accent-foreground">
              <Mail className="size-5" />
            </span>
            <p className="label-mono mt-5 text-muted-foreground">Email</p>
            <p className="mt-2 break-all font-display text-lg font-semibold">
              {contact.email}
            </p>
          </a>

          <div className="glass-panel rounded-3xl p-6">
            <span className="grid size-12 place-items-center rounded-2xl bg-primary text-primary-foreground">
              <Phone className="size-5" />
            </span>
            <p className="label-mono mt-5 text-muted-foreground">Phone</p>
            <ul className="mt-2 space-y-1">
              {contact.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={telHref(phone)}
                    className="font-display text-lg font-semibold transition-colors hover:text-primary"
                  >
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-panel rounded-3xl p-6">
            <span className="grid size-12 place-items-center rounded-2xl bg-muted text-foreground">
              <MapPin className="size-5" />
            </span>
            <p className="label-mono mt-5 text-muted-foreground">Where we teach</p>
            <p className="mt-2 font-display text-lg font-semibold">100% Virtual</p>
            <p className="mt-2 text-sm text-pretty text-muted-foreground">
              Learners join from anywhere. Share your time zone and we'll suggest suitable
              session times.
            </p>
          </div>
        </div>
      </Section>

      {/* What can we help you with */}
      <Section className="pt-0">
        <Eyebrow>(b) How can we help?</Eyebrow>
        <h2 className="mt-5 max-w-[26ch] font-display text-3xl font-semibold lg:text-4xl">
          What can we help you with?
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {helpCards.map(({ Icon, title, body }) => (
            <div
              key={title}
              className="glass-panel rounded-3xl p-6 transition-transform hover:-translate-y-1"
            >
              <span className="grid size-11 place-items-center rounded-2xl bg-accent text-accent-foreground">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-pretty text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Form */}
      <Section className="pt-0 pb-24">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="glass-panel rounded-3xl p-6 lg:p-9">
              <Eyebrow>(c) Enquiry form</Eyebrow>
              <h2 className="mt-5 font-display text-2xl font-semibold lg:text-3xl">
                Tell us a little about you.
              </h2>

              {status === "sent" ? (
                <div
                  role="status"
                  className="mt-8 rounded-3xl border-2 border-primary/30 bg-muted p-7"
                >
                  <CheckCircle2 className="size-8 text-primary" />
                  <p className="mt-4 font-display text-xl font-semibold text-pretty">
                    Thank you for contacting Alpha STEM Academy. We've received your
                    enquiry and will get back to you.
                  </p>
                  <p className="mt-3 text-sm text-pretty text-muted-foreground">
                    Your email app should have opened with your enquiry so you can send it.
                    If it didn't, email us directly at{" "}
                    <a
                      href={`mailto:${contact.email}`}
                      className="font-semibold text-primary"
                    >
                      {contact.email}
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-6 rounded-full border-2 border-border bg-surface px-6 py-3 text-sm font-semibold"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form className="mt-8 grid gap-5 sm:grid-cols-2" onSubmit={handleSubmit} noValidate>
                  <div>
                    <label htmlFor="name" className="label-mono text-muted-foreground">
                      Full name
                    </label>
                    <input
                      id="name"
                      name="name"
                      autoComplete="name"
                      placeholder="Your full name"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={`${fieldClass} ${errors.name ? errorFieldClass : ""}`}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-2 text-sm text-destructive">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="label-mono text-muted-foreground">
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={`${fieldClass} ${errors.email ? errorFieldClass : ""}`}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-2 text-sm text-destructive">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="label-mono text-muted-foreground">
                      Phone number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+234 ..."
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      className={`${fieldClass} ${errors.phone ? errorFieldClass : ""}`}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="mt-2 text-sm text-destructive">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="role" className="label-mono text-muted-foreground">
                      I am a
                    </label>
                    <select id="role" name="role" defaultValue={enquirerRoles[0]} className={fieldClass}>
                      {enquirerRoles.map((role) => (
                        <option key={role} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="interest" className="label-mono text-muted-foreground">
                      What are you interested in?
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      defaultValue={enquiryInterests[0]}
                      className={fieldClass}
                    >
                      {enquiryInterests.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="label-mono text-muted-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us about your learner, your school or your organisation."
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className={`${fieldClass} ${errors.message ? errorFieldClass : ""}`}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-2 text-sm text-destructive">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full rounded-full bg-foreground px-8 py-4 text-sm font-semibold text-background transition-colors hover:bg-foreground/90 disabled:opacity-70 sm:w-auto"
                    >
                      {status === "sending" ? "Sending…" : "Send Enquiry"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="glass-panel h-full rounded-3xl p-6 lg:p-8">
              <Eyebrow>(d) What happens next</Eyebrow>
              <ul className="mt-6 space-y-5 text-sm">
                {[
                  "We read your enquiry and match it to the right member of our team.",
                  "We reply with next steps, availability and a recommended starting pathway.",
                  "Where helpful, we arrange a short conversation to understand the learner better.",
                ].map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-signal font-display font-bold text-accent-foreground">
                      {index + 1}
                    </span>
                    <span className="text-pretty text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm text-pretty text-muted-foreground">
                Prefer to talk first? Call{" "}
                <a href={telHref(contact.phones[0] ?? "")} className="font-semibold text-primary">
                  {contact.phones[0]}
                </a>{" "}
                and we'll take it from there.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
