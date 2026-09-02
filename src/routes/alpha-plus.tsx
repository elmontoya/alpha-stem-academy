import { createFileRoute } from "@tanstack/react-router";

import {
  EnquiryCta,
  Eyebrow,
  GlassCard,
  PageHero,
  Section,
} from "@/components/site/primitives";

export const Route = createFileRoute("/alpha-plus")({
  head: () => ({
    meta: [
      { title: "Alpha+ Advanced Track — Alpha STEM Academy" },
      {
        name: "description",
        content:
          "Alpha+ is our advanced, mentor-intensive track pairing deeper STEM study with mentored projects and a capability portfolio.",
      },
      { property: "og:title", content: "Alpha+ Advanced Track — Alpha STEM Academy" },
      {
        property: "og:description",
        content:
          "A deeper track for learners ready to go further: advanced study, 1:1 mentorship and portfolio work.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/alpha-plus" },
    ],
    links: [{ rel: "canonical", href: "/alpha-plus" }],
  }),
  component: AlphaPlus,
});

const adds = [
  {
    title: "Advanced project track",
    body: "Extended, self-directed builds scoped with a mentor and reviewed at each stage.",
  },
  {
    title: "1:1 mentorship hours",
    body: "Dedicated time for feedback, direction and technical depth beyond the cohort.",
  },
  {
    title: "Capability portfolio",
    body: "Documented work that shows what the learner can actually do.",
  },
  {
    title: "Research and reasoning",
    body: "Structured practice in framing questions and defending conclusions.",
  },
  {
    title: "Communication craft",
    body: "Writing, presenting and explaining technical work to real audiences.",
  },
  {
    title: "Progression planning",
    body: "Guidance on next steps in study, competitions and independent work.",
  },
];

const suited = [
  "Learners already comfortable with the core pathway",
  "Learners who want to build beyond set tasks",
  "Learners preparing for advanced or competitive study",
  "Learners who thrive with close mentorship",
];

function AlphaPlus() {
  return (
    <div className="mx-auto max-w-7xl px-6">
      <PageHero
        eyebrow="// Alpha+"
        title="For learners ready to go further."
        intro="Alpha+ is the advanced tier of the Alpha model. It keeps the structure of our core pathways and adds depth: harder problems, longer projects and more mentor time."
      />

      <section className="pb-8">
        <div className="relative overflow-hidden rounded-[28px] border border-border bg-foreground p-8 lg:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-16 size-72 rounded-full bg-signal/25 blur-3xl"
          />
          <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-signal">
                The advanced tier
              </p>
              <h2 className="mt-4 max-w-[26ch] font-display text-3xl font-semibold text-background lg:text-4xl">
                Depth, not just more content.
              </h2>
              <p className="mt-4 max-w-[52ch] text-pretty text-background/70">
                Alpha+ learners work on problems without tidy answers. Mentors push the
                thinking, the build quality and the explanation — the three things that
                turn knowledge into capability.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-background/15 bg-background/10 p-6 backdrop-blur-md">
                <p className="label-mono text-background/60">At a glance</p>
                <ul className="mt-4 space-y-3 text-sm text-background/90">
                  {[
                    "Mentor-intensive format",
                    "Extended project cycles",
                    "Portfolio and review",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-1.5 size-1.5 shrink-0 rounded-full bg-signal"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section className="pt-0">
        <Eyebrow>(a) What Alpha+ adds</Eyebrow>
        <h2 className="mt-4 max-w-[24ch] font-display text-3xl font-semibold lg:text-4xl">
          Built for sustained, serious work.
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {adds.map((a) => (
            <GlassCard key={a.title}>
              <h3 className="font-display text-lg font-semibold">{a.title}</h3>
              <p className="mt-2 text-sm text-pretty text-muted-foreground">{a.body}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>(b) Who it suits</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold lg:text-4xl">
              Is Alpha+ the right step?
            </h2>
            <p className="mt-5 text-pretty text-muted-foreground">
              We discuss readiness with every family before recommending the track.
            </p>
          </div>
          <ul className="grid gap-3 lg:col-span-7">
            {suited.map((s) => (
              <li
                key={s}
                className="flex items-start gap-3 rounded-2xl border border-border bg-surface/60 px-5 py-4 text-sm font-medium"
              >
                <span
                  aria-hidden="true"
                  className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"
                />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <EnquiryCta
        title="Talk to us about Alpha+"
        body="Tell us where your learner is now and we'll advise on readiness and fit."
      />
    </div>
  );
}
