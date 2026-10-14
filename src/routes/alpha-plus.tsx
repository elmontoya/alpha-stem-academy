import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpenCheck,
  Boxes,
  Coins,
  Compass,
  Cpu,
  GraduationCap,
  Globe2,
  Languages,
  Laptop,
  Puzzle,
  Rocket,
  Sparkles,
  Users,
  Wrench,
} from "lucide-react";


import financeImage from "@/assets/alphaplus-financial-literacy.jpg";
import clubImage from "@/assets/alphaplus-coding-club.jpg";
import { SpaceSticker } from "@/components/site/SpaceSticker";
import {
  Eyebrow,
  GlassCard,
  PrimaryLink,
  SecondaryLink,
  Section,
} from "@/components/site/primitives";

export const Route = createFileRoute("/alpha-plus")({
  head: () => ({
    meta: [
      { title: "Alpha+ | More Learning. More Possibilities." },
      {
        name: "description",
        content:
          "Alpha+ extends learning beyond core academics: financial literacy, Nigerian languages, German and Spanish, coding clubs and preparation for SAT, ACT, AP, TOEFL, IELTS and more.",
      },
      {
        property: "og:title",
        content: "Alpha+ Enrichment & Exam Preparation — Alpha STEM Academy",
      },
      {
        property: "og:description",
        content:
          "More learning, more possibilities: practical skills, languages, financial knowledge, technology and enrichment for young learners.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AlphaPlus,
});

const nigerianLanguages = [
  {
    name: "Yoruba",
    note: "Spoken widely across south-western Nigeria and beyond.",
  },
  {
    name: "Igbo",
    note: "A living language of south-eastern Nigeria and its diaspora.",
  },
  {
    name: "Hausa",
    note: "One of the most widely spoken languages in West Africa.",
  },
];

const globalLanguages = [
  {
    name: "German",
    note: "A gateway language for engineering, science and study in Europe.",
  },
  {
    name: "Spanish",
    note: "One of the world's most widely spoken languages across continents.",
  },
];

const clubFeatures = [
  { icon: Laptop, text: "Learn coding fundamentals" },
  { icon: Wrench, text: "Build digital projects" },
  { icon: Puzzle, text: "Develop computational thinking" },
  { icon: Users, text: "Solve problems collaboratively" },
  { icon: Cpu, text: "Experiment with technology" },
  { icon: Compass, text: "Discover interests in STEM and technology careers" },
];

const exams = [
  {
    name: "SAT",
    body: "Preparation across reading, writing and mathematics, with practice in pacing and question strategy.",
  },
  {
    name: "ACT",
    body: "Structured work across English, mathematics, reading and science reasoning.",
  },
  {
    name: "AP",
    body: "Subject-focused preparation for advanced-level coursework and its assessments.",
  },
  {
    name: "TOEFL",
    body: "Academic English practice across reading, listening, speaking and writing.",
  },
  {
    name: "IELTS",
    body: "Guided preparation for the four skill areas, with feedback on speaking and writing tasks.",
  },
  {
    name: "Duolingo English Test",
    body: "Familiarisation with the adaptive format and practice in timed responses.",
  },
  {
    name: "Cambridge AS & A Levels",
    body: "Subject preparation building depth, structured answers and examination technique.",
  },
];

const questions = [
  "What interests me?",
  "What am I good at?",
  "What can I build?",
  "What problems can I solve?",
  "Where could this skill take me?",
];

const partnerships = [
  { icon: Laptop, title: "Coding Clubs" },
  { icon: Cpu, title: "Technology Enrichment" },
  { icon: Languages, title: "Language Programmes" },
  { icon: Coins, title: "Financial Literacy" },
  { icon: Boxes, title: "STEM Activities" },
  { icon: Globe2, title: "Digital Skills Programmes" },
  { icon: Sparkles, title: "Special Technology Workshops" },
];

function AlphaPlus() {
  return (
    <div className="mx-auto max-w-7xl px-6">
      {/* HERO */}
      <section className="relative py-14 lg:py-20">
        <div className="relative grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow>// Alpha+</Eyebrow>
            <h1 className="rise mt-5 max-w-[20ch] font-display text-4xl font-semibold leading-[1.05] lg:text-6xl">
              More Learning. More Possibilities.
            </h1>
            <p className="rise mt-6 max-w-[40ch] font-display text-xl font-semibold text-primary [animation-delay:120ms]">
              School should provide foundations.
              <br />
              But children also need exposure.
            </p>
            <p className="rise mt-5 max-w-[58ch] text-lg text-pretty text-muted-foreground [animation-delay:180ms]">
              Alpha+ extends the Alpha STEM Academy experience beyond our core
              academic programmes, giving learners access to practical skills,
              languages, financial knowledge, technology and enrichment
              opportunities.
            </p>
            <div className="rise mt-8 flex flex-wrap gap-3 [animation-delay:240ms]">
              <PrimaryLink to="/alpha-plus">Explore Alpha+ Programmes</PrimaryLink>
              <SecondaryLink to="/contact">Speak With Us</SecondaryLink>
            </div>
          </div>
          <div className="lg:col-span-5">
            <SpaceSticker kind="rocket" className="mb-3 ml-auto w-20 lg:hidden" />
            <div className="rise glass-panel rounded-[28px] p-6 [animation-delay:200ms]">
              <p className="label-mono text-primary">Inside Alpha+</p>
              <ul className="mt-4 grid gap-3">
                {[
                  { icon: Coins, label: "Financial Literacy" },
                  { icon: Languages, label: "Nigerian Languages" },
                  { icon: Globe2, label: "German & Spanish" },
                  { icon: Laptop, label: "Coding Clubs" },
                  { icon: GraduationCap, label: "Exam Preparation" },
                ].map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="flex items-center gap-3 rounded-2xl border-2 border-border bg-muted/50 px-4 py-3 text-sm font-semibold"
                  >
                    <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-signal text-accent-foreground">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FINANCIAL LITERACY */}
      <Section id="financial-literacy" className="pt-0">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <img
              src={financeImage}
              alt="Illustration of young learners saving coins, budgeting and tracking growth"
              loading="lazy"
              width={1024}
              height={768}
              className="aspect-4/3 w-full rounded-[28px] object-cover shadow-card outline-2 -outline-offset-2 outline-black/5"
            />
          </div>
          <div className="lg:col-span-6">
            <Eyebrow>(a) Financial literacy</Eyebrow>
            <h2 className="mt-4 max-w-[18ch] font-display text-3xl font-semibold lg:text-4xl">
              Money is a life skill.
            </h2>
            <p className="mt-5 max-w-[56ch] text-pretty text-muted-foreground">
              Our Financial Literacy programme introduces learners to the
              fundamentals of money, saving, spending, budgeting, financial
              decision-making and responsible economic thinking.
            </p>
            <p className="mt-4 max-w-[56ch] text-pretty text-muted-foreground">
              The goal is to help young people develop the knowledge and habits
              to make sound financial decisions as they grow.
            </p>
          </div>
        </div>
      </Section>

      {/* NIGERIAN LANGUAGES */}
      <Section id="nigerian-languages" className="pt-0">
        <Eyebrow>(b) Nigerian languages</Eyebrow>
        <h2 className="mt-4 max-w-[24ch] font-display text-3xl font-semibold lg:text-4xl">
          Know the world. Know where you come from.
        </h2>
        <p className="mt-5 max-w-[62ch] text-pretty text-muted-foreground">
          Language carries culture, identity, history and perspective. Our
          Nigerian language programmes help learners develop communication
          skills while connecting with Nigeria&apos;s rich linguistic heritage.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {nigerianLanguages.map(({ name, note }) => (
            <GlassCard
              key={name}
              className="relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-8 -top-8 size-24 rounded-full bg-signal/40"
              />
              <span className="relative grid size-11 place-items-center rounded-2xl bg-primary text-primary-foreground">
                <Languages className="size-5" aria-hidden="true" />
              </span>
              <h3 className="relative mt-4 font-display text-2xl font-semibold">
                {name}
              </h3>
              <p className="relative mt-2 text-sm text-pretty text-muted-foreground">
                {note}
              </p>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* GERMAN & SPANISH */}
      <Section className="pt-0">
        <div className="glass-panel grid gap-10 rounded-[28px] p-8 lg:grid-cols-12 lg:p-12">
          <div className="lg:col-span-6">
            <Eyebrow>(c) Global languages</Eyebrow>
            <h2 className="mt-4 max-w-[22ch] font-display text-3xl font-semibold lg:text-4xl">
              Expand the language of possibility.
            </h2>
            <p className="mt-5 max-w-[54ch] text-pretty text-muted-foreground">
              Alpha+ offers German and Spanish for learners interested in
              developing global communication skills and broader cultural
              awareness.
            </p>
            <p className="mt-4 max-w-[54ch] text-pretty text-muted-foreground">
              Learning another language can strengthen communication, cognitive
              flexibility and cultural understanding while opening doors to
              wider academic and professional opportunities.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-6">
            {globalLanguages.map(({ name, note }) => (
              <div
                key={name}
                className="rounded-3xl border-2 border-border bg-muted/50 p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="grid size-11 place-items-center rounded-2xl bg-signal text-accent-foreground">
                  <Globe2 className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold">
                  {name}
                </h3>
                <p className="mt-2 text-sm text-pretty text-muted-foreground">
                  {note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CODING CLUBS */}
      <Section id="coding-clubs" className="pt-0">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Eyebrow>(d) Coding clubs</Eyebrow>
            <h2 className="mt-4 max-w-[24ch] font-display text-3xl font-semibold lg:text-4xl">
              What happens when coding becomes a community?
            </h2>
            <p className="mt-5 max-w-[54ch] text-pretty text-muted-foreground">
              We partner with schools to establish and facilitate Coding Clubs,
              giving students opportunities to explore technology beyond the
              conventional classroom.
            </p>
          </div>
          <div className="lg:col-span-6">
            <img
              src={clubImage}
              alt="Students in a school coding club working together on laptops and a small robot"
              loading="lazy"
              width={1024}
              height={768}
              className="aspect-4/3 w-full rounded-[28px] object-cover shadow-card outline-2 -outline-offset-2 outline-black/5"
            />
          </div>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {clubFeatures.map(({ icon: Icon, text }) => (
            <li
              key={text}
              className="flex items-start gap-4 rounded-3xl border-2 border-border bg-surface p-5 shadow-card transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <p className="text-sm font-semibold text-pretty">{text}</p>
            </li>
          ))}
        </ul>

        <div className="mt-8 rounded-[28px] border-2 border-border bg-signal p-8 text-center lg:p-10">
          <p className="mx-auto max-w-[30ch] font-display text-2xl font-semibold text-accent-foreground lg:text-3xl">
            Ideas are better when they have somewhere to become real.
          </p>
        </div>
      </Section>

      {/* EXAM PREPARATION */}
      <Section id="exam-prep" className="pt-0">
        <Eyebrow>(e) Global preparation</Eyebrow>
        <h2 className="mt-4 max-w-[22ch] font-display text-3xl font-semibold lg:text-4xl">
          Prepare Beyond the Classroom.
        </h2>
        <p className="mt-5 max-w-[62ch] text-pretty text-muted-foreground">
          The world of education is global, and opportunities increasingly
          extend beyond a student&apos;s immediate school system.
        </p>
        <p className="mt-4 max-w-[62ch] text-pretty text-muted-foreground">
          Alpha+ provides preparatory classes for internationally recognised
          examinations, helping learners develop the academic knowledge,
          test-taking strategies, communication skills and confidence required
          to pursue opportunities across different educational systems.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {exams.map(({ name, body }) => (
            <article
              key={name}
              className="group flex flex-col rounded-3xl border-2 border-border bg-surface p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <span className="grid size-11 place-items-center rounded-2xl bg-foreground text-background">
                <BookOpenCheck className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold">{name}</h3>
              <p className="mt-2 flex-1 text-sm text-pretty text-muted-foreground">
                {body}
              </p>
              <div className="mt-5">
                <SecondaryLink to="/contact">Learn More</SecondaryLink>
              </div>

            </article>
          ))}
        </div>
        <p className="mt-6 max-w-[70ch] text-sm text-pretty text-muted-foreground">
          Alpha+ provides independent preparation classes only. We are not an
          examination board or test centre, and we do not administer these
          examinations or claim affiliation with the organisations that own them.
        </p>
      </Section>

      {/* ACADEMIC PREPARATION CTA */}
      <Section className="pt-0">
        <div className="relative overflow-hidden rounded-[28px] border-2 border-border bg-foreground p-8 lg:p-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-16 size-72 rounded-full bg-signal/25 blur-3xl"
          />
          <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="label-mono text-signal">Academic preparation</p>
              <h2 className="mt-4 max-w-[26ch] font-display text-3xl font-semibold text-background lg:text-4xl">
                Your Next Academic Step Should Not Be an Accident.
              </h2>
              <p className="mt-5 max-w-[54ch] text-pretty text-background/70">
                Whether the goal is university admission, international study,
                stronger academic performance or simply greater readiness for
                the next stage, preparation matters.
              </p>
              <p className="mt-4 max-w-[54ch] text-pretty text-background/70">
                At Alpha+, learners can access structured preparation designed
                around their individual goals, current level and target
                examination.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-3xl border-2 border-background/15 bg-background/10 p-6 text-center backdrop-blur-md">
                <p className="label-mono text-background/60">The Alpha+ arc</p>
                <ul className="mt-4 grid gap-3">
                  {["Learn.", "Prepare.", "Perform.", "Progress."].map((w) => (
                    <li
                      key={w}
                      className="rounded-2xl bg-signal px-4 py-3 font-display text-lg font-semibold text-accent-foreground"
                    >
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ENRICHMENT */}
      <Section className="pt-0">
        <Eyebrow>(f) Enrichment</Eyebrow>
        <h2 className="mt-4 max-w-[22ch] font-display text-3xl font-semibold lg:text-4xl">
          Explore Beyond the Syllabus.
        </h2>
        <p className="mt-5 max-w-[58ch] text-pretty text-muted-foreground">
          Young people need more than what is required to pass. They need
          exposure to what is possible.
        </p>
        <ol className="mt-10 grid gap-4 lg:grid-cols-5">
          {questions.map((q, i) => (
            <li
              key={q}
              className="glass-panel flex flex-col gap-4 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <span className="grid size-10 place-items-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">
                {i + 1}
              </span>
              <p className="font-display text-lg font-semibold text-pretty">
                {q}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* FOR SCHOOLS */}
      <Section className="pt-0">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>(g) For schools</Eyebrow>
            <h2 className="mt-4 max-w-[22ch] font-display text-3xl font-semibold lg:text-4xl">
              Bring Alpha+ into your school.
            </h2>
          </div>
          <PrimaryLink to="/contact">Partner With Us</PrimaryLink>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {partnerships.map(({ icon: Icon, title }) => (
            <li
              key={title}
              className="flex items-center gap-4 rounded-3xl border-2 border-border bg-muted/50 p-5 transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-surface text-primary shadow-card">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <p className="font-display text-base font-semibold text-pretty">
                {title}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      {/* FINAL CTA */}
      <section className="py-8 pb-20">
        <div className="glass-panel relative overflow-hidden rounded-[28px] p-10 text-center lg:p-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-16 size-[320px] rounded-full bg-primary/10 blur-3xl"
          />
          <span className="relative inline-grid size-12 place-items-center rounded-2xl bg-signal text-accent-foreground">
            <Rocket className="size-6" aria-hidden="true" />
          </span>
          <h2 className="relative mx-auto mt-5 max-w-[24ch] font-display text-3xl font-semibold lg:text-5xl">
            More learning. More possibilities.
          </h2>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <PrimaryLink to="/alpha-plus">Explore Alpha+ Programmes</PrimaryLink>
            <SecondaryLink to="/contact">Speak With Us</SecondaryLink>
          </div>
        </div>
      </section>
    </div>
  );
}
