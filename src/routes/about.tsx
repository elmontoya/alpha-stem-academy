import { createFileRoute } from "@tanstack/react-router";
import {
  Braces,
  Compass,
  Handshake,
  HeartHandshake,
  Lightbulb,
  Puzzle,
  Quote,
  Rocket,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import aboutImage from "@/assets/about-learning.jpg";
import virtualClass from "@/assets/home-virtual-class.jpg";
import { SpaceSticker } from "@/components/site/SpaceSticker";
import {
  EnquiryCta,
  Eyebrow,
  GlassCard,
  PrimaryLink,
  Section,
} from "@/components/site/primitives";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Alpha STEM Academy | Education Reimagined" },
      {
        name: "description",
        content:
          "Founded in 2022, Alpha STEM Academy is a 100% virtual school focused on STEM, innovation, digital literacy and human-capital development.",
      },
      { property: "og:title", content: "About — Alpha STEM Academy" },
      {
        property: "og:description",
        content:
          "Our story, vision, mission, teaching model and the initiatives that take our impact beyond the classroom.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const timeline = [
  {
    year: "2022",
    title: "A conviction becomes a school",
    body: "Alpha STEM Academy began with a vision of creating a learning environment where technology could expand access to quality education without reducing education to a screen.",
  },
  {
    year: "Since then",
    title: "Beyond online lessons",
    body: "Our focus evolved beyond delivering online lessons into designing learning that develops capability, not just coverage.",
  },
  {
    year: "Today",
    title: "An ecosystem, not a classroom",
    body: "We are building an ecosystem where students can learn, experiment, create, collaborate and develop the confidence to solve problems.",
  },
  {
    year: "Ahead",
    title: "Future-facing, firmly grounded",
    body: "Our approach is intentionally future-facing while remaining grounded in strong academic foundations.",
  },
];

const teaching = [
  {
    icon: Compass,
    title: "Personalised Learning",
    body: "Instruction is shaped around each learner's strengths, gaps, interests and pace rather than a single fixed track.",
  },
  {
    icon: Target,
    title: "Mastery-Based Progression",
    body: "Learners move forward when understanding is genuine and demonstrable, not simply when a topic has been covered.",
  },
  {
    icon: Puzzle,
    title: "Project-Based Learning",
    body: "Students apply knowledge to create, investigate and solve, so learning has something to show for it.",
  },
  {
    icon: Rocket,
    title: "Career-Connected & Real-World STEM Learning",
    body: "Concepts are linked to technology, careers, everyday problems and the world learners are growing into.",
  },
];

const initiatives = [
  {
    icon: Braces,
    tag: "SkillNet",
    title: "Skills development for learners and educators",
    paragraphs: [
      "SkillNet is our skills-development initiative created to equip learners and educators with practical digital competencies.",
      "Through SkillNet, we have trained 50 participants across areas including digital literacy and technology-related skills.",
      "Human capital development is one of the most powerful forms of community development.",
    ],
  },
  {
    icon: HeartHandshake,
    tag: "Empowering Rural Kids",
    title: "Free coding for Grade 7–12 learners",
    paragraphs: [
      "A free coding initiative designed to introduce Grade 7–12 students in rural communities to coding and computational thinking.",
    ],
  },
  {
    icon: Sparkles,
    tag: "Techie Kids",
    title: "Our paid summer technology programme",
    paragraphs: [
      "Our paid summer technology programme gives children an immersive opportunity to explore technology beyond conventional schoolwork.",
      "Depending on the edition, Techie Kids has featured:",
    ],
    list: [
      "AI & Machine Learning",
      "Web Development",
      "Cartoon Animation & Storytelling",
      "Gaming Animation",
      "Google Workspace",
      "Coding & Digital Technology",
    ],
  },
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    body: "We cultivate curiosity, creativity and problem-solving, encouraging learners to invent, question and reimagine.",
  },
  {
    icon: Target,
    title: "Impact",
    body: "Every lesson and programme should contribute to meaningful growth, not simply fill a timetable.",
  },
  {
    icon: Users,
    title: "Human Capital Development",
    body: "We invest in the knowledge, skills, confidence and tools young people need to thrive in a STEM-driven world.",
  },
  {
    icon: Handshake,
    title: "Integrity & Collaboration",
    body: "Meaningful education is built on responsibility, professionalism, ethical conduct and strong relationships.",
  },
];

const abilities = [
  "Think deeply.",
  "Ask better questions.",
  "Build confidently.",
  "Solve intelligently.",
  "Collaborate effectively.",
  "Adapt continuously.",
];

