import { createFileRoute } from "@tanstack/react-router";

import { contact } from "@/components/site/nav-items";
import { PageHero, Section } from "@/components/site/primitives";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Alpha STEM Academy" },
      {
        name: "description",
        content:
          "The terms that govern enrolment, participation and use of Alpha STEM Academy's virtual learning programmes and website.",
      },
      { property: "og:title", content: "Terms & Conditions — Alpha STEM Academy" },
      {
        property: "og:description",
        content: "Enrolment, conduct, payments and use of our virtual programmes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

const sections = [
  {
    title: "Acceptance of terms",
    body: "By enrolling in a programme or using this website, you agree to these terms. If you are registering a learner under 18, you confirm you are their parent or legal guardian.",
  },
  {
    title: "Our programmes",
    body: "Alpha STEM Academy delivers programmes entirely online. Session schedules, pathway content and mentor allocation may be adjusted where needed to maintain quality of teaching.",
  },
  {
    title: "Enrolment and access",
    body: "Access to sessions and materials is granted to the enrolled learner only and may not be shared, recorded or redistributed without written permission.",
  },
  {
    title: "Fees and payments",
    body: "Applicable fees, payment schedules and any refund arrangements are confirmed in writing before enrolment is complete.",
  },
  {
    title: "Learner conduct",
    body: "Learners are expected to attend prepared, participate respectfully, and follow mentor guidance. We may suspend access where conduct disrupts other learners.",
  },
  {
    title: "Technology requirements",
    body: "Learners are responsible for a suitable device and internet connection. We are not liable for missed sessions caused by a learner's local connectivity.",
  },
  {
    title: "Intellectual property",
    body: "Curriculum materials, resources and branding remain the property of Alpha STEM Academy. Learners retain ownership of the work they create.",
  },
  {
    title: "Limitation of liability",
    body: "We deliver our programmes with reasonable care and skill, but we do not guarantee particular academic outcomes or results.",
  },
  {
    title: "Changes to these terms",
    body: "We may update these terms from time to time. The current version is always published on this page.",
  },
];

function Terms() {
  return (
    <div className="mx-auto max-w-7xl px-6">
      <PageHero
        eyebrow="// Legal"
        title="Terms & Conditions"
        intro="These terms set out how enrolment, participation and use of our virtual programmes work."
      />

      <Section className="pt-0">
        <div className="glass-panel rounded-3xl p-6 shadow-card lg:p-10">
          <ol className="space-y-8">
            {sections.map((s, i) => (
              <li key={s.title}>
                <p className="label-mono text-primary">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-2 font-display text-xl font-semibold">{s.title}</h2>
                <p className="mt-2 max-w-[70ch] text-sm text-pretty text-muted-foreground">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-10 border-t border-border pt-6">
            <h2 className="font-display text-xl font-semibold">Questions</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              For anything related to these terms, email{" "}
              <a href={`mailto:${contact.email}`} className="font-medium text-primary">
                {contact.email}
              </a>
              .
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
