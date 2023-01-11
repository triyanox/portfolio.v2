import {
  Nodedotjs,
  Express,
  Mongodb,
  Typescript,
  Reactdotjs,
  Tailwindcss,
  Nextdotjs,
  Prisma,
  MySql,
  SocketIo,
  Rust,
} from "../components/ui/Icons";

const projects = [
  {
    name: "Socials",
    description: "An open source alternative for linktree",
    tech: [
      Typescript,
      Reactdotjs,
      Nextdotjs,
      Nodedotjs,
      MySql,
      Prisma,
      Tailwindcss,
    ],
    link: "https://github.com/triyanox/socials",
    preview: "https://socials.achaq.codes",
  },
  {
    name: "Plana",
    description: "An application for managing tasks and staying on track",
    tech: [
      Typescript,
      Reactdotjs,
      Nextdotjs,
      Nodedotjs,
      MySql,
      Prisma,
      Tailwindcss,
    ],
    link: "https://github.com/triyanox/plana",
    preview: "https://plana.achaq.codes",
  },
  {
    name: "rsmdc",
    description: "A markdown to HTML parser written in Rust",
    tech: [Rust],
    link: "https://github.com/triyanox/rsmdc",
    preview: "",
  },
  {
    name: "rscrypt",
    description:
      "rscrypt is a simple, fast, and secure encryption tool written in Rust",
    tech: [Rust],
    link: "https://github.com/triyanox/rscrypt",
    preview: "",
  },
  {
    name: "Portfolio",
    description: "My personal website",
    tech: [
      Typescript,
      Reactdotjs,
      Nextdotjs,
      Nodedotjs,
      MySql,
      Prisma,
      Tailwindcss,
    ],
    link: "https://github.com/triyanox/portfolio.v2",
    preview: "https://achaq.codes",
  },
];

export default projects;
