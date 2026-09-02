import { createFileRoute } from "@tanstack/react-router";

import { contact } from "@/components/site/nav-items";
import { PageHero, Section } from "@/components/site/primitives";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Alpha STEM Academy" },
      {
        name: "description",
        content:
          "How Alpha STEM Academy collects, uses and protects the personal information shared through our enquiries and virtual learning programmes.",
      },
      { property: "og:title", content: "Privacy Policy — Alpha STEM Academy" },
      {
        property: "og:description",
        content: "Our approach to personal data, enquiries and learner privacy.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

const sections = [
  {
    title: "Information we collect",
    body: "When you contact us or enrol a learner, we collect the details you choose to share — such as name, email address, phone number, and information about the learner relevant to placing them on a suitable pathway.",
  },
  {
    title: "How we use information",
    body: "We use your information to respond to enquiries, deliver and administer our virtual programmes, communicate about sessions and progress, and improve how we teach.",
  },
  {
    title: "Lawful basis and consent",
    body: "We process information where you have given consent, where it is necessary to provide the education you have requested, or where we have a legal obligation to do so.",
  },
  {
    title: "Sharing information",
    body: "We do not sell personal information. We share it only with people and service providers who need it to deliver our programmes, and only to the extent required.",
  },
  {
    title: "Learner privacy",
    body: "Information about a learner under 18 is shared only with the parent or guardian who registered them and with the mentors involved in their learning.",
  },
  {
    title: "Data retention",
    body: "We keep information for as long as needed to provide our services and to meet record-keeping obligations, after which it is deleted or anonymised.",
  },
  {
    title: "Your rights",
    body: "You may request access to the information we hold about you, ask us to correct it, or ask us to delete it where we are not required to keep it.",
  },
  {
    title: "Changes to this policy",
    body: "If we update this policy, the revised version will be published on this page.",
  },
];

function Privacy() {
  return (
    <div className="mx-auto max-w-7xl px-6">
      <PageHero
        eyebrow="// Legal"
        title="Privacy Policy"
        intro="This policy explains what information Alpha STEM Academy collects, why we collect it, and how we look after it."
      />

      <Section className="pt-0">
        <div className="glass-panel rounded-3xl p-6 shadow-card lg:p-10">
          <ol className="space-y-8">
            {sections.map((s, i) => (
              <li key={s.title}>
                <p className="label-mono text-primary">0{i + 1}</p>
                <h2 className="mt-2 font-display text-xl font-semibold">{s.title}</h2>
                <p className="mt-2 max-w-[70ch] text-sm text-pretty text-muted-foreground">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-10 border-t border-border pt-6">
            <h2 className="font-display text-xl font-semibold">Contact us</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Questions about privacy? Email{" "}
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
