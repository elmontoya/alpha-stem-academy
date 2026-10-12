import { createFileRoute } from "@tanstack/react-router";
import {
  Atom,
  Banknote,
  BookOpen,
  Braces,
  Compass,
  FlaskConical,
  Gift,
  HandHeart,
  Handshake,
  Languages,
  Leaf,
  Lightbulb,
  MonitorSmartphone,
  Puzzle,
  Rocket,
  ScanSearch,
  School,
  ShieldCheck,
  Sigma,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import heroLearners from "@/assets/home-hero-learners.jpg";
import virtualClass from "@/assets/home-virtual-class.jpg";
import { SpaceSticker } from "@/components/site/SpaceSticker";
import {
  Eyebrow,
  GlassCard,
  PrimaryLink,
  SecondaryLink,
  Section,
} from "@/components/site/primitives";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alpha STEM Academy | Where Learning Becomes Capability" },
      {
        name: "description",
        content:
          "A 100% virtual STEM academy building young innovators through personalised, mastery-based learning in coding, sciences, mathematics, languages and digital literacy.",
      },
      {
        property: "og:title",
        content: "Alpha STEM Academy — Where Young Minds Learn to Build What Comes Next",
      },
      {
        property: "og:description",
        content:
          "100% virtual. Personalised. STEM-driven. Future-focused. Explore programs at Alpha STEM Academy.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const philosophy = [
  {
    icon: Compass,
    title: "Personalised Learning",
    body: "Learning experiences are adapted to the learner rather than forcing every learner into the same mould.",
  },
  {
    icon: Target,
    title: "Mastery-Based Progression",
    body: "Students progress with a focus on genuine understanding and competence, not merely completing topics.",
  },
  {
    icon: Puzzle,
    title: "Project-Based Learning",
    body: "Knowledge becomes more meaningful when students use it to create, investigate and solve.",
  },
  {
    icon: Rocket,
    title: "Real-World STEM Learning",
    body: "Students connect classroom concepts to technology, careers, everyday problems and the world around them.",
  },
];

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    body: "We cultivate curiosity, creativity and problem-solving, encouraging learners to invent, question and reimagine.",
  },
  {
    icon: Sparkles,
    title: "Impact",
    body: "Every lesson and programme should contribute to meaningful growth, not simply fill a timetable.",
  },
  {
    icon: Users,
    title: "Human Capital Development",
    body: "We invest in the knowledge, skills, confidence and tools young people need to thrive in a STEM-driven world.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity & Collaboration",
    body: "We believe meaningful education is built on responsibility, professionalism, ethical conduct and strong relationships.",
  },
];

const subjects = [
  { icon: Braces, label: "Coding & Computer Science" },
  { icon: Sigma, label: "Mathematics" },
  { icon: BookOpen, label: "English Language & Language Arts" },
  { icon: Atom, label: "Physics" },
  { icon: FlaskConical, label: "Chemistry" },
  { icon: Leaf, label: "Biology" },
  { icon: Banknote, label: "Financial Literacy" },
  { icon: Languages, label: "Spanish" },
  { icon: Languages, label: "German" },
  { icon: Languages, label: "Yoruba" },
  { icon: Languages, label: "Igbo" },
  { icon: Languages, label: "Hausa" },
];

const highlights = [
  {
    icon: School,
    title: "School Coding Clubs",
    body: "Structured coding clubs delivered with schools to build consistent digital skills.",
  },
  {
    icon: Sparkles,
    title: "Enrichment Programmes",
    body: "Focused sessions that stretch curiosity beyond the regular timetable.",
  },
  {
    icon: Rocket,
    title: "STEM Initiatives",
    body: "Hands-on initiatives that put science, engineering and technology into practice.",
  },
  {
    icon: ScanSearch,
    title: "Specialised Learning Experiences",
    body: "Tailored learning designed around specific goals, gaps or interests.",
  },
];

const beyond = [
  {
    icon: HandHeart,
    title: "CSR Initiatives",
    body: "Widening access to STEM and digital learning for young people who need it most.",
  },
  {
    icon: Gift,
    title: "Holiday Programmes",
    body: "Immersive breaks where learners build, code and create with guidance.",
  },
  {
    icon: Handshake,
    title: "School Partnerships",
    body: "Working with schools and educators to strengthen STEM delivery from the inside.",
  },
  {
    icon: MonitorSmartphone,
    title: "Digital Skills",
    body: "Practical digital literacy that prepares learners for study, work and creation.",
  },
];