function About() {
  return (
    <div className="mx-auto max-w-7xl px-6">
      {/* HERO */}
      <section className="relative py-14 lg:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-0 size-[420px] max-w-full rounded-full bg-primary/10 blur-3xl"
        />
        <div className="relative grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow rise">Est. 2022 — About Alpha</p>
            <h1 className="rise mt-5 max-w-[26ch] font-display text-4xl font-semibold leading-[1.05] lg:text-6xl [animation-delay:80ms]">
              Education, Reimagined Around the Learner.
            </h1>
            <div className="rise mt-6 max-w-[60ch] space-y-4 text-pretty text-muted-foreground [animation-delay:160ms]">
              <p>
                Founded in 2022, Alpha STEM Academy was created from a simple conviction:
              </p>
              <p className="font-display text-lg font-semibold text-foreground">
                Children should not only be prepared to pass the future. They should be
                prepared to shape it.
              </p>
              <p>
                We are a 100% virtual school focused on STEM, innovation, digital literacy
                and human-capital development.
              </p>
              <p>
                Our work combines academic learning with practical skills, personalised
                instruction and experiences that help young people understand not only
                what they are learning, but why it matters.
              </p>
            </div>
          </div>
          <div className="relative lg:col-span-5">
            <img
              src={aboutImage}
              alt="A student joining a live online class at a bright home desk"
              loading="lazy"
              width={1200}
              height={1200}
              className="rise aspect-square w-full rounded-3xl object-cover outline-1 -outline-offset-1 outline-black/5 [animation-delay:220ms]"
            />
            <SpaceSticker kind="planet" className="absolute -right-5 -top-5 z-10 w-24 sm:w-32" />
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <Section className="pt-0">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>Our story</Eyebrow>
            <h2 className="mt-5 max-w-[22ch] font-display text-3xl font-semibold lg:text-4xl">
              Our Story
            </h2>
            <div className="mt-6 space-y-4 text-pretty text-muted-foreground">
              <p>
                Alpha STEM Academy began with a vision of creating a learning environment
                where technology could expand access to quality education without reducing
                education to a screen.
              </p>
              <p>
                Since our establishment, our focus has evolved beyond delivering online
                lessons. We are building an ecosystem where students can learn,
                experiment, create, collaborate and develop the confidence to solve
                problems.
              </p>
              <p>
                Our approach is intentionally future-facing while remaining grounded in
                strong academic foundations.
              </p>
            </div>
          </div>

          <ol className="relative lg:col-span-7">
            <div
              aria-hidden="true"
              className="absolute left-[19px] top-3 bottom-3 w-0.5 rounded-full bg-border"
            />
            {timeline.map((t) => (
              <li key={t.year} className="relative flex gap-6 pb-6 last:pb-0">
                <span className="relative z-10 grid size-10 shrink-0 place-items-center rounded-full border-2 border-border bg-signal font-display text-[0.65rem] font-bold text-accent-foreground">
                  ★
                </span>
                <GlassCard className="flex-1">
                  <span className="label-mono text-primary">{t.year}</span>
                  <h3 className="mt-2 font-display text-lg font-semibold">{t.title}</h3>
                  <p className="mt-2 text-sm text-pretty text-muted-foreground">
                    {t.body}
                  </p>
                </GlassCard>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* BRAND STATEMENT */}
      <Section className="pt-0">
        <figure className="cosmic-sky relative overflow-hidden rounded-[28px] border border-border p-10 text-center shadow-float lg:p-16">
          <Quote
            aria-hidden="true"
            className="relative mx-auto size-10 text-signal"
          />
          <blockquote className="relative mx-auto mt-6 max-w-[34ch] font-display text-2xl font-semibold leading-tight text-background sm:text-3xl lg:text-5xl">
            “We don&apos;t educate children merely for the world as it is. We equip them
            to participate in creating the world that comes next.”
          </blockquote>
          <figcaption className="label-mono relative mt-8 text-signal">
            Alpha STEM Academy
          </figcaption>
        </figure>
      </Section>

      {/* VISION & MISSION */}
      <Section className="pt-0">
        <Eyebrow>What we believe</Eyebrow>
        <h2 className="mt-5 max-w-[24ch] font-display text-3xl font-semibold lg:text-4xl">
          Vision &amp; Mission
        </h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="glass-panel rounded-[28px] bg-primary p-8 text-primary-foreground lg:p-10">
            <span className="label-mono opacity-80">Vision</span>
            <h3 className="mt-4 font-display text-2xl font-semibold lg:text-3xl">
              Innovating Minds. Impacting Lives.
            </h3>
            <p className="mt-4 text-pretty opacity-90">
              We see a world where young innovators and empowered educators transform
              communities through STEM, creativity and digital literacy.
            </p>
          </div>
          <div className="glass-panel rounded-[28px] bg-signal p-8 text-accent-foreground lg:p-10">
            <span className="label-mono opacity-70">Mission</span>
            <h3 className="mt-4 font-display text-2xl font-semibold lg:text-3xl">
              Building Human Capital Through STEM and Innovation.
            </h3>
            <p className="mt-4 text-pretty opacity-80">
              We develop the next generation of inventors, train and empower educators,
              and create immersive learning experiences that leave a lasting impact.
            </p>
          </div>
        </div>
      </Section>

      {/* HOW WE TEACH */}
      <Section className="pt-0">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>How we teach</Eyebrow>
            <h2 className="mt-5 max-w-[24ch] font-display text-3xl font-semibold leading-tight lg:text-4xl">
              Personalisation is not an add-on. It is the architecture.
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            <GlassCard className="sm:col-span-2">
              <p className="text-sm text-muted-foreground">
                Traditional classrooms often begin with the question:
              </p>
              <p className="mt-2 font-display text-xl font-semibold text-muted-foreground">
                “What should everyone learn today?”
              </p>
              <p className="mt-6 text-sm text-muted-foreground">
                We begin with another question:
              </p>
              <p className="mt-2 font-display text-xl font-semibold text-primary lg:text-2xl">
                “What does this learner need to learn next?”
              </p>
            </GlassCard>
            {teaching.map((t) => (
              <GlassCard
                key={t.title}
                className="transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <t.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">{t.title}</h3>
                <p className="mt-2 text-sm text-pretty text-muted-foreground">{t.body}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </Section>

      {/* LEARNING DESIGNED AROUND REAL LIFE */}
      <Section className="pt-0">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <img
              src={virtualClass}
              alt="A learner in a live virtual lesson with an instructor on screen"
              loading="lazy"
              width={1200}
              height={900}
              className="aspect-4/3 w-full rounded-3xl object-cover outline-1 -outline-offset-1 outline-black/5"
            />
          </div>
          <div className="lg:col-span-6">
            <Eyebrow>Designed around real life</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-semibold lg:text-4xl">
              One-on-One. Flexible. Purposeful.
            </h2>
            <div className="mt-6 space-y-4 text-pretty text-muted-foreground">
              <p>
                Our virtual model allows us to create learning experiences that
                accommodate different schedules and learning needs.
              </p>
              <p>
                Students can access one-on-one instruction and flexible class schedules,
                making it easier for families to integrate meaningful learning into their
                routines.
              </p>
              <p>The objective isn&apos;t simply to make education convenient.</p>
              <p className="font-display text-xl font-semibold text-foreground">
                It is to make it effective.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* BEYOND THE CLASSROOM */}
      <Section className="pt-0">
        <Eyebrow>Beyond the classroom</Eyebrow>
        <h2 className="mt-5 max-w-[26ch] font-display text-3xl font-semibold lg:text-4xl">
          Our impact doesn&apos;t stop when class ends.
        </h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {initiatives.map((i) => (
            <GlassCard
              key={i.tag}
              className="flex flex-col transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-signal text-accent-foreground">
                <i.icon className="size-6" aria-hidden="true" />
              </span>
              <span className="label-mono mt-4 text-primary">{i.tag}</span>
              <h3 className="mt-2 font-display text-lg font-semibold">{i.title}</h3>
              <div className="mt-3 space-y-3 text-sm text-pretty text-muted-foreground">
                {i.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              {i.list && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {i.list.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-surface/70 px-3 py-1.5 text-xs font-semibold"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </GlassCard>
          ))}
        </div>
        <p className="mt-8 text-center font-display text-xl font-semibold lg:text-2xl">
          It is learning with a little more electricity in the room. ⚡
        </p>
      </Section>

      {/* VALUES */}
      <Section className="pt-0">
        <Eyebrow>Values</Eyebrow>
        <h2 className="mt-5 max-w-[24ch] font-display text-3xl font-semibold lg:text-4xl">
          The values behind every session.
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <GlassCard
              key={v.title}
              className="transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                <v.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-pretty text-muted-foreground">{v.body}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* WHY ALPHA */}
      <Section className="pt-0">
        <div className="glass-panel rounded-[28px] p-10 lg:p-16">
          <Eyebrow>Why Alpha</Eyebrow>
          <h2 className="mt-5 font-display text-3xl font-semibold lg:text-4xl">
            Why Alpha?
          </h2>
          <p className="mt-5 max-w-[52ch] text-pretty text-muted-foreground">
            Because the goal is bigger than academic performance. We want learners to
            develop the ability to:
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {abilities.map((a, idx) => (
              <li
                key={a}
                className="rounded-2xl border-2 border-border bg-surface px-6 py-6 font-display text-xl font-semibold lg:text-2xl"
              >
                <span className="label-mono block text-primary">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="mt-2 block">{a}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-[36ch] font-display text-2xl font-semibold lg:text-3xl">
            That is the kind of education the future demands.
          </p>
          <div className="mt-8">
            <PrimaryLink to="/programs">Explore Programs</PrimaryLink>
          </div>
        </div>
      </Section>

      <EnquiryCta title="Want to know if Alpha fits your learner?" />
    </div>
  );
}
