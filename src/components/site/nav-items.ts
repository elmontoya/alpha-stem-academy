export const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Programs", to: "/programs" },
  { label: "Alpha+", to: "/alpha-plus" },
  { label: "Contact", to: "/contact" },
] as const;

export const programItems = [
  { title: "K–12 Virtual School", to: "/programs", hash: "k12" },
  { title: "Core Academic Programmes", to: "/programs", hash: "academics" },
  { title: "The Alpha Learning Model", to: "/programs", hash: "learning-model" },
  { title: "Financial Literacy", to: "/alpha-plus", hash: "financial-literacy" },
  { title: "Languages", to: "/alpha-plus", hash: "nigerian-languages" },
  { title: "School Coding Clubs", to: "/alpha-plus", hash: "coding-clubs" },
  { title: "Exam Preparation", to: "/alpha-plus", hash: "exam-prep" },
] as const;

export const contact = {
  email: "info.alphastemacademy@gmail.com",
  phones: ["+234 915 770 8755", "+234 810 187 2102"],
};

export const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;
