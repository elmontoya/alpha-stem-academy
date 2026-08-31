export const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Alpha+", to: "/alpha-plus" },
  { label: "Contact", to: "/contact" },
] as const;

export const programItems = [
  {
    slug: "engineering-robotics",
    title: "Engineering & Robotics",
    summary:
      "Systems thinking, design and build — from first principles to working prototypes.",
  },
  {
    slug: "data-machine-learning",
    title: "Data & Machine Learning",
    summary:
      "Statistics, models and literacy in the tools that will shape the next decade.",
  },
  {
    slug: "creative-coding-design",
    title: "Creative Coding & Design",
    summary:
      "Where engineering meets expression — code, design and human-centred craft.",
  },
] as const;

export const contact = {
  email: "info.alphastemacademy@gmail.com",
  phones: ["+234 915 770 8755", "+234 810 187 2102"],
};

export const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;
