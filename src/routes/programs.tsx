import { createFileRoute } from "@tanstack/react-router";
import {
  Atom,
  Brain, 
  Beaker,
  CalendarClock,
  Code2,
  Compass,
  FlaskConical,
  Layers,
  Leaf,
  Lightbulb,
  MessageSquareText,
  Rocket,
  Sigma,
  Sparkles,
  Target,
  UserRoundCheck,
  Users,
} from "lucide-react";

import heroImage from "@/assets/hero-study.jpg";
import flexibleImage from "@/assets/home-virtual-class.jpg";
import {
  Eyebrow,
  GlassCard,
  PrimaryLink,
  SecondaryLink,
  Section,
} from "@/components/site/primitives";
import { SpaceSticker } from "@/components/site/SpaceSticker";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs | Alpha STEM Academy" },
      {
        name: "description",
        content:
          "Virtual K–12 programmes at Alpha STEM Academy: coding & computer science, mathematics, English language arts and the sciences — personalised, mastery-based and flexible.",
      },
      { property: "og:title", content: "Programmes — Alpha STEM Academy" },
      {
        property: "og:description",
        content:
          "Strong foundations, future-ready minds. 100% virtual K–12 programmes with personalised instruction and flexible schedules.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Programs,
});

const coreProgrammes = [
  {
    icon: Code2,
    title: "Coding & Computer Science",
    lead: "Coding is more than learning programming languages.",
    body: [
      "It develops computational thinking, logic, sequencing, problem-solving and the ability to turn an idea into something that works.",
      "Students progress from foundational concepts into increasingly practical applications based on their level and experience.",
    ],
  },
  {
    icon: Sigma,
    title: "Mathematics",
    lead: "We approach mathematics as a language for reasoning, not merely a collection of formulas.",
    body: [
      "Students develop numerical fluency, logical reasoning, analytical thinking and the confidence to approach unfamiliar problems.",
    ],
  },
  {
    icon: MessageSquareText,
    title: "English Language & Language Arts",
    lead: "Strong communication is a force multiplier.",
    body: [
      "Our English programmes develop reading, writing, vocabulary, comprehension, grammar, communication and critical-thinking skills, helping learners communicate ideas with clarity and confidence.",
    ],
  },
];

const sciences = [
  {
    icon: Atom,
    title: "Physics",
    body: "Matter, energy, forces, motion and the laws that govern the physical world.",
  },
  {
    icon: FlaskConical,
    title: "Chemistry",
    body: "The study of matter, reactions, substances and the principles behind chemical change.",
  },
  {
    icon: Leaf,
    title: "Biology",
    body: "The study of life, organisms, systems and the processes that make living things work.",
  },
];

const model = [
  {
    icon: UserRoundCheck,
    title: "Personalised Learning",
    body: "Instruction responds to the learner.",
  },
  {
    icon: Layers,
    title: "Mastery-Based Progression",
    body: "Students build competence before moving forward.",
  },
  {
    icon: Beaker,
    title: "Project-Based Learning",
    body: "Students apply knowledge through meaningful projects.",
  },
  {
    icon: Compass,
    title: "Real-World Learning",
    body: "Concepts are connected to problems, industries and everyday life.",
  },
];

const audience = [
  { icon: Users, text: "K–12 learners seeking structured virtual instruction" },
  { icon: Lightbulb, text: "Students needing additional academic support" },
  { icon: Rocket, text: "Learners interested in STEM and technology" },
  { icon: Code2, text: "Students seeking deeper exposure to coding" },
  { icon: CalendarClock, text: "Families looking for flexible learning" },
  { icon: Target, text: "Students preparing for STEM pathways" },
  { icon: Brain, text: "Learners who thrive in personalised environments" },
];

const stages = [
  { label: "K–5", note: "Early foundations" },
  { label: "6–8", note: "Building fluency" },
  { label: "9–12", note: "Depth & direction" },
];