const editorial = [
  {
    n: "01",
    title: "A changing world",
    body: "The world our children are preparing for is changing faster than traditional education can keep up with.",
  },
  {
    n: "02",
    title: "Skills before syllabus",
    body: "Learning is designed around the development of skills, confidence, curiosity, critical thinking and problem-solving ability.",
  },
  {
    n: "03",
    title: "No geography, no limits",
    body: "As a 100% virtual school, we remove the limitations of geography and rigid classroom structures, connecting learners with purposeful instruction wherever they are.",
  },
  {
    n: "04",
    title: "Room to understand",
    body: "Our classrooms are flexible, interactive and personal, giving every learner room to learn at a pace that supports genuine understanding.",
  },
];

function Home() {
  return (
    <div className="mx-auto max-w-7xl px-6">
      {/* SECTION 1 — HERO */}
      <section className="relative py-14 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 right-0 size-[480px] max-w-full rounded-full bg-primary/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-10 left-0 size-[320px] max-w-full rounded-full bg-signal/25 blur-3xl"
        />
        <div className="relative grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow rise">100% Virtual STEM Academy</p>
            <h1 className="rise mt-6 font-display text-4xl font-semibold leading-[1.03] sm:text-5xl lg:text-6xl [animation-delay:80ms]">
              Where Young Minds Learn to Build What Comes Next.
            </h1>
            <p className="rise mt-6 font-display text-lg font-semibold text-primary lg:text-xl [animation-delay:140ms]">
              100% Virtual. Personalised. STEM-Driven. Future-Focused.
            </p>
            <div className="rise mt-6 max-w-[58ch] space-y-4 text-pretty text-muted-foreground [animation-delay:200ms]">
              <p>
                Alpha STEM Academy is a virtual learning institution building the next
                generation of innovators through STEM, creativity, digital literacy and
                real-world learning.
              </p>
              <p>
                We don&apos;t simply teach students what is known. We help them develop the
                capacity to question, create, solve and build.
              </p>
            </div>
            <div className="rise mt-9 flex flex-wrap items-center gap-4 [animation-delay:280ms]">
              <PrimaryLink to="/programs">Explore Our Programs</PrimaryLink>
              <SecondaryLink to="/contact">Start Learning</SecondaryLink>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rise relative [animation-delay:220ms]">
              <img
                src={heroLearners}
                alt="Young learners collaborating around laptops and a robotics kit in a bright classroom"
                width={1280}
                height={1600}
                className="aspect-4/5 w-full rounded-3xl object-cover outline-1 -outline-offset-1 outline-black/5"
              />
              <SpaceSticker kind="astronaut" className="absolute -right-5 top-5 z-10 w-24 sm:w-32" />
              <div className="glass-panel absolute -bottom-6 left-4 hidden w-52 rounded-2xl p-4 shadow-float sm:block">
                <p className="label-mono text-primary">Learning Model</p>
                <p className="mt-2 text-sm font-medium leading-snug">
                  Question. Create. Solve. Build.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — A DIFFERENT KIND OF SCHOOL */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>A different kind of school</Eyebrow>
            <h2 className="mt-5 max-w-[26ch] font-display text-3xl font-semibold leading-tight lg:text-4xl">
              Education should do more than transfer knowledge. It should develop
              capability.
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {editorial.map((e) => (
              <GlassCard key={e.n}>
                <span className="label-mono text-primary">{e.n}</span>
                <h3 className="mt-3 font-display text-lg font-semibold">{e.title}</h3>
                <p className="mt-2 text-sm text-pretty text-muted-foreground">{e.body}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </Section>

      {/* SECTION 3 — OUR PHILOSOPHY */}
      <Section>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow>Our philosophy</Eyebrow>
            <h2 className="mt-5 max-w-[22ch] font-display text-3xl font-semibold lg:text-4xl">
              Personalised Learning. By Design.
            </h2>
          </div>
          <div className="max-w-[46ch] space-y-3 text-pretty text-muted-foreground">
            <p>
              No two learners think exactly alike. That is why personalisation sits at the
              heart of the Alpha learning experience.
            </p>
            <p>
              Every student is supported according to their individual strengths, gaps,
              interests and learning pace.
            </p>
          </div>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {philosophy.map((p) => (
            <GlassCard
              key={p.title}
              className="transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                <p.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-pretty text-muted-foreground">{p.body}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* SECTION 4 — WHAT WE BELIEVE */}
      <section className="py-8">
        <div className="relative overflow-hidden rounded-[28px] border-2 border-border bg-foreground p-8 lg:p-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-20 size-80 rounded-full bg-signal/25 blur-3xl"
          />
          <div className="relative">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-signal">
              What we believe
            </p>
            <h2 className="mt-4 max-w-[24ch] font-display text-3xl font-semibold text-background lg:text-5xl">
              Innovating Minds. Impacting Lives.
            </h2>
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              <div className="rounded-3xl border-2 border-background/15 bg-background/10 p-7 backdrop-blur-md">
                <p className="label-mono text-signal">Vision</p>
                <p className="mt-3 text-pretty text-lg text-background/90">
                  Our vision is a world where young innovators and empowered educators
                  transform communities through STEM, creativity and digital literacy.
                </p>
              </div>
              <div className="rounded-3xl border-2 border-signal/50 bg-signal/15 p-7 backdrop-blur-md">
                <p className="label-mono text-signal">Mission</p>
                <p className="mt-3 font-display text-xl font-semibold text-background lg:text-2xl">
                  Building Human Capital Through STEM and Innovation.
                </p>
                <p className="mt-3 text-pretty text-sm text-background/75">
                  We develop the next generation of inventors, empower educators and create
                  immersive learning experiences designed to leave a lasting impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — CORE VALUES */}
      <Section>
        <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-end">
          <Eyebrow>Core values</Eyebrow>
          <h2 className="font-display text-3xl font-semibold lg:text-4xl">
            Our Core Values
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <GlassCard
              key={v.title}
              className="transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-signal text-accent-foreground">
                <v.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-pretty text-muted-foreground">{v.body}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* SECTION 6 — BEYOND THE SCREEN */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <img
            src={virtualClass}
            alt="A student in a live virtual lesson taking notes while the instructor teaches on screen"
            loading="lazy"
            width={1280}
            height={960}
            className="aspect-4/3 w-full rounded-3xl object-cover outline-1 -outline-offset-1 outline-black/5"
          />
          <div>
            <Eyebrow>Beyond the screen</Eyebrow>
            <h2 className="mt-5 max-w-[24ch] font-display text-3xl font-semibold lg:text-4xl">
              Virtual doesn&apos;t have to mean distant.
            </h2>
            <div className="mt-6 space-y-4 text-pretty text-muted-foreground">
              <p>
                Our classrooms may be digital, but learning is deeply human.
              </p>
              <p>
                Students interact directly with instructors, participate in guided
                activities, work on projects, ask questions, receive feedback and develop
                skills through practical application.
              </p>
              <p>
                Our one-on-one and flexible learning options make it possible to build
                learning around the learner, rather than asking the learner to fit into a
                rigid system.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 7 — WHAT WE TEACH */}
      <Section>
        <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-end">
          <Eyebrow>Curriculum</Eyebrow>
          <h2 className="font-display text-3xl font-semibold lg:text-4xl">What We Teach</h2>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((s) => (
            <li
              key={s.label}
              className="glass-panel flex items-center gap-4 rounded-2xl p-5 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                <s.icon className="size-5" aria-hidden="true" />
              </span>
              <span className="font-display text-base font-semibold">{s.label}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="rounded-3xl border-2 border-border bg-muted p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-signal text-accent-foreground">
                <h.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold">{h.title}</h3>
              <p className="mt-2 text-sm text-pretty text-muted-foreground">{h.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <PrimaryLink to="/programs">Explore Programs</PrimaryLink>
        </div>
      </Section>

      {/* SECTION 8 — MORE THAN A SCHOOL */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>More than a school</Eyebrow>
            <h2 className="mt-5 max-w-[22ch] font-display text-3xl font-semibold lg:text-4xl">
              We are building people who can build things.
            </h2>
            <div className="mt-6 space-y-4 text-pretty text-muted-foreground">
              <p>
                Alpha STEM Academy exists at the intersection of education, technology and
                human development.
              </p>
              <p>
                Our work extends beyond regular classes through initiatives that give
                children and educators access to skills, opportunities and experiences that
                can change their trajectory.
              </p>
              <p>
                From our CSR initiatives to holiday programmes and school partnerships, we
                continually look for ways to make quality STEM and digital education more
                accessible.
              </p>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
            {beyond.map((b) => (
              <GlassCard
                key={b.title}
                className="transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <b.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm text-pretty text-muted-foreground">{b.body}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </Section>

      {/* SECTION 9 — FINAL CTA */}
      <section className="py-8 pb-20">
        <div className="glass-panel relative overflow-hidden rounded-[28px] p-10 text-center lg:p-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-signal to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 left-1/2 size-[380px] max-w-full -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
          />
          <div className="relative">
            <h2 className="mx-auto max-w-[26ch] font-display text-3xl font-semibold lg:text-5xl">
              The future doesn&apos;t need more passive learners.
            </h2>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {["Thinkers.", "Creators.", "Problem-solvers.", "Builders."].map((w) => (
                <li
                  key={w}
                  className="rounded-full border-2 border-border bg-signal px-5 py-2 font-display text-base font-bold text-accent-foreground lg:text-lg"
                >
                  {w}
                </li>
              ))}
            </ul>
            <p className="mx-auto mt-8 max-w-[40ch] text-pretty text-lg text-muted-foreground">
              Build that future with Alpha STEM Academy.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <PrimaryLink to="/programs">Explore Programs</PrimaryLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
