import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone } from "lucide-react";

import { contact, programItems, telHref } from "@/components/site/nav-items";
import { Eyebrow, PageHero, Section } from "@/components/site/primitives";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Enquiries — Alpha STEM Academy" },
      {
        name: "description",
        content:
          "Enquire about Alpha STEM Academy. Email info.alphastemacademy@gmail.com or call +234 915 770 8755 to discuss pathways for your learner.",
      },
      { property: "og:title", content: "Contact & Enquiries — Alpha STEM Academy" },
      {
        property: "og:description",
        content:
          "Send an enquiry or reach the Alpha STEM Academy team by email or phone.",
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
        }),
      },
    ],
  }),
  component: Contact,
});

const fieldClass =
  "mt-2 w-full rounded-xl border border-input bg-surface/70 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary";

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto max-w-7xl px-6">
      <PageHero
        eyebrow="// Contact"
        title="Let's talk about your learner."
        intro="Send us an enquiry and we'll respond with next steps, availability and a recommended starting pathway."
      />

      <Section className="pt-0">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 shadow-card lg:p-8">
              <Eyebrow>(a) Enquiry form</Eyebrow>
              <h2 className="mt-4 font-display text-2xl font-semibold lg:text-3xl">
                Tell us a little about you.
              </h2>

              {sent ? (
                <div
                  role="status"
                  className="mt-8 rounded-2xl border border-border bg-surface/70 p-6"
                >
                  <p className="font-display text-lg font-semibold">
                    Thank you — your details are ready to send.
                  </p>
                  <p className="mt-2 text-sm text-pretty text-muted-foreground">
                    Your email app should have opened with the enquiry. If it didn't, email
                    us directly at{" "}
                    <a
                      href={`mailto:${contact.email}`}
                      className="font-medium text-primary"
                    >
                      {contact.email}
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-5 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form
                  className="mt-8 grid gap-5 sm:grid-cols-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const data = new FormData(e.currentTarget);
                    const body = [
                      `Name: ${data.get("name")}`,
                      `Email: ${data.get("email")}`,
                      `Phone: ${data.get("phone")}`,
                      `Learner age / grade: ${data.get("learner")}`,
                      `Programme of interest: ${data.get("program")}`,
                      "",
                      `${data.get("message")}`,
                    ].join("\n");
                    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
                      "Enquiry — Alpha STEM Academy",
                    )}&body=${encodeURIComponent(body)}`;
                    setSent(true);
                  }}
                >
                  <div>
                    <label htmlFor="name" className="label-mono text-muted-foreground">
                      Full name
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="label-mono text-muted-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@example.com"
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="label-mono text-muted-foreground">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      autoComplete="tel"
                      placeholder="+234 ..."
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="learner" className="label-mono text-muted-foreground">
                      Learner age or grade
                    </label>
                    <input
                      id="learner"
                      name="learner"
                      placeholder="e.g. Grade 8"
                      className={fieldClass}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="program" className="label-mono text-muted-foreground">
                      Programme of interest
                    </label>
                    <select id="program" name="program" className={fieldClass}>
                      <option>Not sure yet</option>
                      {programItems.map((p) => (
                        <option key={p.slug}>{p.title}</option>
                      ))}
                      <option>Alpha+ advanced track</option>
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
                      required
                      placeholder="What would you like to know?"
                      className={fieldClass}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="w-full rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-background transition-colors hover:bg-foreground/90 sm:w-auto"
                    >
                      Send enquiry
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="glass-panel rounded-3xl p-6 shadow-card lg:p-8">
              <Eyebrow>(b) Direct contact</Eyebrow>
              <h2 className="mt-4 font-display text-2xl font-semibold">
                Reach us directly.
              </h2>
              <ul className="mt-6 space-y-3 text-sm">
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-start gap-3 rounded-2xl border border-border bg-surface/60 px-4 py-4 transition-colors hover:border-primary/40"
                  >
                    <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="break-all font-medium">{contact.email}</span>
                  </a>
                </li>
                {contact.phones.map((phone) => (
                  <li key={phone}>
                    <a
                      href={telHref(phone)}
                      className="flex items-center gap-3 rounded-2xl border border-border bg-surface/60 px-4 py-4 transition-colors hover:border-primary/40"
                    >
                      <Phone className="size-4 shrink-0 text-primary" />
                      <span className="font-medium">{phone}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-pretty text-muted-foreground">
                Alpha STEM Academy is 100% virtual, so learners can join from anywhere.
                Share your time zone and we'll suggest suitable session times.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
