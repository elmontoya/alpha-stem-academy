import { createFileRoute, Link } from "@tanstack/react-router";

import heroImage from "@/assets/hero-study.jpg";
import roboticsImage from "@/assets/program-robotics.jpg";
import dataImage from "@/assets/program-data.jpg";
import creativeImage from "@/assets/program-creative.jpg";
import {
  EnquiryCta,
  Eyebrow,
  GlassCard,
  PrimaryLink,
  SecondaryLink,
  Section,
} from "@/components/site/primitives";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alpha STEM Academy — Where Learning Becomes Capability" },
      {
        name: "description",
        content:
          "A 100% virtual STEM academy with personalised K-12 pathways in engineering, data, creative coding and digital literacy.",
      },
      {
        property: "og:title",
        content: "Alpha STEM Academy — Where Learning Becomes Capability",
      },
      {
        property: "og:description",
        content:
          "Personalised, mentor-led virtual STEM education built for future-ready capability.",
      },
    ],
  }),
  component: Home,
});

const model = [
  {
    n: "01",
    title: "Mentor-led live",
    body: "Small cohorts, real-time teaching, and feedback that lands the same day.",
  },
  {
    n: "02",
    title: "Personal pathways",
    body: "Each learner moves on their own rhythm, mapped to clear capability goals.",
  },
  {
    n: "03",
    title: "Human development",
    body: "Academics grounded in creativity, discipline and professional readiness.",
  },
];

const programs = [
  {
    slug: "engineering-robotics",
    title: "Engineering & Robotics",
    body: "Systems thinking, design and build — from first principles to working prototypes.",
    image: roboticsImage,
    alt: "Robotic arm and precision components on a light surface",
  },
  {
    slug: "data-machine-learning",
    title: "Data & Machine Learning",
    body: "Statistics, models and literacy in the tools that will shape the next decade.",
    image: dataImage,
    alt: "Laptop showing data dashboards beside statistics notes",
  },
  {
    slug: "creative-coding-design",
    title: "Creative Coding & Design",
    body: "Where engineering meets expression — code, design and human-centred craft.",
    image: creativeImage,
    alt: "Tablet showing generative design sketches beside colour swatches",
  },
];

const approach = [
  {
    title: "Personalised by design",
    body: "Curriculum adapts to each learner's pace, strengths and goals.",
  },
  {
    title: "Mentorship at the core",
    body: "Close, consistent guidance so capability is built, not just taught.",
  },
  {
    title: "Future-ready outcomes",
    body: "Skills that transfer — communication, reasoning and applied STEM.",
  },
  {
    title: "Warm, structured, calm",
    body: "A premium environment that feels professional yet genuinely human.",
  },
];

function Home() {
  return (
    <div className="mx-auto max-w-7xl px-6">
      <section className="relative py-16 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 right-0 size-[520px] rounded-full bg-primary/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-1/3 size-[360px] rounded-full bg-primary-soft/10 blur-3xl"
        />
        <div className="relative grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow rise">// Virtual Learning Model</p>
            <h1 className="rise mt-6 font-display text-5xl font-semibold leading-[1.02] lg:text-7xl [animation-delay:80ms]">
              Where Learning Becomes Capability.
            </h1>
            <p className="rise mt-7 max-w-[52ch] text-lg text-pretty text-muted-foreground [animation-delay:160ms]">
              A 100% virtual STEM institution pairing personalised academics with the
              structure of a precision instrument — engineered so every learner develops
              measurable, transferable capability.
            </p>
            <div className="rise mt-9 flex flex-wrap items-center gap-4 [animation-delay:240ms]">
              <PrimaryLink to="/contact">Enquire Now</PrimaryLink>
              <SecondaryLink to="/programs">Explore Programs</SecondaryLink>
            </div>
            <div className="rise mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6 [animation-delay:320ms]">
              {["Personalised", "STEM-first", "Future-ready"].map((label, i) => (
                <div key={label}>
                  <p className="label-mono text-muted-foreground">0{i + 1}</p>
                  <p className="mt-1 text-sm font-medium">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rise relative [animation-delay:200ms]">
              <img
                src={heroImage}
                alt="A calm study desk with a laptop showing a mathematics lesson and geometric models"
                width={1024}
                height={1280}
                className="aspect-4/5 w-full rounded-3xl object-cover outline-1 -outline-offset-1 outline-black/5"
              />
              <div className="glass-panel absolute -bottom-6 -left-6 hidden w-48 rounded-2xl p-4 shadow-float sm:block">
                <p className="label-mono text-primary">Signal</p>
                <p className="mt-2 text-sm font-medium leading-snug">
                  Capability, measured — not assumed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow>(a) Model</Eyebrow>
            <h2 className="mt-4 max-w-[20ch] font-display text-3xl font-semibold lg:text-4xl">
              A virtual model built like an instrument.
            </h2>
          </div>
          <p className="max-w-[42ch] text-pretty text-muted-foreground">
            Live, mentor-led sessions meet a structured curriculum across STEM, creativity
            and digital literacy.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {model.map((m) => (
            <GlassCard key={m.n}>
              <span className="grid size-11 place-items-center rounded-xl bg-primary/10 font-display text-lg text-primary">
                {m.n}
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">{m.title}</h3>
              <p className="mt-2 text-sm text-pretty text-muted-foreground">{m.body}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-end">
          <Eyebrow>(b) Programs</Eyebrow>
          <h2 className="font-display text-3xl font-semibold lg:text-4xl">Programs.</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {programs.map((p) => (
            <article
              key={p.slug}
              className="glass-panel group rounded-3xl p-5 shadow-card transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <img
                src={p.image}
                alt={p.alt}
                loading="lazy"
                width={1024}
                height={768}
                className="aspect-4/3 w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5"
              />
              <h3 className="mt-5 font-display text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-pretty text-muted-foreground">{p.body}</p>
              <Link
                to="/programs"
                hash={p.slug}
                className="mt-4 inline-block text-sm font-semibold text-primary transition-opacity group-hover:opacity-80"
              >
                See the pathway
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <section className="py-8">
        <div className="relative overflow-hidden rounded-[28px] border border-border bg-foreground p-8 lg:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-16 size-72 rounded-full bg-signal/25 blur-3xl"
          />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-[46ch]">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-signal">
                Alpha+ — the advanced tier
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-background lg:text-4xl">
                For learners ready to go further.
              </h2>
              <p className="mt-4 text-pretty text-background/70">
                A deeper, mentor-intensive track pairing advanced STEM study with mentored
                projects and real-world capability.
              </p>
            </div>
            <div className="shrink-0 rounded-2xl border border-background/15 bg-background/10 p-5 backdrop-blur-md">
              <p className="label-mono text-background/60">What Alpha+ adds</p>
              <ul className="mt-3 space-y-2 text-sm text-background/90">
                <li>Advanced project track</li>
                <li>1:1 mentorship hours</li>
                <li>Capability portfolio</li>
              </ul>
              <Link
                to="/alpha-plus"
                className="mt-5 inline-block rounded-full bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-background/90"
              >
                Explore Alpha+
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>(c) Approach</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold lg:text-4xl">
              Why families choose Alpha.
            </h2>
            <p className="mt-5 text-pretty text-muted-foreground">
              Confidence comes from a clear system — defined outcomes, steady mentorship,
              and a calm environment built for deep work.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {approach.map((a) => (
              <GlassCard key={a.title}>
                <h3 className="font-display text-lg font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm text-pretty text-muted-foreground">{a.body}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </Section>

      <EnquiryCta />
    </div>
  );
}
