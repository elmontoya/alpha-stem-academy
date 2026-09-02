import { createFileRoute } from "@tanstack/react-router";

import roboticsImage from "@/assets/program-robotics.jpg";
import dataImage from "@/assets/program-data.jpg";
import creativeImage from "@/assets/program-creative.jpg";
import {
  EnquiryCta,
  Eyebrow,
  GlassCard,
  PageHero,
  Section,
} from "@/components/site/primitives";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — Alpha STEM Academy" },
      {
        name: "description",
        content:
          "Explore Alpha STEM Academy pathways: Engineering & Robotics, Data & Machine Learning, and Creative Coding & Design — all mentor-led and fully virtual.",
      },
      { property: "og:title", content: "Programs — Alpha STEM Academy" },
      {
        property: "og:description",
        content:
          "Mentor-led virtual pathways across engineering, data and creative technology.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/programs" },
    ],
    links: [{ rel: "canonical", href: "/programs" }],
  }),
  component: Programs,
});

const programs = [
  {
    slug: "engineering-robotics",
    title: "Engineering & Robotics",
    intro:
      "Systems thinking, design and build — from first principles to working prototypes.",
    image: roboticsImage,
    alt: "Robotic arm and precision components on a light surface",
    focus: [
      "Mechanics, electronics and control",
      "Design iteration and prototyping",
      "Programming for embedded systems",
      "Documentation and technical review",
    ],
  },
  {
    slug: "data-machine-learning",
    title: "Data & Machine Learning",
    intro:
      "Statistics, models and literacy in the tools that will shape the next decade.",
    image: dataImage,
    alt: "Laptop showing data dashboards beside statistics notes",
    focus: [
      "Statistical reasoning and data ethics",
      "Data handling and visualisation",
      "Introductory machine learning models",
      "Communicating findings clearly",
    ],
  },
  {
    slug: "creative-coding-design",
    title: "Creative Coding & Design",
    intro: "Where engineering meets expression — code, design and human-centred craft.",
    image: creativeImage,
    alt: "Tablet showing generative design sketches beside colour swatches",
    focus: [
      "Interface and interaction design",
      "Creative programming and generative work",
      "Digital media and storytelling",
      "Portfolio-ready project craft",
    ],
  },
];

const structure = [
  {
    title: "Live mentor sessions",
    body: "Small cohorts taught in real time, with same-session feedback.",
  },
  {
    title: "Guided practice",
    body: "Structured tasks between sessions to consolidate each concept.",
  },
  {
    title: "Applied projects",
    body: "Each pathway ends in something built, tested and explained.",
  },
];

function Programs() {
  return (
    <div className="mx-auto max-w-7xl px-6">
      <PageHero
        eyebrow="// Programs"
        title="Pathways that turn study into skill."
        intro="Every Alpha pathway blends structured academics with applied work. Learners study live with mentors, practise deliberately, and finish with capability they can demonstrate."
      />

      <Section className="pt-0">
        <div className="space-y-6">
          {programs.map((p, i) => (
            <article
              key={p.slug}
              id={p.slug}
              className="glass-panel scroll-mt-28 rounded-3xl p-6 shadow-card lg:p-8"
            >
              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                <div
                  className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <img
                    src={p.image}
                    alt={p.alt}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="aspect-4/3 w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5"
                  />
                </div>
                <div className="lg:col-span-7">
                  <p className="label-mono text-primary">
                    Pathway 0{i + 1}
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-semibold lg:text-3xl">
                    {p.title}
                  </h2>
                  <p className="mt-3 max-w-[52ch] text-pretty text-muted-foreground">
                    {p.intro}
                  </p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {p.focus.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 rounded-2xl border border-border bg-surface/60 px-4 py-3 text-sm"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <Eyebrow>(a) How a term runs</Eyebrow>
        <h2 className="mt-4 max-w-[24ch] font-display text-3xl font-semibold lg:text-4xl">
          The same rhythm across every pathway.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {structure.map((s) => (
            <GlassCard key={s.title}>
              <h3 className="font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-pretty text-muted-foreground">{s.body}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <EnquiryCta
        title="Not sure which pathway fits?"
        body="Share your learner's interests and we'll recommend a starting point."
      />
    </div>
  );
}
