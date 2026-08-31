import { createFileRoute } from "@tanstack/react-router";

import aboutImage from "@/assets/about-learning.jpg";
import {
  EnquiryCta,
  Eyebrow,
  GlassCard,
  PageHero,
  Section,
} from "@/components/site/primitives";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Alpha STEM Academy" },
      {
        name: "description",
        content:
          "Alpha STEM Academy is a virtual learning institution focused on STEM, creativity, digital literacy and personalised human-capability development.",
      },
      { property: "og:title", content: "About — Alpha STEM Academy" },
      {
        property: "og:description",
        content:
          "Our virtual learning model, our values, and how we build capability with every learner.",
      },
    ],
  }),
  component: About,
});

const values = [
  {
    title: "Innovation",
    body: "We teach with the tools and methods of the present, not the last decade.",
  },
  {
    title: "Academic excellence",
    body: "Rigorous, structured study with clear expectations at every stage.",
  },
  {
    title: "Personalised learning",
    body: "Every pathway is shaped around the learner in front of us.",
  },
  {
    title: "Human development",
    body: "Character, communication and collaboration sit alongside the science.",
  },
  {
    title: "Future readiness",
    body: "Capability that transfers into universities, workplaces and communities.",
  },
  {
    title: "Warmth and access",
    body: "A professional environment that still feels welcoming to every family.",
  },
];

const audiences = [
  "Parents and families",
  "K-12 learners",
  "Schools and educators",
  "Educational organisations",
  "CSR and community programmes",
  "International education partners",
];

function About() {
  return (
    <div className="mx-auto max-w-7xl px-6">
      <PageHero
        eyebrow="// About"
        title="A virtual institution built around the learner."
        intro="Alpha STEM Academy is a 100% virtual school focused on STEM, creativity, digital literacy and personalised education. We exist to turn learning into capability — the ability to think, build and contribute."
      />

      <Section className="pt-0">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <img
              src={aboutImage}
              alt="A student joining a live online class at a bright home desk"
              loading="lazy"
              width={1200}
              height={900}
              className="aspect-4/3 w-full rounded-3xl object-cover outline-1 -outline-offset-1 outline-black/5"
            />
          </div>
          <div className="lg:col-span-6">
            <Eyebrow>(a) Our model</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold lg:text-4xl">
              Structured, live and genuinely personal.
            </h2>
            <div className="mt-6 space-y-4 text-pretty text-muted-foreground">
              <p>
                Learning happens in small, mentor-led sessions supported by a structured
                curriculum. Mentors know each learner by name, track their progress
                closely, and adjust the pathway as strengths and interests emerge.
              </p>
              <p>
                Because we are fully virtual, learners can study from anywhere — while
                still belonging to a cohort, a mentor and a clear plan for the term ahead.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <Eyebrow>(b) What we stand for</Eyebrow>
        <h2 className="mt-4 max-w-[24ch] font-display text-3xl font-semibold lg:text-4xl">
          Values that shape every session.
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <GlassCard key={v.title}>
              <h3 className="font-display text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-pretty text-muted-foreground">{v.body}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>(c) Who we work with</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold lg:text-4xl">
              Built for learners and the people around them.
            </h2>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {audiences.map((a) => (
              <li
                key={a}
                className="flex items-center gap-3 rounded-2xl border border-border bg-surface/60 px-5 py-4 text-sm font-medium"
              >
                <span aria-hidden="true" className="size-1.5 rounded-full bg-primary" />
                {a}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <EnquiryCta title="Want to know if Alpha fits your learner?" />
    </div>
  );
}