function Programs() {
  return (
    <div className="mx-auto max-w-7xl px-6">
      {/* HERO */}
      <section className="relative py-14 lg:py-20">
        <div className="relative grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Eyebrow>// Programmes</Eyebrow>
            <h1 className="rise mt-5 max-w-[22ch] font-display text-4xl font-semibold leading-[1.05] lg:text-6xl">
              Strong Foundations. Future-Ready Minds.
            </h1>
            <p className="rise mt-6 max-w-[56ch] text-lg text-pretty text-muted-foreground [animation-delay:120ms]">
              Our virtual K–12 programmes combine academic foundations with the
              analytical, creative and technological skills learners need for a
              rapidly changing world.
            </p>
            <p className="rise mt-4 font-display text-base font-semibold text-primary [animation-delay:180ms]">
              100% virtual. Personalised instruction. Flexible schedules.
              Real-world application.
            </p>
            <div className="rise mt-8 flex flex-wrap gap-3 [animation-delay:240ms]">
              <PrimaryLink to="/contact">Enquire About Admission</PrimaryLink>
              <SecondaryLink to="/alpha-plus">Discover Alpha+</SecondaryLink>
            </div>
          </div>
          <div className="lg:col-span-6">
            <img
              src={heroImage}
              alt="Young learner studying at a laptop during a live virtual STEM lesson"
              width={1024}
              height={768}
              className="rise aspect-4/3 w-full rounded-[28px] object-cover shadow-card outline-2 -outline-offset-2 outline-black/5 [animation-delay:200ms]"
            />
          </div>
          <SpaceSticker kind="planet" className="absolute -right-3 top-5 z-10 hidden w-24 lg:block" />
        </div>
      </section>

      {/* K-12 VIRTUAL SCHOOL */}
      <Section id="k12" className="pt-0">
        <div className="glass-panel grid gap-10 rounded-[28px] p-8 lg:grid-cols-12 lg:p-12">
          <div className="lg:col-span-7">
            <Eyebrow>(a) The school</Eyebrow>
            <h2 className="mt-4 max-w-[22ch] font-display text-3xl font-semibold lg:text-4xl">
              K–12 Virtual School
            </h2>
            <p className="mt-5 max-w-[58ch] text-pretty text-muted-foreground">
              Alpha STEM Academy provides virtual learning support across the
              K–12 age range, giving learners access to structured academic
              instruction beyond the boundaries of a traditional classroom.
            </p>
            <p className="mt-4 max-w-[58ch] text-pretty text-muted-foreground">
              Our programmes are designed to complement different educational
              pathways while strengthening core knowledge and future-ready
              skills.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-3xl border-2 border-border bg-muted/60 p-6 text-center">
              <p className="label-mono text-primary">Ages served</p>
              <p className="mt-2 font-display text-5xl font-semibold lg:text-6xl">
                K–12
              </p>
              <ul className="mt-6 space-y-3 text-left">
                {stages.map((s) => (
                  <li
                    key={s.label}
                    className="flex items-center justify-between gap-4 rounded-2xl bg-surface px-4 py-3 text-sm shadow-card"
                  >
                    <span className="font-display font-semibold">{s.label}</span>
                    <span className="text-muted-foreground">{s.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* CORE ACADEMIC PROGRAMMES */}
      <Section id="academics" className="pt-0">
        <Eyebrow>(b) Core academics</Eyebrow>
        <h2 className="mt-4 max-w-[26ch] font-display text-3xl font-semibold lg:text-4xl">
          Core Academic Programmes
        </h2>
        <p className="mt-4 max-w-[52ch] text-pretty text-muted-foreground">
          Open each programme to see how it is taught.
        </p>

        <div className="mt-10 space-y-4">
          {coreProgrammes.map(({ icon: Icon, title, lead, body }, i) => (
            <details
              key={title}
              open={i === 0}
              className="glass-panel group rounded-3xl p-6 transition-shadow hover:shadow-card-hover lg:p-8"
            >
              <summary className="flex cursor-pointer list-none items-center gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-signal text-accent-foreground">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="flex-1 font-display text-xl font-semibold lg:text-2xl">
                  {title}
                </h3>
                <span
                  aria-hidden="true"
                  className="grid size-9 shrink-0 place-items-center rounded-full border-2 border-border font-display text-lg font-bold transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="mt-5 border-t-2 border-border pt-5">
                <p className="max-w-[62ch] font-display text-lg font-semibold">
                  {lead}
                </p>
                {body.map((p) => (
                  <p
                    key={p}
                    className="mt-3 max-w-[68ch] text-pretty text-muted-foreground"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </details>
          ))}

          <details className="glass-panel group rounded-3xl p-6 transition-shadow hover:shadow-card-hover lg:p-8">
            <summary className="flex cursor-pointer list-none items-center gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-signal text-accent-foreground">
                <Sparkles className="size-6" aria-hidden="true" />
              </span>
              <h3 className="flex-1 font-display text-xl font-semibold lg:text-2xl">
                Sciences
              </h3>
              <span
                aria-hidden="true"
                className="grid size-9 shrink-0 place-items-center rounded-full border-2 border-border font-display text-lg font-bold transition-transform duration-300 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <div className="mt-5 border-t-2 border-border pt-5">
              <div className="grid gap-4 md:grid-cols-3">
                {sciences.map(({ icon: Icon, title, body }) => (
                  <div
                    key={title}
                    className="rounded-2xl border-2 border-border bg-muted/50 p-5 transition-transform duration-300 hover:-translate-y-1"
                  >
                    <Icon className="size-6 text-primary" aria-hidden="true" />
                    <h4 className="mt-3 font-display text-lg font-semibold">
                      {title}
                    </h4>
                    <p className="mt-2 text-sm text-pretty text-muted-foreground">
                      {body}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-5 max-w-[68ch] text-pretty text-muted-foreground">
                Where appropriate, learning is connected to real-world
                applications, experiments, questions and projects.
              </p>
            </div>
          </details>
        </div>
      </Section>

      {/* ALPHA LEARNING MODEL */}
      <Section id="learning-model" className="pt-0">
        <Eyebrow>(c) How we teach</Eyebrow>
        <h2 className="mt-4 max-w-[22ch] font-display text-3xl font-semibold lg:text-4xl">
          The Alpha Learning Model
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {model.map(({ icon: Icon, title, body }) => (
            <GlassCard
              key={title}
              className="transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <span className="grid size-11 place-items-center rounded-2xl bg-primary text-primary-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-pretty text-muted-foreground">
                {body}
              </p>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* FLEXIBLE LEARNING OPTIONS */}
      <Section className="pt-0">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <img
              src={flexibleImage}
              alt="Student in a live one-on-one virtual class with an instructor on screen"
              loading="lazy"
              width={1024}
              height={768}
              className="aspect-4/3 w-full rounded-[28px] object-cover shadow-card outline-2 -outline-offset-2 outline-black/5"
            />
          </div>
          <div className="lg:col-span-6">
            <Eyebrow>(d) Flexibility</Eyebrow>
            <h2 className="mt-4 max-w-[20ch] font-display text-3xl font-semibold lg:text-4xl">
              Learning should fit the learner.
            </h2>
            <p className="mt-5 max-w-[56ch] text-pretty text-muted-foreground">
              Our virtual school offers flexible scheduling and one-on-one
              learning options designed to work around different family
              routines.
            </p>
            <p className="mt-4 max-w-[56ch] text-pretty text-muted-foreground">
              Students can receive focused instructional support without the
              limitations of location or a conventional school timetable.
            </p>
          </div>
        </div>
      </Section>

      {/* WHO IS IT FOR */}
      <Section className="pt-0">
        <Eyebrow>(e) Fit</Eyebrow>
        <h2 className="mt-4 font-display text-3xl font-semibold lg:text-4xl">
          Who is it for?
        </h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {audience.map(({ icon: Icon, text }) => (
            <li
              key={text}
              className="flex items-start gap-4 rounded-3xl border-2 border-border bg-surface p-5 shadow-card transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-signal text-accent-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <p className="text-sm text-pretty">{text}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* FINAL CTA */}
      <section className="py-8 pb-20">
        <div className="glass-panel relative overflow-hidden rounded-[28px] p-10 text-center lg:p-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/60 to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-16 size-[320px] rounded-full bg-primary/10 blur-3xl"
          />
          <h2 className="relative mx-auto max-w-[28ch] font-display text-3xl font-semibold lg:text-5xl">
            Don&apos;t just prepare for the next examination. Prepare for what
            comes after it.
          </h2>
          <div className="relative mt-8">
            <PrimaryLink to="/contact">Enquire About Admission</PrimaryLink>
          </div>
        </div>
      </section>
    </div>
  );
}
